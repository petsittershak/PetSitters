import datetime

from sqlalchemy import (
    MetaData,
    Table,
    Column,
    Integer,
    String,
    JSON,
    Boolean,
    TIMESTAMP,
    ForeignKey,
)

metadata = MetaData()

roles = Table(
    "roles",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String),
    Column("permissions", JSON),
)

clients = Table('clients', metadata,
                Column('id', Integer, primary_key=True),
                Column('name', String, nullable=False),
                Column("email", String, nullable=False),
                Column('number', Integer, nullable=False),
                Column("registered_at", TIMESTAMP, default=datetime.datetime.utcnow()),
                Column('role_id', Integer, ForeignKey('roles.id')),
                Column("mailing", Boolean)
                )
