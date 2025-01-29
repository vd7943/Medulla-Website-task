import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaApple, FaAndroid, FaBars } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-6 transition-all duration-300 z-50 ${
        scrolling
          ? "backdrop-blur-md bg-white/50"
          : "bg-gradient-to-r from-blue-100 to-white-blue"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center ps-6">
        <Link to="/" className="flex items-center">
          <img src="logo.svg" alt="Medulla Flashcards Logo" className="h-12" />
        </Link>
        <div className="hidden lg:flex space-x-4 items-center">
          <button className="px-4 py-4 rounded-lg bg-white cursor-pointer">
            <FaInstagram className="text-gray-600 text-lg cursor-pointer hover:text-black" />
          </button>
          <button className="px-4 py-4 rounded-lg bg-white cursor-pointer">
            <FaWhatsapp className="text-gray-600 text-lg cursor-pointer hover:text-black" />
          </button>
          <button className="px-4 py-4 rounded-lg bg-white cursor-pointer">
            <FaXTwitter className="text-gray-600 text-lg cursor-pointer hover:text-black" />
          </button>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <button className="px-4 py-2 bg-white rounded-lg">FAQ</button>
          <Link to="/contact" className="px-4 py-2 bg-white rounded-lg">
            Contact
          </Link>
          <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            <FaApple className="mr-2" /> iOS
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900">
            <FaAndroid className="mr-2" /> Android
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <FiX className="text-3xl text-gray-700" />
            ) : (
              <FaBars className="text-3xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <FaInstagram className="text-gray-600 text-2xl cursor-pointer hover:text-black" />
          <FaXTwitter className="text-gray-600 text-2xl cursor-pointer hover:text-black" />
          <button className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100">
            FAQ
          </button>
          <Link
            to="/contact"
            className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
          >
            Contact
          </Link>
          <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            <FaApple className="mr-2" /> iOS
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900">
            <FaAndroid className="mr-2" /> Android
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
