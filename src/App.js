import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import TermsAndServices from "./pages/TermsAndServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./App.css";
import logodp from "./assets/logo.svg"
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
      <div className="poper">
        <img src={logodp} alt="dp"></img>
      </div>
      <h1>Welcome to Vinayaga Roofing Tiles</h1>
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
    const timer = setTimeout(() => setIsLoading(false), 4000);
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
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/terms" element={<TermsAndServices />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
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
