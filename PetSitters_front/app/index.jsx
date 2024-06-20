import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

import Home from "./pages/home";
import Sitters from "./pages/sitters";


ReactDOM.createRoot(
    document.getElementById("main_page"))
    .render(
        <div>
            <Router>
             <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/sitters" element={<Sitters/>} />
             </Routes>
            </Router>
        </div>
);
    


