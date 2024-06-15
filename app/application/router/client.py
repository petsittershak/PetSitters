from typing import Annotated

from fastapi import APIRouter, Depends, Body

from application.repository.client import ClientRepository
from application.schemas.client import SClientAdd, SClient, SClientId

router = APIRouter(
    prefix="/clients",
    tags=["Clients"],
)


@router.post("/add_client")
async def add_client(
    client: Annotated[SClientAdd, Body()],
) -> SClientId:
    client_id = await ClientRepository.add_one(client)
    return {"Add": True, "client_id": client_id}


# @router.post("/add_client")
# async def add_client(
#     client: Annotated[SClientAdd, Depends()],
# ) -> SClientId:
#     client_id = await ClientRepository.add_one(client)
#     return {"Add": True, "client_id": client_id}


@router.get("/get_all_clients")
async def get_clients() -> list[SClient]:
    client = await ClientRepository.find_all()
    return client


@router.get("/find_by_id/{client_id}")
async def find_client_by_id(client_id: int) -> SClient:
    client = await ClientRepository.find_by_id(client_id)
    return client


@router.delete("/clients/{client_id}")
async def delete_client(client_id: int) -> str:
    existing_client = await ClientRepository.find_by_id(client_id)
    if existing_client:
        result = await ClientRepository.delete_by_id(client_id)
        return f"Client with id {client_id} has been deleted"
    else:
        return f"Client with id {client_id} does not exist, deletion failed"
