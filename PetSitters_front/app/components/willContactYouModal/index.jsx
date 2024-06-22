import React, { useState } from "react";



export default function WillContactYouWindow({ phone }) {
  let placeholder = "+7 (000) 000-00-00"
  return (
    <div className="contactYouWindow"> 
      <img src="./../app/pictures/dogs/Dog_Paw_white.png" />
      <div className="contactYouWindow_div1">
      <p>      Ожидайте звонок       </p>
      <p>Ситтер свяжется с Вами в течение 1 часа</p>
      <p>Ваш номер {phone ? phone : placeholder}</p>
      </div>
    </div>
  )
}