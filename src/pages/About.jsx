import React, { useEffect, useState, useCallback } from "react";
import { FaAward, FaUsers, FaBuilding, FaBullseye } from "react-icons/fa";

const stats = [
  { icon: FaBuilding, value: 1000, label: "Projects Completed" },
  { icon: FaUsers, value: 50, label: "Expert Team Members" },
  { icon: FaAward, value: 35, label: "Years Experience" },
  { icon: FaBullseye, value: 100, label: "Customer Satisfaction (%)" },
];

const About = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark-mode");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 0.1 }
    );

    const statsSection = document.querySelector(".about-stats");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = useCallback(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((_, i) => {
          const progress = currentStep / steps;
          return Math.round(progress * stats[i].value);
        })
      );

      currentStep++;
      if (currentStep > steps) {
        clearInterval(interval);
        setCounts(stats.map((stat) => stat.value));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`about-page ${isDark ? "dark-mode" : ""}`}>
      
      <div className="about-container">
        <h1 className="about-title">About </h1>
        <p className="about-description">
          Since 1998,  Vinayaga Roofing has  been the leading provider of premium roofing
          solutions. We take pride  in our commitment to quality, innovation, and
          customer satisfaction.
        </p>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon className="stat-icon" />
              <div className="stat-value">
                {counts[index]}
                {stat.label === "Customer Satisfaction (%)" ? "%" : "+"}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="about-story">
          <img
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Our Team"
            className="story-image"
          />
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              What started as a small family business has grown into one of the
              most trusted names in roofing. Founded 38 years ago by
              Paramasivam, and now maintained by Senthil Murugan, we focus on
              using only branded products.
            </p>
            <p>We are proud to feature popular brands like:</p>
            <ul className="brand-list">
              {[
                "Vinayaga Roofing Tiles",
                "Chitra Ceramic",
                "Swastik Tiles",
                "Thomson Tile",
                "Wiener Berger Bricks",
                "Pionnier Roof Tile",
                "Nuvocotto Clay Roof Tile",
                "Topco Ceramic Tiles",
              ].map((brand, index) => (
                <li key={index}>{brand}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
