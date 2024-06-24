import React, { useState } from "react";
import Input from "../input/index.jsx";
import Button from "../buttons/index.jsx";
import CreateDatePicker from "../react_date_picker/index.jsx";
import DEFINE_URL_ADRESS from "../000_backend_key.jsx";
import getSitters from "../request$receiveSitters/index.jsx";
import PhoneInput from "../phoneMask/index.jsx";

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
      let regexp = /[а-яё\-\. ]+/i;
      const clientCity = address.match(regexp)[0].slice(2);
      // меняем состояние вида кнопки, в ней отобразится название города
      setCity(`Ваш город: ${clientCity}`);
      setCityName(clientCity);
      // функция возвращает название города
      return clientCity;
    })
    .catch((error) => console.log("error", error));
}

// функция создающая форму для заказчика
function FormCreator({ classN, onSubmitFunc }) {
  const tooltips = [
    "Погуляем с собачкой в вашем районе",
    "Возьмём питомца к себе, пока Вы в отъезде",
    "Посидим с пушистиком у Вас дома",
  ];
  // отвечает за сабмит формы

  function handleFormSubmit(e) {
    e.preventDefault();
    // console.log("submitted");

    const form = document.forms["client_form"];
    const userRequest = {
      name: "no Name",
      pet: animal,
      price: maxPrice,
      city: cityName,
      telephone: `${form.elements["telephone"].value.match(/\d/g).join("")}`,
      description: form.elements["description"].value,
    };
    console.log(userRequest.telephone);
    ///// В задачах от команды стояла цель перенести данные из формы на главной странице в форму на страницу с петситтерами
    ///// Но в связи с тем, что у них нет общего родителя, то есть никак не передать состояние в пропсах
    ///// И в связи с тем что я еще не учила Redux, я решила в качестве демонстрации передать параменты в строке запроса
    ///// Я знаю, что телефон так передавать нельзя, но это в виде исключения в целях демонстрации идеи
    ///// Конечно если сайт возьмуьт в работу, надо это переделать через Redux

    window.location.href = `/sitters?type=${choice}&city=${userRequest.city}&anim=${animal}&phone=${userRequest.telephone}&pfrom=${minPrice}&pto=${maxPrice}&descr=${userRequest.description}}`;

    sendUser(userRequest);

    ///// функция отправляет параметры на бэкэнд
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
  const [choice, setChoice] = useState(serviceOptions[0]);

  const [clickedAnimal, setClickedAnimal] = useState(false);
  const animalOptions = ["Кошка", "Собака"];
  const [animal, setAnimal] = useState(animalOptions[0]);

  const priceOptions = [1000, 1100, 1200];
  const [clickedMinPrice, setClickedMinPrice] = useState(false);
  const [minPrice, setMinPrice] = useState(priceOptions[0]);

  const maxPriceOptions = [1200, 1400, 1700, 2000];
  const [clickedMaxPrice, setClickedMaxPrice] = useState(false);
  const [maxPrice, setMaxPrice] = useState(
    maxPriceOptions[maxPriceOptions.length - 1]
  );

  ////// функция ниже закрывает открытые опции для выбора при нажатии где либо на форме кроме самого окошка выбора
  function changeState(e) {
    if (clicked == true) {
      setClicked(false);
    } else if (clickedAnimal == true) {
      setClickedAnimal(false);
    } else if (clickedMinPrice == true) {
      setClickedMinPrice(false);
    } else if (clickedMaxPrice == true) {
      setClickedMaxPrice(false);
    } else if (clickedCity == true) {
      setClickedCity(false);
    }
  }

  ////////////////////////////////////////////////////////////////////
  const [city, setCity] = useState("Определить город");
  const [clickedCity, setClickedCity] = useState(false);
  const cityOpt = ["Москва", "Санкт-Петербург"];
  const [geo, setGeo] = useState(true);
  const [cityName, setCityName] = useState(cityOpt[0]);

  //по клику на кнопку поиска местоположения заказчика, вызывается функция handleGeoClick
  async function handleGeoClick(e) {
    e.preventDefault();
    // const yandexKey = "f5c06f3f-77c4-4412-ba84-2a93141f56d7";
    const myCoords = [];
    let clientCity;
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(function (position) {
            const { latitude, longitude } = position.coords;
            myCoords.push(latitude);
            myCoords.push(longitude);
            //// вызываем функцию getCity которая определить город по координатам
            clientCity = getCity(myCoords, setCity, setCityName);
          });
        } else {
          setGeo(false);
          alert(
            "Доступ к геоданным не получен, пожалуйста выберите город вручную!"
          );
        }
      });
    } else {
      setGeo(false);
      alert(
        "Доступ к геоданным не получен, пожалуйста выберите город вручную!"
      );
    }

    return clientCity;
  }

  /// возвращаем форму, в которой вызываются компоненты создания кнопки и инпутов
  return (
    <form
      name="client_form"
      className={classN}
      onClick={(e) => changeState(e)}
      onSubmit={
        onSubmitFunc ? (e) => onSubmitFunc(e) : (e) => handleFormSubmit(e)
      }
    >
      <img
        src="./app/pictures/cats/Cat_whiskers_dark_light.png"
        className={`${classN}_pic1`}
      />
      <img
        src="./app/pictures/dogs/Dog_nose_dark_light.png"
        className={`${classN}_pic2`}
      />
      <h1 className={`${classN}_header`}>Анкета</h1>
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

          <label htmlFor="price_from price_to">
            Цена
            <br />
            <div className="price">
              <div
                style={{
                  position: "absolute",
                  marginTop: "17px",
                  marginLeft: "5px",
                  whiteSpace: "pre",
                  fortSize: "20px",
                }}
              >
                {" "}
                От                 ₽
              </div>
              <Input
                formName="price_select"
                classes={`${classN}_select_opt`}
                opt={priceOptions}
                clickState={clickedMinPrice}
                setClick={setClickedMinPrice}
                changeStateOpt={setMinPrice}
                choiceMade={minPrice}
                placeholder="Oт"
              />
              <div
                style={{
                  position: "absolute",
                  marginTop: "17px",
                  marginLeft: "214px",
                  whiteSpace: "pre",
                  fortSize: "20px",
                }}
              >
                {" "}
                До                ₽
              </div>
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
          <label>
            Местоположение
            {geo == true ? (
              <Button
                btnType=""
                classN="btn positionBtn"
                onClickFunct={handleGeoClick}
                btnText={city}
              />
            ) : (
              <Input
                formName="animal_type"
                classes={`${classN}_select_opt`}
                opt={cityOpt}
                clickState={clickedCity}
                setClick={setClickedCity}
                changeStateOpt={setCityName}
                choiceMade={cityName}
              />
            )}
          </label>
        </div>
        <div className={`${classN}_div2`}>
          <label>
            Период
            <br />
            <div className="date_picker">
              <CreateDatePicker />
            </div>
          </label>
          <label>
            Телефон
            <br />
            <PhoneInput />
          </label>
          <label>
            Примечание
            <br />
            <input name="description" type="text"></input>
          </label>
          <Button
            btnType="submit"
            classN="btn submit_form_btn"
            btnText="Подобрать"
          />
        </div>
      </div>
    </form>
  );
}

export default function Form({ classN, onSubmitFunc }) {
  return <FormCreator classN={classN} onSubmitFunc={onSubmitFunc} />;
}
