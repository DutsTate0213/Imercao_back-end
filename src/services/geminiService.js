import { GoogleGenerativeAI } from "@google/generative-ai";

// Configuração do Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Função para gerar uma descrição para uma imagem usando o Gemini AI
export default async function gerarDescricaoComGemini(imageBuffer) {
  const prompt = "Gere uma descrição em português do brasil para a seguinte imagem, so retorne a descrição sem nada adicional";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"), 
        mimeType: "image/png",
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || "Descrição não disponível.";
  } catch (erro) {
    console.error("Erro ao obter descrição:", erro.message, erro);
    throw new Error("Erro ao obter a descrição do Gemini.");
  }
}