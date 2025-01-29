import React from "react";
import { FaInstagram, FaXTwitter, FaGlobe } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-white p-8 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 space-x-32">
        <div className="md:w-2/3 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <img
              src="logo.svg"
              alt="Medulla Flashcards Logo"
              className="h-16 w-auto"
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed w-2xl">
            Medulla Flashcards offers a powerful, intuitive learning platform
            designed to help medical students master PG exam concepts with ease.
            With thousands of high-yield flashcards and active recall
            techniques, we make medical education engaging and efficient.
          </p>

          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <div>
              <p className="mt-4 text-sm">Contact us – Corporate Email</p>
            </div>

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

        <div className="md:w-1/3 text-center md:text-left">
          <ul className="space-y-3 text-lg font-bold">
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

      <div className="flex flex-col md:flex-row justify-around items-center text-center text-gray-600 text-sm mt-6">
        <p className="flex items-center">
          Made with <span className="text-red-500">❤️</span> in India
        </p>
        <p className="mt-2 md:mt-0">© Copyright Medulla Flashcards 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
