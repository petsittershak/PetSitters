import React, { useState } from "react";
import Button from "../buttons/index.jsx"

/// первый блок после header тут только картика и кнопки
export default function FindSitter() {
  return (
    <div className="main_find_sitter_block">
      <div className="main_find_sitter_div1">
        <h1>Найдите опытного sitter для передержки своего питомца</h1>
        <div className="main_findSitter_buttonsdiv">
          <Button classN="btn main_button_styles" onClickFunct={() => { }} btnText="Заказать передержку"/>
          <Button classN ="btn main_button_styles" onClickFunct={() => { }} btnText="Выбрать услугу"/>
        </div>
      </div>
      <img src="./app/pictures/gif/00_animation _front_page.gif"/>
    </div>
  )
}