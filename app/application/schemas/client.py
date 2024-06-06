from typing import Optional
import re
from pydantic import BaseModel, ConfigDict, validator
import phonenumbers
from phonenumbers import parse, is_valid_number
from fastapi import HTTPException


class SClientAdd(BaseModel):
    name: str
    pet: str
    price: int
    city: str
    telephone: str
    description: Optional[str] = None

    @validator("telephone")
    def validate_phone_number(cls, v):
        parsed_number = parse(v, "RU")
        if is_valid_number(parsed_number):
            return v
        else:
            raise HTTPException(
                status_code=400, detail="Неверный формат номера телефона"
            )


class SClient(SClientAdd):
    id: int

    model_config = ConfigDict(from_attributes=True)


class SClientId(BaseModel):
    ok: bool = True
    client_id: int
