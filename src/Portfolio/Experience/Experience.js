import React from "react";
import { Scroll } from "../Navbar/Navbar";
import shapeImg from "../../assets/image/sphere.png";
import "./experince.css";
import { FaCheck } from "react-icons/fa";

export const Experience = () => {
  return (
    <div
      id="Experience"
      className="d-flex justify-content-between align-content-center  "
    >
      <section>
        <div>
          <img src={shapeImg} alt="experience img" />
          <h2>Experiences</h2>
        </div>
        {/*  */}
        <div className="experience container">
          <div className="card cart ">
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 class="card-title">MSDEV | Interchip </h5>
                <div>
                  09 / 2021 - 12 / 2021 <p>Online</p>
                </div>
              </div>
              <p class="card-text d-flex">
                <ul type="square">
                  <li>
                    {" "}
                    <FaCheck /> Choose a hosting and a domain name .{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCheck />
                    Install WordPress locally or use the online version.
                  </li>
                  <li>
                    {" "}
                    <FaCheck />
                    Adjust the site settings ,choose a WordPress theme .
                  </li>
                  <li>
                    {" "}
                    <FaCheck />
                    Install the useful extensions and Edit layout.
                  </li>
                  <li>
                    <FaCheck /> Create a menu, pages, add articles, promote the
                    site and retain the site’s audience
                  </li>
                </ul>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="card cart">
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h5 class="card-title">Freelancer | Interchip </h5>
                <div>
                  02 / 2020 - 06 / 2020 <p>Freelancer</p>
                </div>
              </div>
              <p class="card-text d-flex">
                <ul type="square">
                  <li>
                    {" "}
                    <FaCheck /> Manage and realize a dynamic website.
                  </li>
                  <li>
                    {" "}
                    <FaCheck />
                    Maintain database diagram and specifications functional and
                    technical.
                  </li>
                  <li>
                    {" "}
                    <FaCheck />
                    <strong> Used technologies : </strong>HTML5, CSS, PHP and
                    MySQL
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Scroll />
    </div>
  );
};
