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

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="about-page py-16 bg-gray-50 dark:bg-gray-900">
      <div className="about-container max-w-6xl mx-auto px-6">
        <h1 className="about-title text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          About
        </h1>
        <p className="about-description text-lg text-center text-gray-600 dark:text-gray-400 mb-8">
          Since 1998,{" "}
          <span className="text-blue-500 font-semibold">Vinayaga Roofing</span>{" "}
          has been the leading provider of premium roofing solutions. We take
          pride in our commitment to quality, innovation, and customer
          satisfaction.
        </p>

        <div className="about-stats grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl"
            >
              <stat.icon className="stat-icon text-4xl text-blue-500 dark:text-blue-400 mb-4" />
              <div className="stat-value text-3xl font-semibold text-gray-800 dark:text-gray-200">
                {counts[index]}
                {stat.label === "Customer Satisfaction (%)" ? "%" : "+"}
              </div>
              <div className="stat-label text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="about-story bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="story-content space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We started as a small family business has grown into one of the
              most trusted names in roofing. Founded{" "}
              <span className="text-blue-500 font-semibold">38 years ago</span>{" "}
              by Paramasivam, and now maintained by{" "}
              <span className="text-blue-500 font-semibold">
                Senthil Murugan
              </span>
              , we focus on using only branded products.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We are proud to feature popular brands like:
            </p>
            <ul className="brand-list list-disc pl-6 text-gray-600 dark:text-gray-400">
              {[
                "Chitra Ceramic",
                "Swastik Tiles",
                "Thomson Tile",
                "Wiener Berger Bricks",
                "Pionnier Roof Tile",
                "Nuvocotto Clay Roof Tile",
                "Topco Ceramic Tiles",
              ].map((brand, index) => (
                <li key={index} className="text-lg">
                  {brand}
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We are proud to be a{" "}
              <span className="text-blue-500 font-semibold">
                <a
                  href="https://giberode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GBI
                </a>
              </span>{" "}
              member, showcasing our commitment to excellence and sustainable
              building practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
