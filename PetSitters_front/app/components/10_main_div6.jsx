import React, { useState } from "react";
import CreateButton from "./03_button_all.jsx";
import CreateSitterInfoBlock from "./12_sitter_data.jsx";
import Sitters from "../pages/sitters.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
      {sitters.map((sitter, i) => { return <CreateSitterInfoBlock sitterObj={sitter} iconsLinksOpt={iconsLinks} sitterCan={sitterCanOpt} key={i} extraClassBtnWidth="persitterProfilesSmallBtn"/>})}
    </div>
  )
}

function CreateAboutSitterDiv({options}) {
  return (
    <div className="createAboutSittersDiv">
      {options.map((opt, i) => { return <p>{opt}</p>})}
    </div>
  )
  
}


const petSittersProfilesArr = [
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
  },
  {
    picture:"./app/pictures/pic/petsitter_avatar3.jpg",
    firstName: "Анастасия",
    lastName: "Рим",
    raiting: "5.0",
    age: 30,
    completedOrders: 35,
    joinedPetsittersDate: "13.06.2022",
    title: "Dogsitter",
    price: 1000,
    priceFor: "передержка",
    customersFeedbacks: "",
    phone: "",
    email:"",
    priceTitle: "руб/сутки",
    city: "Санкт-Петербург",
    cityArea: "",
    vet: false,
    canHelpAlergicAnimal: true,
    ownSertificate: false,
    canCookHomeFood: true,
    aboutSitter: "С радостью позабочусь о вашем четвероногом друге!",
    description: "🐶 Подхожу к делу с особой любовью.Работаю из дома, поэтому ваш питомец всегда будет под чутким присмотром, рядом с домом есть прекрасный парк для прогулок и площадка для собак."
  }
]


const getToKnowArr = ["Мы собрали профайлы про наших sitters. Каждый из них имеет опыт общения с животными и даже больше!",
  "Проверяем паспорт, соцсети и другие данные о догситтере в открытых источниках.",
  "Мы всегда на связи, даже ночью. Оперативно поможем, если что-то пойдет не так.",
  "Вы можете встретиться с ситтером до передержки, чтобы познакомиться.",
  "Узнай про sitter все - его навыки, стоимость услуг, отзывы клиентов."
]


export default function CreateGetToKnowOurSitters() {

  return (
    <div className="getToKnowContent">
      <h1>Познакомьтесь с нашими sitters</h1>
      <div className="getToKnowContent_div2">
      <CreateAboutSitterDiv options={getToKnowArr} />
      <CreateSittersProfiles sitters={petSittersProfilesArr}/>
        <a href="/sitters#sitters_page_foundSitters"><CreateButton classN="btn verticalButton"/></a>
</div>
    </div>
  )
}