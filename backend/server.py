from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timezone
import os
from dotenv import load_dotenv
import uuid

load_dotenv()

app = FastAPI(title="Primo Pools API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME", "primo_pools")
EMERGENT_LLM_KEY = os.environ.get("EMERGENT_LLM_KEY")

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]


class ContactRequest(BaseModel):
    firstName: str
    lastName: str
    email: str
    phone: str
    suburb: str
    projectType: str
    tileInterest: Optional[str] = None
    budget: Optional[str] = None
    message: str


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    sessionId: Optional[str] = None


SYSTEM_MESSAGE = """You are Alex, a luxury pool tiling consultant for Primo Pools — Perth, Western Australia's premier pool tiling and stone finishing specialists.

Your expertise covers:
- Premium pool tiles: glass mosaic, natural stone (travertine, limestone, sandstone), porcelain, Italian marble
- Pool renovation and complete retiling
- Luxury feature mosaics and waterline tile bands
- Stone pool surrounds, coping, and outdoor paving

Pricing reference (AUD per m²):
- Porcelain: $50–120/m²
- Glass mosaic: $80–200/m²
- Natural stone: $90–250/m²
- Marble: $150–400/m²

To provide a rough estimate, gather:
1. Pool size (approximate length × width in metres)
2. Preferred tile style (colour, texture, look)
3. Project type: new pool tiling, renovation/retiling, or feature addition
4. Perth suburb (for site assessment scheduling)

Keep responses professional, concise (2–4 sentences), and focused on pool tiling and stone finishing only.
Always end by offering a free on-site consultation.
Do not discuss pool construction, plumbing, or equipment."""


@app.get("/api/health")
async def health():
    return {"status": "ok", "service": "Primo Pools API"}


@app.post("/api/contact")
async def submit_contact(contact: ContactRequest):
    doc = contact.model_dump()
    doc["createdAt"] = datetime.now(timezone.utc)
    result = await db.contacts.insert_one(doc)
    return {"success": True, "id": str(result.inserted_id)}


@app.post("/api/chat")
async def chat(request: ChatRequest):
    from emergentintegrations.llm.chat import LlmChat, UserMessage

    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="LLM key not configured")

    if not request.messages:
        raise HTTPException(status_code=400, detail="No messages provided")

    session_id = request.sessionId or str(uuid.uuid4())

    chat_instance = LlmChat(
        api_key=EMERGENT_LLM_KEY,
        session_id=session_id,
        system_message=SYSTEM_MESSAGE,
    ).with_model("anthropic", "claude-4-sonnet-20250514")

    user_text = request.messages[-1].content
    try:
        user_msg = UserMessage(text=user_text)
        response = await chat_instance.send_message(user_msg)
        return {"success": True, "response": response, "sessionId": session_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
