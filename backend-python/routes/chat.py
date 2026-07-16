from fastapi import APIRouter
from pydantic import BaseModel

from ai.gemma import ask_gemma

router = APIRouter(prefix="/api")


class ChatRequest(BaseModel):
    prompt: str


@router.post("/chat")
def chat(request: ChatRequest):

    response = ask_gemma(request.prompt)

    # If Gemma returned parsed JSON (assignment response)
    if isinstance(response, dict):

        if "raw_response" in response:
            text = response["raw_response"]

        else:
            import json
            text = json.dumps(response, indent=2)

    else:
        text = str(response)

    return {
        "success": True,
        "response": text
    }