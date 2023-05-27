import "./Footer.css";
import { Link } from "react-router-dom";

import React from "react";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <section className="footer">
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
        </section>
        <div className="footer-sub">
          <div className="footer-about">
            <h4 style={{ fontFamily: "sans serif", fontSize: "18px" }}>
              Pilli E-Kart
            </h4>
            <p style={{ fontFamily: "cursive", fontSize: "13px" }}>
              Lorem ipsum dolor, sit amet consecteur adipiscing elit.
            </p>
          </div>
          <form
            className="footer-subscribe"
            method="POST"
            action="https://formspree.io/f/xzbqqjnr"
          >
            <h4 style={{ fontFamily: "cursive", fontSize: "16px" }}>
              Subscribe to get important updates regading new stock and offers.
            </h4>
            <input
              type="email"
              name="Email"
              style={{
                fontFamily: "sans serif",
                fontSize: "13px",
                padding: "5px",
                marginBottom: "7px",
                borderRadius: "5px",
                border: "none",
              }}
              required
              autoComplete="off"
              placeholder="YOUR E-MAIL"
            />
            <br />
            <input
              type="text"
              name="Contact No."
              style={{
                fontFamily: "sans serif",
                fontSize: "13px",
                padding: "5px",
                marginBottom: "7px",
                borderRadius: "5px",
                border: "none",
              }}
              required
              autoComplete="off"
              placeholder="YOUR PHONE NUMBER"
            />
            <br />
            <button
              type="submit"
              className="send-button"
              style={{ fontFamily: "cursive", fontSize: "12px" }}
            >
              SUBSCRIBE
            </button>
          </form>
          <div className="footer-follow">
            <h4 style={{ fontFamily: "cursive", fontSize: "18px" }}>
              Follow Us
            </h4>

            <FaYoutube className="social-icon" />
            <FaFacebook className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
          <div className="footer-contact">
            <h4 style={{ fontFamily: "cursive", fontSize: "18px" }}>Call Us</h4>
            <div className="contact">
              <FiPhoneCall className="social-icon call" />
              <p>+91 9028513324</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
