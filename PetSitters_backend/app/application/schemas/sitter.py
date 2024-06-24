from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict, validator
from phonenumbers import parse, is_valid_number
from fastapi import HTTPException, UploadFile, File
import re


class SSitterAdd(BaseModel):
    firstName: str
    lastName: Optional[str] = None
    rating: float = 5.0
    age: int
    completedOrders: int
    joinedPetsittersDate: str
    title: str
    price: Optional[int] = None
    priceFor: Optional[str] = None
    customersFeedbacks: Optional[str] = None
    phone: str
    email: str
    priceTitle: Optional[str] = None
    city: str
    cityArea: str
    vet: Optional[bool] = None
    canHelpAlergicAnimal: Optional[bool] = None
    ownSertificate: Optional[bool] = None
    canCookHomeFood: Optional[bool] = None
    aboutSitter: Optional[str] = None
    description: Optional[str] = None

    @validator("phone")
    def validate_phone_number(cls, v):
        parsed_number = parse(v, "RU")
        if is_valid_number(parsed_number):
            return v
        else:
            raise HTTPException(
                status_code=400, detail="Неверный формат номера телефона"
            )

    @validator("email")
    def validate_email(cls, v):
        email_regex = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        if re.match(email_regex, v):
            return v
        else:
            raise HTTPException(status_code=400, detail="Неверный формат email-адреса")

    @validator("joinedPetsittersDate")
    def validate_date(cls, v):
        try:
            datetime.strptime(v, "%d.%m.%Y")
            return v
        except ValueError:
            raise HTTPException(
                status_code=400,
                detail="Неверный формат даты (должен быть в формате DD.MM.YYYY)",
            )


class SSitter(SSitterAdd):
    id: int

    photo: Optional[UploadFile] = File(None)
    model_config = ConfigDict(from_attributes=True)


class SSitterId(BaseModel):
    ok: bool = True
    sitter_id: int
