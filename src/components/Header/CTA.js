import React from "react";
import CV from "../../assets/CV.pdf";

export default function CTA(){
    return(
        <div className="cta">
            <a className="btn" href={CV} download>
                Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
                Let's Talk
            </a>
        </div>
    );
}