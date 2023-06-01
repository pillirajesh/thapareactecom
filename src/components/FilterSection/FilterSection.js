import React from "react";
import "./FilterSection.css";
import { useFilterContext } from "../../context/filtered_context";

const FilterSection = () => {
  const { filters, updateSearchedProducts } = useFilterContext();
  const { text } = filters;
  return (
    <div className="filter-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search"
          name="text"
          value={text}
          onChange={updateSearchedProducts}
          className="input"
        />
      </form>
    </div>
  );
};

export default FilterSection;
