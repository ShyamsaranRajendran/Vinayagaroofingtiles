import React from "react";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&q=80",
    title: "Modern Home Renovation",
    description: "Complete roof replacement with premium slate tiles",
  },
  {
    image:
      "https://images.unsplash.com/photo-1632239776255-0a7f24814df2?auto=format&fit=crop&q=80",
    title: "Classic Villa Project",
    description: "Traditional clay tile installation",
  },
  // Add more gallery items as needed
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">Our Work</h1>
        <p className="gallery-description">
          Browse through our portfolio of completed projects and see the quality
          of our work.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-overlay">
              <h3 className="gallery-item-title">{item.title}</h3>
              <p className="gallery-item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
