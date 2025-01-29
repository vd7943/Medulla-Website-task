import React from "react";

const SupportedDevices = () => {
  return (
    <section className="max-w-5xl ml-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 mt-8">
      <h2 className="text-3xl font-bold text-left text-blue-900 border-b border-blue-900 pb-2 mb-6">
        Supported Devices
      </h2>
      <p className="text-gray-700 text-lg text-left mb-6">
        As students, we understand the importance of accessibility across
        devices. That's why our app is designed to work seamlessly on:
      </p>
      <div className="flex flex-row">
        <div>
          <ul className="list-disc list-inside text-gray-700 text-lg text-left ps-6 mb-6">
            <li>Android phones</li>
            <li>Android Tablets</li>
            <li>iPhones</li>
            <li>iPads</li>
            <li>Landscape Mode in Tablets</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="device-1.png"
            alt="Supported Devices"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportedDevices;
