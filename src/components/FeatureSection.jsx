import React from "react";
import { FaHeart } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <div className="max-w-5xl mx-auto lg:mx-0 lg:ml-auto my-10 py-10 lg:py-0 sm:my-20 px-4 sm:px-8 flex flex-col lg:flex-row items-center bg-white rounded-2xl">
      <div className="lg:w-1/2 space-y-6 lg:mr-10 text-center lg:text-left">
        <FaHeart className="text-red-500 text-3xl mx-auto lg:ml-2" />
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
          Unlike traditional methods, <br />
          this app focuses on:
        </h2>
        <ul className="text-gray-700 text-lg space-y-4">
          <li>
            ✅ Active recall techniques with 2000-3000 high-yield flashcards
            based on Previous Year Topics and 20,000+ Question and Answers based
            on Revision Notes.
          </li>
          <li>
            ✅ A beautifully simple, user-friendly interface that eliminates
            MCQs, keeping learning direct and stress-free.
          </li>
        </ul>
      </div>

      <div className="lg:w-1/2 flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 lg:mt-0">
        <img
          src="feature-1.png"
          alt="App Preview 1"
          className="w-full h-[480px] max-w-xs sm:max-w-sm md:max-w-md drop-shadow-lg"
        />
        <img
          src="feature-2.png"
          alt="App Preview 2"
          className="w-full h-[480px] max-w-xs sm:max-w-sm md:max-w-md drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
