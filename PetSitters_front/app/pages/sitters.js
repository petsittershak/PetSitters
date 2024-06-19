import React, { Component } from "react";
import Header from "../components/header/index.jsx";
import Footer from "../components/footer/index.jsx";
import OurSitters from "../components/11_01_ourSitters_sitters_page/index.jsx";
import FormDivSittersPage from "../components/11_02_formDiv_sitters_page/index.jsx";
import FoundSitters from "../components/11_03_foundSittersForYou_sitters_page/index.jsx";



export default function Sitters() {
  return (
    <div className="sitters_page">
      <div className="header">
        <Header />
      </div>

      <div className="main_content_sitters">

        <div className="div_sitters_1">
          <OurSitters />
        </div>

        <div className="div_sitters_2">
          <FormDivSittersPage />
        </div>
              
        <div className="div_sitters_3">
          <FoundSitters />
        </div>
        
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
