import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-cropped.svg";
import "./css/header.css";
import Whitelogo from "../assets/white-logo.svg";
import { Search, X } from "lucide-react";

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
          ? "bg-white/80 dark:bg-gray-800/90 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-gray-800 shadow-md"
      }`}
    >
      <header className="flex items-center justify-between px-6 py-4 dark:shadow-md dark:border-b dark:border-gray-700">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* Normal Logo (Light Mode) */}
            <img
              src={logo}
              alt="logo"
              className=" h-14 object-contain dark:hidden"
            />
            {/* Dark Mode Logo */}
            <img
              src={Whitelogo}
              alt="dark logo"
              className="hidden  h-14 object-contain dark:block"
            />
          </Link>
        </div>
        <nav className="relative" ref={menuRef}>
          <button
            className="text-xxl md:hidden focus:outline-none"
            onClick={() => toggleMenu(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <span
                className="text-red-600"
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.8rem",
                  zIndex: 50000,
                }}
              >
                {" "}
                <X size={22} />
              </span>
            ) : (
              <div className="flex flex-col gap-1">
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white"></span>
              </div>
            )}
          </button>
          <ul
            className={`absolute top-0 right-0 bg-white dark:bg-gray-800 shadow-lg w-56 py-4 rounded-lg md:static md:flex md:gap-8 md:shadow-none md:w-auto md:py-0 md:bg-transparent md:dark:bg-transparent transition-transform duration-300 ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <li>
              <Link
                to="/"
                className="block px-4 py-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition md:px-6 md:py-3"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block px-4 py-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition md:px-6 md:py-3"
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition md:px-6 md:py-3"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition md:px-6 md:py-3"
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
