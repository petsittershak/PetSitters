import React, { useState } from "react";
import Button from "../buttons/index.jsx"; //{btnType, classN, onClickFunct, btnText}
import SittersAbilityIcons from "../sitterProfilesAbilityIcons/index.jsx";

export default function SitterFullProfile({
  sitterObj,
  iconsLinksOpt,
  sitterCan,
  extraClassWidth,
  extraClassBtnWidth,
}) {
  const defaultPic = "./app/pictures/pic/petsitter_avatar2.jpg";

  return (
    <div>
      <div className="fullSittersProfile">
        <div className="fullSittersProfile_div1">
          <div className="profilePic" style={{
            width: "400px",
            height: "260px",
            borderRadius: "$borderRadius",
            background: `url(${sitterObj.picture ? sitterObj.picture : defaultPic}) no-repeat`,
            backgroundPosition: "center", backgroundSize:"contain"
          }}/>
          <h3 className="sitterFullName">{`${sitterObj.firstName} ${sitterObj.lastName}`}</h3>
          <div className="fullSittersProfile_div1_div3">
            <div >
              <p>Средняя оценка</p>
              <p>
                {Number.isInteger(sitterObj.rating)
                  ? `${sitterObj.rating}.0`
                  : `${sitterObj.rating}`}
              </p>
            </div>
            <div className="abilityDiv">
              <p className="abilityDiv_p">{sitterObj.title}</p>
              <SittersAbilityIcons
                options={sitterCan}
                iconsLinks={iconsLinksOpt}
                sitterObject={sitterObj}
                classN="sitter_fullProf_abilityDiv"
              />
            </div>
            <div>
              <p>Возраст</p>
              <p>{sitterObj.age}</p>
            </div>
            <div>
              <p>Выполнено заказов</p>
              <p>{sitterObj.completedOrders}</p>
            </div>
            <div>
              <p>Дата начала работы</p>
              <p>{sitterObj.joinedPetsittersDate}</p>
            </div>
            <div>
              <p>Стоимость передержки</p>
              <p>
                {sitterObj.price} {sitterObj.priceTitle}
              </p>
            </div>
          </div>
        </div>
        <div className="fullSittersProfile_div2">
          
          <div className="sitterDescription_fullProfile">
            <h3>Описание <img src="./app/pictures/dogs/Dog_Paw_light.png"/></h3>
            <p className="sitterDescription_fullProfile_text">{sitterObj.description}</p>
          </div>
          <div className="sitter_fullProfile_btn_div">
            <Button classN="btn sitter_fullProfile_btn1" onClickFunct={()=>{}} btnText="Отзывы"/>
            <Button classN="btn sitter_fullProfile_btn2" onClickFunct={()=>{}} btnText="Связаться"/>
          </div>
        </div>
      </div>
    </div>
  );
}
