from typing import Optional

from pydantic import BaseModel, ConfigDict


class SClientAdd(BaseModel):
    name: str
    pet: str
    price: int
    city: str
    description: Optional[str] = None


class SClient(SClientAdd):
    id: int

    model_config = ConfigDict(from_attributes=True)


class SClientId(BaseModel):
    ok: bool = True
    client_id: int
