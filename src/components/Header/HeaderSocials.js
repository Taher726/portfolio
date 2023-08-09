import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

export default function HeaderSocials(){
    return(
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/chaltout-taher-a2a144226/" target="_blank">
                <BsLinkedin/>
            </a>
            <a href="https://github.com/Taher726" target="_blank">
                <FaGithub/>
            </a>
            <a href="https://www.youtube.com/channel/UCPSXnOyn4SbHeBaCELaV1IA" alt="" target="_blank">
                <BsYoutube/>
            </a>
        </div>
    );
}