import React, { useState } from "react";
import Button from "./../buttons/index.jsx";


///создает хэдэр из списка опций меню ниже. стили этого блока заданы в файле стилей с таким же названием
function CreateHeaderList({options, hrefOpt}){
  return (
  <div className="headerMenu_div2">
      {options.map((opt, i) => { return <a key={i} className="header_link" href={hrefOpt[i]}>{opt}</a> })}
  </div>
)
}
// список для меню, и список ссылок для навигации
const menuOptArr = ["О сервисе", "Ситтеры", "Сотрудничество", "Отзывы"];
const hrefArr = ["/#HowPetsittersWork", "/sitters", "#", "#"]



///функция создает хэдэр и экспортируется
export default function Header() {
  return (
    <div className="headerMenu">
      <a href="/"><img src="./app/pictures/01_petsitters_logo.png"/></a>
      <CreateHeaderList options={menuOptArr} hrefOpt={hrefArr} />
      <div className="headerMenu_div3">
        <Button classN="btn header_button_styles" onClickFunct={()=>{}} btnText="Заказать звонок" />
        <Button classN="btn header_button_styles" onClickFunct={()=>{}} btnText="Регистрация" />
      </div>
    </div>
  )
} 
