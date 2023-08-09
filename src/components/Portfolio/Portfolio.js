import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/movie-me.png";

const data = [
    {
      id: 1,
      image: IMG6,
      title: "Movie App",
      github: "https://github.com/Taher726/Html-Css-Javascript/tree/main/movie%20app",
      demo: "https://taher-movie-me.netlify.app/"
    },
    {
      id: 2,
      image: IMG2,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "https://github.com/inextdeve",
      demo: "https://inext.dev"
    },
    {
      id: 3,
      image: IMG3,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "https://github.com/inextdeve",
      demo: "https://inext.dev"
    },
    {
      id: 4,
      image: IMG4,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "https://github.com/inextdeve",
      demo: "https://inext.dev"
    },
    {
      id: 5,
      image: IMG5,
      title: "Crypto Currency Dashboard & Financial Visualization",
      github: "https://github.com/inextdeve",
      demo: "https://inext.dev"
    },
    {
      id: 6,
      image: IMG1,
      title: "CryptCurrency Dashboard & Financial Visualization",
      github: "https://github.com/inextdeve",
      demo: "https://inext.dev"
    }
  ];

export default function Portfolio(){
    return(
        <section id="portfolio">
            <h5>Portfolio</h5>
            <h2>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo})=>{
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item_image">
                                    <img src={image} alt=""/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item_cta">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}