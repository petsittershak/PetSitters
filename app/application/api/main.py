from fastapi import FastAPI

def create_app():
    return FastAPI(
        title="PetSitters",
        docs_url="/api/docs",
        description="Hakaton chat backend",
        debug=True
    )