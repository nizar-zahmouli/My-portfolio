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
    <div id="skills">
      {/*  Soft Skills */}

      <section className="Skill">
        <div>
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
        <div className="w-75 d-flex m-auto  justify-content-center align-content-center flex-column p-3 gap-5 progress-tech">
          <div className="d-flex w-100 justify-content-between gap-5 align-items-center ">
            <div
              className="text-white w-25 "
              style={{
                color: "#fff",
                fontFamily: "DM Sans",
                fontSize: "36px",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {" "}
              HTML / CSS
            </div>
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
          <div className="d-flex w-100 justify-content-between gap-5 align-items-center">
            <div
              className="text-white w-25"
              style={{
                color: "#fff",
                fontFamily: "DM Sans",
                fontSize: "36px",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {" "}
              Javascript{" "}
            </div>
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
          <div className="d-flex w-100 justify-content-between gap-5 align-items-center ">
            <div
              className="text-white w-25"
              style={{
                color: "#fff",
                fontFamily: "DM Sans",
                fontSize: "36px",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {" "}
              React.js{" "}
            </div>
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
          <div className="d-flex w-100 justify-content-between gap-5 align-items-center ">
            <div
              className="text-white w-25"
              style={{
                color: "#fff",
                fontFamily: "DM Sans",
                fontSize: "36px",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {" "}
              MongoDB{" "}
            </div>
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
          <div className="d-flex w-100 justify-content-between gap-5 align-items-center ">
            <div
              className="text-white w-25"
              style={{
                color: "#fff",
                fontFamily: "DM Sans",
                fontSize: "36px",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {" "}
              MongoDB{" "}
            </div>
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
          <div className="d-flex w-100 justify-content-between gap-5 align-items-center ">
            <div
              className="text-white w-25"
              style={{
                color: "#fff",
                fontFamily: "DM Sans",
                fontSize: "36px",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {" "}
              MongoDB{" "}
            </div>
            <div className="progress w-75" style={{ height: "20px" }}>
              <div
                class="progress-bar  rounded-right"
                role="progressbar"
                style={{
                  width: "65%",
                  backgroundColor: "#2a2344"  , border :"1px solid #fff"
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
          <div className="d-flex w-100 justify-content-between gap-5 align-items-center ">
            <div
              className="text-white w-25"
              style={{
                color: "#fff",
                fontFamily: "DM Sans",
                fontSize: "36px",
                fontWeight: 400,
                margin: 0,
              }}
            >
              {" "}
              MongoDB{" "}
            </div>
            <div className="progress w-75" style={{ height: "20px" }}>
              <div
                class="progress-bar  rounded-right"
                role="progressbar"
                style={{
                  width: "65%",
                 backgroundColor: "#2a2344"  , border :"1px solid #fff"
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
