import React from "react";
import "./about.css";
import Img  from "../../assets/image/1709405156320-removebg-preview.png"
export const AboutMe = () => {
  return (
    <div className="section">
      <section>
        <img src={Img} alt="" />
      </section>
      <section className="container">
        <div >
          <h2>AboutMe</h2>
          <h2> Zahmouli nizar </h2>
          <h3>Full Stack Developer</h3>
        </div>
        <div>
          Hello World! I am Nizar Zahmouli, a Full Stack Web Developer based in
          Tunisia. From sketching and refining new ideas, to writing lines of
          codes on a web page, I love combining the two worlds of logic and
          creativity to make an eye-catching, accessible and user-friendly
          websites. I enjoy taking complex problems and turning them into simple
          and beautiful interface design. I always strive to write elegant and
          efficient code whether it be HTML, CSS or JavaScript and I love seeing
          the results of my efforts helping the user’s experience.
        </div>
      </section>
    </div>
  );
};
