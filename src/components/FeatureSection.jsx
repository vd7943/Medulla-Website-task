import React from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-20, 0, -20],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const rotationAnimation = {
  initial: { rotateX: -5, rotateY: 15, rotateZ: 0 },
  whileHover: {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const FeatureSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textAnimation}
      className="max-w-5xl mx-auto lg:mx-0 lg:ml-auto my-10 py-10 lg:py-0 sm:my-20 px-4 sm:px-8 flex flex-col lg:flex-row items-center bg-white rounded-2xl"
    >
      <div className="lg:w-1/2 space-y-6 lg:mr-10 text-center lg:text-left">
        <FaHeart className="text-red-500 text-3xl mx-auto lg:ml-2" />
        <motion.h2
          variants={textAnimation}
          className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug"
        >
          Unlike traditional methods, <br />
          this app focuses on:
        </motion.h2>
        <motion.ul
          variants={textAnimation}
          className="text-gray-700 text-lg space-y-4"
        >
          <li>
            ✅ Active recall techniques with 2000-3000 high-yield flashcards
            based on Previous Year Topics and 20,000+ Question and Answers based
            on Revision Notes.
          </li>
          <li>
            ✅ A beautifully simple, user-friendly interface that eliminates
            MCQs, keeping learning direct and stress-free.
          </li>
        </motion.ul>
      </div>

      <motion.div
        className="lg:w-1/2 flex flex-col sm:flex-row justify-center items-center mt-10 lg:mt-0 relative lg:pr-20"
        variants={rotationAnimation}
        initial="initial"
        whileHover="whileHover"
      >
        <motion.img
          src="feature-1.webp"
          alt="Mockup 1"
          className="mockup-1 w-full h-[480px] max-w-xs sm:max-w-sm md:max-w-md drop-shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        />
        <motion.img
          src="feature-2.webp"
          alt="Mockup 2"
          className="mockup-2 w-full h-[480px] max-w-xs sm:max-w-sm md:max-w-md drop-shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        />
      </motion.div>
    </motion.div>
  );
};

export default FeatureSection;
