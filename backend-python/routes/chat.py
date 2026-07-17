from fastapi import APIRouter
from pydantic import BaseModel

from ai.gemma import ask_gemma_chat

router = APIRouter(prefix="/api")


class ChatRequest(BaseModel):
    prompt: str


@router.post("/chat")
def chat(request: ChatRequest):

    response = ask_gemma_chat(request.prompt)

    # Return the response exactly as Gemma produced it.
    return {
        "success": True,
        "response": response
    }