import React, { useState } from "react";

function changeBackground(e) {
  e.target.style.background = 'none';
}


function CreateBlocks({ options, description, iconsOpt}) {
  return (
    <div className="returnBlocksDiv">
      {options.map((opt, i) => {
        return (
          <div key={i} className="howPetsittersWork_optionsDivs">
            <a className="gif" href="#"
              style={{
                background: `url(${iconsOpt[i]}) no-repeat`, backgroundPosition: "center", backgroundSize:"cover", width: "75px", height: "75px"
              }}
              onMouseOver={(e) => changeBackground(e)}
              onMouseLeave={(e) => {
                e.target.style.background = `url(${iconsOpt[i]}) no-repeat`;
                e.target.style.backgroundPosition = "center";
                e.target.style.backgroundSize = "cover";
                e.target.style.width = "76px";
                e.target.style.height = "76px";
              }}  
            
            >
            <img className="gifBackground" src={opt} alt="" 
                  onMouseLeave={(e) => {
                    e.target.closest("A").style.background = `url(${iconsOpt[i]}) no-repeat`;
                    e.target.closest("A").style.backgroundPosition = "center";
                    e.target.closest("A").style.backgroundSize = "cover";
                    e.target.closest("A").style.width = "76px";
                    e.target.closest("A").style.height = "76px";
                  }}/>
                  </a>
          <p className="howPetsittersWorkDescription">{description[i]}</p>
          </div>
        )
      })}
    </div>
  );
}

export default function HowPetsittersWork() {
  const gifArray = [
    "./app/pictures/gif/01_gif_request.gif",
    "./app/pictures/gif/02_Gif_choose_sitter.gif",
    "./app/pictures/gif/03_gif_payment.gif",
    "./app/pictures/gif/04_gif_catsitter.gif",
    "./app/pictures/gif/05_gif_dogsitter.gif",
    "./app/pictures/gif/06_gif_reports.gif",
  ];
  const iconArray = [
    "./app/pictures/icons/01_icons_request.png",
    "./app/pictures/icons/02_icons_choose_sitter.png",
    "./app/pictures/icons/03_icons_payment.png",
    "./app/pictures/icons/04_icons_catsitter.png",
    "./app/pictures/icons/05_icons_dogsitter.png",
    "./app/pictures/icons/06_icons_reports.png",
  ]

  const descriptionArr = [
    "Вы оставляете заявку на передержку на сайте",
    "Вы выбираете идеального sitter из предложенных нами вариантов",
    "Оплачиваете передержку Вашей банковской картой",
    "Dogsitter гуляет с вашим собакеном, моет ему лапы после прогулки, дает корм соглаcно вашим пожеланиям",
    "Catsitter играет с вашим котиком, кормит и следит за чистотой лотка",
    "Во время передержки sitter отправляет отчеты, чтобы Вы были уверены - ваш питомец в безопасности и с ним все хорошо",
  ];

  return (
    <div className="main_page_div3">
      <div>
        <h1>Как работает Petsitter</h1>
      </div>
      <div className="mainPageDiv3_2_block">
        <CreateBlocks options={gifArray} description={descriptionArr} iconsOpt={iconArray} />
        <img
          src="./app/pictures/pic/06_picture.jpg"
          alt="Описание"
          className="picture"
        />
      </div>
    </div>
  );
}
