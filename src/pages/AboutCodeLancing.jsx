import React, { useEffect } from "react";
import DevLogo from "../assets/dark.jpeg"; // Light theme logo
import DevLogoD from "../assets/white.jpeg"; // Dark theme logo

const AboutCodelancing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-light">
      {/* Logo Section */}
      <div className="logo-container flex justify-center p-3 mb-6">
        {/* Conditional rendering based on theme */}
        <img
          src={DevLogo}
          alt="Codelancing Technologies Logo Light"
          className="w-30 h-auto rounded-lg dark:hidden"
        />
        <img
          src={DevLogoD}
          alt="Codelancing Technologies Logo Dark"
          className="w-30 h-auto rounded-lg hidden dark:block"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-center font-light">
        Welcome to Codelancing Technologies
      </h1>
      <p className="mb-4 text-lg">
        Where innovation meets flexibility. We are a dynamic and
        forward-thinking company dedicated to redefining how technology
        solutions are delivered. Breaking away from traditional methodologies,
        we embrace an unstructured approach that allows us to adapt to the
        unique needs of every project.
      </p>
      <p className="mb-4 text-lg">
        At Codelancing Technologies, we operate on a freelancing model, bringing
        together a diverse pool of talented professionals from across the globe.
        This enables us to assemble the perfect team for each project, ensuring
        top-notch quality and fresh perspectives. From e-commerce solutions to
        bespoke software development, our passion lies in turning your ideas
        into reality.
      </p>

      <h2 className="text-xl font-semibold mt-6 text-center md:text-left px-2">
        Our Mission
      </h2>
      <p className="mb-4 text-lg">
        To empower businesses with cutting-edge solutions while fostering a
        culture of creativity and collaboration. We believe in pushing
        boundaries, challenging norms, and delivering results that exceed
        expectations.
      </p>

      <h2 className="text-xl font-semibold mt-6 text-center md:text-left px-2">
        Managing Directors
      </h2>
      <ul className="list-disc ml-6 mb-4 ">
        <li>
          <strong>Aditya Balasubramaniam</strong> (Founder & CTO)
        </li>
        <li>
          <strong>Mounesh Raja</strong> (CEO)
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 text-center md:text-left px-2">
        Contact
      </h2>
      <p className="mb-4">
        Email:{" "}
        <a
          href="mailto:codelancingtechnologies@gmail.com"
          className="text-blue-500"
        >
          codelancingtechnologies@gmail.com
        </a>
        <br /> Instagram:{" "}
        <a
          href="https://instagram.com/codelancing_technologies_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          @codelancing_technologies_
        </a>
        <br /> Website:{" "}
        <a
          href="https://codelancing.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          codelancing.in
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 text-center md:text-left px-2">
        Rights
      </h2>
      <p className="mb-4">
        At Codelancing Technologies, we are committed to transparency and open
        collaboration. The content, images, and resources provided on our
        platform are fully open-sourced, fostering innovation and creativity
        within the community.
      </p>
      <p className="mb-4">
        While all materials are free to use, we encourage proper attribution to
        maintain the spirit of shared knowledge. Unauthorized redistribution,
        commercial use, or modification without acknowledgment may be subject to
        review under our usage policies.
      </p>
      <p>Together, let's build a future where technology empowers everyone.</p>

      <h2 className="text-xl font-semibold mt-6 text-center md:text-left px-2">
        Developer Credits
      </h2>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/ShyamsaranRajendran"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Shyamsaran Rajendran
        </a>
      </p>
    </div>
  );
};


//redeay for

export default AboutCodelancing;
