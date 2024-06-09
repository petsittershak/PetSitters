from fastapi import FastAPI

from contextlib import asynccontextmanager

from ..database.database import create_tables, delete_tables
from application.router.client import router as tasks_router
from application.router.sitter import router as sitter


@asynccontextmanager
async def lifespan(app: FastAPI):
    # await delete_tables()
    await create_tables()
    yield


app = FastAPI(lifespan=lifespan)
app.include_router(tasks_router)
app.include_router(sitter)
