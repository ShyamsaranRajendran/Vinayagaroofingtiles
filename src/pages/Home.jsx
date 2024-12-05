import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductCard from "../components/ProductCard";


const featuredProducts = [
  {
    image:
      "https://images.unsplash.com/photo-1622993295842-5cea471a10cd?auto=format&fit=crop&q=80",
    name: "Classic Clay Tile",
    price: 599,
    material: "Natural Clay",
    dimensions: '10" x 6" x 0.5"',
  },
  {
    image:
      "https://images.unsplash.com/photo-1632239776255-0a7f24814df2?auto=format&fit=crop&q=80",
    name: "Slate Premium",
    price: 899,
    material: "Natural Slate",
    dimensions: '12" x 8" x 0.75"',
  },
  {
    image:
      "https://images.unsplash.com/photo-1632239763277-082e8c7f0f51?auto=format&fit=crop&q=80",
    name: "Modern Metal",
    price: 499,
    material: "Galvanized Steel",
    dimensions: '24" x 12" x 0.25"',
  },
  {
    image:
      "https://images.unsplash.com/photo-1632239763553-7fc7e11c8f65?auto=format&fit=crop&q=80",
    name: "Solar Tile X",
    price: 1299,
    material: "Solar Glass",
    dimensions: '14" x 8" x 0.6"',
  },
];

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Features />

      <section className="home-featured-section">
        <div className="home-header">
          <h2 className="home-title">Featured Products</h2>
          <p className="home-description">
            Discover our selection of premium roofing tiles, designed to enhance
            the beauty and protection of your home.
          </p>
        </div>

        <div className="home-products-grid">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
