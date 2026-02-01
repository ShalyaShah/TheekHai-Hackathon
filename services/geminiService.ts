
import { GoogleGenAI } from "@google/genai";

export async function generateHealthInsight(patientData: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the following health activity data for a senior patient and provide a one-sentence encouraging insight for their caregiver: ${patientData}`,
    config: {
      systemInstruction: "You are a helpful, empathetic geriatric care assistant. Your tone is supportive and professional. Keep insights brief and actionable.",
      temperature: 0.7,
    },
  });

  return response.text || "Keep up the great work in coordinating care!";
}
