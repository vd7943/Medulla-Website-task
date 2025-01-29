import React from "react";
import { FaHeart } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <div className="max-w-4xl mx-auto my-20 px-6 flex flex-col lg:flex-row items-center bg-white">
      <div className="lg:w-1/2 space-y-6">
        <FaHeart className="text-red-500 text-3xl" />
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

      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <img
          src="feature-1.png"
          alt="App Preview 1"
          className="w-72 md:w-96 lg:w-[400px] drop-shadow-lg"
        />
        <img
          src="feature-2.png"
          alt="App Preview 2"
          className="w-72 md:w-96 lg:w-[400px] drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
