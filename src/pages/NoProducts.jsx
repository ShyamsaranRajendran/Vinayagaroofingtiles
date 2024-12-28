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
    <div className="no-products flex flex-col items-center justify-center p-6 dark:bg-gray-800 dark:text-gray-200">
      <Lottie options={defaultOptions} height={300} width={300} />
      <p className="message text-lg mt-4 text-gray-700 dark:text-gray-300">
        No products found. Please try another search or filter.
      </p>
    </div>
  );
};

export default NoProducts;
