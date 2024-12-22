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
    tag: "true",
    description:
      "Durable and aesthetically pleasing ceramic roofing tiles, ideal for residential and commercial buildings.",
  },

  {
    id: 42,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ojYrsBXjlPSTR-VAKvkkj_Gfg3UJI0G-UXwK-p4feDQUiB4b",
    name: "Bubble Top Tile",
    category: "Clay roofing tiles",
    material: "Clay",
    description:
      "Elegant bubble top clay tiles for a sturdy and water-resistant roof.",
    price: 300,
    brand: "RoofTop",
  },

  {
    id: 31,
    image:
      "https://i0.wp.com/brickart.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-20-at-1.25.44-PM-3.jpeg?fit=1024%2C683&ssl=1",
    name: "Bubble Top Tile",
    category: "Wire clay brick",
    description:
      "Premium-quality wire-cut clay bricks designed for enhanced strength and aesthetic appeal.",
  },
  {
    id: 68,
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi6WKcE6iZvgT-xLVCDcSKymsRGGJ-f7Y7jv0p_UnoLqUVy5BE",
    name: "Bubble Top Tile",
    category: "Concrete jali (white)",
    material: "Concrete",
    description:
      "Durable concrete tiles with a bubble top texture, perfect for various roofing applications.",
  },
];

export default function Home() {

  const navigate = useNavigate();
 const whatsappMessage = encodeURIComponent(`
Could you share more details and assist with the purchase? 😊`);
 const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;

 const goToProductPage = () => {
   window.location.href = whatsappLink; 
 };

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
              <img src={Arrow} alt="" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}