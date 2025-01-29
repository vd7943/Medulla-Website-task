import React from "react";

const Goal = () => {
  return (
    <section className="max-w-[1060px] mx-auto lg:mx-0 lg:mr-auto p-6 bg-white shadow-lg  rounded-2xl border border-gray-200 mt-8 mb-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mt-10 lg:mt-0">
        <img
          src="goal-1.png"
          alt="Device"
          className="w-56 h-[400px] md:w-64 md:h-[450px] lg:w-[320px] lg:h-[520px] drop-shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 xl:pt-10 px-4 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2 mb-6">
          Our Goal and Mission
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-4 font-semibold">
          Medulla Flashcards is designed to level up your study game and crush
          the PG Medical Entrance Exams in a fun, relaxing, and affordable way.
        </p>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          We envision this app supporting all 7,00,000 medical students of India
          - across all years, interns, and post interns, to make their PG
          journey a bit more enjoyable and accessible.{" "}
          <span role="img" aria-label="smile">
            😁
          </span>
        </p>
      </div>
    </section>
  );
};

export default Goal;
