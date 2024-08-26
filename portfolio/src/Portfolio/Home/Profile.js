import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";
import { Footer } from "./Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
const Profile = () => {
  return (
    <div className="profile-container " id="home">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/zahmouli.nizar.3/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/nizarzahmouli/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/zahmouli-nizar/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          {/*  */}
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M{" "}
              <span className="highlighted-text"> Nizar Zahmouli</span>
            </span>
          </div>
          {/*  */}
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Full Stack Developer 🖥🖥",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "MERN Stack Developer 🖥🖥",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "WordPress integrator 🌐🌐",
                    1000,
                    "UX/UI Designer 🎨🎨 ",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "0.8em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                knack of buildings applications with front and back operations
              </span>
            </span>
          </div>
          {/*  */}
          <div className="profile-options">
            <button className="btns primary-btns">Hire Me</button>

            <a href="" download="nizar-zahmouli/fullstack developer.pdf">
              <button className="btns highlighted-btns"> Get Resume </button>
            </a>
          </div>{" "}
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

