import React, { useEffect, useState } from "react";
import { Award, Users, Building, Target } from "lucide-react";

const stats = [
  { icon: Building, value: 1000, label: "Projects Completed" },
  { icon: Users, value: 50, label: "Expert Team Members" },
  { icon: Award, value: 35, label: "Years Experience" },
  { icon: Target, value: 100, label: "Customer Satisfaction (%)" },
];

const About = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) =>
          count < stats[i].value ? count + 1 : stats[i].value
        )
      );
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-section py-8">
      <div className="about-container container mx-auto px-6">
        <div className="about-header text-center mb-12">
          <h1 className="about-title text-3xl font-bold mb-4">
            About RoofCraft
          </h1>
          <p className="about-description text-gray-600">
            Since 1998, RoofCraft has been the leading provider of premium
            roofing solutions. We take pride in our commitment to quality,
            innovation, and customer satisfaction.
          </p>
        </div>

        <div className="about-stats grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <stat.icon className="stat-icon w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="stat-value text-3xl font-bold text-yellow-600 mb-2">
                <div className="stat-value text-3xl font-bold text-yellow-600 mb-2">
                  {counts[index]}{" "}
                  {stat.label === "Customer Satisfaction (%)" ? "%" : "+"}
                </div>
              </div>
              <div className="stat-label text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="about-story grid md:grid-cols-2 gap-12 items-center">
          <div className="story-image">
            <img
              src="https://images.pexels.com/photos/221525/pexels-photo-221525.jpeg?cs=srgb&dl=pexels-pixabay-221525.jpg&fm=jpg"
              alt="Our Team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="story-content">
            <h2 className="story-title text-2xl font-bold mb-4">Our Story</h2>
            <p className="story-description text-gray-600 mb-4">
              What started as a small family business has grown into one of the
              most trusted names in roofing. Founded 38 years ago by
              Paramasivam, and now maintained by Senthil Murugan, we focus on
              using only branded products.
            </p>
            <p className="story-description text-gray-600 mb-4">
              We are a proud GIB member and feature popular brands like:
            </p>
            <ul className="brandlist mb-4">
              <li>- Vinayaga Roofing Tiles</li>
              <li>- Chitra Ceramic</li>
              <li>- Swastik Tiles</li>
              <li>- Thomson Tile</li>
              <li>- Wiener Berger Bricks</li>
              <li>- Pionnier Roof Tile</li>
              <li>- Nuvocotto Clay Roof Tile</li>
              <li>- Topco Ceramic Tiles</li>
            </ul>
            <p className="story-description text-gray-600">
              Today, we continue to innovate and bring the latest roofing
              technologies to our customers while maintaining the personal touch
              and attention to detail that has been our hallmark since day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
