import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    closeMenu();
    document.body.classList.toggle("dark-mode", !darkMode); // Add or remove "dark-mode" class to body
  };

  return (
    <header className="header-container">
      <div className="header-brand">
        <Link to="/" className="header-brand-link">
          Vinayaga Roofing Tiles
        </Link>
      </div>
      <nav className="header-navigation">
        <button
          className="header-menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
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
          <li>
            <button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
