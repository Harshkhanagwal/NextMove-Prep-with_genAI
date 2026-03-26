import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import interviewReportSchema from "../models/interviewReportSchema.js";

const key = process.env.GEMINI_API_KEY || process.env.GENAI_KEY;
const genAI = new GoogleGenerativeAI(key);

const extractJsonText = (text) => {
  const trimmedText = text.trim();

  if (trimmedText.startsWith("```")) {
    return trimmedText
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "")
      .trim();
  }
  return trimmedText;
};

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `generate an interview report for a candidate with the following details : 
            resume  : ${resume},
            self descripiton : ${selfDescription},
            job description : ${jobDescription}

Return only valid JSON with this exact structure:
{
  "matchScore": number,
  "technicalQuestions": [{ "question": string, "intention": string, "answer": string }],
  "behavioralQuestions": [{ "question": string, "intention": string, "answer": string }],
  "skillGaps": [{ "skill": string, "severity": "low" | "medium" | "high" }],
  "preparationPlan": [{ "day": number, "focus": string, "tasks": string[] }]
}

You are an expert interview coach generating an interview preparation report.

STRICT RULES (MUST FOLLOW):

1. For EVERY "answer" field:
   - DO NOT give direct answers or explanations.
   - DO NOT explain concepts.
   - DO NOT give stories.

   Instead, ONLY provide:
   • approach to answer
   • Key points to cover
   • Tips to impress interviewer
   • dont make long respawnse

2. If you give a direct answer, the response is INVALID.
3. For behavioral questions:
   - DO NOT give real examples or stories
   - ONLY explain HOW to answer using frameworks like STAR
4. For "tasks":
   - MUST be a proper array of strings
   - DO NOT return [Array]
   - Each task must be specific and actionable

5. Be concise, practical, and interview-focused.
6. Output ONLY JSON. No explanation outside JSON.
  
`;

  try {
    console.log("running...");
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const jsonText = extractJsonText(text);
    const parsedResponse = interviewReportSchema.parse(JSON.parse(jsonText));

    console.log(parsedResponse);
    return parsedResponse;
  } catch (error) {
    console.error("Error connecting to Gemini:", error);
    throw error;
  }
}

export default generateInterviewReport;
