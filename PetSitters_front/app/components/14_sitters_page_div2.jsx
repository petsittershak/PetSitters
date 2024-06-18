import React, { useState } from "react";
import Form from "./01_client_form_sitters_page.jsx";


//функция вызывает форму дублирующую форму на первой странице 
export default function CreateFormSittersPage() {

  function handleFormSubmit(e) {
    ///
  }

  return (
    <Form classN='client_form_sitters_page' onSubmitFunc={handleFormSubmit}/>
  )
}