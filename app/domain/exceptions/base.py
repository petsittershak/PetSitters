from dataclasses import dataclass

@dataclass(eq=False)
class ApplicationException(Exception):
    @property
    def messages(self):
        return 'Произошла ошибка приложения'


