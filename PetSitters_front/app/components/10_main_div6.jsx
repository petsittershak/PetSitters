import React, { useState } from "react";
import CreateButton from "./03_button_all.jsx";
import CreateSitterInfoBlock from "./12_sitter_data.jsx";
import Sitters from "../pages/sitters.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import getSitters from "./10_request&receiveSitters.jsx";


function CreateSittersProfiles({ sitters }) {
let sitterCanOpt= ["vet", "canHelpAlergicAnimal", "ownSertificate", "canCookHomeFood"];
const iconsLinks = {
  vet: "./app/pictures/sitterCan/vet.png",
  canHelpAlergicAnimal: "./app/pictures/sitterCan/canHelpAlergicAnimal.png",
  ownSertificate: "./app/pictures/sitterCan/ownSertificate.png",
  canCookHomeFood: "./app/pictures/sitterCan/canCookHomeFood.png"
  }
  

  return (
    <div className="createSittersProfilesDiv">
      {sitters.map((sitter, i) => { 
 return <CreateSitterInfoBlock key={i} sitterObj={sitter} iconsLinksOpt={iconsLinks} sitterCan={sitterCanOpt} extraClassBtnWidth="persitterProfilesSmallBtn" /> 
      })}
  </div>)

}

function CreateAboutSitterDiv({options}) {
  return (
    <div className="createAboutSittersDiv">
      {options.map((opt, i) => { return <p key={i}>{opt}</p>})}
    </div>
  )
  
}


const petSittersDefaultProfilesArr = [
  {
    picture: "./app/pictures/pic/petsitter_avatar2.jpg",
    firstName: "Иринa",
    lastName: "Орлова",
    raiting: "5.0",
    age: 50,
    completedOrders: 50,
    joinedPetsittersDate: "13.06.2020",
    title: "Dogsitter",
    price: 1700,
    priceFor: "передержка",
    customersFeedbacks: "",
    phone: "",
    email:"",
    priceTitle: "руб/сутки",
    city: "Москва",
    cityArea: "Химки",
    vet: true,
    canHelpAlergicAnimal: true,
    ownSertificate: true,
    canCookHomeFood: true,
    aboutSitter: "Опытный кинолог позаботится о вашем любимце!",
    description: "С радостью приму вашего любимца в нашу семью. Я проживаю в просторной 2-ух комнатной квартире в центре Петербурга. Рядом с домом есть парк, в котором вашему питомцу будет где разгуляться. Сама по профессии я инструктор-кинолог, опыт работы со служебными собаками более 10 лет. Четко буду соблюдать ваши нормы кормления, прогулки 2-3 раза в день, для вашего спокойствия могу отправлять каждый день фотоотчеты.Так же со мной живет дружелюбная девочка хаски по кличке Леди, вашему питомцу точно будет не скучно. Животных я очень люблю, по этому вы можете быть уверены, что ваша",
  },

  {
    picture:"./app/pictures/pic/petsitter_avatar1.jpg",
    firstName: "Константин",
    lastName: "Иванов",
    raiting: "5.0",
    age: 50,
    completedOrders: 35,
    joinedPetsittersDate: "13.06.2022",
    title: "Catsitter",
    price: 1500,
    priceFor: "передержка",
    customersFeedbacks: "",
    phone: "",
    email:"",
    priceTitle: "руб/сутки",
    city: "Санкт-Петербург",
    cityArea: "",
    vet: true,
    canHelpAlergicAnimal: false,
    ownSertificate: true,
    canCookHomeFood: true,
    aboutSitter: "Кошатник со стажем",
    description: "Я работаю удалённо, поэтому собака будет постоянно находиться под присмотром. Рядом с домом есть просторное поле для любителей побегать"
  }
 
]


const getToKnowArr = ["Мы собрали профайлы про наших sitters. Каждый из них имеет опыт общения с животными и даже больше!",
  "Проверяем паспорт, соцсети и другие данные о догситтере в открытых источниках.",
  "Мы всегда на связи, даже ночью. Оперативно поможем, если что-то пойдет не так.",
  "Вы можете встретиться с ситтером до передержки, чтобы познакомиться.",
  "Узнай про sitter все - его навыки, стоимость услуг, отзывы клиентов."
]

//вызываем функцию гет ситтерс чтобы получить всех ситтеров из базы данных и в дальнейшев мымводить их профили на страницах
const sittersArr = await getSitters();
console.log(sittersArr);

export default function CreateGetToKnowOurSitters() {

  return (
    <div className="getToKnowContent">
      <h1>Познакомьтесь с нашими sitters</h1>
      <div className="getToKnowContent_div2">
      <CreateAboutSitterDiv options={getToKnowArr} />
      <CreateSittersProfiles sitters={ sittersArr ? sittersArr.slice(sittersArr.length-2) : petSittersDefaultProfilesArr}/>
        <a href="/sitters#sitters_page_foundSitters"><CreateButton classN="btn verticalButton"/></a>
</div>
    </div>
  )
}