import React, { useState } from "react";
import CreateButton from "./03_button_all.jsx";
import CreatSitterFullProfile from "./12_sitter_data_fullProfile.jsx";
import Modal from "./01_modal.jsx"; //{active, setActive, children, childrenClass}
import CreateAbilityDiv from "./12_sitter_data_ability_icons.jsx";
///функция которая грузит картинки умений ситтера к их профайлам


 /// переменная count используется для согдания ключа списка в функции CreateSitterInfoBlock
let count = 523;
//функция получая параменты и объект ситтера создает профайл ситтера
export default function CreateSitterInfoBlock({ sitterObj, iconsLinksOpt, sitterCan, extraClassWidth, extraClassBtnWidth }) {

  /////////// modal functioning
  const [modalAvtive, setModalActive] = useState(false);
  if (modalAvtive) {
    document.body.style.overflowY = 'hidden';
  }else{
    document.body.style.overflowY = 'scroll';
  }
//////////////


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
          <CreateAbilityDiv options={sitterCan} iconsLinks={iconsLinksOpt}  sitterObject={sitterObj} classN="sitterProfileDiv_sitterCanDiv" />
          <p className={`sitterDescription_header ${extraClassWidth ? extraClassWidth : ""}`}>{sitterObj.aboutSitter}</p>
          <p className={`sitterDescription ${extraClassWidth ? extraClassWidth : ""}`}>{sitterObj.description}</p>
        </div>
        <div className={`sitterProfileDiv_div3 ${extraClassWidth ? extraClassWidth : ""}`}>
          <CreateButton
            classN={`btn ${extraClassBtnWidth}`}
            onClickFunct={() => setModalActive(true)}
            btnText="Профиль"
          />
          <CreateButton
          classN={`btn ${extraClassBtnWidth}`}
            onClickFunct={() => {}}
            btnText="Связаться"
          />
        </div>
        <Modal active={modalAvtive} setActive={setModalActive} childrenClass="sitterModal_block"> 
        <CreatSitterFullProfile classN="" sitterObj={sitterObj} iconsLinksOpt={iconsLinksOpt} sitterCan={sitterCan} extraClassWidth={extraClassWidth} extraClassBtnWidth={extraClassBtnWidth} />
        </Modal>
    </div>
  );
}
