import React from "react";
import shapeImg from "../../assets/image/sphere.png";

export const Contact = () => {
  return (
    <div
      id="Contact"
      className="d-flex justify-content-between align-content-center  "
    >
      <section>
        <div>
          <img src={shapeImg} alt="contact img" />
          <h2>contact</h2>
        </div>
      </section>
    </div>
  );
};
