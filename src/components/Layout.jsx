import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"; // Import useLocation
import Header from "./Header";
import Footer from "./Footer";

import { FaArrowUp } from "react-icons/fa"; 
function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="layout-container">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main className="layout-main">
        <Outlet />
      </main>
      <button
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      <button
        className="dark-mode-toggle-up"
        aria-label="Toggle dark mode"
        onClick={scrollToTop}
      >
        <FaArrowUp size={18} color="gold" />
      </button>
      <Footer />
    </div>
  );
}

export default Layout;
