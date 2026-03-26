const { z } = require("zod");

const interviewReportSchema = z.object({
  matchScore: z.number().describe(
    "A score between 0 to 100 indicating how well the candidate's profile matches the job description"
  ),

  technicalQuestions: z.array(
    z.object({
      question: z.string().describe(
        "A realistic technical interview question relevant to the job"
      ),

      intention: z.string().describe(
        "Why the interviewer asks this question and what skill or concept they are evaluating"
      ),

      answer: z.string().describe(`
IMPORTANT: Do NOT provide a direct theoretical answer.

Instead, explain HOW the candidate should answer.

Must include:
- Step-by-step approach to answering
- Key concepts/topics to cover
- Suggested structure (e.g. intro → explanation → example → conclusion)
- Tips to impress interviewer

Keep it practical, structured, and interview-focused.
`)
    })
  ).describe(
    "Technical interview questions with interviewer intention and answering strategy (NOT direct answers)"
  ),

  behavioralQuestions: z.array(
    z.object({
      question: z.string().describe(
        "A realistic behavioral interview question"
      ),

      intention: z.string().describe(
        "What soft skill or behavior the interviewer is evaluating"
      ),

      answer: z.string().describe(`
IMPORTANT: Do NOT provide a direct answer/story.

Instead, explain HOW the candidate should answer.

Must include:
- Recommended answering framework (e.g. STAR method)
- What kind of example to choose
- Key points to highlight
- Common mistakes to avoid
- Tips to sound confident and structured

Focus on guidance, not storytelling.
`)
    })
  ).describe(
    "Behavioral questions with answering strategy (NOT actual answers)"
  ),

  skillGaps: z.array(
    z.object({
      skill: z.string().describe(
        "A missing or weak skill in the candidate profile compared to the job description"
      ),

      severity: z.enum(["low", "medium", "high"]).describe(
        "How critical this gap is for the role"
      )
    })
  ).describe(
    "List of skill gaps with severity based on job requirements"
  ),

  preparationPlan: z.array(
    z.object({
      day: z.number().describe(
        "Day number starting from 1"
      ),

      focus: z.string().describe(
        "Main focus area for the day (e.g. React, DSA, System Design, Mock Interview)"
      ),

      tasks: z.array(z.string().describe("a single line pointer for the task need to be done")).describe(`
MUST be a proper array of actionable tasks.

Rules:
- Each task must be specific and practical
- Avoid vague tasks like "study React"
- Use clear actions like:
  • "Solve 5 array problems on LeetCode"
  • "Build a JWT auth system"
  • "Revise MongoDB indexing"

Return ONLY a valid string array. Do NOT return [Array].
`)
    })
  ).describe(
    "Day-wise preparation plan with clear, actionable tasks"
  )
});



module.exports = interviewReportSchema;
