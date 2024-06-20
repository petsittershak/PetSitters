import React, { useState } from "react";
import Form from "../11_02_form_sitters_page/index.jsx";


//функция вызывает форму дублирующую форму на первой странице 
export default function FormDivSittersPage() {

  function handleFormSubmit(e) {
    e.preventDefault();
    ///
  }

  return (
    <Form classN='client_form_sitters_page' onSubmitFunc={handleFormSubmit}/>
  )
}