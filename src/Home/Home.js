import React from "react";
import HeroSection from "../components/Banner/HeroSection";
import Services from "../components/Services/Services";
import Trusted from "../components/Trusted/Trusted";
import "./Home.css";

const Home = () => {
  const data = {
    name: "Pilli Store",
  };

  return (
    <div className="con">
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
