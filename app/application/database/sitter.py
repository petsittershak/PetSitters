from typing import Optional

from sqlalchemy.orm import Mapped, mapped_column

from application.database.database import Model


class SittersOrm(Model):
    __tablename__ = "sitters"

    id: Mapped[int] = mapped_column(primary_key=True)
    firstName: Mapped[str]
    lastName: Mapped[Optional[str]] = None
    rating: Mapped[float] = 5.0
    age: Mapped[int]
    completedOrders: Mapped[int]
    joinedPetsittersDate: Mapped[str]
    title: Mapped[str]
    price: Mapped[Optional[int]] = None
    priceFor: Mapped[Optional[str]] = None
    customersFeedbacks: Mapped[str]
    phone: Mapped[str]
    email: Mapped[str]
    priceTitle: Mapped[Optional[str]] = None
    city: Mapped[str]
    cityArea: Mapped[str]
    vet: Mapped[Optional[bool]] = None
    canHelpAlergicAnimal: Mapped[Optional[bool]] = None
    ownSertificate: Mapped[Optional[bool]] = None
    canCookHomeFood: Mapped[Optional[bool]] = None
    aboutSitter: Mapped[Optional[str]] = None
    description: Mapped[Optional[str]] = None
    photo: Mapped[Optional[bytes]]
