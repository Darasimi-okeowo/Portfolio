import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./logo.png";
function Nabar() {
  let [show, setShow] = useState(false);

  let handleSideNav = () => {
    let s = show;
    setShow(!s);
  };

  return (
    <div className="Navbar flex-2">
      <div className={`toggle-nav flex flex-column ${show && "showNav"}`}>
        <div className="flex-2 flex--icon">
          <img className="logo" src={Logo} alt="" />
          <h2 onClick={handleSideNav}>{}</h2>
        </div>
        <div className="flex flex-column flex--icon-2">
          <ul className="main-nav">
            <li>Why OKEMONEY?</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Projects worked on</li>
          </ul>
          <div className="button-grid">
            <button>About me</button>
          </div>
        </div>
      </div>
      <div className="flex-2 flex--2">
        <img className="logo" src={Logo} alt="" />
        <ul className="flex-2 desktop-nav">
          <li className="li--1">Why OKEMONEY?</li>
          <div className="why-hover">
            <ul>
              <li>Features</li>
              
            </ul>
          </div>
          <li className="li--2">Services</li>
          <ul className="solutions">
            <li>Remote Work</li>
            <li>Distance Learning</li>
            <li>IT</li>
          </ul>
          <li>Testimonials</li>
          <li>Projects worked on</li>
        </ul>
      </div>
      <div className="flex-2 contact desktop-nav">
      <button>Try for free</button>
      </div>
      <div className="nav-burger" onClick={handleSideNav}>
        <span className="iconz">&nbsp;</span>
      </div>
    </div>
  );
}

export default Nabar;
