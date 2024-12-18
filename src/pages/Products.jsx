import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import NoProduct from '../assets/no-product.png';
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

  const handleKeywordClick = (keyword) => {
    setSearchQuery(keyword);
    localStorage.setItem("searchQuery", keyword);
  };

  const filteredProducts = products.filter(
    (product) =>
      (categoryFilter ? product.category === categoryFilter : true) &&
      (!searchQuery ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
            <button onClick={() => handleKeywordClick("")}>clear</button>
          </div>
          <div className="suggested-keywords-container">
            <p>Try using these keywords:</p>
            <ul className="suggested-keywords">
              <li onClick={() => handleKeywordClick("UPVC")}>Metal roof</li>
              <li onClick={() => handleKeywordClick("Ceramic")}>Ceramic</li>
              <li onClick={() => handleKeywordClick("Clay")}>
                Clay tiles
              </li>{" "}
              <li onClick={() => handleKeywordClick("brick")}>Bricks</li>
            </ul>
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
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))
        ) : (
          <div className="no-products-found">
            <img
              src={NoProduct}
              alt="No products found"
              className="no-products-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}
