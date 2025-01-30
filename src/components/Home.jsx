import React from "react";
import FeatureSection from "./FeatureSection";
import SupportedDevices from "./SupportedDevices";
import Faq from "./Faq";
import Goal from "./Goal";
import Why from "./Why";
import JoinUs from "./JoinUs";
import { motion } from "framer-motion";

const images = [
  "home-1.png",
  "home-2.png",
  "home-3.png",
  "home-4.png",
  "home-5.png",
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-center">
      <div className="pt-34 px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900 leading-snug">
          Medulla Flashcards for NEET-PG, INI-CET, FMGE <br />
          Designed by Gen Z Doctors, for Gen Z Doctors
        </h1>
      </div>
      <div className="overflow-hidden mt-10 py-4">
        <motion.div
          className="flex space-x-4"
          animate={{ x: [0, -500] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`App Screenshot ${index + 1}`}
              className="w-64 h-auto rounded-lg shadow-lg"
            />
          ))}
        </motion.div>
      </div>

      <FeatureSection />
      <Goal />
      <Why />
      <JoinUs />
      <SupportedDevices />
      <Faq />
    </div>
  );
};

export default Home;
