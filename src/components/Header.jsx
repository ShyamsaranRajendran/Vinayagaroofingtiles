import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Group 5.svg";

function Header({ menuOpen, toggleMenu }) {
  const closeMenu = () => {
    toggleMenu(false); // Close the menu when clicked
  };

  return (
    <div className="header-wrapper">
      <header className="header-container">
        <div className="header-brand">
          <Link to="/" className="header-brand-link" onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="header-navigation">
          <button
            className="header-menu-icon"
            onClick={() => toggleMenu(!menuOpen)} // Toggle menu state
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <span className="close-icon">&times;</span> // Close icon
            ) : (
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span> // Hamburger icon
            )}
          </button>
          <ul className={`header-menu ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" className="header-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="header-link" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="header-link" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
