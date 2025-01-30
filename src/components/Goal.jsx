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

const Goal = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={textAnimation}
      className="max-w-[1060px] mx-auto lg:mx-0 lg:mr-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8 mb-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center"
    >
      <motion.div
        className="w-full lg:w-1/3 flex justify-center lg:justify-start mt-10 lg:mt-0"
        variants={rotationAnimation}
        initial="initial"
        whileHover="whileHover"
      >
        <motion.img
          src="goal-1.png"
          alt="Device"
          className="w-56 h-[400px] md:w-64 md:h-[450px] lg:w-[320px] lg:h-[520px] drop-shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        />
      </motion.div>

      <div className="w-full lg:w-1/2 xl:pt-10 px-4 text-center lg:text-left">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2 mb-6"
          variants={textAnimation}
        >
          Our Goal and Mission
        </motion.h2>

        <motion.p
          className="text-gray-700 text-base md:text-lg mb-4 font-semibold"
          variants={textAnimation}
        >
          Medulla Flashcards is designed to level up your study game and crush
          the PG Medical Entrance Exams in a fun, relaxing, and affordable way.
        </motion.p>

        <motion.p
          className="text-gray-700 text-base md:text-lg font-semibold"
          variants={textAnimation}
        >
          We envision this app supporting all 7,00,000 medical students of India
          - across all years, interns, and post interns, to make their PG
          journey a bit more enjoyable and accessible.{" "}
          <span role="img" aria-label="smile">
            😁
          </span>
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Goal;
