import React from "react";

const JoinUs = () => {
  return (
    <section className="max-w-[1120px] mx-auto lg:mx-0 lg:mr-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8 mb-20 flex flex-col lg:flex-row items-center gap-10">
      <div className="lg:w-1/2 flex justify-center gap-6">
        <img
          src="join-1.png"
          alt="Medulla Plus Subscription"
          className="w-40 md:w-56 lg:w-[400px] lg:h-[480px] drop-shadow-lg"
        />
        <img
          src="join-1.png"
          alt="Medulla Core Subscription"
          className="w-40 md:w-56 lg:w-[400px] lg:h-[480px] drop-shadow-lg"
        />
      </div>

      <div className="lg:w-1/2 space-y-6 p-6 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2">
          Join Medulla <br /> Plus & Core
        </h2>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          Subscription plans overview:
        </p>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          <strong>Plus:</strong> All 19 subjects, Flashcards + QnA
        </p>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          <strong>Core:</strong> 1st and 2nd Year Subjects – Flashcards + QnA
        </p>
        <p className="text-gray-700 text-base md:text-lg font-semibold">
          Pricing is specifically very affordable because we want all MBBS and
          Post-MBBS students to enjoy this app.
        </p>
      </div>
    </section>
  );
};

export default JoinUs;
