from typing import Optional
import re
from pydantic import BaseModel, ConfigDict, validator


class SClientAdd(BaseModel):
    name: str
    pet: str
    price: int
    city: str
    telephone: int
    description: Optional[str] = None

    @validator("telephone")
    def validate_phone_number(cls, v):
        if not re.match(r"^\d{11}$", str(v)):
            raise ValueError(
                "Неверный формат номера телефона. Пожалуйста, используйте формат 89999999999"
            )
        return v


class SClient(SClientAdd):
    id: int

    model_config = ConfigDict(from_attributes=True)


class SClientId(BaseModel):
    ok: bool = True
    client_id: int
