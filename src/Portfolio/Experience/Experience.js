import React from "react";
import { Scroll } from "../Navbar/Navbar";
import shapeImg from "../../assets/image/sphere.png";
import "./experince.css";
import { FaCheck } from "react-icons/fa";

export const Experience = () => {
  return (
    <div id="Experience" className="experiences">
      <section>
        <div>
          <img src={shapeImg} alt="experience img" />
          <h2>Experiences</h2>
        </div>
        {/*  */}
        <div className="experience container">
          <div className="card cart ">
            <div class="card-body">
              <div className="cart-header">
                <h5> MSDEV | Interchip </h5>
                <div>
                  09 / 2021 - 12 / 2021 <p>Online</p>
                </div>
              </div>
              <ul>
                <li>
                  <b> - </b>
                  Choose a hosting and a domain name .
                </li>
                <li>
                  <b> - </b>
                  Install WordPress locally or use the online version.
                </li>
                <li>
                  <b> - </b> Adjust the site settings ,choose a WordPress theme
                  .
                </li>
                <li>
                  <b> - </b> Install the useful extensions and Edit layout.
                </li>
                <li>
                  <b> - </b>
                  Create a menu, pages, add articles, promote the site and
                  retain the site’s audience
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="card cart">
            <div class="card-body">
              <div className="cart-header">
                <h5>Freelancer | Interchip </h5>
                <div>
                  02 / 2020 - 06 / 2020 <p>Freelancer</p>
                </div>
              </div>
              <ul>
                <li>
                  <b> - </b> Manage and realize a dynamic website.
                </li>
                <li>
                  <b> - </b>
                  Maintain database diagram and specifications functional and
                  technical.
                </li>
                <li>
                  <b> - </b>
                  Used technologies : HTML5, CSS, PHP and MySQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Scroll />
    </div>
  );
};
