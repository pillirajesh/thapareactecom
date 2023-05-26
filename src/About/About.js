import React from "react";
import HeroSection from "../components/Banner/HeroSection";
import Services from "../components/Services/Services";
import Trusted from "../components/Trusted/Trusted";

const About = () => {
  const data = {
    name: "Pilli  E-Commerce",
  };
  return (
    <div>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </div>
  );
};

export default About;
