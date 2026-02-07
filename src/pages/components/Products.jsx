import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 40,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/ceramic/cer-7.png?raw=true",
    tag: "Hot Deal",
  },
  {
    id: 15,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/clay/clay-123-removebg-preview.png?raw=true",
    tag: "Hot Deal",
  },
  {
    id: 5,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/concrete/concrete-3.png?raw=true",
    tag: "Limited Stock",
  },
  {
    id: 52,
    image:
      "https://github.com/VinayagaRoofing/Images/blob/master/upvc-rain-gutter/upvc-2.jpeg?raw=true",
    tag: "Premium",
  },
];

export function Products() {
  const createWhatsappLink = (product) => {
    const productPageLink = `${
      window.location.origin
    }/product/${encodeURIComponent(product.id)}`;
    const whatsappMessage = encodeURIComponent(
      `Hi! I'm interested in the following product:\nLink: ${productPageLink}`
    );
    return `https://wa.me/+919865980220?text=${whatsappMessage}`;
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-12">
          Best Selling Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover"
                />
                {product.tag && (
                  <span
                    className={`absolute top-4 right-4 ${
                      product.tag === "New"
                        ? "bg-green-500"
                        : product.tag === "Hot Deal"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    } text-white px-2 py-1 rounded-md text-sm`}
                  >
                    {product.tag}
                  </span>
                )}
                <div className="absolute bottom-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600">
                    <a
                      href={createWhatsappLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Contact via WhatsApp</span>
                    </a>
                  </button>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
