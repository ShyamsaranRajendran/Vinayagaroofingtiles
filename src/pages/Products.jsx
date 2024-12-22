import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { Search, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import NoProducts from './NoProducts.jsx'
import SearchAnimation from "../assets/Animation - search.json"; // Lottie animation for the search box
// import FilterAnimation from "../assets/filter-animation.json";
// import HeaderAnimation from "../assets/header-animation.json"; 
import './css/product.css'
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
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    localStorage.setItem("categoryFilter", e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    localStorage.setItem("searchQuery", e.target.value);
    setCategoryFilter("");
    localStorage.setItem("categoryFilter", "");
  };

  const handleKeywordClick = (keyword) => {
    setSearchQuery(keyword);
    localStorage.setItem("searchQuery", keyword);
  };

  const clearSearch = () => {
    setSearchQuery("");
    localStorage.setItem("searchQuery", "");
  };

  const filteredProducts = products.filter(
    (product) =>
      (categoryFilter ? product.category === categoryFilter : true) &&
      (!searchQuery ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // const headerOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: HeaderAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  const searchOptions = {
    loop: true,
    autoplay: true,
    animationData: SearchAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const filterOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: FilterAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <div className="products-container">
      {/* Animated Header */}
      {/* <div className="products-header">
        <Lottie options={headerOptions} height={100} width={100} />
        <h1 className="products-title">Our Products</h1>
      </div> */}

      <div className="products-actions">
        {/* Animated Search Box */}
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
              Perforated Pattern (Jali ){" "}
            </li>
          </ul>
        </div>
      </div>

      {/* Animated Filter Dropdown */}
      <div className="filter-options">
        {/* <Lottie options={filterOptions} height={50} width={50} /> */}
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
          <NoProducts />
        )}
      </div>
    </div>
  );
}
