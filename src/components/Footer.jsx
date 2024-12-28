import React, { useEffect } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope, // Import the email icon
} from "react-icons/fa";

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
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div className="footer-section">
          <h3 className="text-lg font-bold mb-4">Vinayaga Roofing</h3>
          <p className="text-gray-400">
            We offer reliable roofing solutions for homes, buildings, and
            various other structures, ensuring durability and quality.
          </p>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h4 className="text-lg font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="/products" className="text-gray-400 hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <h4 className="text-lg font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-section">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="mailto:info@vinayagaroofing.com"
              className="text-gray-400 hover:text-white"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.instagram.com/vinayaga_roofings?igsh=Mzc0Mm02b3R1bm5u"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/9865980220"
              className="text-gray-400 hover:text-white"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-700 py-4 text-center">
        <p className="text-gray-400">
          © 2025 Vinayaga Roofing Inc. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/terms" className="text-gray-400 hover:text-white">
            Terms
          </a>
          <span className="mx-2">|</span>
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
