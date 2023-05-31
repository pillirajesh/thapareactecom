import React from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";
import PriceFormat from "../../PriceFormat";

const ProductsList = ({ products }) => {
  const {
    id,
    name,
    company,
    price,
    colors,
    image,
    description,
    category,
    featured,
  } = products;
  return (
    <Link
      className="all-products-container"
      to={`/singleproduct/${id}`}
      style={{ textDecoration: "none", color: "blueviolet" }}
    >
      <img src={image} alt={name} className="images" />
      <div className="product-name-price-container">
        <p>{name}</p>
        <p>{<PriceFormat price={price} />}</p>
      </div>
    </Link>
  );
};

export default ProductsList;
