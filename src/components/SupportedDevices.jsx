import React from "react";

const SupportedDevices = () => {
  return (
    <section className="max-w-[1060px] mx-auto lg:mx-0 lg:ml-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 border-b border-blue-900 pb-2 mb-6 lg:text-left">
        Supported Devices
      </h2>
      <p className="text-gray-700 text-base md:text-lg mb-6">
        As students, we understand the importance of accessibility across
        devices. That's why our app is designed to work seamlessly on:
      </p>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2">
          <li>Android phones</li>
          <li>Android Tablets</li>
          <li>iPhones</li>
          <li>iPads</li>
          <li>Landscape Mode in Tablets</li>
        </ul>

        <div className="flex flex-wrap justify-center gap-4">
          <img
            src="device-1.png"
            alt="Supported Devices"
            className="w-40 md:w-56 lg:w-[250px] drop-shadow-lg"
          />
          <img
            src="device-2.png"
            alt="Supported Devices"
            className="w-40 md:w-56 lg:w-[250px] drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportedDevices;
