import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { Search, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import NoProducts from "./NoProducts.jsx";
import SearchAnimation from "../assets/Animation-search.json";
import { CiSearch } from "react-icons/ci";

const categories = [
  "Clay roofing tiles",
  "Clay false ceiling tiles",
  "Concrete roofing tiles",
  "Ceramic roofing tiles",
  "UPVC roofing shine tiles",
  "Laser Plates",
  "Clay jali",
  "UPVC Rain Gutter",
  "Concrete jali (white)",
];

export default function Products() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const savedCategory = localStorage.getItem("categoryFilter") || "all";
    const savedSearchQuery = localStorage.getItem("searchQuery") || "";

    setCategoryFilter(savedCategory);
    setSearchQuery(savedSearchQuery);
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;

    setCategoryFilter(category);
    setSearchQuery("");
    localStorage.setItem("categoryFilter", category);
    localStorage.setItem("searchQuery", "");
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;

    setSearchQuery(query);
    setCategoryFilter("all");
    localStorage.setItem("searchQuery", query);
    localStorage.setItem("categoryFilter", "all");
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
    <div className="p-4">
      {/* Search Bar */}
      <div className="flex flex-col gap-4">
        <div
          className="flex items-center gap-4 bg-white shadow-md p-3 rounded-lg"
          style={{
            border: "1px solid #e0e0e0",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <CiSearch size={25} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-gray-700"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="text-gray-500"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Suggested Keywords */}
        <div className="text-sm text-gray-500">
          <p>Try using these keywords:</p>
          <ul className="flex gap-3 flex-wrap">
            {[
              "UPVC roof",
              "Ceramic tiles",
              "Clay ",
              "Jali",
            ].map((keyword, index) => (
              <li
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="cursor-pointer text-blue-500 hover:text-blue-700 hover:underline transition-all"
                style={{ padding: "4px 8px", borderRadius: "20px" }}
              >
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mt-4">
        <select
          className="w-full p-3 border rounded-lg bg-white shadow-md"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
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
