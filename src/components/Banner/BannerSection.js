import React from "react";
import "./BannerSection.css";
import { Link } from "react-router-dom";

const HeroSection = (props) => {
  const { myData } = props;
  const { name } = myData;
  return (
    <div className="banner-container ">
      <div className="left-container">
        <h4 style={{ fontFamily: "monospace" }}>Welcome to</h4>
        <h1 style={{ fontFamily: "Monoton", color: "blue" }}>{name}</h1>
        <p
          style={{ width: "100%", fontFamily: "cursive", color: "blueviolet" }}
        >
          Welcome to our innovative e-commerce store, where shopping becomes an
          immersive and convenient experience like never before. We have created
          a cutting-edge platform that caters to all your shopping needs in one
          place. From the latest fashion trends to tech gadgets, home decor, and
          everything in between, our store offers a vast selection of
          high-quality products from trusted brands. Our store boasts a
          user-friendly interface designed to enhance your shopping journey.
          With intuitive navigation, seamless search functionality, and
          personalized recommendations, finding the perfect item is effortless.
          We understand the importance of convenience, so we offer multiple
          payment options, including secure online transactions and flexible
          payment plans to accommodate your preferences.
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
