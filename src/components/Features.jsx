import React from "react";
import { Shield, Truck, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "All our tiles are tested for durability and weather resistance",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders over $1000",
  },
  {
    icon: Clock,
    title: "Expert Installation",
    description: "Professional installation by certified experts",
  },
  {
    icon: Award,
    title: "Lifetime Warranty",
    description: "Peace of mind with our comprehensive warranty",
  },
];

export default function Features() {
  return (
    <div className="features-section">
      <div className="container">
        <div className="features-grid grid ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <feature.icon className="feature-icon " />
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
