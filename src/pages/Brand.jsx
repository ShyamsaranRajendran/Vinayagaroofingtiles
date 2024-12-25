import React, { useEffect, useState } from "react";
import "./Brand.css";

const BrandCarousel = () => {
  const brandLogos = [
    "/images/brand/aqua.svg",
    "/images/brand/natural-tile.svg",
    "/images/brand/nuvo.svg",
    "/images/brand/pio.svg",
    "/images/brand/shielder.svg",
    "/images/brand/terracotta.svg",
    "/images/brand/Rockshield.svg",
  ];

  const [visibleItems, setVisibleItems] = useState(2); 
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setVisibleItems(2); 
      } else if (window.innerWidth < 900) {
        setVisibleItems(3); 
      } else {
        setVisibleItems(4); 
      }

      setCarouselWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="brand-carousel-container">
      <div
        className="brand-carousel-track"
        style={{ width: `${carouselWidth * 2}px` }} 
      >
        {[...brandLogos, ...brandLogos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand logo ${index + 1}`}
            className="brand-carousel-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
