import { NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Process webhook logic
    const analysis = await prisma.analysisHistory.update({
      where: { id: data.analysisId },
      data: {
        status: 'COMPLETED',
        results: data.results,
        modelUsed: data.modelUsed
      }
    });
    
    return NextResponse.json({ success: true, analysis });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
