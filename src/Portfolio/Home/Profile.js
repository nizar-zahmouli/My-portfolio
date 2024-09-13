import React from "react";
import { TypeAnimation } from "react-type-animation";
import resume  from "./ZAHMOULI NIZAR-Developpeur Full Stack.pdf"
import "./Profile.css"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  /*function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name; // <- name instead of 'name'
    link.href = uri;
    link.click();
    link.remove();
  }

  downloadURI("./ZAHMOULI NIZAR-Developpeur Full Stack.pdf", "nizar-zahmouli.pdf");*/
  
    /* const downloadPdf = async () => {
    const fileName = "ZAHMOULI NIZAR-Developpeur Full Stack.pdf";
    const blob = await pdf(<document />).toBlob();
    saveAs(blob, fileName);
  };

  */
  
  return (
    <div className="profile-container " id="home">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/zahmouli.nizar.3/">
                <FaFacebookSquare size={30} />
              </a>
              <a href="https://www.instagram.com/nizarzahmouli/">
                <FaInstagramSquare size={30} />
              </a>
              <a href="https://www.linkedin.com/in/zahmouli-nizar/">
                <FaLinkedin size={30} />
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
                    "Full Stack Developer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "MERN Stack Developer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "WordPress integrator",
                    1000,
                    "UX/UI Designer",
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

            <a href={resume} target="_blank"> 
            <button className="btns highlighted-btns">
  
              Get Resume
            </button>
             </a> 
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
