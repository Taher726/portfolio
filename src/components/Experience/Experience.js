import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";  
import { SiGithub } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience(){
    return( 
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>Here are some of my skills on which I have been working on for the past 2 years.</h2>
            <div className="container experience__container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience__details">
                            <AiFillHtml5 className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaCss3Alt className="experience__details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <DiJavascript1 className="experience__details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <DiReact className="experience__details-icon"/>
                            <div>
                                <h4>React JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaBootstrap className="experience__details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Material UI</h4>
                                <small className="text-light">Begginer</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiFlutter className="experience__details-icon"/>
                            <div>
                                <h4>Flutter</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience__details">
                            <DiNodejs className="experience__details-icon"/>
                            <div>
                                <h4>NodeJs</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiMysql className="experience__details-icon"/>
                            <div>
                                <h4>SQL/MySQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaPhp className="experience__details-icon"/>
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiDjango className="experience__details-icon"/>
                            <div>
                                <h4>Django</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiFlask className="experience__details-icon"/>
                            <div>
                                <h4>Flask</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Asp.net</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaJava className="experience__details-icon"/>
                            <div>
                                <h4>JEE</h4>
                                <small className="text-light">Begginer</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__android">
                    <h3>Mobile Development</h3>
                    <div className="experience_content">
                        <article className="experience__details">
                            <SiAndroidstudio className="experience__details-icon"/>
                            <div>
                                <h4>Android Studio</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiFlutter className="experience__details-icon"/>
                            <div>
                                <h4>Flutter</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__android">
                    <h3>Others</h3>
                    <div className="experience_content">
                        <article className="experience__details">
                            <SiGithub className="experience__details-icon"/>
                            <div>
                                <h4>Github</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Netlify</h4>
                                <small className="text-light">Begginer</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiVisualstudiocode className="experience__details-icon"/>
                            <div>
                                <h4>VS Code</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiVisualstudio className="experience__details-icon"/>
                            <div>
                                <h4>VS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiPostman className="experience__details-icon"/>
                            <div>
                                <h4>Postman</h4>
                                <small className="text-light">Begginer</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>C# / C</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiPython className="experience__details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaJava className="experience__details-icon"/>
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}