import React from "react";
import { Wrench, Shield, Ruler, Clock } from "lucide-react";
const services = [
  {
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Expert installation by our certified team of professionals with years of experience.",
    price: "Starting from $2,500",
  },
  {
    icon: Shield,
    title: "Maintenance & Repair",
    description:
      "Regular maintenance and prompt repair services to keep your roof in perfect condition.",
    price: "Starting from $299",
  },
  {
    icon: Ruler,
    title: "Roof Inspection",
    description:
      "Comprehensive roof inspection to identify potential issues before they become problems.",
    price: "Starting from $149",
  },
  {
    icon: Clock,
    title: "Emergency Services",
    description: "24/7 emergency repair services for urgent roofing problems.",
    price: "Starting from $399",
  },
];

export default function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          We offer comprehensive roofing services to meet all your needs, from
          installation to maintenance and repair.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <service.icon className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-footer">
              <span className="service-price">{service.price}</span>
              <button className="service-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
