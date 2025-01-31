import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.3,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    window.addEventListener("wheel", (event) => {
      if (Math.abs(event.deltaY) > 50) {
        lenis.options.duration = 0.15;
      } else {
        lenis.options.duration = 0.3;
      }
    });

    return () => {
      lenis.destroy();
      window.removeEventListener("wheel", () => {});
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
