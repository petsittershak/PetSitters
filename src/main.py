from fastapi import FastAPI
# from fastapi import status
# from typing import List
from fastapi_users import FastAPIUsers
from .auth.manager import get_user_manager
from .auth.auth import auth_backend
from .auth.schemas import UserRead, UserCreate
from .auth.database import User

app = FastAPI(title="PetSitters")

fastapi_users = FastAPIUsers[User, int](
    get_user_manager,
    [auth_backend],
)


app.include_router(
    fastapi_users.get_auth_router(auth_backend),
    prefix="/auth/jwt",
    tags=["auth"],
)

app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)