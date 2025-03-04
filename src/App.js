import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Products from "./Products/Products";
import SingleProduct from "./SingleProduct/SingleProduct";
import Cart from "./Cart/Cart";
import ErrorPage from "./ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./components/Header/Header";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
