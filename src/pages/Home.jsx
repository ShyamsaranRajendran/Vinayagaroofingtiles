import React, { useRef, useState, useEffect } from "react";
import Carousel from "../components/Hero/Carousel";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import LandX from './LandX';
import Brand from './Brand'
import { useNavigate } from "react-router-dom";
import Arrow from '../assets/arrow.svg'
const featuredProducts = [
  {
    id: 1,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDxgg2y3Vekn0jez0qGL33lVYxmSykExlNxBVWG-nLxWLJriMV",
    name: "Bubble Top Tile",
    category: "Ceramic Roofing Tiles",
    material: "Ceramic",
    tag: "trending",
    description:
      "Durable and aesthetically pleasing ceramic roofing tiles, ideal for residential and commercial buildings.",
  },

  {
    id: 16,
    image:
      "data:image/jpeg;base64,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",
    category: "Clay roofing tiles",
    material: "Clay",
    tag: "trending",
    description:
      "Clay roofing tiles are a timeless, durable, and environmentally-friendly roofing solution that offers both functional and aesthetic benefits. Made from natural clay, these tiles are shaped and fired at high temperatures, ensuring strength and longevity. Their unique, earthy appearance adds a distinctive charm to any building, enhancing the overall aesthetic while providing excellent protection.",
  },

  {
    id: 17,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRYPBKU4jlakuQCDfNmEN1WLkfrWb9WU5Rp5YfzdCWy5ayyEkYq",
    category: "Concrete roofing tiles",
    material: "Concrete",
    tag: "trending",
    description:
      "Concrete roofing tiles are a highly durable and versatile roofing solution known for their strength, longevity, and cost-effectiveness. Made from a mixture of cement, sand, and water, these tiles are molded into various shapes and designs to suit different architectural styles. Concrete tiles are incredibly robust, offering excellent protection against harsh weather conditions such as heavy rain, high winds, and extreme temperatures.",
  },
  {
    id: 68,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi6WKcE6iZvgT-xLVCDcSKymsRGGJ-f7Y7jv0p_UnoLqUVy5BE",
    name: "Bubble Top Tile",
    category: "Concrete jali (white)",
    material: "Concrete",
    tag: "trending",
    description:
      "Durable concrete tiles with a bubble top texture, perfect for various roofing applications.",
  },
];

export default function Home() {

  return (
    <div className="home-wrapper">
      <LandX />
      <Carousel />
      <Brand />

      <div className="home-featured-section">
        <div className="home-featured-header">
          <h2 className="home-featured-title">Featured Products</h2>
          <p className="home-featured-description">
            Discover our selection of premium roofing tiles, designed to enhance
            the beauty and protection of your home.
          </p>
        </div>
        <div className="home-products-grid">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="see-more-card">
          <button className="landX-cta-button">
            <Link to="/products" className="link-learn">
              See More
              <img src={Arrow} alt="arrow" className="arrow-icon" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}