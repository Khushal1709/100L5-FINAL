import Company from "../image/Company.svg";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaBars,
} from "react-icons/fa";
import PricingPlans from "../Pages/PricingPlans";
import PublicLimitedCompany from "../Pages/PublicLimitedCompany";
import document from "../image/document.svg";


const ChangesInDirectors = () => {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [activeSlide, setActiveSlide] = useState(1);

  const steps = [
    {
      number: "1.",
      days: "DAY 1-2",
      description: [
        "Introductory meeting between our compliance team and the company’s directors/promoters.",
        "Collection of preliminary information and preparation of board resolutions and legal drafts necessary for the process."
      ]
    },
    {
      number: "2.",
      days: "DAY 3-4",
      description: [
        "Finalization and execution of documents by authorized personnel.",
        "Compliance experts prepare the required ROC forms and double-check all details for accuracy and completeness."
      ]
    },
    {
      number: "3.",
      days: "DAY 4-6",
      description: [
        "Submission of all charge-related forms to the Registrar of Companies (ROC).",
        "Government fees and stamp duties (if applicable) are paid during this stage."
      ]
    },
    {
      number: "4.",
      days: "DAY 7-8",
      description: [
        "ROC reviews the submission for approval.",
        "GOnce approved, the company receives certified copies of filed forms, payment receipts, and confirmation of charge registration/modification/satisfaction."
      ]
    }
  ]
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  const toggleItem = id => {
    setOpenItem(openItem === id ? 0 : id)
  }

  // Slider cards section
  const advantages = [
    {
      id: 1,
      title: "LIMITED LIABILITY",
      description:
        "There Is No Personal Liability Of Director Shareholder For Any Debt Of The Company. Director Personal Property Are Safe."
    },
    {
      id: 2,
      title: "SEPARATE LEGAL ENTITY",
      description:
        "Company Has A Spate PAN, Other Registration In Its Own Name And Its Legally Recognized As A Spate Entity. Company Can Own Property Its Own Name."
    },
    {
      id: 3,
      title: "TRANSFERABILITY",
      description: "For The Number Of Shares And Shares Can Be Transfer Entity."
    },
    {
      id: 4,
      title: "PERPETUAL SUCCESSION",
      description:
        "The company continues to exist regardless of changes in ownership or management."
    },
    {
      id: 5,
      title: "TAX BENEFITS",
      description:
        "Private limited companies enjoy various tax advantages and deductions not available to sole proprietorships."
    },
    {
      id: 6,
      title: "CREDIBILITY",
      description:
        "A registered company has higher credibility with customers, suppliers, and financial institutions."
    }
  ]
  const faqItems = [
    {
      id: 1,
      question: "What is a 'Charge' under the Companies Act, 2013?",
      answer:
        "A charge is a legal right or interest created over a company's property or assets (present or future) as security for a loan or obligation. It includes mortgages and is in favor of a lender such as a bank or financial institution."
    },
    {
      id: 2,
      question: "Why is it necessary to register a charge?",
      answer:
        "Registering a charge provides legal proof of the lender’s interest in the company's assets. It helps prevent future disputes, protects the lender’s rights, and ensures compliance with the Companies Act."
    },
    {
      id: 3,
      question: "Which form is used to register a new charge?",
      answer:
        "For the creation of a charge, a company must file Form CHG-1 with the Registrar of Companies (ROC) within 30 days of its creation."
    },
    {
      id: 4,
      question: "What happens if a company fails to register a charge within 30 days?",
      answer:
        "A delay in registration can lead to additional fees, penalties, and legal complications. The charge may also become unenforceable against liquidators or creditors."
    },
    {
      id: 5,
      question: "When is the 'Modification of Charge' applicable?",
      answer:
        "Modification is required when there are changes in the terms of an existing charge, such as revised loan amounts, tenure, interest rates, or any other contractual conditions. This must be reported through Form CHG-1 within 30 days."
    }
  ]
  // Calculate previous and next indices
  const prevIndex = activeSlide === 1 ? advantages.length - 1 : activeSlide - 2
  const nextIndex = activeSlide === advantages.length ? 0 : activeSlide

  const plans = [
    {
      title: "Economy Plan :",
      price: "₹2999.00",
      items: [
        "Document Preparations",
        "Preparation of Form - 2",
        "Filling of Form (CHG-1/CHG-4)-2",
      ],
      highlight: false,
    },
    {
      title: "Starter Plan:",
      price: "RS.₹1599.00",
      items: [
        "Document Preparations",
        "Preparation of Form - 1",
        "Filling of Form (CHG-1/CHG-4)-1",
      ],
      highlight: true,
    },
    {
      title: "CORPORATE:",
      price: "RS.₹34,999.00",
      items: [
        "For Oppose Statement or Counter Statement",
        "For One (1) Class, One (1) Application",
        "Filing of Affidavit in Support of Opposition or Application",
        "Hearing for the Opposition or Application",
      ],
      highlight: false,
    },
  ];

  return (
    <>
      <div
        className="relative bg-cover bg-center py-16 px-4 md:px-8"
        style={{ backgroundImage: `url(${Company})` }}
      >
        {/* Floating Social Menu */}
        <div className="fixed z-50 right-4 top-1/4 flex flex-col items-end">
          <div className="flex flex-col">
            <button
              className="bg-[#14387f] p-3 rounded-t-md text-white text-2xl flex items-center justify-center"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>
            <button className="bg-[#14387f] p-3 rounded-b-md text-white text-2xl flex items-center justify-center border-t border-white">
              <FaPhone />
            </button>
          </div>

          {open && (
            <div className="mt-2 w-64 bg-white shadow-xl rounded-md py-4 px-4 flex flex-col gap-4 animate-fade-in">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaTwitter />, label: "Twitter" },
                { icon: <FaInstagram />, label: "Instagram" },
                { icon: <FaDownload />, label: "Download" },
                { icon: <FaEnvelope />, label: "E-mail" }
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center gap-4 hover:bg-blue-50 px-2 py-2 rounded transition"
                >
                  <span className="bg-[#14387f] text-white p-2 rounded">
                    {item.icon}
                  </span>
                  <span className="text-gray-700 font-medium">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-start w-full">
          {/* Info Section */}
          <div className="w-full bg-white/20 backdrop-blur-xs border border-blue-800 p-6 sm:p-8 flex-1 rounded-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14387f] mb-2 uppercase">
              Charge
            </h2>
            <p className="font-bold text-white mb-4 tracking-wide">
              Creation/Modification/Satisfaction of Charges
            </p>
            <p className="mb-2 text-white">
               Help you in Creation/Modification/Satisfaction of Charges.
            </p>
            <p className="text-white">
              Service Start From: <span className="text-white">₹Rs. 1599/-</span>
            </p>
          </div>

          {/* Form Section */}
          <div className="w-full bg-white/20 backdrop-blur-xs border border-blue-800 p-6 sm:p-8 flex-1 rounded-md max-w-md mx-auto lg:mx-0">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#14387f] mb-6 tracking-wide text-center sm:text-left">
              SEND US AN EMAIL
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#14387f] bg-white"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#14387f] bg-white"
                required
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#14387f] bg-white"
                required
              />
              <button
                type="submit"
                className="bg-[#14387f] text-white font-semibold py-2 rounded hover:bg-[#0f295a] transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>


      <div className="bg-white max-w-7xl mx-auto px-4 py-12  ">
        <div className="mb-8 md:mb-12 ">
          <h3 className="text-gray-500 font-semibold tracking-wide uppercase">
            CHOOSE YOUR PACKAGE
          </h3>
          <h2 className="text-3xl md:text-3xl font-extrabold text-[#002D6B] mt-2">
            OPEN PRICE | NO HIDDEN
          </h2>
        </div>
        <div
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start text-left rounded-xl shadow min-w-[320px] max-w-[350px] w-full px-6 py-8 ${plan.highlight
                  ? "bg-[#002D6B] text-white"
                  : "bg-[#F0F6FF] text-[#002D6B]"
                }`}
            >
              <h3 className="text-center w-full font-extrabold text-lg mb-2 tracking-wide">
                {plan.title}
              </h3>
              <p className="text-center w-full font-extrabold mb-4 text-base">
                {plan.price}
              </p>
              <ul
                className={`mb-6 space-y-2 text-sm ${plan.highlight ? "text-white" : "text-[#002D6B]"
                  }`}
              >
                {plan.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button
                className={`mt-auto w-full py-3 rounded font-bold text-base ${plan.highlight
                    ? "bg-white text-[#002D6B]"
                    : "bg-[#002D6B] text-white"
                  }`}
              >
                ORDER NOW
              </button>
            </div>
          ))}
        </div>
      </div>


      <div className="mb-10 px-3 md:px-6 max-w-7xl mx-auto">
        <div class="flex items-center space-x-4">
          <h1 class="text-lg font-bold text-gray-500 mt-12 uppercase word-spacing">
            OUR COMPANY
          </h1>
          <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-blue-900 uppercase ">
        More About Charges
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7">
              About
            </h2>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 ml-3">
               <ul><li>Under the Companies Act, 2013, a "charge" refers to an interest or lien created over a company's assets or properties (including future tangible or intangible assets) to serve as security for a lender. This may include mortgages. Typically, a borrower company creates a charge in favor of a bank, financial institution, or lender to secure repayment obligations.</li></ul>
              </p>
            </div>
          </section>

          {/* Section 2: Why Choose Public Limited Company */}
          <section>
            <h2 className="text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7">
            Creation of Charge:
            </h2>
            <div className=" bg-opacity-70 p-6 ">
              <ul className="space-y-4 text-gray-600 ml-3">
                <li>When a company obtains a loan from a bank, financial institution, or any non-banking entity, it is mandatory under the Companies Act, 2013 to register the charge. Whether the borrowing is short-term or long-term, and whether it originates within India or abroad, the company must file the details of the charge with the Registrar of Companies (ROC) by submitting Form CHG-1 within 30 days, along with the relevant instrument that creates the charge.</li>
              </ul>
            </div>
          </section>

           {/* Section 3: Why Choose Public Limited Company */}
           <section>
            <h2 className="text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7">
            Modification of Charge:
            </h2>
            <div className=" bg-opacity-70 p-6 ">
              <ul className="space-y-4 text-gray-600 ml-3">
                <li>Whenever there are changes to the terms of an existing borrowing — such as adjustments to loan conditions, amounts, or repayment schedules — it is treated as a modification of charge. As per the Companies Act, 2013, such modifications must also be registered with the ROC by filing Form CHG-1 within 30 days, along with the supporting documents that detail the modifications.</li>
              </ul>
            </div>
          </section>

           {/* Section 4: Why Choose Public Limited Company */}
           <section>
            <h2 className="text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7">
            Satisfaction of Charge:
            </h2>
            <div className=" bg-opacity-70 p-6 ">
              <ul className="space-y-4 text-gray-600 ml-3">
                <li>Once a borrower repays the full loan amount and fulfills all associated obligations, the created charge is considered satisfied. In compliance with the Companies Act, 2013, the company must file Form CHG-4 with the ROC within 30 days to officially record the satisfaction of the charge and remove it from the borrower's registered records.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      {/* ASK SOMETHING */}
      <section className="mb-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-gray-500 mt-12 uppercase tracking-wider">
            ASK SOMETHING
          </h1>
          <div className="h-0.5 w-40 bg-gray-500 mt-12"></div>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-tight uppercase">
          FAQ on Charge
        </h1>

        <div className="mt-6 space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="rounded-md overflow-hidden bg-blue-50"
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-900 text-white flex items-center justify-center mr-4 text-sm">
                    <span>{item.id}.</span>
                  </div>
                  <h3 className="font-medium text-blue-900 text-base">
                    {item.question}
                  </h3>
                </div>
                {openItem === item.id ? (
                  <ChevronUp className="text-gray-500 w-5 h-5" />
                ) : (
                  <ChevronDown className="text-gray-500 w-5 h-5" />
                )}
              </div>
              {openItem === item.id && (
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* OUR COMPANY DOCUMENTS REQUIRED */}
      <div className="max-w-7xl mx-auto mb-6 px-4 sm:px-6">
        <div class="flex items-center space-x-4">
          <h1 class="text-lg font-bold text-gray-500 mt-12 uppercase tracking-wider">
            OUR COMPANY
          </h1>
          <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-blue-900 leading-tight">
          DOCUMENTS REQUIRED
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-8 md:p-12 rounded-lg relative overflow-hidden ">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-blue-900 font-bold text-xl sm:text-2xl mb-4 sm:mb-8 ml-7">
            MINIMUM REQUIREMENT
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600 ml-7">
                <li>Agreement with sanction letter for charge creation / modification</li>
                <li>NOC Letter for Charge Satisfaction</li>
                <li>Digital Signature Certificate of Director</li>
                <li>Required Bank Authorised Signatory Digital Signature.</li>
                <li>Other Documents and information as may required.</li>
              </ol>
            </div>
            <div className="flex items-center justify-center mt-4 md:mt-0">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                <div className="absolute right-0 bottom-0">
                  <img
                    src={document || "/placeholder.svg"}
                    alt="Document icon"
                    className="h-auto w-auto max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-100"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-blue-100"></div>
        </div>
      </div>

      {/* STEPS SECTION */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mt-12 mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-gray-500 uppercase tracking-wider">
            STEPS & TIME DURATION
          </h1>
          <div className="h-0.5 w-40 bg-gray-500"></div>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-900 leading-tight uppercase">
        Step involved in Creation/Modification/Satisfaction of Charges
        </h1>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute -top-5 -left-2 w-10 h-10 rounded-full bg-[#0a3277] flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              <div className="bg-[#eef3fb] p-6 pt-16 rounded-lg">
                <div className="font-bold text-[#0a3277] mb-4 text-base">
                  {step.days}
                </div>
                <div className="text-gray-700 space-y-2">
                  {step.description.map((desc, i) => (
                    <p key={i} className="text-sm">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#002B6B] text-white p-3 rounded-full shadow-lg hover:bg-[#001A41] transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </>
  );
};

export default ChangesInDirectors;
