from fastapi import FastAPI
from fastapi import status
from schemas.client import Client
from typing import List

app = FastAPI(title="PetSitters")


@app.post("/client")
async def add_user(client: List[Client]):
    return status
