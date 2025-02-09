import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const JoinUs = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const elements = gsap.utils.toArray(".fade-in");

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.to(".join-image", {
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
      className="max-w-[1060px] lg:h-[460px] mx-auto lg:mx-0 lg:mr-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-8 mb-10 lg:mb-36 flex flex-col lg:flex-row items-center lg:items-start"
    >
      <div className="lg:w-1/2 flex justify-center items-start gap-2">
        <motion.img
          src="join-1.png"
          alt="Medulla Plus Subscription"
          className="join-image w-40 md:w-56 lg:w-[420px] lg:h-[500px] drop-shadow-lg fade-in"
          initial={{ y: 20 }}
          animate={{ y: [-15, 0, -15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{
            scale: 1.05,
            rotateX: 10,
            transition: { duration: 0.3 },
          }}
        />
        <motion.img
          src="join-1.png"
          alt="Medulla Core Subscription"
          className="join-image w-40 md:w-56 lg:w-[420px] lg:h-[500px] drop-shadow-lg fade-in"
          initial={{ y: 20 }}
          animate={{ y: [-15, 0, -15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{
            scale: 1.05,
            rotateX: 10,
            transition: { duration: 0.3 },
          }}
        />
      </div>

      <div className="lg:w-1/2 space-y-6 p-6 text-center lg:text-left fade-in">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 flex items-center justify-center gap-2">
          <span className="w-12 h-[2px] bg-blue-900"></span>
          Join Medulla <br /> Plus & Core
          <span className="w-12 h-[2px] bg-blue-900"></span>
        </h2>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          Subscription plans overview -
        </p>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          Plus: All 19 subjects, Flashcards + QnA Core: 1st and 2nd Year
          Subjects – Flashcards + QnA
        </p>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          Pricing is specifically very affordable because we want all MBBS and
          Post-MBBS students to enjoy this app.
        </p>
      </div>
    </motion.section>
  );
};

export default JoinUs;
