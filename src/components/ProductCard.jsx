import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import flooringTile from "../assets/flooring.png";

export default function ProductCard({
  id,
  image,
  name,
  material,
  description,
  category,
}) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add fade-in effect on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const goToProductPage = () => {
    navigate(`/product/${encodeURIComponent(name)}`, {
      state: { image, name, material, description, category },
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the following product: 
- Category: ${category} 
- Material: ${material} 
Could you share more details and assist with the purchase? 😊`
  );
  const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;
  const isRemoteImage = image.startsWith("http") || image.startsWith("data");

  return (
    <div className={`product-card ${isVisible ? "fade-in" : ""}`}>
      <div className="product-card-image-container">
        <img
          src={isRemoteImage ? image : flooringTile}
          alt={name}
          className="product-card-image"
        />
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
