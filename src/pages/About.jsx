import React from "react";
import { Award, Users, Building, Target } from "lucide-react";

const stats = [
  { icon: Building, value: "1000+", label: "Projects Completed" },
  { icon: Users, value: "50+", label: "Expert Team Members" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Target, value: "100%", label: "Customer Satisfaction" },
];

export default function About() {
  return (
    <div className="about-section py-8">
      <div className="about-container container mx-auto px-6">
        <div className="about-header max-w-3xl mx-auto text-center mb-12">
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
              <div className="stat-value text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="stat-label text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="about-story grid md:grid-cols-2 gap-12 items-center">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&q=80"
              alt="Our Team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="story-content">
            <h2 className="story-title text-2xl font-bold mb-4">Our Story</h2>
            <p className="story-description text-gray-600 mb-4">
              What started as a small family business has grown into one of the
              most trusted names in roofing. Our journey has been built on the
              foundation of quality workmanship, integrity, and customer
              satisfaction.
            </p>
            <p className="story-description text-gray-600 mb-4">
              Today, we continue to innovate and bring the latest roofing
              technologies and materials to our customers, while maintaining the
              personal touch and attention to detail that has been our hallmark
              since day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
