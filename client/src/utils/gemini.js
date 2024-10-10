import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export async function getGeminiResponse(question) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(question);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error in getGeminiResponse:', error);
    throw error;
  }
}