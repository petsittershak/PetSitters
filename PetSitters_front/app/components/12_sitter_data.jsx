import React, { useState } from "react";
import CreateButton from "./03_button_all.jsx";

function CreateAbilityDiv({options, iconsLinks, sitterObject}) {
  const thisSitterCan = [];
 
  options.forEach(opt => { if (sitterObject[opt] == true) { thisSitterCan.push(opt)  } })

  return (
    <div  className="sitterProfileDiv_sitterCanDiv">
      {thisSitterCan.map((opt, i) => {
        return <img key={i} src={iconsLinks[opt]} />
      })}
    </div>
  );
}
let count = 523;
//"sittersPageProfile"  extraClassWidth="sittersPageProfile" extraClassBtnWidth="sittersPageProfileBtn"
export default function CreateSitterInfoBlock({ sitterObj, iconsLinksOpt, sitterCan, extraClassWidth, extraClassBtnWidth }) {
  
  const defaultPic = "./app/pictures/pic/petsitter_avatar2.jpg"
  count++;
  return (
    <div key={count} className={`sitterProfileDiv  ${extraClassWidth ? extraClassWidth : ""}`}>
      <div className={`sitterProfileDiv_div1 ${extraClassWidth ? extraClassWidth : ""}`}>
        <img src={sitterObj.picture ? sitterObj.picture : defaultPic} />
        <div className="sitterProfileDiv_div1_div2">
          <p className="sitterNameText">{`${sitterObj.firstName} ${sitterObj.lastName}`}</p>
          <div className="starRaiting"><img className="starRaitingImg" src="./app/pictures/icons/09_raiting_start.png" /> <p>{sitterObj.raiting}</p><p>{sitterObj.title}</p></div>
          <p className="petsitterPriceText">{`${sitterObj.price} ${sitterObj.priceTitle}`}</p>
          <p>{`г. ${sitterObj.city} ${
            sitterObj.cityArea ? `(${sitterObj.cityArea})` : ""
          }`}</p>
        </div>
      </div>
        <div className="sitterProfileDiv_div2">
          <CreateAbilityDiv options={sitterCan} iconsLinks={iconsLinksOpt}  sitterObject={sitterObj} />
          <p className={`sitterDescription_header ${extraClassWidth ? extraClassWidth : ""}`}>{sitterObj.aboutSitter}</p>
          <p className={`sitterDescription ${extraClassWidth ? extraClassWidth : ""}`}>{sitterObj.description}</p>
        </div>
        <div className={`sitterProfileDiv_div3 ${extraClassWidth ? extraClassWidth : ""}`}>
          <CreateButton
            classN={`btn ${extraClassBtnWidth}`}
            onClickFunct={() => {}}
            btnText="Профиль"
          />
          <CreateButton
          classN={`btn ${extraClassBtnWidth}`}
            onClickFunct={() => {}}
            btnText="Связаться"
          />
        </div>
      
    </div>
  );
}
