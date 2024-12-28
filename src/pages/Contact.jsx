import React, { useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Map from "../assets/map.png";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Have questions? We'd love to hear from you. Send us a message, and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-500 mr-4 dark:text-blue-300" />
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    Address
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    177, Sathy Rd, opp. Bus Stand, Erode, Tamil Nadu 638003
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-6 h-6 text-green-500 mr-4 dark:text-green-400" />
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    Phone
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    (+91) 98659 80220
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-6 h-6 text-red-500 mr-4 dark:text-red-400" />
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a
                      href="mailto:vinayagaroofingtiles@gmail.com"
                      className="text-blue-500 hover:underline dark:text-blue-300"
                    >
                      vinayagaroofingtiles@gmail.com
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-6 h-6 text-yellow-500 mr-4 dark:text-yellow-400" />
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    Hours
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <a
              href="https://www.google.com/maps/place/Vinayaga+Timbers+Pvt/@11.3474741,77.721128,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba96f378e01f547:0x26fc8eb30000000!8m2!3d11.3474741!4d77.721128!16s%2Fg%2F11s0fl727b?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Map}
                alt="Map"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
