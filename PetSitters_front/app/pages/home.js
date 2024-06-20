import React from "react";
import FindSitter from "../components/00_01_findSitter_main_page/index.jsx"; 
import WhyChooseUs from "../components/00_02_whyChooseUs_main_page/index.jsx";
import HowPetsittersWork from "../components/00_03_HowPetsittersWork_main_page/index.jsx";
import OurSitters from "../components/00_04_ourSitters_main_page/index.jsx"; 
import FindPerfectSitter from "../components/00_05_find_perfectSitter_main_page/index.jsx"; 
import GetToKnowOurSitters from "../components/00_06_getToKnowOurSitters_main_page/index.jsx"; 

import Header from "../components/header/index.jsx"; 
import Footer from "../components/footer/index.jsx"; 


export default function Main() {

    return (
        <div className="main_page">
            <div className="header">
                <Header />
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
                <OurSitters />
                </div>

                <div className="div5">
                    <FindPerfectSitter />
                </div>

                <div className="div6">
                    <GetToKnowOurSitters />
                </div>
            </div>

            <div className="footer">
            <Footer />
            </div>
        </div>
    )
}