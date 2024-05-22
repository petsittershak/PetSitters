from pydantic import BaseModel
from pydantic import EmailStr, constr


class Client(BaseModel):
    id: int
    name: str
    number: int
    email: EmailStr
    mailing: bool = True
