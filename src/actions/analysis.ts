"use server";

import { verifySession } from "@/lib/session";
import prisma from "@/lib/prisma";
import crypto from "crypto";

export async function executeAndSaveAnalysis(
  datasetName: string, 
  method: string, 
  dataset: any[], 
  target_column: string
) {
  try {
    // 1. Verify Auth Session
    const session = await verifySession();
    if (!session || !session.userId) {
      return { success: false, error: "Sesi telah habis. Silakan login kembali." };
    }

    // 2. Generate Hash untuk mencegah proses ulang data yang sama
    const hashPayload = JSON.stringify({ method, target_column, dataset_sample: dataset.slice(0, 10), v: "2.0" });
    const fileHash = crypto.createHash("md5").update(session.userId + hashPayload).digest("hex");

    // 3. Cek Database Prisma
    const existing = await prisma.analysisHistory.findUnique({ where: { fileHash } });
    if (existing) {
      console.log("Menggunakan hasil cache dari database...");
      return { success: true, analysisId: existing.id, ...JSON.parse(existing.resultsJson) };
    }

    // 4. Memanggil Python Engine
    const pythonUrl = process.env.PYTHON_API_URL || 'http://127.0.0.1:8000/analyze';
    console.log(`Mengirim data ke Python dengan metode: ${method}...`);
    
    const response = await fetch(pythonUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        method, 
        data: dataset,
        target_column
      }),
    });

    if (!response.ok) {
      let errorMessage = `Python API Error: ${response.status}`;
      try {
        const errRes = await response.json();
        if (errRes.detail) errorMessage = errRes.detail;
        else if (errRes.message) errorMessage = errRes.message;
      } catch (e) {}
      throw new Error(errorMessage);
    }

    const result = await response.json();

    // 5. Menyimpan hasil ke Database
    const newRecord = await prisma.analysisHistory.create({
      data: {
        userId: session.userId,
        datasetName: datasetName || "Untitled Dataset",
        fileHash: fileHash,
        analysisMethod: method,
        resultsJson: JSON.stringify(result),
      }
    });

    return { success: true, analysisId: newRecord.id, ...result };

  } catch (error: any) {
    console.error("Gagal mengeksekusi analisis:", error);
    return { success: false, error: error.message || "Gagal menghubungi mesin analitik Python" };
  }
}