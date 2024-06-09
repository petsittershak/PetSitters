from typing import Annotated

from fastapi import APIRouter, Depends, UploadFile, File


from application.repository.sitter import SitterRepository
from application.schemas.sitter import SSitterAdd, SSitterId

router = APIRouter(
    prefix="/sitters",
    tags=["Sitters"],
)


@router.post("")
async def add_sitter(
    sitter: Annotated[SSitterAdd, Depends()], photo: UploadFile = File(None)
) -> SSitterId:
    sitter_id = await SitterRepository.add_one(sitter)

    if photo:
        photo_data = await photo.read()
        await SitterRepository.add_photo(sitter_id, photo_data)

    return {"Add": True, "sitter_id": sitter_id}
