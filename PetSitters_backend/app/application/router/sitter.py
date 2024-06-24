from http.client import HTTPException
from typing import Annotated, Optional

from fastapi import APIRouter, Depends, UploadFile, File, Form
from starlette import status
from starlette.responses import JSONResponse, Response

from ..repository.sitter import SitterRepository
from ..schemas.sitter import SSitterAdd, SSitterId, SSitter
from fastapi.responses import StreamingResponse

router = APIRouter(
    prefix="/sitters",
    tags=["Sitters"],
)


@router.post("/add_sitter", response_model=SSitterId, status_code=status.HTTP_200_OK)
async def add_sitter(
    firstName: str = Form(...),
    lastName: Optional[str] = Form(None),
    rating: float = Form(5.0),
    age: int = Form(...),
    completedOrders: int = Form(...),
    joinedPetsittersDate: str = Form(...),
    title: str = Form(...),
    phone: str = Form(...),
    email: str = Form(...),
    city: str = Form(...),
    cityArea: str = Form(...),
    vet: Optional[bool] = Form(None),
    canHelpAlergicAnimal: Optional[bool] = Form(None),
    ownSertificate: Optional[bool] = Form(None),
    canCookHomeFood: Optional[bool] = Form(None),
    aboutSitter: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    photo: UploadFile = File(None),
) -> SSitterId:
    sitter = SSitterAdd(
        firstName=firstName,
        lastName=lastName,
        rating=rating,
        age=age,
        completedOrders=completedOrders,
        joinedPetsittersDate=joinedPetsittersDate,
        title=title,
        phone=phone,
        email=email,
        city=city,
        cityArea=cityArea,
        vet=vet,
        canHelpAlergicAnimal=canHelpAlergicAnimal,
        ownSertificate=ownSertificate,
        canCookHomeFood=canCookHomeFood,
        aboutSitter=aboutSitter,
        description=description,
    )
    sitter_id = await SitterRepository.add_one(sitter)

    photo_data = None
    if photo:
        photo_data = await photo.read()
        await SitterRepository.add_photo(sitter_id, photo_data)

    return SSitterId(
        Add=True,
        sitter_id=sitter_id,
        photo=f"string({len(photo_data)})" if photo else None,
    )


@router.get("/{sitter_id}/photo")
async def get_sitter_photo(sitter_id: int):
    photo_data = await SitterRepository.get_photo(sitter_id)

    if photo_data:
        return StreamingResponse(iter([photo_data]), media_type="image/jpeg")
    else:
        return {"error": "No photo available"}


@router.get("/{sitter_id}")
async def get_sitter_details(sitter_id: int):
    sitter_details = await SitterRepository.get_sitter_details(sitter_id)
    if "error" in sitter_details:
        return sitter_details
    else:
        return sitter_details


@router.delete("/{sitter_id}", status_code=204)
async def delete_sitter(sitter_id: int):
    try:
        await SitterRepository.delete_sitter(sitter_id)
    except ValueError as e:
        return JSONResponse(status_code=404, content={"error": str(e)})
    else:
        return Response(status_code=204)


@router.get("/")
async def get_all_sitters():
    all_sitters = await SitterRepository.get_all_sitters()
    return all_sitters
