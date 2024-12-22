import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import logo from "../assets/Group 5.svg";
import animationData from "../assets/AnimationPeople.json";
import './css/header.css'
function Header({ menuOpen, toggleMenu }) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  const closeMenu = () => {
    toggleMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={`header-wrapper ${showHeader ? "show" : "hide"}`}>
      <header className="header-container">
        <div className="header-brand">
          <Link to="/" className="header-brand-link" onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="header-navigation" ref={menuRef}>
          <button
            className="header-menu-icon"
            onClick={() => toggleMenu(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <span className="close-icon">&times;</span>
            ) : (
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
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
            <div className="animation-container">
              <Lottie options={defaultOptions} height={200} width={200} />
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
