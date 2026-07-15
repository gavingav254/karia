/**
 * ==========================================================
 * KARIA Assignment Analysis Model
 * ----------------------------------------------------------
 * Defines the structure returned by Gemma LiteRT.
 * Every assignment analysis should conform to this model.
 * ==========================================================
 */

export const emptyAnalysis = {
  summary: "",
  difficulty: "",
  estimated_hours: "",
  deadline: "",
  remaining_days: "",
  deliverables: [],
  study_plan: [],
  submission_checklist: [],
  risks: [],
  questions_for_lecturer: [],
  recommendation: "",
};

/**
 * Safely parses Gemma's response.
 * Returns a valid object even if parsing fails.
 */
export function parseAnalysis(response) {
  try {
    // Response is already an object
    if (typeof response === "object") {
      return response;
    }

    // Remove accidental markdown formatting
    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);

  } catch (error) {

    console.error("Failed to parse Gemma response:", error);

    return {
      ...emptyAnalysis,
      recommendation:
        "KARIA could not interpret the AI response. Please try again.",
    };
  }
}

/**
 * Checks whether an analysis contains useful information.
 */
export function hasAnalysis(data) {
  if (!data) return false;

  return (
    data.summary !== "" ||
    data.deliverables.length > 0 ||
    data.study_plan.length > 0
  );
}