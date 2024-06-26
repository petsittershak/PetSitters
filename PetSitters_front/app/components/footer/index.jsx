import React, { useState } from "react";
import Button from "./../buttons/index.jsx";


//создаем футтер
function CreateFooterList({ headerN, options, classN, socialNames }) {
  
if (socialNames) {
    return (
      <div>
        <h2>{headerN}</h2>
        <div className={classN}>
          {options.map((opt, i) => { return <a className="link linkSocial" key={i} href="#"><img src={opt} />{socialNames[i]}</a>})}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h2>{headerN}</h2>
        <div className={classN}>
          {options.map((opt, i) => { return <a className="link" href="#" key={i}>{opt}</a> })}
        </div>
        
      </div>
    )
  }
}

//"./../../styles/00_standard_styles.scss"
function CreatefooterSection(){
// все списки которые используются в создании футера
  const cityArr = ["Ереван",  "Москва", "Казань", "Санкт-Петербург", "Нижний Новгород", "Екатеринбург"];
  const socialNetworksArr = [
    "./../app/pictures/icons/01_telegram.png", /////!!!!!!!!
    "./../app/pictures/icons/02_vk.png",
    "./../app/pictures/icons/03_inst.png",
    "./../app/pictures/icons/04_youtube.png",
    "./../app/pictures/icons/05_odnokl.png",
    "./../app/pictures/icons/06_facebook.png"
  ];
  const socialNamesArr = ["Telegram", "ВКонтакте", "Instagram", "YouTube", "Одноклассники", "Facebook"];
  const infoLinksArr = ["О нас", "Наши ситтеры", "Услуги", "Отзывы", "Политика конфиденциальности"]

  return (
    <div className="footerContent">
      <div className="footerContentDiv">
        <Button classN="btn footer_button_styles" onClickFunct={() => { }} btnText="Заказать звонок" />
        <p>8 800 000 39 39 (РФ) <br/>
          10 374 10 99-99-99 (Армения)</p>
        <CreateFooterList headerN="Города" options={cityArr} classN="footerCityList" pict={false}/>
      </div>
      <div className="footerContentDiv">
        <Button classN="btn footer_button_styles" onClickFunct={() => { }} btnText="Запрос в службу поддержки" />
        <CreateFooterList headerN="Мы в соц. сетях" options={socialNetworksArr} classN="footerSocialList" socialNames={socialNamesArr}/>
      </div>
      <div className="footerContentDiv">
        <Button classN="btn footer_button_styles" onClickFunct={() => { }} btnText="Юридическая информация" />
        <CreateFooterList headerN="Полезные ссылки" options={infoLinksArr} classN="footerUsefulLinksList" pict={false}/>
      </div>
    </div>
  )
}



/// верхняя функция которая вызывает CreatefooterSection для создания контента футера
export default function Footer() {
  return (
    <div className="footerDivContainer">
      <div className="footer_header"><img src="./app/pictures/dogs/Dog_Paw_dark.png"/><h1>Остались вопросы?</h1></div>
      <div>
        <CreatefooterSection />
      </div>
      <p className="rightsReserved">Petsitters / Пэтситтерс © 2024</p>
    </div>
  )
}