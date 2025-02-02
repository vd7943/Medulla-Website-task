import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const staggerList = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8 },
  }),
};

const SupportedDevices = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(".device-image", {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-[1060px] lg:h-[550px] mx-auto lg:mx-0 lg:ml-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8 fade-in"
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2 mb-6 lg:text-left fade-in"
        variants={fadeIn}
      >
        Supported Devices
      </motion.h2>

      <motion.p
        className="text-gray-700 text-base md:text-lg mb-6 fade-in"
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
        >
          {[
            "Android phones",
            "Android Tablets",
            "iPhones",
            "iPads",
            "Landscape Mode in Tablets",
          ].map((device, index) => (
            <motion.li key={device} variants={staggerList} custom={index}>
              {device}
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.img
            src="device-1.png"
            alt="Supported Devices"
            className="device-image w-40 md:w-56 lg:w-[370px] lg:h-[320px] drop-shadow-lg fade-in"
            whileHover={{
              scale: 1.05,
              rotateZ: 3,
              transition: { duration: 0.3 },
            }}
          />
          <motion.img
            src="device-2.png"
            alt="Supported Devices"
            className="device-image w-40 md:w-56 lg:w-[200px] lg:h-[380px] drop-shadow-lg fade-in"
            whileHover={{
              scale: 1.05,
              rotateZ: -3,
              transition: { duration: 0.3 },
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default SupportedDevices;
