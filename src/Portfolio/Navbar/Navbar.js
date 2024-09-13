import React from "react";
import "./Navbar.css";
import { MdAddCall, MdOutlineMailLock } from "react-icons/md";

export const Navbar = () => {
  return (
    <div id="navbar">
      <div className="contact">
        <div>
          <MdOutlineMailLock size={30}  />
          <h3>nizarzahmouli01@gmail.com</h3>
        </div>
        <div>
          <MdAddCall size={30} />
          <h3>+216 52368662</h3>
        </div>
      </div>
      <div className="vertical-navbar">
        <div>
          <a href="/">
            <h3 className="siteName">
              Nizar<b>DEVS</b>
            </h3>
          </a>
        </div>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#home">
                <li></li>
              </a>
              <a href="#skills">
                <li>Skills</li>
              </a>
              <a href="#Experience">
                <li>Experiences</li>
              </a>
              <a href="#Projects">
                <li>Projects</li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
      <nav className="horizontal-navbar">
        <div>
          <a href="/">
            <h3 className="siteName">
              Nizar<b>DEVS</b>
            </h3>
          </a>
        </div>

        <ul>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#Experience">
            <li>Experiences</li>
          </a>
          <a href="#Projects">
            <li>Projects</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export const Scroll = () => {
  return (
    <div className="profile-navbar">
      <div id="scroll">
        <div id="track">
          <div id="thumb" style={{ marginTop: "0px;" }}></div>
        </div>
        <ul>
          <a href="#navbar">
            <li>Start</li>
          </a>
          <a href="#skills">
            <li>01</li>
          </a>
          <a href="#Experience">
            <li>02</li>
          </a>
          <a href="#Projects">
            <li>03</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
