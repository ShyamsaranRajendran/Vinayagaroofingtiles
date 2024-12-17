import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Map from '../assets/map.png';
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
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <MapPin className="contact-icon" />
                <div>
                  <p className="contact-info-label">Address</p>
                  <p className="contact-info-text">
                    177, Sathy Rd, opp. Bus Stand, Erode, Tamil Nadu 638003
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <Phone className="contact-icon" />
                <div>
                  <p className="contact-info-label">Phone</p>
                  <p className="contact-info-text">(+91) 98659 80220</p>
                </div>
              </div>
              <div className="contact-info-item">
                <Mail className="contact-icon" />
                <div>
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-text">
                    <a
                      href="mailto:vinayagaroofingtiles@gmail.com"
                      className="contact-info-email-link"
                    >
                      vinayagaroofingtiles@gmail.com
                    </a>
                  </p>
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

          <div className="map">
            <a
              href="https://www.google.com/maps/dir//175,+Sathy+Rd,+Erode,+Tamil+Nadu+638004/@11.3518123,77.620659,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba96f1fefb42cf5:0xf62648e4c5623f46!2m2!1d77.7029881!2d11.3518323?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Map} alt="Map" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
