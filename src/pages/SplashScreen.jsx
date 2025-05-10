import React from "react";
import logodp from "../assets/logo-cropped.svg";
import "./css/animations.css"; // New CSS file for animations

const SplashScreen = () => {
  
  const brands = [
    "Chitra Ceramic",
    "Swastik Tiles",
    "Thomson Tile",
    "Wiener Berger Bricks",
    "Pionnier Roof Tile",
    "Nuvocotto Clay Roof Tile",
    "Topco Ceramic Tiles",
  ];

  return (
    <div className="splash-screen flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-blue-700 dark:via-black dark:to-blue-800">
      <div className="text-center space-y-6">
        {/* Logo */}
        <div>
          <img
            src={logodp}
            alt="Vinayaga Logo"
            className="mx-auto w-40 h-40 sm:w-54 sm:h-60 mb-4"
          />
        </div>

        {/* Animated Brand List */}
        <div className="flex flex-col items-center space-y-2">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="brand-item text-lg font-semibold text-gray-700 dark:text-gray-200 opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationFillMode: "forwards",
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
