import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { Search, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import NoProducts from "./NoProducts.jsx";
import SearchAnimation from "../assets/Animation-search.json"; // Lottie animation for the search box
import "./css/product.css";

const categories = [
  "Clay roofing tiles",
  "Clay false ceiling tiles",
  "Concrete roofing tiles",
  "Ceramic roofing tiles",
  "UPVC roofing shine tiles",
  "Laser Plates",
  "Wire clay jali",
  "UPVC Rain Gutter",
  "Concrete jali (white)",
];

export default function Products() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Load filters from localStorage on mount
  useEffect(() => {
    const savedCategory = localStorage.getItem("categoryFilter") || "all";
    const savedSearchQuery = localStorage.getItem("searchQuery") || "";

    setCategoryFilter(savedCategory);
    setSearchQuery(savedSearchQuery);
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;

    setCategoryFilter(category);
    setSearchQuery(""); // Reset search query
    localStorage.setItem("categoryFilter", category);
    localStorage.setItem("searchQuery", ""); // Clear search from storage
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;

    setSearchQuery(query);
    setCategoryFilter("all"); // Reset category filter
    localStorage.setItem("searchQuery", query);
    localStorage.setItem("categoryFilter", "all"); // Update storage
  };

  const handleKeywordClick = (keyword) => {
    setSearchQuery(keyword);
    setCategoryFilter("all");
    localStorage.setItem("searchQuery", keyword);
    localStorage.setItem("categoryFilter", "all");
  };

  const clearSearch = () => {
    setSearchQuery("");
    localStorage.setItem("searchQuery", "");
  };

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    const matchesSearchQuery = searchQuery
      ? product.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesCategory && matchesSearchQuery;
  });

  const searchOptions = {
    loop: true,
    autoplay: true,
    animationData: SearchAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="products-container">
      <div className="products-actions">
        <div className="search-box">
          <Lottie options={searchOptions} height={25} width={25} />
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <button className="clear-search-button" onClick={clearSearch}>
              <X size={18} />
            </button>
          )}
        </div>

        <div className="suggested-keywords-container">
          <p>Try using these keywords:</p>
          <ul className="suggested-keywords">
            <li onClick={() => handleKeywordClick("UPVC")}>UPVC roof</li>
            <li onClick={() => handleKeywordClick("Ceramic")}>Ceramic tiles</li>
            <li onClick={() => handleKeywordClick("Clay")}>Clay tiles</li>
            <li onClick={() => handleKeywordClick("Jali")}>
              Perforated Pattern (Jali)
            </li>
          </ul>
        </div>
      </div>

      <div className="filter-options">
        <select
          className="filter-select"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
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
          <NoProducts />
        )}
      </div>
    </div>
  );
}
