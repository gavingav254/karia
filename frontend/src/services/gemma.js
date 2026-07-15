/**
 * ==========================================================
 * KARIA Backend Client
 * ----------------------------------------------------------
 * React → FastAPI → Gemma
 * ==========================================================
 */

const API_URL = "http://127.0.0.1:8000/api/analyze";

export async function askGemma(prompt) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  if (!response.ok) {
    throw new Error("Backend request failed.");
  }

  const data = await response.json();

  return data.response;
}