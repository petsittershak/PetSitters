import React, { useState } from "react";


///// функция маска меняет инпут чтобы тел бфл читабельным формат +7 (000) 000-00-00
export default function PhoneInput({ initialValue }) {
  const pattern = /\D/g;
///// удаляет все цифры из инпута
  const getInputNumberValue = (value) => {
    return value.replace(pattern, "");
  };
///// функция редактирует вводимые данные в нужный формат
  function handlePhoneInput(event) {
    const input = event.target; ///// получаем значение вводимых данных
    let inputNumbersValue = getInputNumberValue(input.value); ///// берем только цифры
    let formatedInputValue = ""; ///// сначала берем пустую строку
    const selectionStart = input.selectionStart; ///// константа для проверки положения инпута

    if (!inputNumbersValue) {
      return input.value == "";
    } ///// не меняем данные инпута если не было введено цифр

    ///// ничего не делаем если положение курсора не совпадает с длинной введенных данных
    ///// то есть если ввели все цифры, пересестили курсор на середину чтобы
    /////удалить неверную и написать верную цифру то курсор не должен скакать
    if (input.value.length != selectionStart) {
      return;
    }

    //// для российских номеров
    if (["7", "8", "9"].indexOf(inputNumbersValue[0] > -1)) {
      if (inputNumbersValue[0] === "9") {
        inputNumbersValue = "7" + inputNumbersValue;
      }
      const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
      formatedInputValue = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formatedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formatedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formatedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formatedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      ////для не российских номеров (у нас пока не работает, это на будущее)
      formatedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }
    input.value = formatedInputValue;  ///// вставляем отформатированное значение в инпут
  }

  ///// функция для удаления первой цифры номера телефона
  function handlePhoneKeyDown(event) {
    //// удаляет первый элемент инпута
    const input = event.target;
    if (
      event.key === "Backspace" &&
      getInputNumberValue(input.value).length === 1
    ) {
      input.value = "";
    }
    return input;
  }


  ///// функция на случай копи паста телефона
  const handlePhonePaste = (event) => {
    const pasted = event.clipboardData ?? window["clipboarddata"];
    const input = event.target;
    const inputNumbersValue = getInputNumberValue(input.value);

    if (pasted) {
      const pastedText = pasted.getData("Text");
      if (pattern.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  return (
    <>
      <input
        defaultValue={initialValue ? initialValue : ""}
        className="telInput"
        name="telephone"
        maxLength={18}
        type="tel"
        placeholder="+7 (000) 000-00-00"
        onInput={handlePhoneInput}
        onKeyDown={handlePhoneKeyDown}
        onPaste={handlePhonePaste}
      />
    </>
  );
}
