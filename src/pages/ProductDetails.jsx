import React from "react";
import { useLocation, useParams } from "react-router-dom";
import products from "../data/products.json";

import { FaWhatsapp } from "react-icons/fa";
export default function ProductDetails() {
  const { name } = useParams();
  const location = useLocation();

  // Destructure the product details from location.state
  const {
    image,
    price,
    material,
    size,
    category,
    subcategory,
    features,
    description,
    minimumOrderQuantity,
  } = location.state || {};

  // Filter recommended products based on the current product's category
  const recommendedProducts = products.filter(
    (product) => product.category === category && product.name !== name
  );

  // WhatsApp message URL
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the following product: 
- Name: ${name} 
- Material: ${material} 
Could you share more details and assist with the purchase? 😊`
  );
  const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;

  return (
    <div className="product-details-page">
      <h1>{name}</h1>

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        style={{ width: "100%", maxWidth: "500px" }}
      />

      {/* Product Details */}
      <div className="product-info">
        <p>
          <strong>Material:</strong> {material}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Subcategory:</strong> {subcategory}
        </p>

        {/* Features */}
        <div>
          <strong>Features:</strong>
          <ul>
            {features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Product Description */}
        <p>
          <strong>Description:</strong> {description}
        </p>

        {/* Minimum Order Quantity */}
        <p>
          <strong>Minimum Order Quantity:</strong> {minimumOrderQuantity}
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

      {/* Recommended Products */}
      <div className="recommended-products">
        <h2>Recommended Products</h2>
        <div className="recommended-list">
          {recommendedProducts.map((product, index) => (
            <div key={index} className="recommended-card">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100px", height: "100px", borderRadius: "8px" }}
              />
              <div>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.subcategory}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
