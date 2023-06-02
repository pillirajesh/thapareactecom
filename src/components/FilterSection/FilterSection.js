import React from "react";
import "./FilterSection.css";
import { useFilterContext } from "../../context/filtered_context";
import PriceFormat from "../../PriceFormat";

const FilterSection = () => {
  const { filters, updateSearchedProducts, all_products, clearFilter } =
    useFilterContext();
  const { text, price, maxPrice, minPrice } = filters;

  //to get the category wise value

  const getUniqueCategoryData = (all_products) => {
    let newValue = all_products.map((curElement) => {
      return curElement.category;
      //console.log(newValue)
    });
    // ...means destructure the set values
    newValue = ["all", ...new Set(newValue)];
    //console.log(newValue);
    return newValue;
  };

  const getUniqueCompanyData = (all_products) => {
    let newValue = all_products.map((curElement) => {
      return curElement.company;
    });

    newValue = ["all", ...new Set(newValue)];
    //console.log(newValue);
    return newValue;
  };

  const categoryWiseProducts = getUniqueCategoryData(all_products);
  //console.log(categoryWiseProducts);

  const companyWiseProducts = getUniqueCompanyData(all_products);
  //console.log(companyWiseProducts);

  return (
    <div className="filter-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="SEARCH"
          name="text"
          value={text}
          onChange={updateSearchedProducts}
          className="input"
        />
      </form>
      <div className="category-container">
        <h6>Categories</h6>
        <div className="category-buttons-container">
          {categoryWiseProducts.map((curElement, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElement}
                onClick={updateSearchedProducts}
                className="category-button"
              >
                {curElement}
              </button>
            );
          })}
        </div>
      </div>

      <div className="company-container">
        <h6>Company</h6>
        <select
          className="company"
          name="company"
          onChange={updateSearchedProducts}
        >
          {companyWiseProducts.map((curElement, index) => {
            return (
              <option value={curElement} key={index} name="company">
                {curElement}
              </option>
            );
          })}
        </select>
      </div>
      <div className="price-range-container">
        <h6>Price </h6>
        <p>
          <PriceFormat price={price} />
        </p>
        <input
          type="range"
          className="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateSearchedProducts}
        />
      </div>
      <div className="clear-filter-button-container">
        <button
          className="clear-filter-button"
          type="button"
          onClick={clearFilter}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
