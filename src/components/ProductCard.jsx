import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import flooringTile from "../assets/flooring.png";
import "./Hero/css/ProductCard.css"
export default function ProductCard({
  id,
  image,
  name,
  material,
  description,
  category,
  tag
}) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

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
// 9865980220;
  const whatsappLink = `https://wa.me/+9865980220?text=${whatsappMessage}`;
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
        {/* <p>{id}</p> */}

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
