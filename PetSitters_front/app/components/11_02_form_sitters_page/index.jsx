import React, { useState } from "react";

import Input from "./../input/index.jsx";
import Button from "./../buttons/index.jsx";
import CreateDatePicker from "./../react_date_picker/index.jsx";
import DEFINE_URL_ADRESS from "../000_backend_key.jsx";
import getSitters from "../request$receiveSitters/index.jsx";

//данный компонент согдает форму для заполнения заказчиком

//функция находит город местоположения заказчика по его геолокации, используется бесплатный
//апи DAdata до 10 000 вызовов в сутки ("https://dadata.ru/product/geolocate/")

async function getCity(myCoords, setCity, setCityName) {
  var url =
    "http://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
  var token = `28625502ebc89256979d508f7c9c4125c443746f`;
  var query = { lat: myCoords["0"], lon: myCoords["1"] };

  var options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify(query),
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((result) => {
      let address = result.suggestions[0].value;
      let regexp = /\W+,/y;
      regexp.lastIndex = 2;
      const clientCity = address.match(regexp)[0].split(",")[0];
      // меняем состояние вида кнопки, в ней отобразится название города
      setCity(`Ваш город: ${clientCity}`);
      setCityName(clientCity);
      // функция возвращает название города
      return clientCity;
    })
    .catch((error) => console.log("error", error));
}

// функция создающая форму для заказчика
function FormCreator({ classN, onSubmitFunc}) {
  const tooltips = [
    "Погуляем с собачкой в вашем районе",
    "Возьмём питомца к себе, пока Вы в отъезде",
    "Посидим с пушистиком у Вас дома",
  ];
  // отвечает за сабмит формы

  function handleFormSubmit(e) {
    e.preventDefault();

//находим нужную форму в документе
    const form = document.forms["client_form"];
//параметры заполненной формы послн нажатия кнопки отправить
    const userRequest = {
      name: "no Name",
      pet: animal,
      price: maxPrice,
      city: cityName,
      telephone: `+7${form.elements["telephone"].value.match(/\d/g).join("")}`,
      description: form.elements["description"].value,
    };

//переходим на страницу ситтеров
    window.location.href = "/sitters";
//отправляем данные юзера, телефон и параметры поиска на сервер
    sendUser(userRequest);

//функция отправляющая данные юзера на сервер
    async function sendUser(userRequest) {
      try {
        const response = await fetch(
          `http://${DEFINE_URL_ADRESS}/clients/add_client`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userRequest),
          }
        );
        if (response.ok === true) {
          const user = await response.json();
          console.log(user);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  /// все данные для создания списков, посредством вызова  функции CreateInput, которая вызывается несколько раз в форме ниже
  const serviceOptions = ["Выгул", "Передержка", "Няня"];
  const [clicked, setClicked] = useState(false);
  const [choice, setChoice] = useState(serviceOptions["0"]);

  const [clickedAnimal, setClickedAnimal] = useState(false);
  const animalOptions = ["Кошка", "Собака"];
  const [animal, setAnimal] = useState(animalOptions["0"]);

  const priceOptions = [600, 700, 900, 1000];
  const [clickedMinPrice, setClickedMinPrice] = useState(false);
  const [minPrice, setMinPrice] = useState(priceOptions[0]);

  const maxPriceOptions = [1000, 1200, 1400, 1600];
  const [clickedMaxPrice, setClickedMaxPrice] = useState(false);
  const [maxPrice, setMaxPrice] = useState(maxPriceOptions[maxPriceOptions.length - 1]
  );

  ////////////////////////////////////////////////////////////////////
  const [city, setCity] = useState("Определить");
  const [cityName, setCityName] = useState("default");
  //по клику на кнопку поиска местоположения заказчика, вызывается функция handleGeoClick
  function handleGeoClick(e) {
    e.preventDefault();
    
    //тут аррей для координат после определения местоположения  пользователя
    const myCoords = [];
    let clientCity;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        myCoords.push(latitude);
        myCoords.push(longitude);
        //// вызываем функцию getCity которая определить город по координатам
        clientCity = getCity(myCoords, setCity, setCityName);
      });
    }
    return clientCity;
  }
 
  /// возвращаем форму, в которой вызываются компоненты создания кнопки и инпута
  return (
    <form
      name="client_form"
      className={classN}
      onSubmit={
        onSubmitFunc ? (e) => onSubmitFunc(e) : (e) => handleFormSubmit(e)
      }
    >
      <div className={`${classN}_form_div`}>
        <div className={`${classN}_div1`}>
          <label htmlFor="service_name">
            Тип услуги
            <br />
            <Input
              formName="service_name"
              classes={`${classN}_select_opt`}
              opt={serviceOptions}
              clickState={clicked}
              setClick={setClicked}
              changeStateOpt={setChoice}
              choiceMade={choice}
            />
          </label>

          <label htmlFor="animal_type">
            Вид животного
            <br />
            <Input
              formName="animal_type"
              classes={`${classN}_select_opt`}
              opt={animalOptions}
              clickState={clickedAnimal}
              setClick={setClickedAnimal}
              changeStateOpt={setAnimal}
              choiceMade={animal}
            />
          </label>
        </div>
        <div className={`${classN}_div2`}>
          <label>
            Телефон
            <br />
            <input className="telInput"
              type="tel"
              name="telephone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            ></input>
          </label>
          <label>
            Период
            <br />
            <div className="date_picker">
              <CreateDatePicker />
            </div>
          </label>

        </div>
        <div className={`${classN}_div3`}>
          <label>
            Местоположение
          <br/>
          <Button
            btnType=""
            classN="btn sitters_page_positionBtn"
            onClickFunct={handleGeoClick}
            btnText={city}
          />
          </label>
          
          <label htmlFor="price_from price_to">
            Цена
            <br />
            <div className="price">
              <Input    formName="price_select"   classes={`${classN}_select_opt`}  opt={priceOptions}  clickState={clickedMinPrice}  setClick={setClickedMinPrice}  changeStateOpt={setMinPrice}  choiceMade={minPrice}  placeholder="Oт"  />
              <Input
                formName="price_select"
                classes={`${classN}_select_opt`}
                opt={maxPriceOptions}
                clickState={clickedMaxPrice}
                setClick={setClickedMaxPrice}
                changeStateOpt={setMaxPrice}
                choiceMade={maxPrice}
                placeholder="До"
              />
            </div>
          </label>
        </div>
        
      </div>
      <Button
          btnType="submit"
          classN="btn submit_form_sitters_page_btn"
          btnText="Подобрать"
        />
    </form>
  );
}

export default function Form({ classN, onSubmitFunc}) {
  return <FormCreator classN={classN} onSubmitFunc={onSubmitFunc} />;
}
