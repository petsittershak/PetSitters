import React, { useState } from "react";
import CreateButton from "./03_button_all.jsx";

function CreateAbilityDiv({options, iconsLinks, sitterObject}) {
  const thisSitterCan = [];
 
  options.forEach(opt => { if (sitterObject[opt] == true) { thisSitterCan.push(opt)  } })

  return (
    <div className="sitterProfileDiv_sitterCanDiv">
      {thisSitterCan.map((opt, i) => {
        return <img src={iconsLinks[opt]} />
      })}
    </div>
  );
}

export default function CreateSitterInfoBlock({sitterObj, iconsLinksOpt, sitterCan, key}) {
  return (
    <div key={key} className="sitterProfileDiv">
      <div className="sitterProfileDiv_div1">
        <img src={sitterObj.picture} />
        <div className="sitterProfileDiv_div1_div2">
          <p className="sitterNameText">{`${sitterObj.firstName} ${sitterObj.lastName}`}</p>
          <p className="starRaiting"><img className="starRaitingImg" src="./app/pictures/icons/09_raiting_start.png" /> <p>{sitterObj.raiting}</p><p>{sitterObj.title}</p></p>
          <p className="petsitterPriceText">{`${sitterObj.price} ${sitterObj.priceTitle}`}</p>
          <p>{`г. ${sitterObj.city} ${
            sitterObj.cityArea ? `(${sitterObj.cityArea})` : ""
          }`}</p>
        </div>
      </div>
        <div className="sitterProfileDiv_div2">
          <CreateAbilityDiv options={sitterCan} iconsLinks={iconsLinksOpt}  sitterObject={sitterObj} />
          <p className="sitterDescription_header">{sitterObj.aboutSitter}</p>
          <p className="sitterDescription">{sitterObj.description}</p>
        </div>
        <div className="sitterProfileDiv_div3">
          <CreateButton
            classN="btn persitterProfilesSmallBtn"
            onClickFunct={() => {}}
            btnText="Профиль"
          />
          <CreateButton
            classN="btn persitterProfilesSmallBtn"
            onClickFunct={() => {}}
            btnText="Связаться"
          />
        </div>
      
    </div>
  );
}
