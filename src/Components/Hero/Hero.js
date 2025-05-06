import React from "react";
import "./Hero.css";
import profile_1 from "../images/profile_1.png";
import Resume from "../Resume/Resume.pdf";
import Certificate from "../Certificate/java_Certifcate.pdf";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-left">
        <h1 className="animate">
          Hello, I am Vignesh <span> Java Developer</span>
        </h1>
        <p>
          I am a <b>aspiring Java Developer</b> from India, I am also a fresher
        </p>
        <div className="hero-action">
          <a href={Resume} target="_blank" rel="noreferrer">
            <div className="hero-resume">My Resume</div>
          </a>
          <a href={Certificate} target="_blank" rel="noreferrer">
        <div className="hero-connect">My Certification</div>
        </a>
        </div>
      </div>
      <div className="hero-right">
        <img src={profile_1} alt="Profile" className="animate" />
      </div>
    </div>
  );
}

export default Hero;
