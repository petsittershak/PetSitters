import React, { useState } from "react";


///функция создает контент на странице ситтеров первый блок после хэдэра

export default function OurSitters() {
  
  return (
    <div className="sitters_div1_content">
      <div className="sitters_div1_content_div1">
        <h1>Наши sitters</h1>
        <p>Sitters - самая важная часть нашей команды. Каждый из них проходит тщательный отбор, заполняет анкету, проходит собеседование, обучение и тестирование.</p>
      </div>
      <img className="sitters_div1_content_div2"   src="./../app/pictures/gif/00_animation_sitters_page.gif" />
  
    </div>
  )
}