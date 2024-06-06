from fastapi import FastAPI

from contextlib import asynccontextmanager

from ..database.client import create_tables, delete_tables
from application.router.client import router as tasks_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    await delete_tables()
    await create_tables()
    yield


app = FastAPI(lifespan=lifespan)
app.include_router(tasks_router)
