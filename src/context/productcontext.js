import { createContext, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const url = "https://api.pujakaitem.com/api/products";

  const options = {
    method: "GET",
  };

  const getFeatureProducts = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getFeatureProducts(url, options);
  });

  return <AppContext.Provider value={"rajesh"}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
