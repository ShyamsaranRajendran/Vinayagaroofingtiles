import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          RoofTile Co.
        </a>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <a href="#home" className="navbar-item" onClick={toggleMenu}>
            Home
          </a>
          <a href="#products" className="navbar-item" onClick={toggleMenu}>
            Products
          </a>
          <a href="#about" className="navbar-item" onClick={toggleMenu}>
            About
          </a>
          <a href="#services" className="navbar-item" onClick={toggleMenu}>
            Services
          </a>
          <a href="#contact" className="navbar-item" onClick={toggleMenu}>
            Contact
          </a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
