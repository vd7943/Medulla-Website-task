import React, { useState } from "react";
import { motion } from "framer-motion";
import AccordionItem from "./AccordionItem";

const Faq = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto p-6 mt-8"
    >
      <motion.h2 className="text-4xl font-bold text-left text-blue-900 pb-2 mb-6">
        FAQs
      </motion.h2>
      <div className="bg-white shadow-lg rounded-2xl border border-gray-200">
        <AccordionItem
          title="Can I choose my meals?"
          onToggle={() => toggleAccordion(0)}
        >
          <p className="text-left">
            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget.
          </p>
        </AccordionItem>
        <AccordionItem
          title="When will I receive my order?"
          expanded={expanded === 1}
          onToggle={() => toggleAccordion(1)}
        >
          <p className="text-left">
            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget.
          </p>
        </AccordionItem>
        <AccordionItem
          title="Can I skip a delivery?"
          expanded={expanded === 2}
          onToggle={() => toggleAccordion(2)}
        >
          <p className="text-left">
            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget.
          </p>
        </AccordionItem>
        <AccordionItem
          title="Can I add Extras to my delivery?"
          expanded={expanded === 3}
          onToggle={() => toggleAccordion(3)}
        >
          <p className="text-left">
            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
            Maecenas tempus, tellus eget.
          </p>
        </AccordionItem>
      </div>
    </motion.section>
  );
};

export default Faq;
