"use server";

import prisma from "@/models/PrismaClient";
import { generateFileHash } from "@/lib/utils";

/**
 * Uploads and processes a new dataset analysis.
 * 
 * Flow:
 * 1. Reads the incoming file and generates an MD5 hash.
 * 2. Checks the Prisma database to see if the hash already exists.
 * 3. If exists, returns the cached result.
 * 4. If new, (eventually) forwards to Python Microservice.
 */
export async function processAnalysisAction(formData: FormData) {
  try {
    const file = formData.get("file") as File | null;
    
    if (!file) {
      throw new Error("No file provided");
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // 1. Generate hash
    const fileHash = generateFileHash(buffer);
    
    // 2. Check Database via Prisma (Model)
    // const existingAnalysis = await prisma.analysisHistory.findUnique({
    //   where: { datasetHash: fileHash }
    // });
    
    // if (existingAnalysis) {
    //   return { success: true, cached: true, data: existingAnalysis };
    // }

    // 3. (TODO) Forward to Python Microservice
    // const pythonResponse = await fetch('http://python-service/analyze', ...);
    
    // 4. Save to DB
    // await prisma.analysisHistory.create(...)

    return { 
      success: true, 
      cached: false, 
      hash: fileHash, 
      message: "File ready for processing." 
    };

  } catch (error) {
    console.error("Error processing analysis:", error);
    return { success: false, error: "Failed to process analysis." };
  }
}
