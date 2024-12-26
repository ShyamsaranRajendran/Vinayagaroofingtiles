import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import { FaWhatsapp } from "react-icons/fa";
import "./css/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false); // Track image loading status

  // Fetch product details based on the id from the URL params
  useEffect(() => {
    const product = products.find((prod) => prod.id === parseInt(id)); // Adjusted to match product id
    if (product) {
      setProductDetails(product);
    }
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, [id]);

  const goToProductPage = (product) => {
    navigate(`/product/${encodeURIComponent(product.id)}`, {
      state: product,
    });
    window.scrollTo(0, 0);
  };

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const {
    id: productId,
    image,
    material,
    category,
    description,
    name,
  } = productDetails;

  const productPageLink = `${
    window.location.origin
  }/product/${encodeURIComponent(productId)}`;
  const regex = new RegExp(name, "i");
  const recommendedProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the following product: 
    - Category: ${category} 
    - Link: ${productPageLink}
    - Material: ${material} 
    Could you share more details and assist with the purchase? 😊`
  );
  const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;

  return (
    <div className="product-details-page">
      <div className="product-image-container">
        {!imageLoaded &&  <div className="splash-screen">
      <div className="loader">
      </div> </div>}
        <img
          src={image}
          alt={name}
          onLoad={() => setImageLoaded(true)} // Mark image as loaded
          style={{
            display: imageLoaded ? "block" : "none", // Hide image until it's loaded
            width: "100%",
            maxWidth: "500px",
          }}
        />
      </div>
      {imageLoaded && (
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
      )}

      {imageLoaded && (
        <div className="recommended-products">
          <h2>Recommended Products</h2>
          <div className="recommended-list">
            {recommendedProducts.map((product, index) => (
              <button
                className="rec-btn"
                onClick={() => goToProductPage(product)}
                key={index}
              >
                <div className="recommended-card">
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
      )}
    </div>
  );
}
