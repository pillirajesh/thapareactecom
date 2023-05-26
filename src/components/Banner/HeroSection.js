import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = (props) => {
  const { myData } = props;
  const { name } = myData;
  return (
    <div className="header-container ">
      <div className="left-container">
        <h4 style={{ fontFamily: "Segoe UI" }}>Welcome to</h4>
        <h1 style={{ fontFamily: "Monoton" }}>{name}</h1>
        <p style={{ width: "100%", fontFamily: "cursive" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Link to="/products">
          <button type="button" className="button">
            Shop Now
          </button>
        </Link>
      </div>

      <div className="right-container">
        <img src="./images/hero.jpg" alt="hero" className="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
