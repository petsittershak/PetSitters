import React, { useState } from "react";
import Histiry, { useHistory } from 'react-router-dom';
import ReactDOM from "react-dom/client";

import CreateInput from "./02_input.jsx";
import CreateButton from "./03_button_all.jsx";
import CreateDatePicker from "./05_react_date_picker.jsx";

import getSitters from "./10_request&receiveSitters.jsx"


//данный компонент согдает форму для заполнения заказчиком


//функция находит город местоположения заказчика по его геолокации, используется бесплатный
//апи DAdata до 10 000 вызовов в сутки ("https://dadata.ru/product/geolocate/")

async function getCity(myCoords, setCity, setCityName) {
  var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
  var token = `28625502ebc89256979d508f7c9c4125c443746f`;
  var query = { lat: myCoords["0"], lon: myCoords["1"] };
  
  var options = {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
      },
      body: JSON.stringify(query)
  }

  
  fetch(url, options)
  .then(response => response.json())
    .then(result => {
      let address = result.suggestions[0].value;
      let regexp = /\W+,/y;
       regexp.lastIndex = 2;
      const clientCity = address.match(regexp)[0].split(",")[0];
      // меняем состояние вида кнопки, в ней отобразится название города
      setCity(`Ваш город: ${clientCity}`);
      setCityName(clientCity)
      // функция возвращает название города
      return clientCity;
  })
  .catch(error => console.log("error", error));
}

// функция создающая форму для заказчика
function FormCreator({active, setActive}) {
const tooltips = ["Погуляем с собачкой в вашем районе", "Возьмём питомца к себе, пока Вы в отъезде", "Посидим с пушистиком у Вас дома"]; 


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
      telephone: `+7${(form.elements["telephone"].value).match(/\d/g).join('')}`,
      description: form.elements["description"].value,
    }
    // const history = useHistory();
    // history.push('/sitters')
// нужно ли вызывать функцию запроса ситтеров???????
    //getSitters();
    // goToSittersPage();
    // function goToSittersPage() {
    //  return <a href="/sitters"></a>
    //   }
   
    window.location.href = "/sitters";
  
    sendUser(userRequest);

    async function sendUser(userRequest) {

      try {
        const response = await fetch("http://localhost:8909/clients/add_client", {
        method: "POST",
        headers: {"Accept": "application/json", "Content-Type": "application/json"},
        body: JSON.stringify(userRequest)
      });
      if (response.ok === true) {
        const user = await response.json();
        console.log(user)
        }
       
      }
      catch (err) {
        console.log(err)
      }
     }
    
  }
    

/// все данные для создания списков, посредством вызова  функции CreateInput, которая вызывается несколько раз в форме ниже
  const serviceOptions = ["Выгул", "Передержка", "Няня"];
  const [clicked, setClicked] = useState(false);
  const [choice, setChoice] = useState(serviceOptions["0"]);


  const [clickedAnimal, setClickedAnimal] = useState(false);
  const animalOptions = ["Котюня", "Пёсель", "Котопёс"];
  const [animal, setAnimal] = useState(animalOptions["0"]);


  const priceOptions = [400, 500, 600, 700];
  const [clickedMinPrice, setClickedMinPrice] = useState(false);
  const [minPrice, setMinPrice] = useState(priceOptions[0]);

  const maxPriceOptions = [400, 500, 700, 800, 1000];
  const [clickedMaxPrice, setClickedMaxPrice] = useState(false);
  const [maxPrice, setMaxPrice] = useState(maxPriceOptions[maxPriceOptions.length-1]);

////////////////////////////////////////////////////////////////////
  const [city, setCity] = useState("Определить город");
  const [cityName, setCityName] = useState("default");
  //по клику на кнопку поиска местоположения заказчика, вызывается функция handleGeoClick
  function handleGeoClick(e) {
    e.preventDefault();
    // const yandexKey = "f5c06f3f-77c4-4412-ba84-2a93141f56d7";
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
    <div className={active ? "modal active" : "modal"} onClick={()=> setActive(false)}>
      <div className={active ? "client_form_div active" : "client_form_div"} onClick={(e)=> e.stopPropagation()}>
      <form name="client_form" className="client_form" onSubmit={(e)=>handleFormSubmit(e)}>
        <img
          src="./app/pictures/cats/Cat_whiskers_dark_light.png"
          className="client_form_pic1"
        />
        <img
          src="./app/pictures/dogs/Dog_nose_dark_light.png"
          className="client_form_pic2"
        />
        <h1 className="client_form_header">Анкета</h1>
        <div className="client_form_form_div">
          <div className="client_form_div1">
            <label htmlFor="service_name">
              Тип услуги
              <br />
              <CreateInput formName="service_name" classes="client_form_select_opt" opt={serviceOptions} clickState={clicked} setClick={setClicked} changeStateOpt={setChoice} choiceMade={choice}/>
            </label>

            <label htmlFor="animal_type">
              Вид животного
              <br />
              <CreateInput formName="animal_type" classes="client_form_select_opt" opt={animalOptions} clickState={clickedAnimal} setClick={setClickedAnimal} changeStateOpt={setAnimal} choiceMade={animal} />
            </label>

            <label htmlFor="price_from price_to">
              Цена
              <br />
              <div className="price">
                  <CreateInput formName="price_select" classes="client_form_select_opt" opt={priceOptions} clickState={clickedMinPrice} setClick={setClickedMinPrice} changeStateOpt={setMinPrice} choiceMade={minPrice} placeholder="Oт" />
                  <CreateInput formName="price_select" classes="client_form_select_opt" opt={maxPriceOptions} clickState={clickedMaxPrice} setClick={setClickedMaxPrice} changeStateOpt={setMaxPrice} choiceMade={maxPrice} placeholder="До" />
              </div>
            </label>
            <CreateButton btnType="" classN="btn positionBtn" onClickFunct={handleGeoClick} btnText={city} />
          </div>
          <div className="client_form_div2">
            <label>
              Период
              <br />
              <div className="date_picker" >
                 <CreateDatePicker />
              {/* <input className="price_select" type="date" placeholder="С"></input>
              <input className="price_select" type="date" placeholder="По"></input> */}
              </div>
            
            </label>
            <label>
              Телефон
              <br />
              <input type="tel" name="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
            </label>
            <label>
              Примечание
              <br />
              <input name="description" type="text"></input>
            </label>
            <CreateButton btnType="submit" classN="btn submit_form_btn" btnText="Подобрать" />
          </div>
        </div>
      </form>
    </div>
    </div>
    
  );
}


export default function Form({active, setActive}) {
  return <FormCreator active={active} setActive={setActive}/>;
}
