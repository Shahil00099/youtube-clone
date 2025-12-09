import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // your logo

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo links to homepage */}
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <input type="text" placeholder="Search" />
      <button>Search</button>
    </nav>
  );
};

export default Navbar;
