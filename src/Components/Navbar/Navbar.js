import React, { useState } from "react";
import "./Navbar.css";
import logo from "./Logo.png";
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
          <img className="logo" src={logo} alt="" />
          <h2 onClick={handleSideNav}>{}</h2>
        </div>
        <div className="flex flex-column flex--icon-2">
          <ul className="main-nav">
            <li>Why Slack?</li>
            <li>Solution</li>
            <li>Resources</li>
            <li>Enterprise</li>
            <li>Pricing</li>
          </ul>
          <div className="button-grid">
            <button>Signin</button>
            <button>Download slack</button>
          </div>
        </div>
      </div>
      <div className="flex-2 flex--2">
        <img className="logo" src={logo} alt="" />
        <ul className="flex-2 desktop-nav">
          <li className="li--1">Why Slack?</li>
          <div className="why-hover">
            <ul>
              <li>Features</li>
              <li>How it replaces email</li>
              <li>Security</li>
              <li>Customers</li>
            </ul>
          </div>
          <li className="li--2">Solutions</li>
          <ul className="solutions">
            <li>Remote Work</li>
            <li>Distance Learning</li>
            <li>Engineering</li>
            <li>Sales</li>
            <li>IT</li>
            <li>Marketing</li>
            <li>Customer Support</li>
            <li>Human Resources</li>
            <li>Project Management</li>
            <li>Media</li>
          </ul>
          <li>Resources</li>
          <li>enterprises</li>
          <li>Pricing</li>
          <li></li>
        </ul>
      </div>
      <div className="flex-2 contact desktop-nav">
        <ul className="flex-2">
          <li>Contact sales</li>
          <li>Signin</li>
        </ul>
        {/* <button>Try for free</button> */}
      </div>
      <div className="nav-burger" onClick={handleSideNav}>
        <span className="iconz">&nbsp;</span>
      </div>
    </div>
  );
}

export default Nabar;
