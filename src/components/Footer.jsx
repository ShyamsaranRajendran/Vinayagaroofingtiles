import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import './css/footer.css'
function Footer() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  useEffect(() => {
    const sections = document.querySelectorAll(".footer-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-section company">
          <h3>Vinayaga Roofing</h3>
          <p>We help grow your business with reliable roofing solutions.</p>
        </div>

        <div className="footer-section resources">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
         
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>

        <div className="footer-section legal">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Vinayaga Roofing Inc. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="/terms">Terms</a> |<a href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
