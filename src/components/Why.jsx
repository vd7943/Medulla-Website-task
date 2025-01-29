import React from "react";

const Why = () => {
  return (
    <section className="max-w-[1060px] mx-auto lg:mx-0 lg:ml-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8 mb-20 flex flex-col lg:flex-row items-center gap-10">
      <div className="lg:w-1/2 space-y-6 p-6 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2">
          Why Us
        </h2>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          A Safe Space for Medical Students – A Perfect Revision Companion!
          <br />
          Our app is designed as a standalone revision tool catering to 1st-year
          to 4th-year MBBS students, interns, and post-interns.
        </p>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          We're not here to compete; we’re here to complement.
        </p>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          Think of it as a stress-free, no-pressure space with a simple,
          beautiful UI tailored for the next generation of doctors.
        </p>
        <div className="mt-6">
          <div className="flex justify-between text-gray-700 text-base md:text-lg font-semibold">
            <span>Flashcards</span>
            <span>2000+</span>
          </div>
          <div className="h-1 w-full bg-gray-300 mt-1">
            <div className="h-full w-[60%] bg-blue-900"></div>
          </div>

          <div className="flex justify-between text-gray-700 text-base md:text-lg font-semibold mt-4">
            <span>Question & Answer</span>
            <span>20,000+</span>
          </div>
          <div className="h-1 w-full bg-gray-300 mt-1">
            <div className="h-full w-[80%] bg-blue-900"></div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <img
          src="why-1.png"
          alt="Medulla Flashcards App"
          className="w-40 md:w-64 lg:w-[320px] lg:h-[500px] drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default Why;
