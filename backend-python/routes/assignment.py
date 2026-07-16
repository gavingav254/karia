from fastapi import APIRouter
from pydantic import BaseModel

from ai.gemma import ask_gemma
from ai.prompts import ASSIGNMENT_PROMPT

router = APIRouter(prefix="/api")


class AssignmentRequest(BaseModel):
    prompt: str


@router.post("/analyze")
def analyze(request: AssignmentRequest):
    try:
        print("✅ REQUEST RECEIVED")

        full_prompt = ASSIGNMENT_PROMPT.format(
            assignment=request.prompt
        )

        response = ask_gemma(full_prompt)

        return {
            "success": True,
            "response": response
        }

    except Exception as e:
        print("❌ ERROR:", str(e))

        return {
            "success": False,
            "error": str(e)
        }