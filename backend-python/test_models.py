import json
import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

MODEL = "models/gemma-4-31b-it"


def ask_gemma(prompt: str):

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
    )

    content = response.text.strip()

    try:
        return json.loads(content)
    except json.JSONDecodeError:
        return {
            "raw_response": content
        }