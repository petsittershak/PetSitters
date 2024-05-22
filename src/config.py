from pydantic_settings import BaseSettings, SettingsConfigDict


class DBSettings(BaseSettings):
    model_config = SettingsConfigDict(case_sensitive=True, env_prefix="DB__")
    HOST: str = "localhost"
    PORT: str = "5000"
    NAME: str = "postres"
    USER: str = "postres"
    PASS: str = "postres"
    db_pool_size: int = 5
    db_max_overflow: int = 10
    db_url: str = "localhost"
    db_port: int = 5000

    @property
    def db_settings(self):
        return self

    def get_dsn_async(self):
        return (
            f"postgresql+asyncpg://{self.USER}:{self.PASS}"
            f"@{self.HOST}:{self.PORT}/{self.NAME}"
        )

    def get_dsn_sync(self):
        return (
            f"postgresql+psycopg2://{self.USER}:{self.PASS}"
            f"@{self.HOST}:{self.PORT}/{self.NAME}"
        )

    def get_db_to_script(self):
        return (
            f"postgresql://{self.USER}:{self.PASS}"
            f"@{self.HOST}:{self.PORT}/{self.NAME}"
        )


class TestDBSettings(DBSettings):
    NAME: str = "test_db.sqlite"
    USER: str = ""
    PASS: str = ""

    def get_dsn_async(self):
        return f"sqlite+aiosqlite:///{self.NAME}"

    def get_dsn_sync(self):
        return f"sqlite:///{self.NAME}"


db_settings = DBSettings()
test_db_settings = TestDBSettings()
