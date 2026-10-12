import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });
    return response.text;
  } catch (err) {
    const fallback = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
    });
    return fallback.text;
  }
}

export default main;