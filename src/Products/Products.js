import React, { useEffect, useState } from "react";
import "./Products.css";
import FilterSection from "../components/FilterSection/FilterSection";
import Sort from "../components/Sort/Sort";
import ProductsList from "../components/ProductsList/ProductsList";

const API = "https://api.pujakaitem.com/api/products";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="products-main-container">
      <div className="products-left-container">
        <FilterSection />
      </div>
      <div className="products-right-container">
        <div className="products-right-container-header">
          <Sort />
        </div>
        <div className="products-right-container-body">
          {products.map((eachProduct) => {
            return <ProductsList products={eachProduct} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
