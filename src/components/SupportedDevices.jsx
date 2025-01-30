import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 0, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const SupportedDevices = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-[1060px] mx-auto lg:mx-0 lg:ml-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8"
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2 mb-6 lg:text-left"
        variants={fadeIn}
      >
        Supported Devices
      </motion.h2>

      <motion.p
        className="text-gray-700 text-base md:text-lg mb-6"
        variants={fadeIn}
      >
        As students, we understand the importance of accessibility across
        devices. That's why our app is designed to work seamlessly on:
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-32 gap-10">
        <motion.ul
          className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2 xl:text-left"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.li variants={fadeIn}>Android phones</motion.li>
          <motion.li variants={fadeIn}>Android Tablets</motion.li>
          <motion.li variants={fadeIn}>iPhones</motion.li>
          <motion.li variants={fadeIn}>iPads</motion.li>
          <motion.li variants={fadeIn}>Landscape Mode in Tablets</motion.li>
        </motion.ul>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.img
            src="device-1.png"
            alt="Supported Devices"
            className="w-40 md:w-56 lg:w-[360px] lg:h-[320px] drop-shadow-lg"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <motion.img
            src="device-2.png"
            alt="Supported Devices"
            className="w-40 md:w-56 lg:w-[250px] lg:h-[460px] drop-shadow-lg"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default SupportedDevices;
