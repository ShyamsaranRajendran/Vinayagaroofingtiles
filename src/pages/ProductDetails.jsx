import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [recommendedImageLoaded, setRecommendedImageLoaded] = useState({});

  useEffect(() => {
    const product = products.find((prod) => prod.id === parseInt(id));
    if (product) {
      setProductDetails(product);
    }
    window.scrollTo(0, 0);
  }, [id]);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // Navigate to the previous page
    } else {
      navigate("/products"); // Fallback to the landing page
    }
  };

  const handleImageLoad = (productId) => {
    setRecommendedImageLoaded((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
  };

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  if (!productDetails) {
    return <div className="text-center mt-8 text-gray-500">Loading...</div>;
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
  const recommendedProducts = shuffleArray(
    products.filter(
      (product) =>
        product.category.toLowerCase() === category.toLowerCase() &&
        product.id !== productId // Exclude the current product
    )
  );

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the following product: 
    - Category: ${category} 
    - Link: ${productPageLink}
    Could you share more details and assist with the purchase? 😊`
  );
  const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header */}
      <div className="fixed top-17 right-4 z-50 flex items-center space-x-2">
        <button
          onClick={handleBack}
          className="flex items-center text-white hover:text-gray-900 dark:text-white p-3 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 focus:outline-none"
        >
          <FaArrowLeft size={18} />
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-8 bg-white shadow-lg rounded-lg p-6">
        {/* Product Image */}
        <div className="flex-1">
          {!imageLoaded && (
            <div className="w-full h-80 bg-gray-200 animate-pulse rounded-lg"></div>
          )}
          <img
            src={image}
            alt={name}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-90 object-cover rounded-lg ${
              imageLoaded ? "block" : "hidden"
            }`}
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
          <p className="mt-2 text-gray-600">
            <strong>Material:</strong> {material}
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Category:</strong> {category}
          </p>
          <p className="mt-4 text-gray-700">{description}</p>

          <div className="mt-6 flex justify-center items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              <FaWhatsapp className="w-5 h-5" />
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-4">
            Recommended Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedProducts
              .filter((product) => product.id !== productId) // Exclude the current product
              .sort(() => Math.random() - 0.5) // Shuffle the array
              .map((product) => (
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
                >
                  <div className="relative">
                    {/* Recommended product image loader */}
                    {!recommendedImageLoaded[product.id] && (
                      <div className="flex items-center justify-center w-full h-42">
                        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      onLoad={() => handleImageLoad(product.id)}
                      className={`w-full h-38 object-cover ${
                        recommendedImageLoaded[product.id] ? "block" : "hidden"
                      }`}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500">{product.category}</p>
                  </div>
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
