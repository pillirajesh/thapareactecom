import BannerSection from "../components/Banner/BannerSection";
import Services from "../components/Services/Services";
import Trusted from "../components/Trusted/Trusted";
import { useProductContext } from "../context/productcontext";

const About = () => {
  const { myname } = useProductContext();
  const data = {
    name: "Pilli  E-Commerce",
  };
  return (
    <div>
      <p>{myname}</p>
      <BannerSection myData={data} />
      <Services />
      <Trusted />
    </div>
  );
};

export default About;
