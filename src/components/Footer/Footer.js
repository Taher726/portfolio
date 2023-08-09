import React from "react";
import "./footer.css";
import {
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoYoutube
  } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return(
        <footer>
            <a href="#" className="footer__logo">
                Taher Chaltout
            </a>
            <ul className="links">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/taher.chaltout.9/" target="_blank">
                    <IoLogoFacebook/>
                </a>
                <a href="https://www.youtube.com/channel/UCPSXnOyn4SbHeBaCELaV1IA" target="_blank">
                    <IoLogoYoutube/>
                </a>
                <a href="https://www.linkedin.com/in/chaltout-taher-a2a144226/" target="_blank">
                    <BsLinkedin/>
                </a>
                <a href="https://github.com/Taher726" target="_blank">
                    <FaGithub/>
                </a>
            </div>
            <div className="footer__copyright">
                <small>Made By Taher Chaltout &#10084;. All rights reserved &copy;</small>
            </div>
        </footer>
    );
}