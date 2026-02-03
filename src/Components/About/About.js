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
  I'm a motivated and detail-oriented <b>Java Full Stack Developer</b> with <b>3 months</b> of
  hands-on experience gained through real-time CRM project in <b>Voyage Software Technologies</b> and professional
  training at <b>Besant Technologies</b>. I have a strong working knowledge of
  <b> HTML, CSS, JavaScript, React, Java, Spring Boot, and MySQL</b>, and I enjoy
  building scalable, secure, and user-friendly web applications that solve
  real-world problems.
</p>

<p className="animate">
  I have recently graduated with a <b>Bachelor of Computer Applications (BCA)</b>.
  During my learning journey, I worked on multiple projects involving REST API
  development, database design, authentication using JWT, and responsive UI
  creation. These experiences helped me understand the complete application
  lifecycle—from requirement analysis to deployment-ready solutions.
</p>

<p className="animate">
  On the backend, I am comfortable designing clean architectures using Spring
  Boot, implementing role-based access control, handling validations, and
  managing data persistence with MySQL. On the frontend, I focus on creating
  intuitive user experiences using React, reusable components, and modern UI
  practices.
</p>

<p className="animate">
  As a fresher, I bring a strong learning mindset, discipline, and a proactive
  approach to problem-solving. I enjoy debugging, improving existing features,
  and continuously upgrading my technical skills by building projects and
  exploring best practices.
</p>

<p className="animate">
  I’m looking for an opportunity where I can contribute meaningfully to a
  development team, learn from experienced professionals, and grow into a
  reliable full stack developer while delivering high-quality software
  solutions.
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
    <h1 className="project-heading">Projects</h1>
      <section id="projects">
  <div className="project-card" onClick={() => window.open('https://vignesh271-28.github.io/E-Commerce-Website-Baking-WebApplication-/', '_blank')}>
    <div className="card-inner">
      <div className="card-front">
        <h3>E-Commerce Website</h3>
        <p>This is a Full Stack Web Application. Using this order item, view the ordered items and the every user is authenticated via Spring JWT. <br></br>
          Technologies : Java, Springboot, React, MySQL, Spring Security.

        </p>
      </div>
      <div className="card-back">
         <h1>Click to view</h1>
      </div>
    </div>
    
  </div>

   <div className="project-card">
    <div className="card-inner">
      <div className="card-front">
        <h3>SHIP CRM Application</h3>
        <h3>Voyage Software Technologies</h3>
        <p>SHIP CRM is a web-based Customer Relationship Management system designed to manage customer data and streamline business operations.
          This project gave me real-time experience in full stack development, bug fixing based on requirements, new requirements and working with production-like workflows.

        </p>
      </div>
      <div className="card-back">
         <h1 style={{textAlign:'center'}}>3 Months</h1>
      </div>
    </div>
    
  </div>
</section>

    </div>
  );
}

export default About;
