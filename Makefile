DC = docker-compose
ENV = --env-file .env
APP_FILE = docker_compose/app.yml
APP_CONTAINER = main-app


.PHONY: app
app:
	$(DC) -f $(APP_FILE) $(ENV) up --build -d

.PHONY: app-down
	$(DC) -f $(APP_FILE) down

#run-server:
#	@echo "Starting server..."
#	@cd src && poetry run python3 run.py
#
#start-server:
#	@echo "Starting server with Docker Compose..."
#	@docker-compose up
#
#install:
#	@poetry install
#	@poetry update
#
#migrations:
#	@echo "Applying database migrations..."
#	@poetry run alembic revision --autogenerate -m "DB"
#	@poetry run alembic upgrade head
#	@echo "Migrations applied successfully."
#
#
