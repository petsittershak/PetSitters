from sqlalchemy import select

from ..database.client import new_session, ClientOrm
from ..schemas.client import SClientAdd, SClient


class ClientRepository:
    @classmethod
    async def add_one(cls, data: SClientAdd) -> int:
        async with new_session() as session:
            client_dict = data.model_dump()

            client = ClientOrm(**client_dict)
            session.add(client)
            await session.flush()
            await session.commit()
            return client.id

    @classmethod
    async def find_all(cls) -> list[SClient]:
        async with new_session() as session:
            query = select(ClientOrm)
            result = await session.execute(query)
            client_models = result.scalars().all()
            client_schemas = [
                SClient.model_validate(client_model) for client_model in client_models
            ]
            return client_schemas
