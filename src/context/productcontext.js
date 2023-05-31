import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../reducer/productReducer";
import axios from "axios";

export const AppContext = createContext();

/* App is provided in children */

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const API = "https://api.pujakaitem.com/api/products";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(url);
      const singleProductData = await response.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProductData });
    } catch (e) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const response = await axios.get(API);
        const product = await response.data;

        //console.log(data);
        dispatch({ type: "MY_API_DATA", payload: product });
      } catch (e) {
        dispatch({ type: "API_ERROR" });
      }
    };
    getAllProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(AppContext);
};
