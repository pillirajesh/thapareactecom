import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/djoz0tmyl/image/upload/v1685094467/Pilli_1_vj8yxs_qi6n91.png"
          alt="logo"
          className="logo"
        />
      </Link>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
