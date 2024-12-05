import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-brand">
        <Link to="/" className="header-brand-link">
          Roofing Tiles
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
            <Link to="/services" className="header-link" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="header-link" onClick={closeMenu}>
              Gallery
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
  );
}

export default Header;
