import React from "react";
import { Scroll } from "../Navbar/Navbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css";
import shapeImg from "../../assets/image/sphere.png";
import { Card } from "./Card";
export const Skill = () => {
  //  *********************
  // ****************
  return (
    <div id="skills" className="skills">
      {/*  Soft Skills */}

      <section className="skill">
        <div className="skill-title">
          <img src={shapeImg} alt="Skill img" />
          <h2>Skills</h2>
        </div>
        <div>
          <Card />
        </div>
      </section>
      {/*  Technologies */}
      <section>
        <div>
          <img src={shapeImg} alt="Skill img" />

          <h2>Technologies</h2>
        </div>
        <div className="progress-tech">
          <div className="technology">
            <div className="tech-label "> HTML/CSS</div>
            <div className="progress w-75 " style={{ height: "20px" }}>
              <div
                class="progress-bar   rounded-right"
                role="progressbar"
                style={{
                  width: "90%",
                  backgroundColor: "#2a2344",
                  border: "1px solid #fff",
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
          </div>
          <div className="technology">
            <div className="tech-label"> Javascript </div>
            <div className="progress w-75" style={{ height: "20px" }}>
              <div
                class="progress-bar  rounded-right"
                role="progressbar"
                style={{
                  width: "65%",
                  backgroundColor: "#2a2344",
                  border: "1px solid #fff",
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>
          </div>
          <div className="technology">
            <div className="tech-label"> React.js </div>
            <div className="progress w-75" style={{ height: "20px" }}>
              <div
                class="progress-bar  rounded-right"
                role="progressbar"
                style={{
                  width: "75%",
                  backgroundColor: "#2a2344",
                  border: "1px solid #fff",
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {" "}
                75%{" "}
              </div>
            </div>
          </div>
          <div className="technology">
            <div className="tech-label"> MongoDB </div>
            <div className="progress w-75" style={{ height: "20px" }}>
              <div
                class="progress-bar  rounded-right"
                role="progressbar"
                style={{
                  width: "65%",
                  backgroundColor: "#2a2344",
                  border: "1px solid #fff",
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>
          </div>
          {/*  ***********  */}
          <div className="technology">
            <div className="tech-label"> Node js </div>
            <div className="progress w-75" style={{ height: "20px" }}>
              <div
                class="progress-bar  rounded-right"
                role="progressbar"
                style={{
                  width: "65%",
                  backgroundColor: "#2a2344",
                  border: "1px solid #fff",
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>
          </div>
          {/*  ***********  */}
          <div className="technology">
            <div className="tech-label"> Express js </div>
            <div className="progress w-75" style={{ height: "20px" }}>
              <div
                class="progress-bar  rounded-right"
                role="progressbar"
                style={{
                  width: "65%",
                  backgroundColor: "#2a2344",
                  border: "1px solid #fff",
                }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>
          </div>
          {/*  ***********  */}   
        </div>
      </section>
      <Scroll />
    </div>
  );
};
