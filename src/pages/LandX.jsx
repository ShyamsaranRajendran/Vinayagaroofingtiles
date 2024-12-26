import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import "./css/landx.css";
import { Link } from "react-router-dom";
export default function RoofingLandingPageShuffle() {
const words = [
  "Elegant clay",
  "Classic ceilings",
  "Durable concrete",
  "Glossy ceramic",
  "Shimmering UPVC",
  "Precision laser",
  "Timeless grilles",
  "Storm gutters",
  "White concrete",
];

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [shufflingWord, setShufflingWord] = useState(currentWord);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      shuffleToNextWord();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  const shuffleToNextWord = () => {
    const nextWordIndex = (currentWordIndex + 1) % words.length;
    const nextWord = words[nextWordIndex];
    let iterations = 0;
    const maxIterations = 10;

    const shuffleInterval = setInterval(() => {
      if (iterations < maxIterations) {
        const intermediateWord = generateShuffledWord(
          currentWord,
          nextWord,
          iterations / maxIterations
        );
        setShufflingWord(intermediateWord);
        iterations++;
      } else {
        clearInterval(shuffleInterval);
        setCurrentWord(nextWord);
        setShufflingWord(nextWord);
        setCurrentWordIndex(nextWordIndex);
      }
    }, 100);
  };

const generateShuffledWord = (current, next, progress) => {
  const targetLength = 15; 
  const shuffled = Array.from({ length: targetLength }).map((_, i) => {
    if (Math.random() > progress) {
      return String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
    } else {
      return next[i] || " "; 
    }
  });
  return shuffled.join(""); 
};


  const navigate = useNavigate();
  const whatsappMessage = encodeURIComponent(`
Hi! I’m interested in learning more about your roofing solutions. Could you help me? 😊`);
  const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;

  const goToProductPage = () => {
    window.location.href = whatsappLink;
  };

  return (
    <div className="landX-container">
      <header className="landX-header">
        {/* <img src={logo} alt="logo" /> */}
        <p className="landX-title">
          <span className="landX-highlight">Secure</span> your home with{" "}
          <span className="landX-highlight">exceptional</span> roofing
        </p>
        <span className="landX-shuffle-text">{shufflingWord}</span>
      </header>
      <section className="landX-cta-section">
        <button className="landX-cta-button">
          <Link to="/products" className="link-learn">
            Explore Roofing Options
          </Link>
        </button>
        <button className="landX-cta-button-outline">
          <Link to="/about" className="link-learn">
            Learn More About Us
            {/* <img src={Arrow} alt="arrow" className="arrow-icon" /> */}
          </Link>
        </button>
      </section>
    </div>
  );
}
