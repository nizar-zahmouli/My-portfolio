import React from "react";
import shapeImg from "../../assets/image/sphere.png";
import maktabti from "../../assets/image/project/maktabti.png";
import shopito from "../../assets/image/project/shopito.png";
import mooncart from "../../assets/image/project/mooncart.png";
import blog from "../../assets/image/project/blog.png";
import profile from "../../assets/image/project/portfolio.png";

export const Projects = () => {
  return (
    <div id="Projects">
      <section>
        <div>
          <img src={shapeImg} alt="project img" />
          <h2>Projects</h2>
        </div>
        <div className="project container">
          {/* <!-- Gallery --> */}

          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <a href="https://maktabti.onrender.com/" target="e_blank">
                <img
                  src={maktabti}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
              </a>
              <a
                href="https://github.com/nizar-zahmouli/mooncart"
                target="e-blank"
              >
                <img
                  src={mooncart}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Wintry Mountain Landscape"
                />
              </a>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <a
                href="https://github.com/nizar-zahmouli/Shoppito-App-frontend"
                target="e_blank"
              >
                <img
                  src={shopito}
                  class="w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
              </a>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <img
                src={blog}
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <img
                src={profile}
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
          {/* <!-- Gallery --> */}
          {/*  */}
        </div>
      </section>
    </div>
  );
};
