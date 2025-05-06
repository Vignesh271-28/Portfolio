import React from "react";
import "./About.css";
import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/javascript.png";
import reactLogo from "../images/react.png";
import javaLogo from "../images/java.png";
import springLogo from "../images/springboot.png";
import mysqlLogo from "../images/mysql.png";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About</h1>
        <img src="" alt="" />
      </div>
      <div className="about-section">
        <div className="about-right">
          <div className="about-para">
            <p className="animate">
              I'm a passionate and dedicated <b>Java Full Stack Developer</b>, recently
              trained at <b>Besant Technologies</b>. With a strong foundation in <b>HTML,
              CSS, JavaScript, React, Java, Spring Boot, and MySQL</b>, I’m eager to
              apply my skills in real-world projects and contribute to dynamic
              development teams.
            </p>
            <p className="animate">
              I have recently graduated with a degree in <b>Bachelor of Computer Application</b>.
              My journey into web development began with a deep curiosity for
              creating user-friendly, visually engaging applications.
              
            </p>
            <p className="animate">
              As a fresher, I bring fresh ideas, a strong work ethic, and a
              hunger to grow. I’m not just looking for a job—I’m looking for an
              opportunity to add value, collaborate with great minds, and grow
              with the company I work for.
            </p>
          </div>
          <div className="about-languages">
            <h2 className="animate">Languages & Technologies</h2>
            <div className="language-logos animate">
            <div className="language">
                <img src={javaLogo} alt="Java" />
                <p>Java</p>
              </div>
              <div className="language">
                <img src={springLogo} alt="Spring Boot" />
                <p>Spring Boot</p>
              </div>
              <div className="language">
                <img src={reactLogo} alt="React JS" />
                <p>React JS</p>
              </div>
              <div className="language">
                <img src={htmlLogo} alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="language">
                <img src={cssLogo} alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="language">
                <img src={jsLogo} alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="language">
                <img src={mysqlLogo} alt="MySQL" />
                <p>MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements" id="projects">
        <div className="about-achievement">
          <h1 className="animate">Java Full Stack Course</h1>
          <p className="animate">at Besant Technology</p>
        </div>
        <div className="about-achievement">
          <h1 className="animate">3+</h1>
          <p className="animate">Projects completed</p>
        </div>
        <div className="about-achievement">
          <h1 className="animate">9+</h1>
          <p className="animate">Mini projects completed</p>
        </div>
      </div>
    </div>
  );
}

export default About;
