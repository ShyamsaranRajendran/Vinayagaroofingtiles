import React, { useState } from "react";
import { Filter, Search } from "lucide-react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    image:
      "https://5.imimg.com/data5/NSDMERP/Default/2024/11/465099508/NA/NO/NU/14768856/14768856-product-1731494556485-250x250.jpg",
    name: "Terracotta Clay Jali",
    price: 110,
    marketPrice: null,
    material: "Terracotta and Clay",
    dimensions: '8" x 8"',
    category: "Building Materials",
    subcategory: "Terracotta Products",
    color: "Red",
    shape: "Square",
    design: "Hollow",
    usage: "Side Walls",
    features: [],
    surfaceTreatment: null,
    technique: null,
    description: null,
    minimumOrderQuantity: "100 Pieces",
  },
  {
    image: "https://example.com/earthen-jali-bricks.jpg",
    name: "Earthen Jali Bricks (Flower)",
    price: 97.22,
    marketPrice: 208.32,
    material: "Earthen Clay",
    dimensions: "220 mm x 220 mm",
    category: "Building Materials",
    subcategory: "Jali Bricks",
    color: "Amber",
    shape: "Flower Design",
    design: "Intricate Flower Pattern",
    usage: "Decorative Walls",
    features: [],
    surfaceTreatment: null,
    technique: null,
    description: null,
    minimumOrderQuantity: "Varies by Supplier",
  },
  {
    image: "https://example.com/ceiling-flower-clay-tile.jpg",
    name: "Ceiling Flower Clay Tile",
    price: 0,
    marketPrice: null,
    material: "Clay",
    dimensions: '12.5" x 8.5"',
    category: "Tiles",
    subcategory: "Ceiling Tiles",
    color: "Natural Clay Red",
    shape: "Flower Design",
    design: "Elegant Flower Pattern",
    usage: "Ceiling Decoration",
    features: [],
    surfaceTreatment: null,
    technique: null,
    description:
      "Ceiling Flower Clay Tile is used to decorate our home with natural beauty.",
    minimumOrderQuantity: "Varies by Supplier",
  },
  {
    image: "https://example.com/antique-red-cement-roof-tile.jpg",
    name: "Antique Red - Cement Roof Tile",
    price: 69,
    marketPrice: null,
    material: "Cement/Flyash",
    dimensions: "420 x 330 mm",
    category: "Roof Tiles",
    subcategory: "Cement Tiles",
    color: "Antique Red",
    shape: null,
    design: null,
    usage: "Roofing",
    features: ["Water Proof", "Corrosion Resistant", "Durable Coating"],
    surfaceTreatment: "Coated",
    technique: null,
    description:
      "Antique Red Cement Roof Tile is a durable, waterproof, and corrosion-resistant roofing solution with a protective coating, perfect for long-lasting roofs.",
    minimumOrderQuantity: "Varies by Supplier",
  },
  {
    image: "https://example.com/color-coated-clay-ceiling-tile.jpg",
    name: "Color Coated Clay Ceiling Tile",
    price: 30,
    marketPrice: null,
    material: "Clay",
    dimensions: "22 x 32 cm",
    category: "Ceiling Tiles",
    subcategory: "Clay Tiles",
    color: "Red",
    shape: null,
    design: null,
    usage: "Home",
    features: [
      "Color Coated for durability and aesthetics",
      "Made from high-quality clay",
      "Suitable for home applications",
    ],
    surfaceTreatment: "Color Coated",
    technique: "Hot Rolled",
    description:
      "Color Coated Clay Ceiling Tile is a durable and aesthetically pleasing solution for home ceilings, crafted using hot-rolled technique for enhanced strength.",
    minimumOrderQuantity: "200 Pieces",
  },
  {
    image: "https://example.com/ridge-clay-roofing-tile.jpg",
    name: "11mm Ridge Clay Roofing Tile",
    price: 14,
    material: "Clay",
    dimensions: "463 x 297 mm",
    thickness: "11 mm",
    category: "Roofing Tiles",
    subcategory: "Ridge Tiles",
    color: "Brown",
    surfaceTreatment: "Polished",
    pattern: "Plain",
    features: [
      "Durable clay material for long-lasting roofing",
      "Polished surface for a smooth finish",
      "Plain design for a clean and classic look",
    ],
    minimumOrderQuantity: "50 Pieces",
    description:
      "The 11mm Ridge Clay Roofing Tile is crafted for high durability and a polished finish. Ideal for adding a clean and classic touch to your roof.",
  },
    {
      image: "https://example.com/altamash-roofing-pattern-profile-sheet.jpg",
      name: "ALTAMASH ROOFING Pattern Profile Sheet",
      price: null,
      marketPrice: null,
      material: "UPVC",
      dimensions: "1.97 m (Length) x 1.04 m (Width)",
      category: "Roofing Sheets",
      subcategory: "Pattern Profile Sheets",
      color: null,
      shape: null,
      design: null,
      usage: "Prefabricated Houses, Structures, Tiles Roofing",
      features: [
        "Durable UPVC material for long-lasting use",
        "Wide width of 1.04 m for optimal coverage",
        "Available in different length variations",
      ],
      surfaceTreatment: null,
      technique: null,
      description:
        "The ALTAMASH ROOFING Pattern Profile Sheet is designed for prefabricated houses and structures, providing an aesthetic and functional roofing solution with durable UPVC material.",
      minimumOrderQuantity: null,
    },
    {
      image: "https://example.com/clay-dry-cladding-brick.jpg",
      name: "Clay Dry Cladding Brick",
      price: 450,
      marketPrice: null,
      material: "Clay",
      dimensions: "Up to 40 mm (Thickness)",
      category: "Bricks",
      subcategory: "Cladding Bricks",
      color: "Brown",
      shape: "Rectangular",
      design: null,
      usage: "Construction",
      features: [
        "Glossy finish for enhanced aesthetics",
        "Durable clay material",
        "Rectangular shape for easy installation",
      ],
      surfaceTreatment: null,
      technique: null,
      description:
        "The Clay Dry Cladding Brick by Yashas Enterprises is designed for construction projects, offering a glossy finish, durable clay material, and ease of installation.",
      minimumOrderQuantity: "Contact for details",
    },
    {
      image: "https://example.com/mangalore-clay-roof-tiles.jpg",
      name: "Mangalore Clay Roof Tiles",
      price: 12,
      marketPrice: null,
      material: "Clay",
      dimensions: "7.5 x 4 x 2 inches (L x W x H)",
      category: "Roof Tiles",
      subcategory: "Clay Roof Tiles",
      color: "Brown",
      shape: null,
      design: null,
      usage: "Roofing for residential and commercial buildings",
      features: [
        "Durable and heat-resistant clay material",
        "Color-coated for a polished look",
        "Profiled design for better installation",
      ],
      surfaceTreatment: "Color Coated",
      technique: null,
      description:
        "Mangalore Clay Roof Tiles provide an excellent heat-resistant solution for roofing, featuring a durable clay build, polished finish, and profiled design for efficient installation.",
      minimumOrderQuantity: "Contact for details",
    },
  {
  image: "https://example.com/camp-clay-jali.jpg", // Replace with the actual product image URL
  name: "Camp Clay Jali",
  price: 75,
  material: "Clay",
  dimensions: "8 x 8 x 2.6 inches (L x W x H)",
  category: "Jali",
  subcategory: "Clay Jali",
  usage: "Side Walls",
  color: "Red",
  design: "Solid",
  resistance: ["Fire Resistant"],
  waterAbsorption: "5%",
  features: [
    "Durable clay material with fire-resistant properties",
    "Ideal for side walls in construction",
    "Solid design for strength and stability",
    "Low water absorption (5%)",
  ],
  description: "Camp Clay Jali provides a strong, fire-resistant solution for side walls, featuring solid construction and low water absorption for durability in various weather conditions.",
  minimumOrderQuantity: "Contact for details", // Update if specific quantity is provided
}
,


