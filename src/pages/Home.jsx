import React from "react";
import Carousel from "../components/Hero/Carousel";
import Features from "../components/Features";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  {
    image: "https://100pillars.in/wp-content/uploads/2022/09/Title-Image-1.jpg",
    name: "Classic Clay Tile",
    price: 599,
    material: "Natural Clay",
    dimensions: '10" x 6" x 0.5"',
  },
  {
    image:
      "https://technonicol.in/upload/materials/3_roofing_shingles_multilayer-min.jpg",
    name: "Slate Premium",
    price: 899,
    material: "Natural Slate",
    dimensions: '12" x 8" x 0.75"',
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpY0GHxXzZUc6HsrBsX7Z52u1oTyrOlRjXQ&s",
    name: "Modern Metal",
    price: 499,
    material: "Galvanized Steel",
    dimensions: '24" x 12" x 0.25"',
  },
  {
    image:
      "https://www.static-contents.youth4work.com/y4w/6a46861f-0273-4a83-bb5e-e2839d23f6d9.png",
    name: "Solar Tile X",
    price: 1299,
    material: "Solar Glass",
    dimensions: '14" x 8" x 0.6"',
  },
  // https://5.imimg.com/data5/SELLER/Default/2022/3/AK/AV/SO/49028997/tata-durashine-multicolor-tile-profile-sheet.jpg
];

export default function Home() {
  return (
    <div className="home-wrapper">
      <Carousel />
      <Features />

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
      </div>
    </div>
  );
}
