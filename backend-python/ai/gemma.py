import json
import os

from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GOOGLE_API_KEY")
)

MODEL = "models/gemma-4-31b-it"


# ======================================================
# NORMAL CHAT
# ======================================================

def ask_gemma_chat(prompt: str):

    print("🤖 Chat Mode...")

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
    )

    print("✅ Chat response received.")

    return response.text.strip()


# ======================================================
# ASSIGNMENT ANALYSIS
# ======================================================

def ask_gemma_json(prompt: str):

    print("🤖 Assignment Analysis...")

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
        config=types.GenerateContentConfig(
            temperature=0.2,
            response_mime_type="application/json",
        ),
    )

    content = response.text.strip()

    print("\n=========== GEMMA JSON ===========")
    print(content)
    print("==================================\n")

    if content.startswith("```"):
        content = (
            content.replace("```json", "")
            .replace("```", "")
            .strip()
        )

    try:

        parsed = json.loads(content)

        defaults = {
            "summary": "",
            "difficulty": "",
            "estimated_hours": "",
            "deadline": "Not detected",
            "remaining_days": "",
            "deliverables": [],
            "study_plan": [],
            "submission_checklist": [],
            "risks": [],
            "questions_for_lecturer": [],
            "recommendation": ""
        }

        for key, value in defaults.items():
            parsed.setdefault(key, value)

        return parsed

    except Exception as e:

        print("JSON Parse Error:", e)

        return {
            "summary": "Unable to analyze assignment.",
            "difficulty": "Unknown",
            "estimated_hours": "",
            "deadline": "Not detected",
            "remaining_days": "",
            "deliverables": [],
            "study_plan": [],
            "submission_checklist": [],
            "risks": [
                "Gemma returned invalid JSON."
            ],
            "questions_for_lecturer": [],
            "recommendation": "Try analyzing again.",
            "raw_response": content
        }