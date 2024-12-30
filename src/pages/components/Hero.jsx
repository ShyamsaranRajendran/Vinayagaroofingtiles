import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Ensure this is imported

// Hero component
export function Hero() {
  const slides = [
    {
      image:
        "https://nuvocotto.com/wp-content/uploads/2022/03/ceiling-tiles-hi.jpg",
      title: "Trusted by Thousands",
      description:
        "Join our growing community of satisfied customers worldwide.",
      cta: "View Testimonials",
    },
    {
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2021/07/28195700/All-about-roofing-sheets-Explore-these-evolving-roofing-trends-for-your-home-FB-1200x700-compressed.jpg",
      title: "Premium Roofing Solutions",
      description:
        "Transform your home with our high-quality roofing materials.",
      cta: "Explore Products",
    },
    {
      image:
        "https://skyshieldroofs.com/wp-content/uploads/2021/12/roofing.jpeg",
      title: "Sustainable Solutions",
      description: "Eco-friendly roofing options for a greener future.",
      cta: "Learn More",
    },
    {
      image:
        "https://i.pinimg.com/originals/5e/72/d5/5e72d5b22f1e3bdfa970d81c1034610f.jpg",
      title: "Innovative Roofing Designs",
      description: "Discover modern designs to enhance your living space.",
      cta: "Browse Designs",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const navigate = useNavigate(); // Use the hook to get the navigate function

  // Function to get a random slide
  const getRandomSlide = () => {
    const randomIndex = Math.floor(Math.random() * slides.length);
    setCurrentSlide(slides[randomIndex]);
  };

  useEffect(() => {
    const interval = setInterval(getRandomSlide, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 3.5 } },
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content Section */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="text-blue-400 font-medium dark:text-blue-300"
              variants={itemVariants}
            >
              Welcome to Vinayaga Roofing Tiles!
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100"
              variants={itemVariants}
            >
              Discover Premium
              <br />
              Roofing Solutions
            </motion.h1>
            <motion.p
              className="text-gray-700 max-w-md dark:text-gray-200"
              variants={itemVariants}
            >
              Protect and beautify your home with our wide range of durable and
              stylish roofing tiles.
            </motion.p>
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
              variants={itemVariants}
              onClick={() => navigate(`/products`)} 
                  >
              Explore Now
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative h-[400px] md:h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={currentSlide.image}
              alt="Roofing tiles display"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
