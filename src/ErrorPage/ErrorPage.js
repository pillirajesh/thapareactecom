import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h5>UH OH! You're lost.</h5>
      <p>
        This page you are looking for does't exist. You can click the button
        below to go back to the homepage.
      </p>
      <Link to="/" className="link">
        <button className="button">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
