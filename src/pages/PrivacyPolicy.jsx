import React, { useEffect } from "react";

export default function PrivacyPolicy() {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div className="privacy-container p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-2xl mb-4 font-bold text-gray-900 dark:text-gray-100">
        Privacy Policy
      </h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        At <strong>Vinayaga Roofing Company</strong>, we value your privacy.
        This Privacy Policy explains how we handle your personal information
        when you visit our website or contact us via WhatsApp or phone.
      </p>

      <h2 className="text-xl mb-2 font-semibold text-gray-800 dark:text-gray-200">
        1. Information We Collect
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        We may collect limited personal information, such as:
      </p>
      <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-300">
        <li>Your name and contact details (Phone number, WhatsApp ID).</li>
        <li>Any information you provide when contacting us directly.</li>
      </ul>

      <h2 className="text-xl mb-2 font-semibold text-gray-800 dark:text-gray-200">
        2. How We Use Your Information
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        We use the information you provide for purposes such as:
      </p>
      <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-300">
        <li>Responding to inquiries made via WhatsApp or phone calls.</li>
        <li>Providing product information and support.</li>
        <li>Improving customer experience based on your feedback.</li>
      </ul>

      <h2 className="text-xl mb-2 font-semibold text-gray-800 dark:text-gray-200">
        3. Data Sharing and Security
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        We do not share or sell your personal information to third parties. Your
        contact information is used solely for communication purposes. Since no
        backend or database is used, we rely on secure platforms like WhatsApp
        for communication.
      </p>

      <h2 className="text-xl mb-2 font-semibold text-gray-800 dark:text-gray-200">
        4. Cookies
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Our website does not collect cookies or track your browsing activity, as
        it serves only to provide product information.
      </p>

      <h2 className="text-xl mb-2 font-semibold text-gray-800 dark:text-gray-200">
        5. Your Rights
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        You have the right to:
      </p>
      <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-300">
        <li>Request that we stop contacting you via WhatsApp or phone.</li>
        <li>Contact us to clarify how your information is used.</li>
      </ul>

      <h2 className="text-xl mb-2 font-semibold text-gray-800 dark:text-gray-200">
        6. Changes to This Policy
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        We may update this Privacy Policy as necessary. Any changes will be
        reflected on this page with an updated "Last Updated" date.
      </p>

      <h2 className="text-xl mb-2 font-semibold text-gray-800 dark:text-gray-200">
        Contact Us
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        For any questions about this Privacy Policy, please reach out to us via:{" "}
        <a
          href="mailto:vinayagaroofingtiles@gmail.com"
          className="text-blue-500 dark:text-blue-300"
        >
          vinayagaroofingtiles@gmail.com
        </a>
        , WhatsApp, or phone.
      </p>
    </div>
  );
}
