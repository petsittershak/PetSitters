import React, { useState } from "react";
import CreateButton from "./03_button_all.jsx";

function CreateHeaderList({options, hrefOpt}){
  return (
  <div className="headerMenu_div2">
      {options.map((opt, i) => { return <a key={i} className="header_link" href={hrefOpt[i]}>{opt}</a> })}
  </div>
)
}

const menuOptArr = ["О сервисе", "Ситтеры", "Сотрудничество", "Отзывы"];
const hrefArr = ["#HowPetsittersWork", "/sitters", "#", "#"]

export default function CreateHeader() {
  return (
    <div className="headerMenu">
      <a href="/"><img src="./app/pictures/01_petsitters_logo.png"/></a>
      <CreateHeaderList options={menuOptArr} hrefOpt={hrefArr} />
      <div className="headerMenu_div3">
        <CreateButton classN="btn header_button_styles" onClickFunct={()=>{}} btnText="Заказать звонок" />
        <CreateButton classN="btn header_button_styles" onClickFunct={()=>{}} btnText="Регистрация" />
      </div>
    </div>
  )
} 
