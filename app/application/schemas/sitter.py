from typing import Optional
from pydantic import BaseModel, ConfigDict, validator
from phonenumbers import parse, is_valid_number
from fastapi import HTTPException, UploadFile, File


class SSitterAdd(BaseModel):
    name: str
    pet: str
    price: int
    city: str
    telephone: str
    description: Optional[str] = None
    photo: Optional[UploadFile] = File(None)

    @validator("telephone")
    def validate_phone_number(cls, v):
        parsed_number = parse(v, "RU")
        if is_valid_number(parsed_number):
            return v
        else:
            raise HTTPException(
                status_code=400, detail="Неверный формат номера телефона"
            )


class SSitter(SSitterAdd):
    id: int

    model_config = ConfigDict(from_attributes=True)


class SSitterId(BaseModel):
    ok: bool = True
    sitter_id: int
