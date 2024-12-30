import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();

  // Toggle menu open/close
  const toggleMenu = (state) => {
    setMenuOpen(state);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
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
      setShowScrollToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* Main Content */}
      <main className="flex-grow pt-20 md:pt-16 p-6">
        {/* Apply padding-top equal to header height */}
        <Outlet />
      </main>

      {/* Dark Mode and Scroll to Top Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-4">
        <button
          className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-500 dark:bg-yellow-400 dark:hover:bg-yellow-300 focus:outline-none"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        {showScrollToTop && (
          <button
            className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 focus:outline-none"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={18} />
          </button>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
