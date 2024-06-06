import ReactDOM from "react-dom/client";
import React from "react";
import  Header  from "./components/header.jsx";
import Form from "./components/client_form.jsx"
  
const header = "Рассказ";

  
ReactDOM.createRoot(
    document.getElementById("form_div")
)
.render(
    <div>
        <Form />
    </div>
);

