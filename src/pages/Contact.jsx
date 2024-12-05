import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-description">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form">
            <form className="contact-form-fields">
              <div className="contact-field">
                <label className="contact-label">Name</label>
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Your name"
                />
              </div>
              <div className="contact-field">
                <label className="contact-label">Email</label>
                <input
                  type="email"
                  className="contact-input"
                  placeholder="your@email.com"
                />
              </div>
              <div className="contact-field">
                <label className="contact-label">Message</label>
                <textarea
                  rows={4}
                  className="contact-textarea"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="contact-button">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <MapPin className="contact-icon" />
                <div>
                  <p className="contact-info-label">Address</p>
                  <p className="contact-info-text">
                    123 Roofing Street, Construction City, BLD 12345
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <Phone className="contact-icon" />
                <div>
                  <p className="contact-info-label">Phone</p>
                  <p className="contact-info-text">(555) 123-4567</p>
                </div>
              </div>
              <div className="contact-info-item">
                <Mail className="contact-icon" />
                <div>
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-text">info@roofcraft.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <Clock className="contact-icon" />
                <div>
                  <p className="contact-info-label">Hours</p>
                  <p className="contact-info-text">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="contact-info-text">
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
