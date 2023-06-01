import React from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";
import PriceFormat from "../../PriceFormat";

const ProductsList = ({ products, list }) => {
  const { id, name, price, image, description } = products;
  return (
    <Link
      className={
        list ? "all-products-container-list-view" : "all-products-container"
      }
      to={`/singleproduct/${id}`}
      style={{ textDecoration: "none", color: "blueviolet" }}
    >
      {list ? (
        <>
          <div>
            <img src={image} alt={name} className="images-list-view" />
          </div>

          <div className="product-description-list-view">
            <h4 style={{ color: "#db1fc8" }}>{name}</h4>
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              Price : <PriceFormat price={price} />
            </span>
            <p style={{ color: "grey" }}>{description}</p>
            <Link
              to={`/singleproduct/${id}`}
              style={{
                textDecoration: "none",
                color: "blueviolet",
                fontFamily: "cursive",
                fontSize: "12px",
                border: "1px solid #bf9e32",
                padding: "8px",
                borderRadius: "10px",
              }}
            >
              READ MORE
            </Link>
          </div>
        </>
      ) : (
        <>
          <img src={image} alt={name} className="images" />
          <div className="product-name-price-container">
            <p>{name}</p>
            <p>{<PriceFormat price={price} />}</p>
          </div>
        </>
      )}
    </Link>
  );
};

export default ProductsList;
