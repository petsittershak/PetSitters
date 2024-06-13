import React, { Component } from "react";
import CreateHeader from "../components/00_1_main_header.jsx";
import CreateFooter from "../components/11_footer.jsx";
import CreateOurSitters from "../components/13_sitters_page_div1.jsx";
import CreateFormSittersPage from "../components/14_sitters_page_div2.jsx";
import CreateSuggestSitters from "../components/15_sitters_page_div3.jsx";



export default function Sitters() {
  return (
    <div className="sitters_page">
      <div className="header">
        <CreateHeader />
      </div>

      <div className="main_content_sitters">

        <div className="div_sitters_1">
          <CreateOurSitters />
        </div>

        <div className="div_sitters_2">
          <CreateFormSittersPage />
        </div>
              
        <div className="div_sitters_3">
          <CreateSuggestSitters />
        </div>
        
      </div>

      <div className="footer">
        <CreateFooter />
      </div>
    </div>
  );
}
