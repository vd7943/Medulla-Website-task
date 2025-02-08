import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaApple, FaAndroid, FaBars } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      role="navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full p-6 transition-all duration-300 z-50 ${
        scrolling
          ? "backdrop-blur-md bg-white/50 shadow-md"
          : "bg-gradient-to-r from-blue-200 via-white to-blue-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center md:px-6">
        <Link to="/" className="flex items-center">
          <img src="logo.svg" alt="Medulla Flashcards Logo" className="h-12" />
        </Link>

        <div className="hidden lg:flex space-x-4 items-center">
          {[
            { icon: <FaInstagram />, label: "Instagram" },
            { icon: <FaWhatsapp />, label: "WhatsApp" },
            { icon: <FaXTwitter />, label: "Twitter" },
          ].map(({ icon, label }, index) => (
            <motion.button
              key={index}
              className="relative p-3 rounded-lg bg-white transition overflow-hidden"
              aria-label={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="absolute inset-0 bg-gradient-to-t from-blue-300 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
              {icon}
            </motion.button>
          ))}
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          {["FAQ", "Contact"].map((text, index) => (
            <Link key={index} to={text === "FAQ" ? "#" : "/contact"}>
              <motion.button
                className="relative px-4 py-2 bg-white rounded-lg transition overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-t from-blue-300 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                {text}
              </motion.button>
            </Link>
          ))}
          <motion.button
            className="relative flex items-center px-4 py-2 bg-black text-white rounded-lg overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaApple className="mr-2" /> iOS
          </motion.button>
          <motion.button
            className="relative flex items-center px-4 py-2 bg-[#A4C639] text-white rounded-lg overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaAndroid className="mr-2" /> Android
          </motion.button>
        </div>

        <div className="md:hidden">
          <motion.button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {open ? (
              <FiX className="text-3xl text-gray-700" />
            ) : (
              <FaBars className="text-3xl text-gray-700" />
            )}
          </motion.button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-white shadow-lg p-4 rounded-lg"
        >
          {[
            { icon: <FaInstagram />, label: "Instagram" },
            { icon: <FaXTwitter />, label: "Twitter" },
          ].map(({ icon, label }, index) => (
            <motion.button
              key={index}
              className="relative text-gray-600 text-2xl cursor-pointer hover:text-black overflow-hidden"
              aria-label={label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-t from-blue-300 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
              {icon}
            </motion.button>
          ))}
          {["FAQ", "Contact"].map((text, index) => (
            <Link key={index} to={text === "FAQ" ? "#" : "/contact"}>
              <motion.button
                className="relative px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-t from-blue-300 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                {text}
              </motion.button>
            </Link>
          ))}
          <motion.button
            className="relative flex items-center px-4 py-2 bg-black text-white rounded-lg overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaApple className="mr-2" /> iOS
          </motion.button>
          <motion.button
            className="relative flex items-center px-4 py-2 bg-[#A4C639] text-white rounded-lg overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaAndroid className="mr-2" /> Android
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
