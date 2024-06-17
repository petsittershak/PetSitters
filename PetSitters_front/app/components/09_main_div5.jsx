import React, { useState } from "react";
import CreateButton from "./03_button_all.jsx";
import Form from "./01_client_form.jsx";
import Modal from "./01_modal.jsx";



export default function CreateFindPerfectSitter() {





////// работа модального окна, стейти передаются модальному окну для изменения
  const [modalAvtive, setModalActive] = useState(false);
  if (modalAvtive) {
    document.body.style.overflowY = 'hidden';
  }else{
    document.body.style.overflowY = 'scroll';
  }
  ////// работа модального окна 

  return (
    <div className="findPetsittersContent">
      <h1>Подберите идеального sitter</h1>
      <div className="findPetsittersContent_div2">
        <h2>Ответьте на несколько простых вопросов и мы предложим sitters подходящих по вашим потребностям</h2>
        <CreateButton classN="btn fill_form_btn" onClickFunct={() => setModalActive(true)} btnText="Заполнить анкету" />
      </div>
      <Modal active={modalAvtive} setActive={setModalActive} childrenClass="client_form_div"> 
        <Form classN="client_form"/>
        </Modal>
    </div>
  )
}

