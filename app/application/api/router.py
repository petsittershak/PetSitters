from typing import Annotated

from fastapi import APIRouter, Depends

from ..repository.repository import ClientRepository
from ..schemas.schemas import SClientAdd, SClient, SClientId

router = APIRouter(
    prefix="/clients",
    tags=["Clients"],
)


@router.post("")
async def add_client(
    client: Annotated[SClientAdd, Depends()],
) -> SClientId:
    client_id = await ClientRepository.add_one(client)
    return {"ok": True, "client_id": client_id}


@router.get("")
async def get_clients() -> list[SClient]:
    client = await ClientRepository.find_all()
    return client
