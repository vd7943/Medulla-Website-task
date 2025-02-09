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
      className="max-w-[1060px] mx-auto lg:mx-0 lg:ml-auto p-6 lg:ps-12 bg-white shadow-lg rounded-lg border border-gray-200 mt-8"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 flex items-center justify-center lg:justify-start gap-2 pb-4">
        <span className="w-12 h-[2px] bg-blue-900"></span>
        Supported Devices
        <span className="w-12 h-[2px] bg-blue-900"></span>
      </h2>
      <div>
        <p className="text-gray-700 text-base md:text-lg mb-6 text-left font-semibold">
          As students, we understand the importance of accessibility across
          devices. That's why our app is designed to work seamlessly on:
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start font-semibold">
        <ul
          className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2 text-left"
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
            <li
              key={device}
              variants={staggerList}
              custom={index}
              className="lg:ps-4"
            >
              {device}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-0 items-center md:flex-row">
          <motion.img
            src="device-1.png"
            alt="Supported Devices"
            className="device-image w-72 sm:w-40 md:w-48 lg:w-76 drop-shadow-lg fade-in"
            whileHover={{
              scale: 1.05,
              rotateZ: 3,
              transition: { duration: 0.3 },
            }}
          />
          <div className="flex flex-row gap-x-0 fade-in">
            <motion.img
              src="device-2.png"
              alt="Supported Devices"
              className="device-image w-40 sm:w-40 md:w-48 lg:w-[210px] lg:h-[420px] drop-shadow-lg"
              whileHover={{
                scale: 1.05,
                rotateZ: -3,
                transition: { duration: 0.3 },
              }}
            />
            <motion.img
              src="device-3.png"
              alt="Supported Devices"
              className="device-image w-32 sm:w-40 md:w-48 lg:w-[210px] lg:h-[430px] drop-shadow-lg"
              whileHover={{
                scale: 1.05,
                rotateZ: -3,
                transition: { duration: 0.3 },
              }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SupportedDevices;
