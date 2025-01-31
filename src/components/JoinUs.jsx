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
          delay: index * 0.2,
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
      className="max-w-[1120px] mx-auto lg:mx-0 lg:mr-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8 mb-20 flex flex-col lg:flex-row items-center gap-10 fade-in"
    >
      <div className="lg:w-1/2 flex justify-center gap-4">
        <motion.img
          src="join-1.png"
          alt="Medulla Plus Subscription"
          className="join-image w-40 md:w-56 lg:w-[400px] lg:h-[480px] drop-shadow-lg fade-in"
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
          className="join-image w-40 md:w-56 lg:w-[400px] lg:h-[480px] drop-shadow-lg fade-in"
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

      <div className="lg:w-1/2 space-y-6 p-6 text-center lg:text-left">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2 fade-in"
          whileHover={{
            borderBottomColor: "#ff5733",
            transition: { duration: 0.3 },
          }}
        >
          Join Medulla <br /> Plus & Core
        </motion.h2>

        <motion.p className="text-gray-700 text-base md:text-lg font-semibold fade-in">
          Subscription plans overview:
          <strong>Plus:</strong> All 19 subjects, Flashcards + QnA
          <strong>Core:</strong> 1st and 2nd Year Subjects – Flashcards + QnA
          Pricing is specifically very affordable because we want all MBBS and
          Post-MBBS students to enjoy this app.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default JoinUs;
