import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar_container">
      <img src={logo} alt="Logo" />
    </nav>
  );
};

export default Navbar;
