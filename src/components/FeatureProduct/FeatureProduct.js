import { useProductContext } from "../../context/productcontext";
import { ThreeDots } from "react-loader-spinner";
import Product from "../../Product/Product";
import "./FeatureProduct.css";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  //console.log(featureProducts);

  if (isLoading) {
    return (
      <div className="loader">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="feature-container">
      <h1>Our Feature Services</h1>
      <div className="feature-product-container">
        {featureProducts.map((curElement) => {
          return <Product key={curElement.id} elementData={curElement} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProduct;
