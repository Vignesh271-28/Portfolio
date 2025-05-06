import React, { useRef, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      {/* <div className='logo'>VIGNESH</div> */}
      <FontAwesomeIcon className="menu-btn" icon={faBars} onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <FontAwesomeIcon
          className="close-btn"
          icon={faXmark}
          onClick={closeMenu}
        />

        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>Skills</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <AnchorLink className="anchor-link" href="#contact" offset={50}>
        <div className="nav-connect" onClick={() => setMenu("contact")}>
          Connect with me
        </div>
      </AnchorLink>
    </div>
  );
}

export default Navbar;
