import React, { useLayoutEffect, useRef } from "react";
import FeatureSection from "./FeatureSection";
import SupportedDevices from "./SupportedDevices";
import Faq from "./Faq";
import Goal from "./Goal";
import Why from "./Why";
import JoinUs from "./JoinUs";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "home-1.png",
  "home-2.png",
  "home-3.png",
  "home-4.png",
  "home-5.png",
];

const Home = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef(null);

  useLayoutEffect(() => {
    const elements = gsap.utils.toArray(".fade-in");

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.to(imagesRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);
  return (
    <div
      ref={containerRef}
      className="min-h-screen custom-gradient bg-gradient-to-r from-blue-200 via-white to-blue-200 text-center"
    >
      <div className="pt-34 px-6 fade-in">
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-blue-950 leading-snug fade-in"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Medulla Flashcards for NEET-PG, INI-CET, FMGE <br />
          Designed by Gen Z Doctors, for Gen Z Doctors
        </motion.h1>
      </div>

      <div className="overflow-hidden mt-10 py-4 fade-in" ref={imagesRef}>
        <motion.div
          className="flex space-x-4 pb-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`App Screenshot ${index + 1}`}
              className="w-fit h-auto"
            />
          ))}
        </motion.div>
      </div>

      <div className="fade-in">
        <FeatureSection />
      </div>
      <div className="fade-in">
        <Goal />
      </div>
      <div className="fade-in">
        <Why />
      </div>
      <div className="fade-in">
        <JoinUs />
      </div>
      <div className="fade-in">
        <SupportedDevices />
      </div>
      <div className="fade-in">
        <Faq />
      </div>
    </div>
  );
};

export default Home;
