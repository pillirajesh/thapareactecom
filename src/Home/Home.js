import React from "react";
import BannerSection from "../components/Banner/BannerSection";
import Services from "../components/Services/Services";
import Trusted from "../components/Trusted/Trusted";
import "./Home.css";

const Home = () => {
  const data = {
    name: "Pilli Store",
  };

  return (
    <div className="con">
      <BannerSection myData={data} />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
