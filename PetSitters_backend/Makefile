DC = docker-compose
ENV = --env-file .env
APP_FILE = docker-compose.yml
APP_CONTAINER = main-backend


.PHONY: app
app:
	$(DC) -f $(APP_FILE) $(ENV) up --build -d

.PHONY: app-down
	$(DC) -f $(APP_FILE) down
