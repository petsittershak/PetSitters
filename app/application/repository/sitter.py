from typing import List

from ..database.sitter import SittersOrm
from ..database.database import new_session
from sqlalchemy import select

from ..schemas.sitter import SSitterAdd


class SitterRepository:
    @classmethod
    async def add_one(cls, data: SSitterAdd) -> int:
        async with new_session() as session:
            sitter_dict = data.model_dump()

            sitter = SittersOrm(**sitter_dict)
            session.add(sitter)
            await session.flush()
            await session.commit()
            return sitter.id

    @classmethod
    async def add_photo(cls, sitter_id: int, photo_data: bytes) -> None:
        async with new_session() as session:
            sitter = await session.get(SittersOrm, sitter_id)
            sitter.photo = photo_data
            await session.commit()

    @classmethod
    async def get_photo(cls, sitter_id: int) -> bytes:
        async with new_session() as session:
            sitter = await session.get(SittersOrm, sitter_id)
            if sitter and sitter.photo:
                return sitter.photo
            else:
                return b""

    @classmethod
    async def get_sitter_details(cls, sitter_id: int) -> dict:
        async with new_session() as session:
            sitter = await session.get(SittersOrm, sitter_id)
            if sitter:
                return {
                    "id": sitter.id,
                    "firstName": sitter.firstName,
                    "lastName": sitter.lastName,
                    "rating": sitter.rating,
                    "age": sitter.age,
                    "completedOrders": sitter.completedOrders,
                    "joinedPetsittersDate": sitter.joinedPetsittersDate,
                    "title": sitter.title,
                    "price": sitter.price,
                    "priceFor": sitter.priceFor,
                    "customersFeedbacks": sitter.customersFeedbacks,
                    "phone": sitter.phone,
                    "email": sitter.email,
                    "priceTitle": sitter.priceTitle,
                    "city": sitter.city,
                    "cityArea": sitter.cityArea,
                    "vet": sitter.vet,
                    "canHelpAlergicAnimal": sitter.canHelpAlergicAnimal,
                    "ownSertificate": sitter.ownSertificate,
                    "canCookHomeFood": sitter.canCookHomeFood,
                    "aboutSitter": sitter.aboutSitter,
                    "description": sitter.description,
                }
            else:
                return {"error": "Sitter not found"}

    @classmethod
    async def delete_sitter(cls, sitter_id: int) -> None:
        async with new_session() as session:
            sitter = await session.get(SittersOrm, sitter_id)
            if sitter:
                await session.delete(sitter)
                await session.commit()
            else:
                raise ValueError(f"Sitter with ID {sitter_id} not found.")

    @classmethod
    async def get_all_sitters(cls) -> List[dict]:
        async with new_session() as session:
            sitters = await session.execute(select(SittersOrm))
            return [
                {
                    "id": sitter.id,
                    "firstName": sitter.firstName,
                    "lastName": sitter.lastName,
                    "rating": sitter.rating,
                    "age": sitter.age,
                    "completedOrders": sitter.completedOrders,
                    "joinedPetsittersDate": sitter.joinedPetsittersDate,
                    "title": sitter.title,
                    "price": sitter.price,
                    "priceFor": sitter.priceFor,
                    "customersFeedbacks": sitter.customersFeedbacks,
                    "phone": sitter.phone,
                    "email": sitter.email,
                    "priceTitle": sitter.priceTitle,
                    "city": sitter.city,
                    "cityArea": sitter.cityArea,
                    "vet": sitter.vet,
                    "canHelpAlergicAnimal": sitter.canHelpAlergicAnimal,
                    "ownSertificate": sitter.ownSertificate,
                    "canCookHomeFood": sitter.canCookHomeFood,
                    "aboutSitter": sitter.aboutSitter,
                    "description": sitter.description,
                }
                for sitter in sitters.scalars()
            ]
