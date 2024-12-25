import React from "react";
import "./css/PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>
        At <strong>Vinayaga Roofing Company</strong>, we are committed to
        protecting your privacy. This Privacy Policy outlines how we collect,
        use, and safeguard your personal information when you visit our website
        or use our services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          Personal identification information (Name, Email address, Phone
          number).
        </li>
        <li>
          Technical data such as IP address, browser type, and usage data.
        </li>
        <li>
          Any information you provide while interacting with our services.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information for purposes such as:</p>
      <ul>
        <li>Improving our website and services.</li>
        <li>Processing transactions and providing customer support.</li>
        <li>Sending promotional communications, if consent is given.</li>
      </ul>

      <h2>3. Data Sharing and Security</h2>
      <p>
        We do not sell or share your personal information with third parties,
        except as required by law or to provide our services effectively. We use
        industry-standard security measures to protect your data.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Our website uses cookies to enhance your browsing experience. You can
        choose to disable cookies in your browser settings.
      </p>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access, update, or delete your personal information.</li>
        <li>Opt out of receiving promotional communications.</li>
        <li>Contact us to address any concerns regarding your privacy.</li>
      </ul>

      <h2>6. Changes to This Policy</h2>
      <p>
        We reserve the right to update this Privacy Policy at any time. Changes
        will be posted on this page with an updated "Last Updated" date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:
        <a href="mailto:vinayagaroofingtiles@gmail.com">
          {" "}
          vinayagaroofingtiles@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
