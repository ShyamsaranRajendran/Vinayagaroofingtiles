import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Group 5.svg";

function Header({ menuOpen, toggleMenu }) {
  const [showHeader, setShowHeader] = useState(true); // Controls visibility of the header
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

  const closeMenu = () => {
    toggleMenu(false); // Close the menu when clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // Hide header on scroll down
      } else {
        setShowHeader(true); // Show header on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`header-wrapper ${showHeader ? "show" : "hide"}`}>
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
