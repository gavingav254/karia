from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from routes.assignment import router as assignment_router
from routes.chat import router as chat_router

app = FastAPI(title="KARIA AI Backend")

print("🔥 LOADED THE CORRECT MAIN.PY")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(assignment_router)
app.include_router(chat_router)


@app.get("/")
def health():
    return {
        "success": True,
        "message": "KARIA Python Backend Running"
    }


if __name__ == "__main__":
    print("🚀 Starting KARIA Backend on http://127.0.0.1:8000")
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=True,
    )