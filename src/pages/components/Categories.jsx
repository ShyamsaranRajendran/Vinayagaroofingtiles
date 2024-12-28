import React, { useState, useEffect } from "react";

const roofingCategories = [
  {
    title: "Clay Roofing Tiles",
    image: "/images/cat/catclay.jpg",
  },
  {
    title: "Clay False Ceiling Tiles",
    image: "/images/cat/ccc.webp",
  },
  {
    title: "Concrete Roofing Tiles",
    image: "/images/cat/cat-con.jpg",
  },
  {
    title: "Ceramic Roofing Tiles",
    image: "/images/cat/cat-cer.jpg",
  },
  {
    title: "UPVC Roofing Shine Tiles",
    image: "/images/cat/cat-upvc.jpg",
  },
  {
    title: "Laser Plates",
    image: "/images/cat/cat-lar.jpg",
  },
  {
    title: "Clay Jali",
    image: "/images/cat/cat-jali.jpg",
  },
  {
    title: "UPVC Rain Gutter",
    image: "/images/cat/cat-gutter.jpg",
  },
  {
    title: "Concrete Jali (White)",
    image: "/images/cat/cat-jali-white.webp",
  },
];

export function Categories() {
  const [visibleCards, setVisibleCards] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(
    Array(roofingCategories.length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCards((prev) =>
        prev < roofingCategories.length ? prev + 1 : prev
      );
    }, 500); // Adjust the interval for delay between each card

    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
          Explore Our Roofing Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {roofingCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group cursor-pointer ${
                index < visibleCards
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } transition-all duration-500`}
            >
              <div className="relative h-[250px] overflow-hidden rounded-lg shadow-md bg-gray-200 flex items-center justify-center">
                {/* Show spinner only when the image is not loaded */}
                {!imageLoaded[index] && (
                  <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
                )}
                {/* Image that becomes visible when loaded */}
                <img
                  src={category.image}
                  alt={category.title}
                  onLoad={() => handleImageLoad(index)}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                    imageLoaded[index] ? "block" : "hidden"
                  }`}
                />
              </div>
              <h3 className="mt-4 text-xl font-medium text-center text-gray-700">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RoofingPage() {
  return (
    <div>
      <Categories />
    </div>
  );
}
