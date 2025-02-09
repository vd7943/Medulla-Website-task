import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-6 font-semibold text-lg lg:font-bold lg:text-xl flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="px-6 pb-4 text-gray-700">{children}</div>}
    </div>
  );
};

export default AccordionItem;
