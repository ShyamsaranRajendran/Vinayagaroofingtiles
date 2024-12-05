import React, { useState } from "react";
import { Maximize2, Info } from "lucide-react";

export default function ProductCard({
  image,
  name,
  price,
  material,
  dimensions,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

// - Price: $${price} 
  // WhatsApp message URL
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the following product: 
- Name: ${name} 
- Material: ${material} 
- Dimensions: ${dimensions}
Could you share more details and assist with the purchase? 😊`
  );
  const whatsappLink = `https://wa.me/+918056513467?text=${whatsappMessage}`;

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-card-image-container">
        <img src={image} alt={name} className="product-card-image" />
        <div className="product-card-overlay">
          <button className="product-card-zoom-btn" onClick={openModal}>
            <Maximize2 size={20} />
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="product-card-content">
        <div className="product-card-header">
          <h3 className="product-card-title">{name}</h3>
          {/* <span className="product-card-price">${price}</span> */}
        </div>
        <div className="product-card-details">
          <p>Material: {material}</p>
          <p>Dimensions: {dimensions}</p>
        </div>
        <div className="product-card-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card-add-to-cart-btn"
          >
            Contact on WhatsApp
          </a>

          <button className="product-card-info-btn">
            <Info size={20} />
          </button>
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="product-card-modal-overlay" onClick={closeModal}>
          <div
            className="product-card-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="product-card-modal-close-btn"
              onClick={closeModal}
            >
              X
            </button>
            <img src={image} alt={name} className="product-card-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}
