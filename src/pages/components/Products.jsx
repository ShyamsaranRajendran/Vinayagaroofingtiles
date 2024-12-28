import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/ceramic/cer-7.png?raw=true",
    tag: "Hot Deal",
  },
  {
    id: 4,
    name: "Nimbus",
    description: "Elegant dining chair",
    price: 2000000,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/concrete/con4.jpeg?raw=true",
    tag: "Hot Deal",
  },
  {
    id: 5,
    name: "Aurora",
    description: "Minimalist desk chair",
    price: 3000000,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/clay-false/clay-d.jpeg?raw=true",
    tag: "Limited Stock",
  },
  {
    id: 8,
    name: "Orion",
    description: "Luxury recliner chair",
    price: 8000000,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/upvc-rain-gutter/upvc-1.jpeg?raw=true",
    tag: "Premium",
  },
];

export function Products() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark"; // Default to dark
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleFavoriteToggle = (productId) => {
    let updatedFavorites;
    if (favorites.includes(productId)) {
      updatedFavorites = favorites.filter((id) => id !== productId);
    } else {
      updatedFavorites = [...favorites, productId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const createWhatsappLink = (product) => {
    const productPageLink = `${
      window.location.origin
    }/product/${encodeURIComponent(product.id)}`;
    const whatsappMessage = encodeURIComponent(
      `Hi! I'm interested in the following product:\nName: ${product.name}\nDescription: ${product.description}\nPrice: ${product.price}\nLink: ${productPageLink}`
    );
    return `https://wa.me/+919865980220?text=${whatsappMessage}`;
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover"
                />
                {product.tag && (
                  <span
                    className={`absolute top-4 right-4 ${
                      product.tag === "New"
                        ? "bg-green-500"
                        : product.tag === "Hot Deal"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    } text-white px-2 py-1 rounded-md text-sm`}
                  >
                    {product.tag}
                  </span>
                )}
                <div className="absolute bottom-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600">
                    <a
                      href={createWhatsappLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Contact via WhatsApp</span>
                    </a>
                  </button>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
