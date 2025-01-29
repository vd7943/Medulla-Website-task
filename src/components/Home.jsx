import React from "react";
import FeatureSection from "./FeatureSection";
import SupportedDevices from "./SupportedDevices";
import Faq from "./Faq";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-center">
      <div className="pt-10 px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900 leading-snug">
          Medulla Flashcards for NEET-PG, INI-CET, FMGE <br />
          Designed by Gen Z Doctors, for Gen Z Doctors
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-6 mt-10">
        <img
          src="home-1.png"
          alt="App Screenshot 1"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src="home-2.png"
          alt="App Screenshot 2"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src="home-3.png"
          alt="App Screenshot 3"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src="home-4.png"
          alt="App Screenshot 4"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src="home-5.png"
          alt="App Screenshot 5"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <FeatureSection />
      <SupportedDevices />
      <Faq />
    </div>
  );
};

export default Home;
