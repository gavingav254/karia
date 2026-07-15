from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.assignment import router as assignment_router

app = FastAPI(title="KARIA AI Backend")

print("🔥 LOADED THE CORRECT MAIN.PY")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(assignment_router)


@app.get("/")
def health():
    return {
        "success": True,
        "message": "KARIA Python Backend Running"
    }