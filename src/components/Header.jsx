import React from "react";
import Navbar from "./Navbar";

function Header(){
    return (
        <div id="main">
            <Navbar/>
            <div className="name">
                <h1>It's a <span>ReactJS</span> Website</h1>
                <p className="details">This is the place where you have to reign</p>
                <div className="header-btns">
                    <a href="#" className="cv-btn">Code</a>
                    <a href="#" className="cv-btn1">Download App</a>
                </div>
            </div>
            <div className="arrow"></div>
        </div>
    );
}
export default Header;