import React from "react";
import BannerSection from "../components/Banner/BannerSection";
import Services from "../components/Services/Services";
import Trusted from "../components/Trusted/Trusted";

const About = () => {
  const data = {
    name: "Pilli  E-Commerce",
  };
  return (
    <div>
      <BannerSection myData={data} />
      <Services />
      <Trusted />
    </div>
  );
};

export default About;
