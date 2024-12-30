import React from "react";
import Slider from "react-slick";

const brandLogos = [
  "/images/brand/aqua.svg",
  "/images/brand/natural-tile.svg",
  "/images/brand/nuvo.svg",
  "/images/brand/pio.svg",
  "/images/brand/shielder.svg",
  "/images/brand/terracotta.svg",
  "/images/brand/Rockshield.svg",
];

export function Brand() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
          Trusted Brands We Work With
        </h2>
        {/* Slider component */}
        <Slider {...settings}>
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 border rounded-lg shadow-md bg-gray-50  hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="h-14 w-auto max-w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default function RoofingPage() {
  return (
    <div>
      <Brand />
    </div>
  );
}
