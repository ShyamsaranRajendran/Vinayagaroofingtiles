import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import NoProducts from "./NoProducts.jsx";
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

 

  return (
    <div className="mt-4 p-4">
      {/* Search Bar */}
      <div className="flex flex-col gap-4">
        <div
          className="flex items-center gap-4 bg-white shadow-md p-3 rounded-lg w-full max-w-md mx-auto"
          style={{
            border: "1px solid #e0e0e0",
          }}
        >
          <CiSearch size={25} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-gray-700 w-full"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="text-red-600"
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
        <div className="text-sm text-gray-500 flex flex-col items-center lg:items-center">
          <p className="py-2 text-center">Try using these keywords:</p>
          <ul className="flex gap-3 flex-wrap justify-center">
            {["UPVC", "Ceramic", "Clay", "Jali"].map((keyword, index) => (
              <li
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="cursor-pointer text-blue-500 hover:text-blue-700 hover:underline transition-all px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700"
              >
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Category Filter */}
      <div className="relative mt-4">
        <select
          className="w-full p-3 px-5 border rounded-lg bg-white shadow-md appearance-none pr-10"
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
        <span className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
          ▼
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center py-6">
            <NoProducts />
          </div>
        )}
      </div>
    </div>
  );
}
