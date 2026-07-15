import json
import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

print("Loading API key...")
print("API key exists:", bool(os.getenv("GOOGLE_API_KEY")))

client = genai.Client(
    api_key=os.getenv("GOOGLE_API_KEY")
)

MODEL = "models/gemma-4-31b-it"


def ask_gemma(prompt: str):
    print("Calling Gemma...")

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
    )

    print("Gemma responded!")

    content = response.text.strip()

    print(content)

    try:
        return json.loads(content)
    except json.JSONDecodeError:
        return {
            "raw_response": content
        }