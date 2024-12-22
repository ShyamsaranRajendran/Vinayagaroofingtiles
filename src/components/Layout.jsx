import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"; // Import useLocation
import Header from "./Header";
import Footer from "./Footer";
import './css/layout.css';

import { FaArrowUp } from "react-icons/fa";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false); // State to show/hide the up arrow button
  const location = useLocation(); // Get the current location (route)

  // Toggle menu open/close
  const toggleMenu = (state) => {
    setMenuOpen(state);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode); // Toggle dark mode class on body
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200); // Show button after scrolling 200px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="layout-container">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main className="layout-main">
        <Outlet />
      </main>
      <div className="dark-options">
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        {showScrollToTop && ( // Conditionally render the button
          <button
            className="scroll-to-top-btn"
            aria-label="Scroll to top"
            onClick={scrollToTop}
          >
            <FaArrowUp size={18} color="gold" />
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
