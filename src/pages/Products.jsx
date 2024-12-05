import React, { useState } from "react";
import { Filter, Search } from "lucide-react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1622993295842-5cea471a10cd?auto=format&fit=crop&q=80",
    name: "Classic Clay Tile",
    price: 599,
    material: "Natural Clay",
    dimensions: '10" x 6" x 0.5"',
    category: "Tiles",
    subcategory: "Clay",
  },
  {
    image:
      "https://images.unsplash.com/photo-1632239776255-0a7f24814df2?auto=format&fit=crop&q=80",
    name: "Slate Premium",
    price: 899,
    material: "Natural Slate",
    dimensions: '12" x 8" x 0.75"',
    category: "Tiles",
    subcategory: "Slate",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506748686217-88cc63b2b220?auto=format&fit=crop&q=80",
    name: "Wooden Flooring",
    price: 1200,
    material: "Wood",
    dimensions: '24" x 8" x 0.5"',
    category: "Flooring",
    subcategory: "Wood",
  },
  // More products...
];

const categories = ["Tiles", "Flooring"];
const subcategories = {
  Tiles: ["Clay", "Slate", "Marble"],
  Flooring: ["Wood", "Laminate", "Bamboo"],
};

const dimensionOptions = [
  { label: '10" x 6" x 0.5"', value: '10" x 6" x 0.5"' },
  { label: '12" x 8" x 0.75"', value: '12" x 8" x 0.75"' },
  { label: '24" x 8" x 0.5"', value: '24" x 8" x 0.5"' },
  // Add more dimensions if needed
];

export default function Products() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [subcategoryFilter, setSubcategoryFilter] = useState("");
  const [dimensionFilter, setDimensionFilter] = useState("");

  return (
    <div className="products-container">
      <div className="products-header">
        <h1 className="products-title">Our Products</h1>
        <div className="products-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <Search className="search-icon" size={20} />
          </div>
          <button className="filter-button">
            <Filter size={20} />
            Filter
          </button>
        </div>
      </div>

      {/* Filter Options */}
      <div className="filter-options">
        {/* Category Filter */}
        <select
          className="filter-select"
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            setSubcategoryFilter(""); // Reset subcategory filter when category changes
            setDimensionFilter(""); // Reset dimension filter when category changes
          }}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Subcategory Filter */}
        {categoryFilter && (
          <select
            className="filter-select"
            value={subcategoryFilter}
            onChange={(e) => setSubcategoryFilter(e.target.value)}
          >
            <option value="">All Subcategories</option>
            {subcategories[categoryFilter] &&
              subcategories[categoryFilter].map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
          </select>
        )}

        {/* Dimension Filter */}
        <select
          className="filter-select"
          value={dimensionFilter}
          onChange={(e) => setDimensionFilter(e.target.value)}
        >
          <option value="">All Dimensions</option>
          {dimensionOptions.map((dimension) => (
            <option key={dimension.value} value={dimension.value}>
              {dimension.label}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products
          .filter(
            (product) =>
              (categoryFilter ? product.category === categoryFilter : true) &&
              (subcategoryFilter
                ? product.subcategory === subcategoryFilter
                : true) &&
              (dimensionFilter ? product.dimensions === dimensionFilter : true)
          )
          .map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
      </div>
    </div>
  );
}