{
  image: "https://example.com/bubble-top-tile.jpg", // Replace with the actual product image URL
  name: "Bubble Top Tile",
  price: 30,
  priceUnit: "Square Feet",
  material: "All",
  usage: "All",
  color: "Many",
  size: "All",
  category: "Tiles",
  subcategory: "Decorative Tiles",
  features: [
    "Versatile design suitable for various applications",
    "Available in multiple colors and sizes",
    "Can be used in a variety of settings",
  ],
  description: "Bubble Top Tile offers a unique and versatile design suitable for a wide range of applications. Available in a variety of colors and sizes to fit different needs.",
  minimumOrderQuantity: "Contact for details", // Update if specific quantity is provided
}
,{
  image: "https://example.com/ceramic-profile-roof-tile.jpg", // Replace with the actual product image URL
  name: "Ceramic Profile Roof Tile",
  price: 70,
  priceUnit: "Piece",
  availability: "Out of Stock",
  material: "Ceramic",
  pattern: "Profile",
  surfaceTreatment: "Color Coated",
  dimensions: "400 x 300 mm (L x W)",
  color: ["Brown", "Black"],
  thickness: "20 mm",
  usage: "Residential",
  category: "Roofing Tiles",
  subcategory: "Ceramic Tiles",
  features: [
    "Durable ceramic material",
    "Color coated for enhanced aesthetics",
    "Suitable for residential roofing",
    "Available in brown and black colors",
  ],
  description: "The Ceramic Profile Roof Tile is designed for residential roofing, offering durability and aesthetic appeal with its color-coated surface. It comes in two color options, brown and black.",
  minimumOrderQuantity: "Contact for details", // Update if specific quantity is provided
}
,
  {
    image: "https://100pillars.in/wp-content/uploads/2022/09/Title-Image-1.jpg",
    name: "Classic Clay Tile",
    price: 599,
    material: "Natural Clay",
    dimensions: '10" x 6" x 0.5"',
    category: "Tiles",
    subcategory: "Clay",
  },
  {
    image:
      "https://technonicol.in/upload/materials/3_roofing_shingles_multilayer-min.jpg",
    name: "Slate Premium",
    price: 899,
    material: "Natural Slate",
    dimensions: '12" x 8" x 0.75"',
    category: "Tiles",
    subcategory: "Slate",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpY0GHxXzZUc6HsrBsX7Z52u1oTyrOlRjXQ&s",
    name: "Modern Metal",
    price: 499,
    material: "Galvanized Steel",
    dimensions: '24" x 12" x 0.25"',
    category: "Tiles",
    subcategory: "Clay",
  },
  {
    image:
      "https://www.static-contents.youth4work.com/y4w/6a46861f-0273-4a83-bb5e-e2839d23f6d9.png",
    name: "Solar Tile X",
    price: 1299,
    material: "Solar Glass",
    dimensions: '14" x 8" x 0.6"',
    category: "Tiles",
    subcategory: "Slate",
  },
  {
    image:
      " https://5.imimg.com/data5/SELLER/Default/2022/3/AK/AV/SO/49028997/tata-durashine-multicolor-tile-profile-sheet.jpg",
    name: "Classic Clay Tile",
    price: 599,
    material: "Natural Clay",
    dimensions: '10" x 6" x 0.5"',
    category: "Tiles",
    subcategory: "Clay",
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1632239776255-0a7f24814df2?auto=format&fit=crop&q=80",
  //   name: "Slate Premium",
  //   price: 899,
  //   material: "Natural Slate",
  //   dimensions: '12" x 8" x 0.75"',
  //   category: "Tiles",
  //   subcategory: "Slate",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1506748686217-88cc63b2b220?auto=format&fit=crop&q=80",
  //   name: "Wooden Flooring",
  //   price: 1200,
  //   material: "Wood",
  //   dimensions: '24" x 8" x 0.5"',
  //   category: "Flooring",
  //   subcategory: "Wood",
  // },
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
