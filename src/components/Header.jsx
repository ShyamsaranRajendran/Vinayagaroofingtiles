import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-cropped.svg";
import "./css/header.css";
import Whitelogo from "../assets/white-logo.svg";

function Header({ menuOpen, toggleMenu }) {
  const [darkMode, setDarkMode] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  const closeMenu = () => {
    toggleMenu(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

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

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        lastScrollY > 50
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-gray-900 shadow-md"
      }`}
    >
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* Normal Logo (Light Mode) */}
            <img
              src={logo}
              alt="logo"
              className="w-40 h-10 object-contain dark:hidden transform scale-150" // Zoomed-in by 1.5 times
            />
            {/* Dark Mode Logo */}
            <img
              src={Whitelogo}
              alt="dark logo"
              className="hidden w-40 h-10 object-contain dark:block transform scale-150" // Zoomed-in by 1.5 times
            />
          </Link>
        </div>
        <nav className="relative">
          <button
            className="text-2xl md:hidden focus:outline-none"
            onClick={() => toggleMenu(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <span className="text-red-600">&times;</span>
            ) : (
              <div className="flex flex-col gap-1">
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
              </div>
            )}
          </button>
          <ul
            className={`absolute top-full right-0 bg-white dark:bg-gray-900 shadow-lg w-48 py-4 rounded-lg md:static md:flex md:gap-8 md:shadow-none md:w-auto md:py-0 md:bg-transparent md:dark:bg-transparent transition-transform duration-300 ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                onClick={closeMenu}
              >
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
