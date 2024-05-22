from typing import List

from pydantic_settings import BaseSettings, SettingsConfigDict


class AppSettings(BaseSettings):
    model_config = SettingsConfigDict(
        case_sensitive=True, env_prefix="BACKEND_SERVER__"
    )

    DEBUG: bool = False

    PORT: int = "8081"
    server_host: str = "localhost"
    server_port: int = 8080
    origins: List[str] = [
        f"http://{server_host}:{server_port}",
        "http://localhost:3000",
        "http://localhost:3300",
        "http://127.0.0.1:3000",
        f"https//{server_host}:{server_port}",
        "https://localhost:3000",
        "https://localhost:3300",
        "https://127.0.0.1:3000",
        "http://localhost:10888",
        "http://127.0.0.1:10888",
    ]
    methods: List[str] = ["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"]
    headers: List[str] = ["*"]
    SAVE_PATH: str = "research_data"
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60


app_settings = AppSettings()
