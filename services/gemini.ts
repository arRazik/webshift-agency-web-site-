
import { GoogleGenAI } from "@google/genai";

export async function analyzeProject(description: string, language: string) {
  try {
    // Initialize Gemini API with the API key directly from environment variables as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a Senior Digital Project Consultant at WebShift Agency. A client describes their project as: "${description}". 
      In ${language === 'fr' ? 'French' : language === 'ar' ? 'Arabic' : 'English'}, provide a professional 3-paragraph analysis:
      1. What technical solution (Web, Mobile, SaaS) fits best.
      2. Suggested key features for MVP.
      3. A word of encouragement to contact our human team for a precise quote. 
      Be professional, encouraging, and visionary.`,
    });
    // Access the text property directly as per guidelines
    return response.text;
  } catch (error) {
    console.error("AI Analysis error:", error);
    return "Désolé, une erreur est survenue lors de l'analyse par l'IA. Veuillez nous contacter directement.";
  }
}
