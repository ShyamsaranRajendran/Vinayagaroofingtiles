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
    <section className="features-section">
      <h2 className="section-title">Our Features</h2>
      <p className="section-description">
        Discover the key features that set us apart.
      </p>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            {feature.icon}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
