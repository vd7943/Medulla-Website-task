import React, { useLayoutEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
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

    gsap.to(".mockup-image", {
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
    <motion.div
      ref={sectionRef}
      className="max-w-5xl lg:h-[460px] mx-auto lg:mx-0 lg:ml-auto my-10 py-10 lg:py-0 sm:my-20 lg:mb-10 px-4 sm:px-8 flex flex-col lg:flex-row items-center bg-white rounded-lg"
    >
      <div className="lg:w-1/2 space-y-6 lg:mr-10 text-left fade-in">
        <FaHeart className="text-[#FF5033] text-3xl mx-0 lg:mx-auto lg:ml-4" />
        <h2 className="text-2xl md:text-3xl font-bold lg:ps-4 text-blue-950 leading-snug">
          Unlike traditional methods, <br />
          this app focuses on:
        </h2>
        <ul className="text-gray-700 text-lg space-y-4 lg:ps-8 list-disc list-inside font-semibold">
          <li>
            Active recall techniques with 2000-3000 high-yield flashcards based
            on Previous Year Topics and 20,000+ Question and Answers based on
            Revision Notes.
          </li>
          <li>
            A beautifully simple, user-friendly interface that eliminates MCQs,
            keeping learning direct and stress-free.
          </li>
        </ul>
      </div>

      <motion.div
        className="lg:w-1/2 flex flex-col gap-2 sm:flex-row justify-center items-center mt-10 lg:mt-0 relative"
        initial={{ rotateX: -5, rotateY: 15 }}
        whileHover={{ rotateX: 0, rotateY: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src="feature-1.png"
          alt="Mockup 1"
          className="mockup-image xl:mt-16 w-42 h-[480px] max-w-xs sm:max-w-sm md:max-w-xl drop-shadow-lg fade-in"
          initial={{ y: 20 }}
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="feature-2.png"
          alt="Mockup 2"
          className="hidden md:block mockup-image xl:mb-20 w-42 h-[480px] max-w-xs sm:max-w-sm md:max-w-xl drop-shadow-lg fade-in"
          initial={{ y: -20 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FeatureSection;
