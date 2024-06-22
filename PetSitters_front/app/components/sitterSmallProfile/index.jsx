import React, { useState } from "react";
import Button from "./../buttons/index.jsx";
import SitterFullProfile from "../sittersFullProfile/index.jsx";
import Modal from "./../modal/index.jsx"; //{active, setActive, children, childrenClass}
import SittersAbilityIcons from "../sitterProfilesAbilityIcons/index.jsx";
import WillContactYouWindow from "../willContactYouModal/index.jsx";
///функция которая грузит картинки умений ситтера к их профайлам


 /// переменная count используется для согдания ключа списка в функции CreateSitterInfoBlock
let count = 523;
//функция получая параменты и объект ситтера создает профайл ситтера
export default function SitterSmallProfile({ sitterObj, iconsLinksOpt, sitterCan, extraClassWidth, extraClassBtnWidth, phone}) {

  ///////
  //// стейт для модального окна полного профайла ситтера
  const [modalAvtive, setModalActive] = useState(false);
  if (modalAvtive) {
    document.body.style.overflowY = 'hidden';
  }else{
    document.body.style.overflowY = 'scroll';
  }
  //////////////
  //стейт для модального окна контакта с ситтером
  const [modalContactAvtive, setModalContactActive] = useState(false);
  if (modalContactAvtive) {
    document.body.style.overflowY = 'hidden';
  }else{
    document.body.style.overflowY = 'scroll';
  }
  /////////////


  const defaultPic = "./app/pictures/pic/petsitter_avatar2.jpg"
  count++;
  return (
    <div key={count} className={`sitterProfileDiv  ${extraClassWidth ? extraClassWidth : ""}`}>
      <div className={`sitterProfileDiv_div1 ${extraClassWidth ? extraClassWidth : ""}`}>
        <div style={{
            width: "72px",
            height: "100px",
            borderRadius: "10px",
            background: `url(${sitterObj.picture ? sitterObj.picture : defaultPic}) no-repeat`,
            backgroundPosition: "center", backgroundSize: "cover"
          }} />
        <div className="sitterProfileDiv_div1_div2">
          <p className="sitterNameText">{`${sitterObj.firstName} ${sitterObj.lastName}`}</p>
          <div className="starRaiting"><img className="starRaitingImg" src="./app/pictures/icons/09_raiting_start.png" /> <p>{Number.isInteger(sitterObj.rating) ? `${sitterObj.rating}.0` : `${sitterObj.rating}`}</p><p>{sitterObj.title}</p></div>
          <p className="petsitterPriceText">{`${sitterObj.price} ${sitterObj.priceTitle}`}</p>
          <p>{`г. ${sitterObj.city} ${
            sitterObj.cityArea ? `(${sitterObj.cityArea})` : ""
          }`}</p>
        </div>
      </div>
        <div className="sitterProfileDiv_div2">
          <SittersAbilityIcons options={sitterCan} iconsLinks={iconsLinksOpt}  sitterObject={sitterObj} classN="sitterProfileDiv_sitterCanDiv" />
          <p className={`sitterDescription_header ${extraClassWidth ? extraClassWidth : ""}`}>{sitterObj.aboutSitter}</p>
          <p className={`sitterDescription ${extraClassWidth ? extraClassWidth : ""}`}>{sitterObj.description}</p>
        </div>
        <div className={`sitterProfileDiv_div3 ${extraClassWidth ? extraClassWidth : ""}`}>
          <Button
            classN={`btn ${extraClassBtnWidth}`}
            onClickFunct={() => setModalActive(true)}
            btnText="Профиль"
        />
          <Modal active={modalAvtive} setActive={setModalActive}> 
        <SitterFullProfile  sitterObj={sitterObj} iconsLinksOpt={iconsLinksOpt} sitterCan={sitterCan} extraClassWidth={extraClassWidth} extraClassBtnWidth={extraClassBtnWidth} phone={phone} />
      </Modal>
          <Button
          classN={`btn ${extraClassBtnWidth}`}
            onClickFunct={() => setModalContactActive(true)}
            btnText="Связаться"
        />
        <Modal active={modalContactAvtive} setActive={setModalContactActive}>
        <WillContactYouWindow phone={phone}/>
        </Modal>
        </div>
     
    </div>
  );
}
