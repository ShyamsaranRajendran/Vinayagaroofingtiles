import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay" />
      </div>

      <div className="hero-content container mx-auto px-6">
        <div className="hero-text max-w-3xl text-white">
          <h1 className="hero-title">
            Durable, Stylish, and Affordable Roofing Solutions
          </h1>
          <p className="hero-description">
            Transform your home with our premium selection of roofing tiles.
            Expert installation and lifetime warranty included.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">
              Explore Tiles <ArrowRight size={20} />
            </button>
            <button className="secondary-button">Get a Free Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}
