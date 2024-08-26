import React from "react";
import "./Card.css";
import { FaLaptopCode } from "react-icons/fa6";
import { FaDev } from "react-icons/fa6";
import { FaWordpressSimple } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

export const Card = () => {
  return (
    <div className="cards" id="card">
      <div className="container">
        <div className="carts content">
          <h3>Website Design and Development</h3>

          <FaLaptopCode className="icon" size={70} />

          <p>
            This includes creating the overall layout, look, and feel of a
            website. It involves choosing color schemes, typography, and
            creating custom graphics or images.
          </p>
        </div>

        <div className="carts content">
          <h3>Front-End Development</h3>
          <FaDev className="icon" size={70} />
          <p>
            Writing HTML, CSS, and JavaScript to implement the design and make
            the website interactive. This can include animations, sliders, and
            other dynamic elements.
          </p>
        </div>
        <div className="carts content">
          <h3> WordPress </h3>
          <FaWordpressSimple className="icon" size={70} />
          <p>
            Choose a hosting and a domain name Install Adjust the site settings
            ,choose a WordPress theme .Install the useful extensions and Edit
            layout. Create a menu, pages, add articles, promote the site and
            retain the site’s audience
          </p>
        </div>
        <div className="carts content">
          <h3> Responsive Design </h3>
          <FaMobileAlt className="icon" size={70} />
          <p>
            Ensuring that the website looks and functions well on a variety of
            devices and screen sizes, such as desktops, tablets, and
            smartphones.
          </p>
        </div>
      </div>
    </div>
  );
};
