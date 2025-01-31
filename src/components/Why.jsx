import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Why = () => {
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

    gsap.to(".why-image", {
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
      className="max-w-[1060px] mx-auto lg:mx-0 lg:ml-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8 mb-20 flex flex-col lg:flex-row items-center gap-10 fade-in"
    >
      <div className="lg:w-1/2 space-y-6 p-6 text-center lg:text-left">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2 fade-in"
          whileHover={{
            borderBottomColor: "#ff5733",
            transition: { duration: 0.3 },
          }}
        >
          Why Us
        </motion.h2>

        <motion.p className="text-gray-700 text-base md:text-lg font-semibold fade-in">
          A Safe Space for Medical Students – A Perfect Revision Companion!
          <br />
          Our app is designed as a standalone revision tool catering to 1st-year
          to 4th-year MBBS students, interns, and post-interns.
        </motion.p>

        <motion.p className="text-gray-700 text-base md:text-lg font-semibold fade-in">
          We're not here to compete; we’re here to complement.
        </motion.p>

        <motion.p className="text-gray-700 text-base md:text-lg font-semibold fade-in">
          Think of it as a stress-free, no-pressure space with a simple,
          beautiful UI tailored for the next generation of doctors.
        </motion.p>

        <div className="mt-6 fade-in">
          <motion.div className="flex justify-between text-gray-700 text-base md:text-lg font-semibold fade-in">
            <span>Flashcards</span>
            <span>2000+</span>
          </motion.div>
          <div className="h-1 w-full bg-gray-300 mt-1 fade-in">
            <motion.div className="h-full w-[60%] bg-blue-900" />
          </div>

          <motion.div className="flex justify-between text-gray-700 text-base md:text-lg font-semibold mt-4 fade-in">
            <span>Question & Answer</span>
            <span>20,000+</span>
          </motion.div>
          <div className="h-1 w-full bg-gray-300 mt-1 fade-in">
            <motion.div className="h-full w-[80%] bg-blue-900" />
          </div>
        </div>
      </div>

      <motion.div
        className="lg:w-1/2 flex justify-center fade-in"
        initial={{ rotateX: -5, rotateY: 15 }}
        whileHover={{ rotateX: 0, rotateY: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src="why-1.png"
          alt="Medulla Flashcards App"
          className="why-image w-40 md:w-64 lg:w-[320px] lg:h-[500px] drop-shadow-lg fade-in"
          initial={{ y: 20 }}
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Why;
