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
function FormCreator({ classN, onSubmitFunc}) {
  const tooltips = [
    "Погуляем с собачкой в вашем районе",
    "Возьмём питомца к себе, пока Вы в отъезде",
    "Посидим с пушистиком у Вас дома",
  ];


 
  const parametersObj = {};
  if (window.location.search !="") {
   const str = window.location.search;
   const params = ["type", "anim", "city", "phone", "pfrom", "pto"];
    let regexp;

    for (let i = 0; i < params.length; i++){
      regexp = `[\\?&]${params[i]}=([^&#]*)`;
         parametersObj[params[i]] = str.match(regexp)[1]
      }
  
    parametersObj.type = decodeURIComponent(parametersObj.type);
    parametersObj.anim = decodeURIComponent(parametersObj.anim);
    parametersObj.city = decodeURIComponent(parametersObj.city);
    parametersObj.phone = `${parametersObj.phone.slice(0,2)} (${parametersObj.phone.slice(2,5)}) ${parametersObj.phone.slice(5,8)}-${parametersObj.phone.slice(8,10)}-${parametersObj.phone.slice(10,12)}`;

  }
  
 
  console.log(parametersObj)
  // const form = document.forms["client_form"];
  // form.elements["telephone"].placeholder = parametersObj.phone;

  

  /// все данные для создания списков, посредством вызова  функции CreateInput, которая вызывается несколько раз в форме ниже
  const serviceOptions = ["Выгул", "Передержка", "Няня"];
  const [clicked, setClicked] = useState(false);
  const [choice, setChoice] = useState(parametersObj.type ?  parametersObj.type : serviceOptions["0"]);

  const [clickedAnimal, setClickedAnimal] = useState(false);
  const animalOptions = ["Кошка", "Собака"];
  const [animal, setAnimal] = useState(parametersObj.anim ? parametersObj.anim : animalOptions["0"]);

  const priceOptions = [600, 700, 900, 1000];
  const [clickedMinPrice, setClickedMinPrice] = useState(false);
  const [minPrice, setMinPrice] = useState( parametersObj.pfrom ? parametersObj.pfrom : priceOptions[0]);

  const maxPriceOptions = [1000, 1200, 1400, 1600];
  const [clickedMaxPrice, setClickedMaxPrice] = useState(false);
  const [maxPrice, setMaxPrice] = useState(parametersObj.pto ? parametersObj.pto : maxPriceOptions[maxPriceOptions.length - 1]
  );


  function changeState(e) {
    if (clicked == true) {
    setClicked(false);
    } else if (clickedAnimal == true) {
      setClickedAnimal(false);
    } else if (clickedMinPrice == true) {
      setClickedMinPrice(false);
    } else if (clickedMaxPrice == true) {
      setClickedMaxPrice(false)
    } else if (clickedCity == true) {
      setClickedCity(false)
    }
   
  }

  ////////////////////////////////////////////////////////////////////
  const [city, setCity] = useState((parametersObj.city && parametersObj.city != "null") ? `Ваш город: ${parametersObj.city}` : "Определить");
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
    const { state } = await navigator.permissions.query({ name: 'geolocation' });
    if (state != "granted") {
      setGeo(false)
      alert("Доступ к геоданным не получен, пожалуйста выберите город вручную!")
 } else if ("geolocation" in navigator) {
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
  // function handleGeoClick(e) {
  //   e.preventDefault();
    
  //   //тут аррей для координат после определения местоположения  пользователя
  //   const myCoords = [];
  //   let clientCity;

  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       const { latitude, longitude } = position.coords;
  //       myCoords.push(latitude);
  //       myCoords.push(longitude);
  //       //// вызываем функцию getCity которая определить город по координатам
  //       clientCity = getCity(myCoords, setCity, setCityName);
  //     });
  //   }
  //   return clientCity;
  // }

 
  /// возвращаем форму, в которой вызываются компоненты создания кнопки и инпута
  return (
    <form
      name="client_form"
      className={classN}
      onClick={(e)=> changeState(e)}
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
              pattern="+7[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder={`${parametersObj.phone ? parametersObj.phone : ""}`}
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
            <br />
            {geo == true ? <Button
            btnType=""
            classN="btn sitters_page_positionBtn"
            onClickFunct={handleGeoClick}
            btnText={city}
          />  :
            <Input formName="animal_type" classes={`${classN}_select_opt`} opt={cityOpt} clickState={clickedCity} setClick={setClickedCity} changeStateOpt={setCityName} choiceMade={cityName} />
          }
  
          </label>
          
          <label htmlFor="price_from price_to">
            Цена
            <br />
            <div className="price">
             <div style={{position: "absolute", marginTop: "0px", marginLeft: "5px", whiteSpace: "pre", lineHeight: "40px", fortSize: "20px", backgroundColor: "#FFF9F5", width: "160px", borderRadius: "30px", height: "40px", color: "#B3B3B3"}}>  От                ₽</div>
              <Input    formName="price_select"   classes={`${classN}_select_opt`}  opt={priceOptions}  clickState={clickedMinPrice}  setClick={setClickedMinPrice}  changeStateOpt={setMinPrice}  choiceMade={minPrice}  placeholder="Oт"  />
              <div style={{position: "absolute", marginTop: "0px", marginLeft: "200px", whiteSpace: "pre", fortSize: "20px", whiteSpace: "pre", lineHeight: "40px", fortSize: "20px", backgroundColor: "#FFF9F5", width: "160px", borderRadius: "30px", height: "40px", color: "#B3B3B3"}}>  До                ₽</div>
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
