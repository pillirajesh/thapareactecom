import React from "react";
import "./Sort.css";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../context/filtered_context";
//import { useProductContext } from "../../context/productcontext";

const Sort = ({ productsCount, setList }) => {
  const { sortingProducts, updateSearchedProducts, filters } =
    useFilterContext();
  const { text } = filters;

  return (
    <div className="sort-header-container">
      <div className="grid-container">
        <BsFillGridFill className="grid-view" onClick={() => setList(false)} />
        <BsList className="list-view" onClick={() => setList(true)} />
      </div>
      <p style={{ fontFamily: "cursive", color: "blue" }}>
        {productsCount} total products
      </p>

      <div className="input-container">
        <input
          type="text"
          placeholder="Search"
          name="text"
          value={text}
          onChange={updateSearchedProducts}
          className="input"
        />
      </div>
      <select className="sort-label" id="sortButton" onChange={sortingProducts}>
        <option value="highest" selected>
          Price (highest)
        </option>
        <option value="lowest">Price (lowest)</option>
        <option value="a-z">Price (a-z)</option>
        <option value="z-a">Price (z-a)</option>
      </select>
    </div>
  );
};

export default Sort;
