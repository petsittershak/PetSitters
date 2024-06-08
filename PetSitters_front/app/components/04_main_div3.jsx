import React, { useState } from "react";

function CreateBlocks({ options, description }) {
  return (
    <div className="returnBlocksDiv">
      {options.map((opt, i) => {
        return (
        <div key={i} className="howPetsittersWork_optionsDivs">
          <img src={opt} className="gif" />
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
          <CreateBlocks options={gifArray} description={descriptionArr} />
        <img
          src="./app/pictures/pic/06_picture.jpg"
          alt="Описание"
          className="picture"
        />
      </div>
    </div>
  );
}
