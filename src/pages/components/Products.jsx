import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/ceramic/cer-7.png?raw=true",
    tag: "New",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Comfortable lounge chair",
    price: 3500000,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/ceramic/cer-2.jpeg?raw=true",
    tag: "Premium",
  },
  {
    id: 3,
    name: "Sirius",
    description: "Modern office chair",
    price: 4500000,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/clay-false/clay-a.jpeg?raw=true",
    tag: "Best Seller",
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
    id: 6,
    name: "Vega",
    description: "Ergonomic gaming chair",
    price: 6000000,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/concrete-jali/white-leaf.png?raw=true",
    tag: "Popular",
  },
  {
    id: 7,
    name: "Luna",
    description: "Comfortable reading chair",
    price: 2200000,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/concrete-jali/white-3.jpeg?raw=true",
    tag: "Classic",
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
  // Retrieve favorites from localStorage on component mount
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Function to toggle favorite status
  const handleFavoriteToggle = (productId) => {
    let updatedFavorites;
    if (favorites.includes(productId)) {
      // Remove from favorites
      updatedFavorites = favorites.filter((id) => id !== productId);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, productId];
    }
    setFavorites(updatedFavorites);
    // Save updated favorites to localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Function to create WhatsApp link (your existing function)
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                      product.tag === "New" ? "bg-green-500" : "bg-red-500"
                    } text-white px-2 py-1 rounded-md text-sm`}
                  >
                    {product.tag}
                  </span>
                )}
                <div className="absolute bottom-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                    onClick={() => handleFavoriteToggle(product.id)} // Add favorite toggle function
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(product.id)
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <a
                      href={createWhatsappLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Contact on WhatsApp</span>
                    </a>
                  </button>
                </div>
              </div>
              {/* <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
