import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  const faqData = [
    {
      question: "What age groups are suitable for your coding programs?",
      answer:
        "Our coding programs cater to kids aged 7 to 16, providing age-appropriate content and challenges.",
    },
    {
      question: "Is any prior coding experience required for enrollment?",
      answer:
        "No prior coding experience is necessary. Our courses are designed for beginners, guiding kids through the fundamentals and gradually advancing their skills.",
    },
    {
      question: "What coding languages do you teach in your programs?",
      answer:
        "We offer courses in block-based languages like Scratch for younger kids and progress to text-based languages such as Python and JavaScript for older participants.",
    },
    {
      question: "Are the classes conducted in-person or online?",
      answer:
        "Currently, our classes are conducted online, providing a flexible and accessible learning environment. We aim to introduce in-person options in the future.",
    },
    {
      question:
        "How do you ensure a safe online learning environment for kids?",
      answer:
        "We prioritize online safety by employing secure platforms, implementing age-appropriate content, and closely monitoring interactions during live sessions.",
    },
    {
      question: "What resources and materials are provided for the courses?",
      answer:
        "Students receive access to a variety of resources, including video tutorials, coding exercises, and project materials. We aim to make learning both engaging and enjoyable.",
    },
    {
      question:
        "How can parents track their child's progress in the coding programs?",
      answer:
        "Parents have access to regular progress reports, and we encourage open communication. Additionally, we organize periodic showcase events for students to demonstrate their projects.",
    },
  ];
  return (
    <div className="container mx-auto px-5 my-16">
      <div className="w-full lg:w-3/5 mx-auto">
        <h2 className="mb-10 text-center w-full text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900">
          Commonly Asked <span className="text-blue-500">Questions</span>
        </h2>
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqData.map((data, dataIdx) => (
              <AccordionItem
                value={`item-${dataIdx}`}
                key={dataIdx}
                className="py-3"
              >
                <AccordionTrigger className="md:text-lg xl:text-xl text-left font-semibold">
                  {data.question}
                </AccordionTrigger>
                <AccordionContent className="md:text-lg xl:text-xl text-slate-600">
                  {data.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
