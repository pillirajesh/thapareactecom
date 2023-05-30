import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

import PriceFormat from "../PriceFormat";

const Product = ({ elementData }) => {
  const { id, image, name, price } = elementData;

  return (
    <Link to={`/singleproduct/${id}`} className="link">
      <div className="product-container">
        <img src={image} alt={name} className="image" />

        <div className="name-price-container">
          <p>{name}</p>
          <p>{<PriceFormat price={price} />}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
