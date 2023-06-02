import React, { useState } from "react";
import "./Products.css";
import FilterSection from "../components/FilterSection/FilterSection";
import Sort from "../components/Sort/Sort";
import ProductsList from "../components/ProductsList/ProductsList";
import { useFilterContext } from "../context/filtered_context";
import { ThreeDots } from "react-loader-spinner";

//const API = "https://api.pujakaitem.com/api/products";

const Products = () => {
  //const [products, setProducts] = useState([]);

  const { filter_products, isLoading } = useFilterContext();

  const [list, setList] = useState(false);

  /* 
 const getAllProducts = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

*/
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
    <div className="products-main-container">
      <div className="products-left-container">
        <FilterSection />
      </div>
      <div className="products-right-container container">
        <div className="products-right-container-header">
          <Sort
            productsCount={filter_products.length}
            setList={setList}
            products={filter_products}
          />
        </div>

        <div
          className={
            list
              ? "products-right-container-body-list-view"
              : "products-right-container-body "
          }
        >
          {filter_products.map((eachProduct) => {
            return (
              <ProductsList
                products={eachProduct}
                list={list}
                key={eachProduct.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
