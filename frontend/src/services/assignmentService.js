import { askGemma } from "./gemma";

export async function analyzeAssignment(assignmentText) {
  const prompt = `
You are KARIA, an offline AI academic assistant built for university students.

Your task is to analyze the assignment below.

Return ONLY valid JSON.

The JSON must have this exact structure:

{
  "summary": "",
  "difficulty": "",
  "estimated_hours": "",
  "deadline": "",
  "remaining_days": "",
  "deliverables": [],
  "study_plan": [
    {
      "day": "",
      "task": ""
    }
  ],
  "submission_checklist": [],
  "risks": [],
  "questions_for_lecturer": [],
  "recommendation": ""
}

Rules:

- Estimate workload.
- Detect deadlines.
- Extract every deliverable.
- Break work into daily study tasks.
- Warn about missing information.
- Suggest questions the student should ask if instructions are unclear.
- Return JSON only.
- Do not explain anything outside JSON.

Assignment:

${assignmentText}
`;

  return await askGemma(prompt);
}