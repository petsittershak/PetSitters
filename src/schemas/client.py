from pydantic import BaseModel
from pydantic import EmailStr, constr


class User(BaseModel):
    id: int
    name: str
    number: int
    email: EmailStr
    mailing: bool = True
