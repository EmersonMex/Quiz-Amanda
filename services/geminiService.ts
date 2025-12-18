import { GoogleGenerativeAI } from "@google/genai";
import { UserAnswers } from "../types";

// Inicializa a API com a chave segura (process.env vem do Vite define)
// Nota: Se der erro de tipo no typescript, podemos ignorar por agora ou criar declaração
const API_KEY = process.env.GEMINI_API_KEY || ''; 

export const generateSalesDiagnosis = async (
  totalScore: number, 
  answers: UserAnswers
): Promise<string> => {
  if (!API_KEY) {
    console.error("API Key não encontrada");
    return "Erro: Chave de API não configurada. Por favor, contacte o administrador.";
  }

  try {
    // A nova SDK do Google pode variar, aqui uso uma implementação fetch padrão 
    // para garantir compatibilidade máxima sem depender da versão exata da SDK instalada
    // ou usamos a lógica REST se a SDK falhar.
    
    // Vamos construir o prompt
    let answersSummary = "";
    Object.entries(answers).forEach(([id, option]) => {
      answersSummary += `- Q${id}: Resposta "${option.text}" (${option.points} pts)\n`;
    });

    const prompt = `
      Atue como Amanda Carter, uma estrategista de vendas direta e incisiva.
      O usuário fez um diagnóstico de vendas e obteve ${totalScore} pontos de 105.
      
      Respostas do usuário:
      ${answersSummary}

      Com base nisso, forneça um feedback curto (máximo 3 parágrafos), duro mas construtivo, 
      sobre o que está a impedir as vendas dela. Use formatação Markdown (negrito, listas).
      Não dê parabéns. Vá direto ao ponto da dor e da solução.
    `;

    // Chamada direta à API REST do Gemini para evitar problemas de versão de pacote
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }

    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("Erro ao chamar Gemini:", error);
    return "Não foi possível gerar a análise detalhada da IA neste momento. Mas baseie-se no seu Nível de Resultado acima para tomar providências.";
  }
};