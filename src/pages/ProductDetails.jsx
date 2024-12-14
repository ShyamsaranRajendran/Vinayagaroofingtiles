import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import { FaWhatsapp } from "react-icons/fa";
import { Info } from "lucide-react";

export default function ProductDetails() {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Navigate to product page with state
  const goToProductPage = (product) => {
    navigate(`/product/${encodeURIComponent(product.name)}`, {
      state: product,
    });
  };

  const { image, material, category, description } = location.state || {};

  const recommendedProducts = products.filter(
    (product) => product.category === category && product.name !== name
  );

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the following product: 
   - category: ${category} 
   - Product:  ${image}
   - Material: ${material} 
    Could you share more details and assist with the purchase? 😊`
  );
  const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;

  return (
    <div className={`product-details-page`}>
      <h1>{name}</h1>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", maxWidth: "500px" }}
      />

      <div className="product-info">
        <p>
          <strong>Material:</strong> {material}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>

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
      
      <div className="recommended-products">
        <h2>Recommended Products</h2>
        <div className="recommended-list">
          {recommendedProducts.map((product, index) => (
            <button
              className="rec-btn"
              onClick={() => goToProductPage(product)}
            >
              <div key={index} className="recommended-card">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "8px",
                  }}
                />

                <div>
                  <h3 className="rec-cat">{product.category}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
