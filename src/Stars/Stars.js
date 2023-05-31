import React from "react";
import "./Stars.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="stars" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="stars" />
        ) : (
          <AiOutlineStar className="stars" />
        )}
      </span>
    );
  });

  return (
    <div>
      {ratingStar}
      <span style={{ marginLeft: "10px", color: "blue" }}>
        ({reviews} customer reviews)
      </span>
    </div>
  );
};

export default Stars;
