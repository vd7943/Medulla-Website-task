import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-15, 0, -15],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const JoinUs = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-[1120px] mx-auto lg:mx-0 lg:mr-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8 mb-20 flex flex-col lg:flex-row items-center gap-10"
    >
      <div className="lg:w-1/2 flex justify-center gap-2">
        <motion.img
          src="join-1.png"
          alt="Medulla Plus Subscription"
          className="w-40 md:w-56 lg:w-[400px] lg:h-[480px] drop-shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        />
        <motion.img
          src="join-1.png"
          alt="Medulla Core Subscription"
          className="w-40 md:w-56 lg:w-[400px] lg:h-[480px] drop-shadow-lg"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        />
      </div>

      <div className="lg:w-1/2 space-y-6 p-6 text-center lg:text-left">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2"
          variants={fadeIn}
        >
          Join Medulla <br /> Plus & Core
        </motion.h2>

        <motion.p
          className="text-gray-700 text-base md:text-lg font-semibold"
          variants={fadeIn}
        >
          Subscription plans overview:
        </motion.p>

        <motion.p
          className="text-gray-700 text-base md:text-lg font-semibold"
          variants={fadeIn}
        >
          <strong>Plus:</strong> All 19 subjects, Flashcards + QnA
        </motion.p>

        <motion.p
          className="text-gray-700 text-base md:text-lg font-semibold"
          variants={fadeIn}
        >
          <strong>Core:</strong> 1st and 2nd Year Subjects – Flashcards + QnA
        </motion.p>

        <motion.p
          className="text-gray-700 text-base md:text-lg font-semibold"
          variants={fadeIn}
        >
          Pricing is specifically very affordable because we want all MBBS and
          Post-MBBS students to enjoy this app.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default JoinUs;
