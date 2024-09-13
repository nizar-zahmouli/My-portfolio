import React from "react";
import "./Home.css";
import Profile from "./Profile";
import { Navbar, Scroll } from "../Navbar/Navbar";
export const Home = () => {
  return (
    <div className="home-container">
      <div>
        <Navbar />
      </div>
      <div>
        <Profile />
        <Scroll />
      </div>
    </div>
  );
};
