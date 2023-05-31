import React from "react";
import "./Products.css";
import FilterSection from "../components/FilterSection/FilterSection";
import Sort from "../components/Sort/Sort";
import ProductsList from "../components/ProductsList/ProductsList";

const Products = () => {
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
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Products;
