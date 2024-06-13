import ReactDOM from "react-dom/client";
import React from "react";
import Form from "./components/01_client_form.jsx";
import CreateButton from "./components/03_button_all.jsx";
import HowPetsittersWork from "./components/04_main_div3.jsx";
import WhyChooseUs from "./components/06_main_div2.jsx";
import FindSitter from "./components/07_main_div1.jsx";
import CreateHeader from "./components/00_1_main_header.jsx";
import CreateOurSitters from "./components/08_main_div4.jsx";
import CreateFindPerfectSitter from "./components/09_main_div5.jsx";
import CreateGetToKnowOurSitters from "./components/10_main_div6.jsx";
import CreateFooter from "./components/11_footer.jsx";


function CreateMainPageContent() {

    return (
        <div className="main_page">

            <div className="header">
                <CreateHeader />
            </div>

            <div className="main_content"> 

                <div className="div1">
                    <FindSitter />
                </div>

                <div className="div2" >
                    <WhyChooseUs />
                </div>

                <div className="div3" id="HowPetsittersWork">
                    <HowPetsittersWork />
                </div>

                <div className="div4">
                <CreateOurSitters />
                </div>

                <div className="div5">
                    <CreateFindPerfectSitter />
                </div>

                <div className="div6">
                    <CreateGetToKnowOurSitters />
                </div>
            </div>

            <div className="footer">
            <CreateFooter />
            </div>
        </div>
    )
}


ReactDOM.createRoot(
    document.getElementById("main_page"))
    .render(
        <div>
            <CreateMainPageContent />
        </div>
    );