import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src="/CryptoMeds-logo.png" alt="CryptoMeds Logo" />
        <h1>CryptoMeds</h1>
      </div>
      <div className="navbar-links">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/add-product">Add Product</Link>
        </button>
        <button>
          <Link to="/view-products">View Products</Link>
        </button>
      </div>
   
    </div>
   
  );
};

export default Navbar;
