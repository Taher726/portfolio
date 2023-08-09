import React from "react";
import "./header.css";
import ME from "../../assets/me.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

export default function header(){
    return(
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Taher Chaltout</h1>
                <div className="text-light">Fullstack Web & Mobile Developer</div>
                <CTA/>
                <div className="me">
                    <img src={ME} alt="ME"/>
                </div>
                <a href="#contact" className="scrollDown">
                    Scroll Down
                </a>
                <HeaderSocials/>
            </div>
        </header>
    );
}