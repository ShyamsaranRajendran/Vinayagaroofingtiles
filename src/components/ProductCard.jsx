import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import flooringTile from "../assets/flooring.png";
import "./Hero/css/ProductCard.css";
import { RiFlag2Fill } from "react-icons/ri";

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
  const [isLoading, setIsLoading] = useState(true); // Loading state for the image
  const [hasError, setHasError] = useState(false); // Error state for the image

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const productPageLink = `${
    window.location.origin
  }/product/${encodeURIComponent(id)}`;

  const goToProductPage = () => {
    navigate(`/product/${encodeURIComponent(id)}`, {
      state: { id, image, name, material, description, category, tag },
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the following product: 
- Name: ${name}
- Category: ${category} 
- Material: ${material} 
- Link: ${productPageLink}
Could you share more details and assist with the purchase? 😊`
  );

  const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;
  const isRemoteImage = image.startsWith("http") || image.startsWith("data");

  // Image loading handlers
  const handleImageLoad = () => setIsLoading(false);
  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`product-card ${isVisible ? "fade-in" : ""}`}>
      <div className="product-card-image-container">
        {isLoading && <div class="loader-product"></div>}
        {hasError && (
          <div className="image-error-placeholder">
            <span>Image not available</span>
          </div>
        )}
        <img
          src={isRemoteImage && !hasError ? image : flooringTile}
          alt={name}
          className={`product-card-image ${isLoading ? "hidden" : ""}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {tag === "trending" && (
          <div
            className="product-card-trending-badge"
            onClick={goToProductPage}
            style={{ cursor: "pointer" }}
          >
            <span>Trending</span>
          </div>
        )}
        <div className="product-card-overlay">
          <button
            className="product-card-zoom-btn bounce-animation"
            onClick={goToProductPage}
          >
            <Info size={20} />
          </button>
        </div>
      </div>

      <div className="product-card-content">
        <h3 className="product-card-title fade-in-animation">{category}</h3>

        <div className="product-card-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card-add-to-cart-btn pulse-animation"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
