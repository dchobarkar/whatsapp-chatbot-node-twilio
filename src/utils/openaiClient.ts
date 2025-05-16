import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function getOpenAIReply(
  message: string,
  name: string = ""
): Promise<string> {
  try {
    const prompt = `You are a helpful WhatsApp bot for a small business. Keep responses under 100 words.\n\nUser (${name}): ${message}\nBot:`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a concise customer service bot for WhatsApp.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 100,
    });

    return (
      completion.choices[0].message?.content?.trim() ||
      "Sorry, I didn't catch that."
    );
  } catch (err) {
    console.error("[OpenAI Error]", err);
    return "Sorry, I'm having trouble understanding that. Please try again later.";
  }
}
