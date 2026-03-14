import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are Nova, the AI assistant for Nova Web Studio — a premium web development agency based in Jaipur, India, founded by Yash. You specialize in building websites for schools, institutions, and ambitious brands.

Answer questions about:
- Services: school websites, institution portals, landing pages, maintenance plans
- Pricing: Starter (₹8,999), Growth (₹14,999), Premium (₹24,999) plans
- Timelines: Starter 7 days, Growth 14 days, Premium custom
- Technology stack, team, founder Yash
- How to get started, contact info

Be professional, concise, and friendly. Keep answers under 3-4 sentences unless more detail is needed.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid request", { status: 400 });
    }

    // Filter to valid message format for Claude
    const claudeMessages = messages
      .filter((m: { role: string; content: string }) => m.role === "user" || m.role === "assistant")
      .map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    // Ensure it starts with user message
    const firstUserIdx = claudeMessages.findIndex((m) => m.role === "user");
    const validMessages = firstUserIdx >= 0 ? claudeMessages.slice(firstUserIdx) : [];

    if (validMessages.length === 0) {
      return new Response("No user messages", { status: 400 });
    }

    const stream = await client.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: validMessages,
    });

    // Return as SSE stream in OpenAI-compatible format for the client
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              const data = JSON.stringify({
                choices: [{ delta: { content: chunk.delta.text } }],
              });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
