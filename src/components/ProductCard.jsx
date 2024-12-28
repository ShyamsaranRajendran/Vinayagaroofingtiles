import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import flooringTile from "../assets/flooring.png";

export default function ProductCard({
  id,
  image,
  name,
  material,
  description,
  category,
  tag,
}) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const productPageLink = `${
    window.location.origin
  }/product/${encodeURIComponent(id)}`;

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the following product: \n- Category: ${category} \n- Material: ${material} \n- Link: ${productPageLink}\nCould you share more details and assist with the purchase? 😊`
  );

  const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;
  const isRemoteImage = image.startsWith("http") || image.startsWith("data");

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      className={`p-4 border rounded-lg shadow-lg transform transition-all ${
        isVisible ? "opacity-100" : "opacity-0"
      } hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 w-full sm:w-80 md:w-64`}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
        {/* Image Loader / Placeholder */}
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-600">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={isRemoteImage ? image : flooringTile}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>

        {/* Actions */}
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => navigate(`/product/${id}`)}
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            View Details
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-600"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
