import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from './pages/ProductDetails';
import "./App.css";

const SplashScreen = () => {
  const brands = [
    "Chitra Ceramic",
    "Swastik Tiles",
    "Thomson Tile",
    "Wiener Berger Bricks",
    "Pionnier Roof Tile",
    "Nuvocotto Clay Roof Tile",
    "Topco Ceramic Tiles",
  ];

  return (
    <div className="splash-screen">
      <div className="loader"></div>
      <h1>Welcome to Our Store Vinayaga Roofing Tiles </h1>
      <div className="brand-list">
        {brands.map((brand, index) => (
          <div key={index} className="brand-item">
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {isLoading ? (
          <SplashScreen />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="/product/:name" element={<ProductDetails />} />
              <Route path="services" element={<Services />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
