import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsTrophy } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Goal = () => {
  const sectionRef = useRef(null);

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
          duration: 0.8,
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

    gsap.to(".goal-image", {
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
      className="max-w-[1060px] lg:h-[420px] mx-auto lg:mx-0 lg:mr-auto py-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-6 lg:mt-30 mb-10 lg:mb-36 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center fade-in"
    >
      <div
        className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-10 lg:mt-0 fade-in"
        initial={{ rotateX: 0, rotateY: 0 }}
        whileHover={{ rotateX: -5, rotateY: 15 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img
          src="goal-1.png"
          alt="Device"
          className="goal-image w-48 h-[400px] md:w-64 md:h-[450px] lg:w-[250px] lg:h-[480px] drop-shadow-lg fade-in"
          initial={{ y: 20 }}
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <motion.div className="w-full lg:w-1/2 px-4 text-center lg:text-left fade-in">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 flex items-center justify-center gap-2 lg:pb-10 pb-6">
          <span className="w-12 h-[2px] bg-blue-900"></span>
          Our Goal and Mission
          <span className="w-12 h-[2px] bg-blue-900"></span>
        </h2>

        <p className="text-gray-700 text-base md:text-lg mb-4 font-semibold flex items-center gap-4">
          <BsTrophy className="text-purple-500 w-28 h-6" /> Medulla Flashcards
          is designed to level up your study game and crush the PG Medical
          Entrance Exams in a fun, relaxing, and affordable way.
        </p>
        <p className="text-gray-700 text-base md:text-lg font-semibold flex items-center gap-4">
          <FaRegCheckCircle className="text-green-600 w-28 h-6" /> We envision
          this app supporting all 7,00,000 medical students of India - across
          all years, interns, and post interns, to make their PG journey a bit
          more enjoyable and accessible.😁
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Goal;
