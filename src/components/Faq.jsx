import React from "react";
import AccordionItem from "./AccordionItem";

const Faq = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto p-6 mt-8">
        <h2 className="text-4xl font-bold text-left text-blue-900 pb-2 mb-6">
          FAQs
        </h2>
        <div className="bg-white shadow-lg rounded-2xl border border-gray-200">
          <AccordionItem title="Can I choose my meals?">
            <p className="text-left">
              Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
              Maecenas tempus, tellus eget.
            </p>
          </AccordionItem>
          <AccordionItem title="When will I receive my order?" />
          <AccordionItem title="Can I skip a delivery?" />
          <AccordionItem title="Can I add Extras to my delivery?" />
        </div>
      </section>
    </>
  );
};

export default Faq;
