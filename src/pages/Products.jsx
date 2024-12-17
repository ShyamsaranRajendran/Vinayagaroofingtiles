import React, { useState, useEffect } from "react";
import { Filter, Search } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

const categories = [
  "Clay roofing tiles",
  "Clay false ceiling tiles",
  "Concrete roofing tiles",
  "Ceramic roofing tiles",
  "UPVC roofing shine tiles",
  "Laser Plates",
  "Wire clay brick",
  "UPVC Rain Gutter",
];

const brands = [
  "Chitra Ceramic",
  "Swastik Tiles",
  "Thomson Tile",
  "Wiener Berger Bricks",
  "Pionnier Roof Tile",
  "Nuvocotto Clay Roof Tile",
  "Topco Ceramic Tiles",
];

export default function Products() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Load saved filters from localStorage if they exist
  useEffect(() => {
    const savedCategory = localStorage.getItem("categoryFilter");
    const savedSearchQuery = localStorage.getItem("searchQuery");

    if (savedCategory) {
      setCategoryFilter(savedCategory);
    }

    if (savedSearchQuery) {
      setSearchQuery(savedSearchQuery);
    }
  }, []);

  // Save filters to localStorage whenever they change
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    localStorage.setItem("categoryFilter", e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    localStorage.setItem("searchQuery", e.target.value);
  };

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
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="search-icon" size={20} />
          </div>
        </div>
      </div>

      <div className="filter-options">
        <select
          className="filter-select"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category} >
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="products-grid">
        {products
          .filter(
            (product) =>
              (categoryFilter ? product.category === categoryFilter : true) &&
              (!searchQuery ||
                product.category
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()))
          )
          .map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
      </div>
    </div>
  );
}
