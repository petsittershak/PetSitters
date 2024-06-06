import React, {useState} from "react";


function CreateServiceList({options, click, changeState}){
  return (
    <div className={`client_form_select_opt ${click ? "form_select_active" : ""}`}>
      {options.map((opt, i) => { return <li key={i} className="client_form_li" onClick={()=>changeState(opt)}>{opt}</li> })}
    </div>
  )
}

async function getCity(myCoords, setCity) {
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
      console.log(clientCity)
      setCity(`Ваш город: ${clientCity}`);
      return clientCity
  })
  .catch(error => console.log("error", error));
}


function FormCreator() {
// const [activeChoice, setActiveChoice] = useState(null);
const tooltips = ["Погуляем с собачкой в вашем районе", "Возьмём питомца к себе, пока Вы в отъезде", "Посидим с пушистиком у Вас дома"]; 

  function handleFormSubmit() { };
  const [clickedAnimal, setClickedAnimal] = useState(false);
  const animalOptions = ["Котюня", "Пёсель", "Котопёс"];
  const [animal, setAnimal] = useState(animalOptions["0"]);


  const serviceOptions = ["Выгул", "Передержка", "Няня"];
  const [clicked, setClicked] = useState(false);
  const [choice, setChoice] = useState(serviceOptions["0"]);

  function handleChooseServiceAnimalClick(opt) {
    if (opt === "service") {
      if (clicked == false) {
        setClicked(true)
        setClickedAnimal(false)
      } else {
        setClicked(false)
      };
    } else if (opt == "animal") {
      if (clickedAnimal == false) {
        setClickedAnimal(true)
        setClicked(false)
      } else {
        setClickedAnimal(false)
      }
    }    
  };

  const [city, setCity] = useState("Определить город");

  function handleGeoClick(e) {
    e.preventDefault();
    const yandexKey ="f5c06f3f-77c4-4412-ba84-2a93141f56d7"
    const myCoords = [];
    let clientCity;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude }  = position.coords;
        myCoords.push(latitude)
        myCoords.push(longitude)
        clientCity = getCity(myCoords, setCity);        
      });
    }
  
    

  return clientCity
    
  }

  

  return (
    <div className="client_form_div">
      <form className="client_form" onSubmit={handleFormSubmit}>
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
              <div name="service_name" className="_select service_name" onClick={()=>handleChooseServiceAnimalClick("service")}>
                {choice}
                <CreateServiceList options={serviceOptions} click={clicked} changeState={setChoice} />
              </div>
            </label>

            <label htmlFor="animal_type">
              Вид животного
              <br />
              <div name="animal_type" className="_select animal_type" onClick={()=>handleChooseServiceAnimalClick("animal")}>
               {animal}
              <CreateServiceList options={animalOptions} click={clickedAnimal} changeState={setAnimal} />
              </div>
            </label>

            <label htmlFor="price_from price_to">
              Цена
              <br />
              <div className="price">
                <div name="price_from" placeholder="От" className="_select price_select" >
                  
                </div>
                <div name="price_to" placeholder="До" className="_select price_select">
                
                </div>
              </div>
            </label>

            <button className="positionBtn" onClick={(e) => handleGeoClick(e)}>{city}</button>
          </div>
          <div className="client_form_div2">
            <label>
              Период с
              <br />
              <input type="date" placeholder="С"></input>
            </label>

            <label>
              Период до
              <br />
              <input type="date" placeholder="По"></input>
            </label>

            <label>
              Примечание
              <br />
              <input type="text"></input>
            </label>

            <button type="submit" className="submitBtn">
              Подобрать
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function Form() {
  return <FormCreator />;
}
