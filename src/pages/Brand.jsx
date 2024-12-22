import React from "react";
import "./Brand.css";
const BrandCarousel = () => {
  const brandLogos = [
    "/images/logo.svg",
    "/images/logo.svg",
    "/images/logo.svg",
    "/images/logo.svg",
    "/images/logo.svg",
    "/images/logo.svg",
    "/images/logo.svg",
  ]; // Paths relative to the `public` folder

  return (
    <div className="brand-carousel-container">
      <div className="brand-carousel-track">
        {brandLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand logo ${index + 1}`}
            className="brand-carousel-logo"
          />
        ))}
        {/* Duplicate logos for seamless looping */}
        {brandLogos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Duplicate brand logo ${index + 1}`}
            className="brand-carousel-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
