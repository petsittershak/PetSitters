import ReactDOM from "react-dom/client";
import React from "react";
// import  Header  from "./components/header.jsx";
import Form from "./components/01_client_form.jsx"
import CreateButton from "./components/03_button_all.jsx"
import HowPetsittersWork from "./components/04_main_div3.jsx"
import  WhyChooseUs from  "./components/06_main_div2.jsx"
  

ReactDOM.createRoot(
    document.getElementById("form_div")
)
.render(
    <div className="form_background" >
        <Form />
    </div>
);


ReactDOM.createRoot(
    document.getElementById("div3")
)
.render(
    <div >
        <HowPetsittersWork />
    </div>
);

ReactDOM.createRoot(
    document.getElementById("div2")
)
.render(
    <div >
        <WhyChooseUs />
    </div>
);

// ReactDOM.createRoot(
//     document.getElementById("div5")
// )
// .render(

//         <CreateButton />
   
// );

