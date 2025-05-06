import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Popup";

function Contact() {
  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a76585f5-49db-424a-a4c6-607c29ec2d5b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setPopup({
          show: true,
          message: "Thanks for reaching out!",
          type: "success",
        });
        event.target.reset();
      } else {
        throw new Error("Submission failed!");
      }
    } catch (error) {
      setPopup({
        show: true,
        message: "Oops! Something went wrong. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="contact" id="contact">
      {popup.show && (
        <popup
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup({ ...popup, show: false })}
        />
      )}

      <div className="contact-title">
        <h1 className="animate">Contact</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1 className="animate">Let's talk</h1>
          <p className="animate">
            I am available for immediate joining and eager to contribute to a
            dynamic development team.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon icon={faEnvelope} className="animate" />
              <p className="animate">iamvigneshofficial@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faLinkedin} className="animate" />
              <a
                href="https://www.linkedin.com/in/vignesh-r-82977b293/"
                className="animate"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="contact-detail">
              <FontAwesomeIcon icon={faPhone} className="animate" />
              <p className="animate">+91 7339063939</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faLocationDot} className="animate" />
              <a
                href="https://www.google.com/maps/place/Thoraipakkam,+Tamil+Nadu/@12.9371077,80.1974466,13.87z/data=!4m6!3m5!1s0x3a525cfbde1d0251:0xcafd9a078a3c9270!8m2!3d12.9416037!4d80.2362096!16s%2Fm%2F0287fjs?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="animate"
              >
                Thoraipakkam, Chennai, Tamil Nadu - 600096{" "}
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label className="animate">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="animate"
            required
          />
          <label className="animate">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="animate"
            required
          />
          <label className="animate">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
