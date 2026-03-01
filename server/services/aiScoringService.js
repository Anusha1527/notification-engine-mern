import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

let client = null;

// Create client ONLY if key exists
if (process.env.OPENAI_API_KEY) {
  client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

// ===============================
// AI SCORING (SAFE VERSION)
// ===============================
export const getAIScore = async (event) => {
  try {

    // 🚨 If no API or quota issue → skip AI
    if (!client) {
      console.log("AI disabled → using fallback");
      return null;
    }

    const prompt = `
Classify notification priority (0-100).

Event Type: ${event.event_type}
Message: ${event.message}

Return ONLY a number.
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content.trim();
    const score = Number(text);

    if (isNaN(score)) return null;

    return score;

  } catch (err) {
    // ⭐ IMPORTANT: DO NOT CRASH SERVER
    console.log("AI FAILED → fallback used");
    return null;
  }
};