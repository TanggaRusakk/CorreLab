import { NextResponse } from 'next/server';
import { processWebhook } from '@/controllers/WebhookController';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const result = await processWebhook(data);
    
    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
