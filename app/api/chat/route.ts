import { NextResponse } from 'next/server';
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return NextResponse.json({ error: "GROQ_API_KEY is not configured in the .env.local file. Please add it to test the chatbot." }, { status: 500 });
    }

    const groq = new Groq({ apiKey: groqApiKey });

    const systemPrompt = `You are the KilnSense AI Assistant, an expert on Pakistan EPA regulations, the NEQS 2010 compliance standards, and brick kiln emissions. 
Your primary goal is to help kiln owners and policymakers understand emissions (PM, SOx, NOx), the transition to Induced-Draft Zigzag technology, and the fines/penalties for non-compliance.
Be professional, precise, and concise. Format your answers clearly. Do not use markdown if possible, keep it clean.`;

    // Only map the last 5 messages to save token context
    const recentHistory = history.slice(-5);
    const formattedHistory = recentHistory.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }));

    const response = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        ...formattedHistory,
        { role: "user", content: message }
      ],
      model: "llama-3.3-70b-versatile", // Fast and capable model on Groq
      temperature: 0.5,
      max_tokens: 1024,
    });

    const reply = response.choices[0]?.message?.content || "I am unable to process that right now.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Groq API Error:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch response from Groq." }, { status: 500 });
  }
}
