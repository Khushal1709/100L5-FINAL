import com from "../image/com.svg";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaDownload, FaEnvelope, FaBars, FaPhone } from 'react-icons/fa';
import document from "../image/document.svg";

const AnnualLLP = () => {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const steps = [
    {
      number: "1.",
      days: "DAY 1-2",
      description: [
        "Consultation Between the LegalBoss Team and the Partners/Designated Partners of the LLP",
        "Preparation of Required Documents and Drafting of Resolutions",
      ],
    },
    {
      number: "2.",
      days: "DAY 3-4",
      description: [
        "Execution of Necessary Documents",
        "Drafting and Preparation of ROC Forms for Annual Filing",
      ],
    },
    {
      number: "3.",
      days: "DAY 5-6",
      description: [
        " Submission of Forms and Documents to the ROC",
        "Payment of ROC Filing Fees",
      ],           
    },
    {
      number: "4.",
      days: "DAY 7 Onwards",
      description: [
        " ROC Processing and Approval Time",
        "Issuance of Approval Letter Along with ROC Forms and Challan",
      ],
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? 0 : id);
  };
  // Plans
  const plans = [
    {
      title: "BUSINESS PLAN :",
      price: "RS.6499.00",
      items: [
        "[Turnover or/and capital more than Rs. 1 Crore]",
        "Documents Preparations",
        "Preparation of ROC annual Forms",
        "Filling of Forms",
      ],
      highlight: false,
    },
    {
      title: "ECONOMY PLAN :",
      price: "RS.4999.00",
      items: [
        "[Turnover or/and capital  Up to Rs. 1 Crore]",
        "Documents Preparations",
        "Preparation of ROC annual Forms",
        "Filling of Forms",
      ],
      highlight: true,
    },
    {
      title: "STARTER PLAN :",
      price: "RS.2499.00",
      items: [
        "[Turnover Up to Rs. 30 Lakh and/or Capital Up to Rs. 20 Lakh]",
        "Documents Preparations",
        "Preparation of ROC annual Forms",
        "Filling of Forms",
      ],
      highlight: false,
    },
  ];

  // Slider cards section
  const advantages = [
    {
      id: 1,
      title: " Legal Ownership and Protection",
      description:
        "A Private Limited Company can legally own the trademark, ensuring that the brand name, logo, tagline, or any unique identity is fully protected from unauthorized use by competitors.",
    },
    {
      id: 2,
      title: "Exclusive Rights Across India",
      description:
        "Trademark registration grants the company exclusive rights to use the mark across the country for the goods or services it represents, giving it a significant edge in the market.",
    },
    {
      id: 3,
      title: "Stronger Brand Image and Trust",
      description:
        "A registered trademark enhances the company's credibility and creates trust among customers, investors, and business partners. It signals professionalism and reliability.",
    },
    {
      id: 4,
      title: "Creation of a Valuable Asset",
      description:
        "A trademark becomes an intangible asset of the company. Over time, it can significantly appreciate in value and can be sold, franchised, assigned, or licensed for commercial gain.",
    },
    {
      id: 5,
      title: "Competitive Advantage",
      description:
        "With exclusive rights, the company can legally prevent others from using a similar mark that might confuse customers. It helps maintain a unique identity and competitive position.",
    },
    {
      id: 6,
      title: "Global Expansion Made Easier",
      description:
        "Trademark registration simplifies the process of securing trademarks in other countries if the company plans to expand internationally, especially through treaties like the Madrid Protocol.",
    },
  ];
  const faqItems = [
    {
      id: 1,
      question: "Is it mandatory to file audited financial statements?",
      answer:
        "Audited financial statements are only required if the LLP meets certain criteria (such as a higher turnover or capital contribution). Otherwise, unaudited accounts may be filed.",
    },
    {
      id: 2,
      question:
        "My LLP had no transactions during the year. Do I still need to file annual ROC forms?",
      answer:
        "Yes, even if there were no business transactions, filing annual returns and accounts with the ROC is still mandatory for compliance.",
    },
    {
      id: 3,
      question:
        "Is it necessary to be physically present during the annual filing process?",
      answer:
        "No, physical presence is not required. The filing process can be completed remotely by the designated representatives or authorized professionals.",
    },
    {
      id: 4,
      question: "What are the annual compliance requirements for an LLP?",
      answer:
        "The key compliance requirements include filing the annual return (Form LLP-11), submitting the financial statement (Form LLP-8), and updating any changes in the LLP’s structure or partners.",
    },
  ];
  // Calculate previous and next indices
  const prevIndex = activeSlide === 1 ? advantages.length - 1 : activeSlide - 2;
  const nextIndex = activeSlide === advantages.length ? 0 : activeSlide;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

  // Toggle the social menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setIsPhoneOpen(false); // Close phone if opening menu
  };
  const togglePhone = () => {
    setIsPhoneOpen(!isPhoneOpen);
    if (!isPhoneOpen) setIsMenuOpen(false); // Close menu if opening phone
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center py-16 px-4 md:px-8"
        style={{ backgroundImage: `url(${com})` }}
      >
        {/* Floating Social Menu */}
                 <div className="fixed z-50 right-4 top-10 flex flex-col items-end">
                   <div className="flex flex-col">
                     <button
                       className="bg-blue-800 hover:bg-blue-900 text-white p-4 rounded focus:outline-none mt-80"
                       onClick={toggleMenu}
                     >
                       <FaBars />
                     </button>
                     <button
                       className="bg-blue-800 hover:bg-blue-900 text-white p-4 rounded focus:outline-none mt-2"
                       onClick={togglePhone}
                     >
                       <FaPhone />
                     </button>
                   </div>
                   <div
                 className={`absolute bottom-0 right-4 sm:right-8 md:right-12 lg:right-16 mt-4 bg-blue-50 rounded-md shadow-lg overflow-hidden transition-all duration-300
               ${isMenuOpen ? 'block w-56 sm:w-64' : 'hidden'}
             `}
                 style={{ zIndex: 9999 }}
               >
                 <div className="p-6 sm:p-8 flex flex-col gap-4">
                   <a href="#" className="flex items-center gap-4 hover:bg-[#002C6D] hover:text-white rounded-md px-3 py-2 transition-colors">
                     <span className="bg-[#002C6D] w-8 h-10 flex items-center justify-center rounded-md">
                       <FaFacebook className="text-white" size={22} />
                     </span>
                     <span className="text-gray-700 text-base sm:text-lg font-medium">Facebook</span>
                   </a>
                   <a href="#" className="flex items-center gap-4 hover:bg-[#002C6D] hover:text-white rounded-md px-3 py-2 transition-colors">
                     <span className="bg-[#002C6D] w-10 h-10 flex items-center justify-center rounded-md">
                       <FaTwitter className="text-white" size={22} />
                     </span>
                     <span className="text-gray-700 text-base sm:text-lg font-medium">Twitter</span>
                   </a>
                   <a href="#" className="flex items-center gap-4 hover:bg-[#002C6D] hover:text-white rounded-md px-3 py-2 transition-colors">
                     <span className="bg-[#002C6D] w-10 h-10 flex items-center justify-center rounded-md">
                       <FaInstagram className="text-white" size={22} />
                     </span>
                     <span className="text-gray-700 text-base sm:text-lg font-medium">Instagram</span>
                   </a>
                   <a href="#" className="flex items-center gap-4 hover:bg-[#002C6D] hover:text-white rounded-md px-3 py-2 transition-colors">
                     <span className="bg-[#002C6D] w-10 h-10 flex items-center justify-center rounded-md">
                       <FaDownload className="text-white" size={22} />
                     </span>
                     <span className="text-gray-700 text-base sm:text-lg font-medium">Download</span>
                   </a>
                   <a href="#" className="flex items-center gap-4 hover:bg-[#002C6D] hover:text-white rounded-md px-3 py-2 transition-colors">
                     <span className="bg-[#002C6D] w-10 h-10 flex items-center justify-center rounded-md">
                       <FaEnvelope className="text-white" size={22} />
                     </span>
                     <span className="text-gray-700 text-base sm:text-lg font-medium">E-mail</span>
                   </a>
                 </div>
               </div>
               <div
                 className={`absolute bottom-0  right-4 sm:right-6 md:right-8 lg:right-12 bg-blue-50 rounded-md shadow-lg overflow-hidden transition-all duration-300
               ${isPhoneOpen ? "block w-64 sm:w-80" : "hidden"}
             `}
                 style={{ zIndex: 9999 }}
               >
                 <div className="px-4 py-3 flex  top-5 items-center gap-4 rounded-md ">
                   <div className="flex flex-cols">
                   <span className="bg-[#002C6D] w-10 h-10 flex items-center  justify-center rounded-md">
                     <FaPhone className="text-white" size={16} />
                   </span>
                   <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium select-text">
                     +91 56560 56562
                   </span>
                   </div>
                 </div>
               </div>
       
                 </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-start w-full">
          {/* Info Section */}
          <div className="w-full bg-white/20 backdrop-blur-xs border border-blue-800 p-6 sm:p-8 flex-1 rounded-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14387f] mb-2 uppercase">
              LLP Annual Filling
            </h2>
            <p className="font-bold text-white mb-4 tracking-wide uppercase">
              LLP Annual Compliances
            </p>
            <p className="mb-2 text-white">
              Team help you in filling of LLP Annual ROC Compliances.
            </p>
            <p className="mb-2 text-white">Just Rs.2499/-</p>
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
      {/* Choose your package */}
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
              className={`flex flex-col items-start text-left rounded-xl shadow min-w-[320px] max-w-[350px] w-full px-6 py-8 ${
                plan.highlight
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
                className={`mb-6 space-y-2 text-sm ${
                  plan.highlight ? "text-white" : "text-[#002D6B]"
                }`}
              >
                {plan.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button
                className={`mt-auto w-full py-3 rounded font-bold text-base ${
                  plan.highlight
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
      {/* More about pan and tan */}
      <div className="mb-10 px-3 md:px-6 max-w-7xl mx-auto">
        <div class="flex items-center space-x-4">
          <h1 class="text-lg font-bold text-gray-500 mt-12 uppercase word-spacing">
            OUR COMPANY
          </h1>
          <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-blue-900 uppercase ">
          More About LLP Annual Filling
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 mb-4">
                All entities registered under the Limited Liability Partnership
                (LLP) Act, 2008 are required to file their annual return and
                financial statements with the Registrar of Companies (ROC) each
                year. These filings must be done within the specified
                deadlines—30 and 60 days, respectively. An audit of the
                financial statements is not mandatory for LLPs with a turnover
                of less than ₹40 lakhs and a capital contribution below ₹25
                lakhs. However, even in such cases, submission of the annual
                return and statement of accounts to the ROC is still compulsory
                within the prescribed time frame.
              </p>
              <b>Types of Annual Compliance:</b>
              <br />
              <b>Annual Return :</b>
              <p>
                The Annual Return provides important information about the LLP,
                including the names and details of all designated partners and
                partners, any changes in their roles during the year, their
                contributions and obligations, and the turnover for the
                financial year. This return must be submitted using Form LLP-11
                within 60 days from the end of the financial year, which means
                the due date is typically 30th May each year.
              </p>
              <b>Annual Accounts :</b>
              <p>
                Every LLP is required to file its financial statements—whether
                audited (if applicable) or unaudited—using Form LLP-8 with the
                Registrar of Companies (ROC). This must be done within 30 days
                after the completion of six months from the end of the financial
                year, which means the filing deadline is typically 30th October
                each year.
              </p>

              <b>Why Filing Annual Returns is Important:</b>
              <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base mb-4 text-gray-600 ">
                <li>
                  Helps prevent late fees and ensures the LLP remains compliant.
                </li>
                <li>
                  Reduces the risk of legal issues involving the LLP and its
                  designated partners.
                </li>
                <li>
                  Keeps the LLP’s status listed as “ACTIVE” with the
                  authorities.
                </li>
                <li>
                  Strengthens the firm's credibility with stakeholders and
                  financial institutions.
                </li>
                <li>
                  Prevents designated partners from facing disqualification due
                  to non-compliance.
                </li>
                <li>
                  Safeguards the LLP from being removed or struck off by the
                  Registrar of Companies.
                </li>
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
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-tight">
          FAQ ON LLP ANNUAL FILLING
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

      {/* DOCUMENTS REQUIRED */}
      <div className="mb-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div class="flex items-center space-x-4">
          <h1 class="text-lg font-bold text-gray-500 mt-12 uppercase tracking-wider">
            OUR COMPANY
          </h1>
          <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-blue-900 leading-tight">
          DOCUMENTS REQUIRED FOR LLP ANNUAL FILLING
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-8 md:p-12 rounded-lg relative overflow-hidden ">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-blue-900 font-bold text-xl ml-6 sm:text-2xl mb-4 sm:mb-8">
            MINIMUM REQUIREMENT
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 ml-6">
            <div>
              <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600">
                <li>Audited/Unaudited Financial Statement</li>
                <li>Company Pan card</li>
                <li>List of Directors and Partners</li>
                <li>All LLP Agreements</li>
                <li>During the Year Forms Filed to ROC with challan</li>
                <li>Any other information or documents as may required</li>
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
          <h1 className="text-lg font-bold text-gray-500 tracking-wider uppercase">
            Steps & Time Duration
          </h1>
          <div className="h-0.5 w-40 bg-gray-500"></div>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-900 leading-tight">
          STEPS INVOLVED IN LLP ANNUAL FILLING
        </h1>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute -top-5 -left-2 w-10 h-10 rounded-full bg-[#0a3277] flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              <div className="bg-[#eef3fb] p-6 pt-16 rounded-lg ">
                <div className="font-bold text-[#0a3277] mb-4 text-base">
                  {step.days}
                </div>
                <div className="text-gray-700 space-y-2 ">
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

export default AnnualLLP;
