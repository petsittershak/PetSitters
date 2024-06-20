from fastapi import FastAPI

from contextlib import asynccontextmanager

from fastapi.middleware.cors import CORSMiddleware

from ..database.database import create_tables, delete_tables
from ..router.client import router as tasks_router
from ..router.sitter import router as sitter


@asynccontextmanager
async def lifespan(app: FastAPI):
    # await delete_tables()
    await create_tables()
    yield


origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8081",
    "http://127.0.0.1:8081",
]


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tasks_router)
app.include_router(sitter)
