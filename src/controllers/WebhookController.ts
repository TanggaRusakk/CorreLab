import prisma from "@/models/PrismaClient";

export async function processWebhook(data: any) {
  try {
    const analysis = await prisma.analysisHistory.update({
      where: { id: data.analysisId },
      data: {
        status: 'COMPLETED',
        results: data.results,
        modelUsed: data.modelUsed
      }
    });
    return { success: true, analysis };
  } catch (error) {
    console.error("Webhook processing error:", error);
    return { success: false, error: "Failed to process webhook" };
  }
}
