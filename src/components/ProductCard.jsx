import React from "react";
import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import flooringTile from "../assets/flooring.png";
import brick from '../assets/brick.png'


export default function ProductCard({
  id,
  image,
  name,
  material,
  description,
  category,
}) {
  const navigate = useNavigate();

  // Navigate to the product details page
  const goToProductPage = () => {
    navigate(`/product/${encodeURIComponent(name)}`, {
      state: { image, name, material, description, category },
    });
  };

  // WhatsApp message URL
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the following product: 
- category: ${category} 
- Product  ${image}
- Material: ${material} 
Could you share more details and assist with the purchase? 😊`
  );
  const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;
  const isRemoteImage = image.startsWith("http") || image.startsWith("data");
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-card-image-container">
        <img
          src={isRemoteImage ? image : flooringTile}
          alt={name}
          className="product-card-image"
        />
        <div className="product-card-overlay">
          <button className="product-card-zoom-btn" onClick={goToProductPage}>
            <Info size={20} />
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="product-card-content">
        <div className="product-card-header">
          <h3 className="product-card-title">
            {category}
          </h3>
          {/* <span className="product-card-price">${price}</span> */}
        </div>
        <div className="product-card-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card-add-to-cart-btn"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
