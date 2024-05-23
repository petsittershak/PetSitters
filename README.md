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

1) `Make install` - установит все зависимости
2) `Make start-server` - запустит базу данных в docker
3) `Make migrations` - применит все таблицы для базы данных
4) `Make run-server` - запустит сервер uvicorn

*Все, что нужно еще - можете обращаться, докину в Make 

