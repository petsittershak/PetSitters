run-server:
	@echo "Starting server..."
	@cd src && poetry run python3 run.py

start-server:
	@echo "Starting server with Docker Compose..."
	@docker-compose up

install:
	@poetry install
	@poetry update

migrations:
	@echo "Applying database migrations..."
	@poetry run alembic revision --autogenerate -m "DB"
	@poetry run alembic upgrade head
	@echo "Migrations applied successfully."


