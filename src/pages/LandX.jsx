import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import { Link } from "react-router-dom"; // Importing Link

export default function RoofingLandingPageShuffle() {
  const words = [
    "durable metal roof",
    "stylish asphalt shingles",
    "eco-friendly green roof",
    "classic clay tiles",
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);
  const [shufflingWord, setShufflingWord] = useState(currentWord);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      shuffleToNextWord();
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
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
    }, 100); // Shuffle letters every 100ms
  };

  const generateShuffledWord = (current, next, progress) => {
    const maxLength = Math.max(current.length, next.length);
    const shuffled = Array.from({ length: maxLength }).map((_, i) => {
      if (Math.random() > progress) {
        return String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random letter
      } else {
        return next[i] || " "; // Gradually settle to the next word
      }
    });
    return shuffled.join("");
  };

  const navigate = useNavigate();
  const whatsappMessage = encodeURIComponent(`
Could you share more details and assist with the purchase? 😊`);
  const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;

  const goToProductPage = () => {
    window.location.href = whatsappLink; // Direct navigation
  };

  return (
    <div className="landX-container">
      <header className="landX-header">
        <h1 className="landX-title">Welcome to Premium Roofing Solutions</h1>
        <p className="landX-subtitle">
          Protecting your home with the best{" "}
          <span className="landX-shuffle-text">{shufflingWord}</span>
        </p>
      </header>
      <section className="landX-cta-section">
        <button className="landX-cta-button">
          <Link to="/products" className="link-learn">
            Get Your Choice{" "}
          </Link>{" "}
        </button>
        <button className="landX-cta-button-outline">
          <Link to="/about" className="link-learn">
            Learn More
          </Link>{" "}
        </button>
      </section>
    </div>
  );
}
