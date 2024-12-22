import React from "react";
import Lottie from "react-lottie";
import NoProductsAnimation from "../assets/no-data.json"; // Lottie JSON file

const NoProducts = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoProductsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="no-products">
      <Lottie options={defaultOptions} height={300} width={300} />
      <p className="message">
        No products found. Please try another search or filter.
      </p>
    </div>
  );
};

export default NoProducts;
