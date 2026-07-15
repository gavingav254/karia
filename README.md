# 🚀 KARIA
### AI-Powered Student Success Platform built with Gemma 4

KARIA is an AI-powered student productivity platform that helps university students understand assignments, organize academic work, and connect with skilled peers through intelligent recommendations.

Built for the **Gemma 4 Hackathon**, KARIA combines Google's Gemma 4 reasoning capabilities with a modern web interface to reduce academic friction and empower students.

---

# 🌍 The Problem

University students struggle with:

- Understanding complex assignment instructions
- Breaking large tasks into manageable steps
- Estimating workload
- Finding classmates with the right skills for collaboration

These challenges lead to missed deadlines, poor collaboration, and unnecessary stress.

---

# 💡 Our Solution

KARIA uses **Gemma 4** as its reasoning engine to analyze assignments and generate structured academic guidance.

Instead of simply summarizing text, KARIA understands assignment requirements and returns:

- Assignment summary
- Difficulty estimation
- Estimated completion time
- Required research topics
- Key deliverables
- Step-by-step action plan

Future modules include:

- KARIA Match
- AI Academic Assistant
- Student Skill Discovery
- Smart Team Recommendations

---

# 🧠 Powered by Gemma 4

KARIA uses:

**Model**

```
models/gemma-4-31b-it
```

Gemma performs the reasoning behind every assignment analysis.

The FastAPI backend sends carefully engineered prompts to Gemma and receives structured JSON responses that power the frontend experience.

---

# 🏗 Architecture

Frontend

- React
- Vite

Backend

- FastAPI
- Python

AI

- Google GenAI SDK
- Gemma 4

---

# Workflow

Student

↓

Uploads assignment

↓

FastAPI API

↓

Gemma 4

↓

Structured JSON

↓

Beautiful dashboard

---

# Example Output

```json
{
  "summary":"Build an AI application",
  "difficulty":"Medium",
  "estimated_hours":12,
  "key_requirements":[
      "...",
      "..."
  ],
  "action_plan":[
      "...",
      "..."
  ]
}
```

---

# Project Structure

```
frontend/
backend-python/
backend/
docs/
```

---

# Installation

## Backend

```bash
cd backend-python

pip install -r requirements.txt

python -m uvicorn main:app --reload
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# Technologies

- Gemma 4
- FastAPI
- React
- Vite
- Google GenAI SDK
- JavaScript
- Python

---

# Why Gemma?

Gemma provides strong reasoning abilities that allow KARIA to transform unstructured assignment text into structured academic guidance.

Rather than generating free-form responses, Gemma produces consistent structured outputs that the frontend can immediately visualize.

---

# Future Roadmap

- KARIA Match
- AI Study Planner
- Deadline Prediction
- Smart Team Formation
- Resume Intelligence
- Campus AI Agent

---

# Team
-GAVIN CHESEBE - BACKEND DEV
-SHERRY MWANGI - FRONT END DEV
