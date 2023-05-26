import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import "./Nav.css";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  console.log(menuIcon);

  return (
    <div className="navbar">
      <ul className={menuIcon ? "navbar-list active" : "navbar-list"}>
        <li>
          <Link to="/" className="link ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/products" className="link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
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

      <div className="mobile-navbar-btn">
        <CgMenu
          name="menu-outline"
          className="mobile-nav-icon"
          onClick={() => setMenuIcon(true)}
        />
        <CgClose
          name="close-outline"
          className="mobile-nav-icon close-outline"
          onClick={() => setMenuIcon(false)}
        />
      </div>
    </div>
  );
};

export default Nav;
