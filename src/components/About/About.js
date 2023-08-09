import React from "react";
import ME from "../../assets/me2.jpg";
import { ImPointRight } from "react-icons/im";
import "./about.css";

export default function About(){
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me__img">
                        <img src={ME} alt="me"/>
                    </div>
                </div>
                <div className="about__content">
                    <p>Hi everyone, I'm <span className="colored_blue">Taher Chaltout</span> from <span className="colored_blue">Sfax, Tunisia</span>.<hr/>
                        I am a final year computer science student in Faculty of Sciences of Sfax.<hr/>
                        While my roots are in computer science, my branches have extended into the captivating domains of web development, mobile app creation, and game design.<hr/>
                        Beyond the lines of code, I find joy in<hr/>
                        <ul>
                            <li><ImPointRight/> Watching Football</li>
                            <li><ImPointRight/> Playing Football</li>
                            <li><ImPointRight/> Playing VideoGames</li>
                        </ul>    
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}