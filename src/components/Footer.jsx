import React from "react";
import { FaInstagram, FaXTwitter, FaGlobe } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-white p-6 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 text-center md:text-left">
        <div className="w-full md:w-2/3">
          <div className="flex justify-center md:justify-start">
            <img
              src="logo.svg"
              alt="Medulla Flashcards Logo"
              className="h-14 w-auto"
            />
          </div>
          <p className="mt-3 text-sm md:text-lg leading-relaxed px-4 md:px-0">
            Medulla Flashcards offers a powerful, intuitive learning platform
            designed to help medical students master PG exam concepts with ease.
            With thousands of high-yield flashcards and active recall
            techniques, we make medical education engaging and efficient.
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <ul className="space-y-2 text-base md:text-xl font-bold">
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Join Medulla Plus
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Terms And Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-300 pt-4 text-gray-600 text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-center">
          <p className="text-sm md:text-base">Contact us – Corporate Email</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-white shadow-md rounded-lg hover:shadow-xl"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white shadow-md rounded-lg hover:shadow-xl"
            >
              <FaGlobe size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white shadow-md rounded-lg hover:shadow-xl"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base">
          <p className="flex items-center">
            Made with <span className="text-red-500 px-1">❤️</span> in India
          </p>
          <p>© Copyright Medulla Flashcards 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
