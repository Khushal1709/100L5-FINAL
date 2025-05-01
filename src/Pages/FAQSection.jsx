import React, { useState } from "react";
import round from "../image/round.svg";

const faqs = [
  {
    question: "How can I start a writing career?",
    answer:
      "To begin your path as an author, focus on developing your writing skills through regular practice. Select a topic or genre that excites you, study the craft through reading and courses, and share your work via blogs, contests, or publishing platforms. Building a writing habit and audience is key.",
  },
  {
    question: "What tools or platforms can help new writers?",
    answer: "Aspiring writers can enhance their skills with resources like writing apps, online workshops, community forums, and publishing guides. Platforms such as Reedsy, Medium, and writing groups on Reddit offer tips, feedback, and networking opportunities.",
  },
  {
    question: "What earnings can writers expect?",
    answer: "Writer income depends on many factors like the type of writing, publishing method, audience size, and marketing. Some authors earn part-time income, while others make substantial revenue through book sales, freelance writing, or content creation.",
  },
  {
    question: "Do I need a degree to become an author?",
    answer: "No formal education is required to become a successful author. While writing degrees can help sharpen your skills, many well-known writers are self-taught. What matters most is your dedication to learning, practicing, and improving over time.",
  },
  {
    question: "How do I publish my book?",
    answer: "You can publish through traditional publishers or choose self-publishing platforms like Amazon KDP, IngramSpark, or Draft2Digital. Traditional publishing often involves literary agents, proposals, and longer timelines, while self-publishing offers more control and faster turnaround.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState();

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
