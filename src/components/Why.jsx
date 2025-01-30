import React from "react";
import { motion } from "framer-motion";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-20, 0, -20],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
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

const Why = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={textAnimation}
      className="max-w-[1060px] mx-auto lg:mx-0 lg:ml-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8 mb-20 flex flex-col lg:flex-row items-center gap-10"
    >
      <div className="lg:w-1/2 space-y-6 p-6 text-center lg:text-left">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2"
          variants={textAnimation}
        >
          Why Us
        </motion.h2>

        <motion.p
          className="text-gray-700 text-base md:text-lg font-semibold"
          variants={textAnimation}
        >
          A Safe Space for Medical Students – A Perfect Revision Companion!
          <br />
          Our app is designed as a standalone revision tool catering to 1st-year
          to 4th-year MBBS students, interns, and post-interns.
        </motion.p>

        <motion.p
          className="text-gray-700 text-base md:text-lg font-semibold"
          variants={textAnimation}
        >
          We're not here to compete; we’re here to complement.
        </motion.p>

        <motion.p
          className="text-gray-700 text-base md:text-lg font-semibold"
          variants={textAnimation}
        >
          Think of it as a stress-free, no-pressure space with a simple,
          beautiful UI tailored for the next generation of doctors.
        </motion.p>

        <div className="mt-6">
          <motion.div
            className="flex justify-between text-gray-700 text-base md:text-lg font-semibold"
            variants={textAnimation}
          >
            <span>Flashcards</span>
            <span>2000+</span>
          </motion.div>
          <div className="h-1 w-full bg-gray-300 mt-1">
            <motion.div
              className="h-full w-[60%] bg-blue-900"
              variants={textAnimation}
            />
          </div>

          <motion.div
            className="flex justify-between text-gray-700 text-base md:text-lg font-semibold mt-4"
            variants={textAnimation}
          >
            <span>Question & Answer</span>
            <span>20,000+</span>
          </motion.div>
          <div className="h-1 w-full bg-gray-300 mt-1">
            <motion.div
              className="h-full w-[80%] bg-blue-900"
              variants={textAnimation}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="lg:w-1/2 flex justify-center"
        variants={rotationAnimation}
        initial="initial"
        whileHover="whileHover"
      >
        <motion.img
          src="why-1.png"
          alt="Medulla Flashcards App"
          className="w-40 md:w-64 lg:w-[320px] lg:h-[500px] drop-shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        />
      </motion.div>
    </motion.section>
  );
};

export default Why;
