import datetime
from sqlalchemy import (
    MetaData,
    Table,
    Column,
    Integer,
    String,
    JSON,
    Boolean,
    VARCHAR,
    TIMESTAMP,
    ForeignKey,
)

metadata = MetaData()

roles = Table(
    "roles",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False),
    Column("permissions", JSON),
)

clients = Table(
    "clients",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False),
    Column("number", String, nullable=False),
    Column("email", String, nullable=False),
    Column("registered_at", TIMESTAMP, default=datetime.UTC),
    Column("role_id", int, ForeignKey("roles.id")),
    Column("mailing", Boolean),
)
