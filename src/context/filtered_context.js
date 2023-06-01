import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import filterReducer from "../reducer/filterReducer";

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "lowest",
  isLoading: true,
  filters: {
    text: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(filterReducer, initialState);

  const sortingProducts = (e) => {
    let userSelectedValue = e.target.value;
    dispatch({ type: "GET_SORT_VALUES", payload: userSelectedValue });
  };

  //code for searching values in search box

  const updateSearchedProducts = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: "SEARCHING_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "SEARCHED_VALUES" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, sortingProducts, updateSearchedProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
