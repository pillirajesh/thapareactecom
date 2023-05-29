import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header-container">
      <div className="main-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/djoz0tmyl/image/upload/v1685094467/Pilli_1_vj8yxs_qi6n91.png"
            alt="logo"
            className="logo"
          />
        </Link>

        <ul className="nav-container">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link cart-trolley-link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total-item">2</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-container">
        <nav className="navbar navbar-dark bg-blue fixed-top">
          <div className="container-fluid">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/djoz0tmyl/image/upload/v1685094467/Pilli_1_vj8yxs_qi6n91.png"
                alt="logo"
                className="logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/djoz0tmyl/image/upload/v1685094467/Pilli_1_vj8yxs_qi6n91.png"
                    alt="logo"
                    className="logo"
                  />
                </Link>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
