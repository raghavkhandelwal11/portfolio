import React from "react";
import "../../App.css";
import html from "../../Resources/html-5.png";
import css from "../../Resources/css.png";
import js from "../../Resources/java-script.png";
import rc from "../../Resources/react-img.png";
import bt from "../../Resources/bootstrap-img.png";
import sql from "../../Resources/sql-server.png";
import pj1 from "../../Resources/DigitalClock.png";
import pj2 from "../../Resources/quickStock.png";
import pj3 from "../../Resources/siren.png";
import pj4 from "../../Resources/resume.png";
import pj5 from "../../Resources/kinet.png";
import pj6 from "../../Resources/ToDoList.png";
import Resume from "../Resume/Resume";
import People from "../People/People";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import bg from "../../Resources/banner-guy.png";
import toko from "../../Resources/toko.png";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="main">
      <div className="page-top">
        <div className="page-top-content">
          <h1 className="saffron">Hi, I am Raghav Khandelwal</h1>
          <h1 className="white">A Full-Stack Developer</h1>

          <p className="page-content-p">Get ready to turn ideas into reality</p>
          <div className="page-top-btn-flex">
            <div>
              <button className="btn btn-info text-white">
                <Link className="fix-01 text-white" to="#about-me-id">
                  Hire Me
                </Link>
              </button>
            </div>
            <div>
              <button className="btn btn-warning text-white"><a href="https://raghavkhandelwal11.github.io/Resume/#" style={{textDecoration: 'none', color: "white"}} target="_blank" rel="noopener noreferrer">Get Resume</a></button>
            </div>
          </div>
        </div>
        <div className="page-top-image">
          <img className="pit" src={bg} alt="" />
        </div>

        <div className="wave"></div>
      </div>

      <div className="about-me" id="about-me-id">
        <div className="about-me-img"></div>
        <div className="about-me-content">
          <h2>About me</h2>
          <hr className="horizontal" />
          <p>
            I'm a web designer and full-stack developer with 7 years of
            professional experience. I'm interested in all kinds of visual
            communication, but my major focus is on creating a more simple,
            functional and interactive web applications. I also have skills in
            other field like branding, icon design.
          </p>

          <p>
            I enjoy turning complex prolems into simple elegant intuitive
            designs. When I'm not pushing pixels, you'll find me reading,
            playing or listening music
          </p>

          <div className="technology">
            Language/Library/Technology
            <div className="tools">
              <div>
                <img className="tools-icon" src={html} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={css} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={js} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={rc} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={bt} alt="" />
              </div>
              <div>
                <img className="tools-icon" src={sql} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio" id="portfolio-id">
        <h2>My Portfolio</h2>
        <hr className="portfolio-hr" />
        <div className="portfolio-grid">
          <div>
            <a href="https://raghavkhandelwal11.github.io/JS_projects/Digital_Clock/" target="_blank">
            <img className="portfolio-grid-item" src={pj1} alt="" />
            </a>
          </div>
          <div>
            <a href="https://courageous-bublanina-c8f93d.netlify.app/" target="_blank"><img className="portfolio-grid-item" src={toko} alt="" /></a>
          </div>
          <div>
            <a href="https://lastmarch.netlify.app/" target="_blank"><img className="portfolio-grid-item" src={pj3} alt="" /></a>
            
          </div>
          <div>
            <a href="https://raghavkhandelwal11.github.io/Resume/#" target="_blank"><img className="portfolio-grid-item" src={pj4} alt="" /></a>
          </div>
          <div>
            <a href="https://kinet-21-11-2022.netlify.app/" target="_blank"><img className="portfolio-grid-item" src={pj5} alt="" /></a>
            
          </div>
          <div>
            <a href="https://raghavkhandelwal11.github.io/todoListApp/" target="_blank"><img className="portfolio-grid-item" src={pj6} alt="" /></a>
            
          </div>
        </div>
      </div>

      <Resume />

      <People />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
