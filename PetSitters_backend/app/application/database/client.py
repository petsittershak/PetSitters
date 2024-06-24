from typing import Optional

from sqlalchemy.orm import Mapped, mapped_column

from ..database.database import Model


class ClientOrm(Model):
    __tablename__ = "clients"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    pet: Mapped[str]
    price: Mapped[int]
    city: Mapped[str]
    telephone: Mapped[str]
    description: Mapped[Optional[str]]
