run-server:
	@echo "Starting server..."
	@poetry run python3 run.py

install:
	@poetry install
	@poetry update

migrations:
	@echo "Applying database migrations..."
	@poetry run alembic upgrade head
	@echo "Migrations applied successfully."