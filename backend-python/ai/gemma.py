import json
import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GOOGLE_API_KEY")
)

MODEL = "models/gemma-4-31b-it"


def ask_gemma(prompt: str):
    print("🤖 Calling Gemma...")

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
    )

    print("✅ Gemma responded!")

    content = response.text.strip()

    print("RAW RESPONSE:")
    print(content)

    # Remove markdown fences if Gemma returns them
    if content.startswith("```"):
        content = (
            content.replace("```json", "")
                   .replace("```", "")
                   .strip()
        )

    try:
        parsed = json.loads(content)

        print("✅ Parsed JSON successfully.")

        return parsed

    except json.JSONDecodeError as e:

        print("❌ JSON Parse Error:", e)

        return {
            "summary": "AI response could not be parsed.",
            "difficulty": "Unknown",
            "estimated_hours": "Unknown",
            "deadline": "Not detected",
            "remaining_days": "",
            "deliverables": [],
            "study_plan": [],
            "submission_checklist": [],
            "risks": [
                "Gemma returned invalid JSON."
            ],
            "questions_for_lecturer": [],
            "recommendation": "Try running the analysis again.",
            "raw_response": content
        }