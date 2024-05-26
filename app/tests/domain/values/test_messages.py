from datetime import datetime

import pytest
from faker import Faker

from domain.entities.messages import Message, Text, Chat
from domain.exceptions.messages import TitleTooLongException

from domain.values.messages import Title


def test_create_message_success_short():
    text = Text(Faker().text())
    message = Message(text=text)

    assert message.text == text
    assert message.created_at.date() == datetime.today().date()

def test_create_message_success_long():
    text = Text(Faker().paragraph())
    message = Message(text=text)

    assert message.text == text
    assert message.created_at.date() == datetime.today().date()

def test_create_chat_success():
    title = Title(Faker().name())
    chat = Chat(title=title)
    assert chat.title == title
    assert not chat.messages
    assert chat.created_at.date() == datetime.today().date()

def test_create_chat_exception():
    with pytest.raises(TitleTooLongException):
        title = Title('a'*260)


def test_add_chat_to_message():
    text = Text(Faker().text())
    message = Message(text=text)
    title = Title(Faker().name())
    chat = Chat(title=title)
    chat.add_message(message)
    assert message in chat.messages






