/**
 * ==========================================================
 * KARIA Backend Client
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
    const error = await response.text();
    throw new Error(error || "Backend request failed.");
  }

  const data = await response.json();

  console.log("✅ Backend Response:");
  console.log(data);

  // Support BOTH formats

  if (data.response) {
    return data.response;
  }

  return data;
}