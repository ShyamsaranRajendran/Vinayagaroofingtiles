import React from "react";
import { Wrench, Shield, Ruler, Clock } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Expert installation by our certified team of professionals with years of experience.",
  
  },
  {
    icon: Shield,
    title: "Maintenance & Repair",
    description:
      "Regular maintenance and prompt repair services to keep your roof in perfect condition.",

  },
  {
    icon: Ruler,
    title: "Roof Inspection",
    description:
      "Comprehensive roof inspection to identify potential issues before they become problems.",
   
  },
  {
    icon: Clock,
    title: "Emergency Services",
    description: "24/7 emergency repair services for urgent roofing problems.",
   
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
        {services.map((service, index) => {
          // Construct WhatsApp URL dynamically
          const whatsappMessage = encodeURIComponent(
            `Hi! I am interested in the following service: 
- Service: ${service.title}
- Description: ${service.description}
- Price: ${service.price}
Could you provide more details and help me book this service? 😊`
          );
          const whatsappLink = `https://wa.me/+919865980220?text=${whatsappMessage}`;

          return (
            <div key={index} className="service-card">
              <service.icon className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-footer">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-button"
                >
                  Book Now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

















 // {
  // "Clay roofing tiles",
  // "Concrete roofing tiles",
  // "Ceramic roofing tiles",
  // "UPVC roofing shine tiles",
  // "Laser Plates",
  // "Wire clay brick",
  // "7th category",
  // },