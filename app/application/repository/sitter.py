from fastapi import HTTPException
from sqlalchemy import select, delete
from sqlalchemy.orm import joinedload

from ..database.sitter import SittersOrm
from ..database.database import new_session

from ..schemas.sitter import SSitterAdd, SSitter


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
