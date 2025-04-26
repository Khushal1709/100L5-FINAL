import React, { useState } from "react";
import round from "../image/round.svg";

// FAQ data
const faqs = [
  {
    question: "How Do I Become An Author?",
    answer:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Assumenda, Dolorum, Vero Ipsum Molestiae Minima Odio Quo Voluptate Illum Excepturi Quam Cum Voluptates Doloribus Quae Nisi Tempore Necessitatibus Dolores Ducimus Enim Libero Eaque Explicabo Suscipit Animi At Quaerat Aliquid Ex Expedita Perspiciatis? Saepe, Aperiam, Nam Unde Quas Beatae Vero Vitae Nulla.",
  },
  {
    question: "Helpful Resources For Authors",
    answer: "",
  },
  {
    question: "How Much Money Can I Make?",
    answer: "",
  },
  {
    question: "How Do I Become An Author?",
    answer: "",
  },
  {
    question: "Helpful Resources For Authors",
    answer: "",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <p className="text-gray-400 font-semibold tracking-widest uppercase text-sm mb-2">
          Ask Something
        </p>
        <div className="relative flex flex-col items-start mb-10">

          <img
            src={round}
            alt=""
            className="absolute left-0 top-0 w-20 h-20 sm:w-24 sm:h-24 opacity-10 pointer-events-none select-none"
          />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2463] leading-tight mb-2">
            Frequently Asked <br /> Questions
          </h2>
        </div>
      </div>
      {/* FAQ List */}
      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <div key={idx} className="flex items-start">
            {/* Numbered Circle */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0a2463] text-white font-bold text-lg mt-2">
                {idx + 1}.
              </div>
            </div>
            {/* Question & Answer */}
            <div className="flex-1 ml-3 w-full">
              <button
                className={`w-full text-left px-4 py-4 bg-blue-50 hover:bg-blue-100 transition-colors duration-200 rounded-none border-b-2 border-white flex justify-between items-center focus:outline-none`}
                onClick={() => handleClick(idx)}
              >
                <span className="font-semibold text-[#0a2463] text-base md:text-lg">
                  {faq.question}
                </span>
                <span className="ml-4">
                  {openIndex === idx ? (
                    <svg width="20" height="20" fill="#0a2463" viewBox="0 0 20 20">
                      <path d="M6 12l4-4 4 4" stroke="#0a2463" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" fill="#0a2463" viewBox="0 0 20 20">
                      <path d="M6 8l4 4 4-4" stroke="#0a2463" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
              </button>
              {/* Answer */}
              {openIndex === idx && faq.answer && (
                <div className="bg-blue-50 px-4 pb-4 text-[#5a6e8c] text-[15px] transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
