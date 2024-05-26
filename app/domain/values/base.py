from dataclasses import dataclass
from typing import Generic, TypeVar, Any
from abc import ABC, abstractmethod

VT = TypeVar("VT", bound=Any)


@dataclass(frozen=True)
class BaseValueObject(ABC, Generic[VT]):
    value: VT

    def __post_init__(self):
        self.validate()

    @abstractmethod
    def validate(self):
        pass

    @abstractmethod
    def as_generic_type(self):
        pass


