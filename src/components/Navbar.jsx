import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaApple, FaAndroid, FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-100 to-white p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center ps-6">
        <Link to="/" className="flex items-center">
          <img src="logo.svg" alt="Medulla Flashcards Logo" className="h-12" />
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <FaInstagram className="text-gray-600 text-2xl cursor-pointer hover:text-black" />
          <FiX className="text-gray-600 text-2xl cursor-pointer hover:text-black" />
        </div>
        <div className="hidden md:flex space-x-4 items-center">
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

        <div className="md:hidden">
          <button onClick={() => setOpen(open)}>
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
          <FiX className="text-gray-600 text-2xl cursor-pointer hover:text-black" />
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
