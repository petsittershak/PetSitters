# PetSitters

## Poetry и MacOS или Linux


Компоненты для работы:

1) Установить Python на машинку, делается это командой 

`sudo apt install python`

2) Далее устанавливаем пакетный менеджер Poetry

`pip3 install poetry` 

3) Устанавливаем Make и работаем чере него, все необходимое я пропишу туда

`sudo apt install make`

## Make 

1) `Make app` - поднимет приложение

*Все, что нужно еще - можете обращаться, докину в Make 

## Windows 

1) Скачиваем докер 

`https://docs.docker.com/desktop/install/windows-install/`

2) Поднимаем докер 

`docker-compose -f docker_compose/app.yml --env-file .env up --build -d`

3) заходим в браузуре по адресу

`http://localhost:8909/docs`