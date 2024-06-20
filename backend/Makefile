DC = docker-compose
ENV = --env-file .env
APP_FILE = docker_compose/app.yml
APP_CONTAINER = main-app


.PHONY: app
app:
	$(DC) -f $(APP_FILE) $(ENV) up --build -d

.PHONY: app-down
	$(DC) -f $(APP_FILE) down
