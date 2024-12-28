import React, { useState, useEffect } from "react";
import logodp from "../assets/logo-cropped.svg";

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
        {/* Animated Logo */}
        <div className="animate-pulse">
          <img
            src={logodp}
            alt="Vinayaga Logo"
            className="mx-auto w-24 h-24 sm:w-32 sm:h-32 mb-4"
          />
        </div>
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 animate-fadeIn">
          Welcome to Vinayaga Roofing Tiles
        </h1>

        {/* Brand List with Animation */}
        <div className="flex flex-col items-center space-y-2 animate-slideUp">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="brand-item text-lg font-semibold text-gray-700 dark:text-gray-200 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.5}s` }}
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
