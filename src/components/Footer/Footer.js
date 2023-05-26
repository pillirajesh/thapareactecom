import "./Footer.css";
import { Link } from "react-router-dom";

import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div>
          <h6 style={{ fontFamily: "cursive", fontSize: "15px" }}>
            Ready to get started?
          </h6>
          <h5 style={{ fontFamily: "cursive", fontSize: "18px" }}>
            Talk to us today
          </h5>
        </div>

        <Link to="/contact">
          <button className="button">GET STARTED </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
