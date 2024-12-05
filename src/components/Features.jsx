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
    <div className="features-section py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="features-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white p-6 rounded-lg shadow-sm"
            >
              <feature.icon className="feature-icon w-12 h-12 text-green-600 mb-4" />
              <h3 className="feature-title font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="feature-description text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
