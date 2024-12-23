import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './css/Carousel.css';
// CarouselSlide Component
const CarouselSlide = ({ image, title, description, cta, url }) => (
  <div
    className="carousel-slide"
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="carousel-content">
      <h2 className="carousel-slide-title">{title}</h2>
      <p className="carousel-slide-description">
        {description.split(" ").map((word, index) => {
          // Highlight important words
          if (
            ["roofing", "quality", "premium", "eco-friendly"].includes(
              word.toLowerCase()
            )
          ) {
            return (
              <span key={index} className="highlight">
                {word}
              </span>
            );
          }
          return word + " ";
        })}
      </p>
    </div>
  </div>
);

// CarouselIndicators Component
const CarouselIndicators = ({ total, current, onChange }) => (
  <div className="carousel-indicators">
    {Array.from({ length: total }).map((_, index) => (
      <div
        key={index}
        className={`carousel-indicator ${index === current ? "active" : ""}`}
        onClick={() => onChange(index)}
      ></div>
    ))}
  </div>
);

// Main Carousel Component
const Carousel = () => {
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
        "Transform your home with our high-quality roofing   materials.",
      cta: "Explore Products",
    },
    {
      image:
        "https://skyshieldroofs.com/wp-content/uploads/2021/12/roofing.jpeg",
      title: "Sustainable Solutions",
      description: "Eco-friendly roofing   options for a greener future.",
      cta: "Learn More",
    },
    {
      image:
        "https://i.pinimg.com/originals/5e/72/d5/5e72d5b22f1e3bdfa970d81c1034610f.jpg",
      title: "Innovative Roofing Designs",
      description: "Discover modern designs to enhance your living space.",
      cta: "Browse Designs",
    },
    {
      image:
        "https://tricitypropertysearches.com/wp-content/uploads/2022/05/What-color-roof-lasts-the-longest.jpg",
      title: "Weatherproof Roofing",
      description: "Durable and reliable materials to withstand any climate.",
      cta: "Check Products",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselSlide key={index} {...slide} />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={previousSlide}
        className="carousel-button carousel-button-left"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="carousel-button carousel-button-right"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <CarouselIndicators
        total={slides.length}
        current={currentSlide}
        onChange={goToSlide}
      />
    </div>
  );
};

export default Carousel;
