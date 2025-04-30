import Company from "../image/Company.svg";
import React, { useState,useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaDownload, FaEnvelope, FaBars, FaPhone } from 'react-icons/fa';

import PricingPlans from "../Pages/PricingPlans";
import PublicLimitedCompany from "../Pages/PublicLimitedCompany";
import document from "../image/document.svg";


const ChangesInDirectors = () => {
  const [activeSlide, setActiveSlide] = useState(1);
    const [timer, setTimer] = useState(null);
    const [openItem, setOpenItem] = useState(0);
    const [open, setOpen] = useState(false);

  const steps = [
    {
      number: "1.",
      days: "DAY 1-2",
      description: [
        "Collection of Required Documents: Gather the company’s current Memorandum of Association (MOA), Articles of Association (AOA), Board meeting minutes, and shareholder details.",
        "Digital Signature Certificate (DSC): Ensure that the authorized signatories have a valid DSC for filing forms with the Registrar of Companies (ROC)."
      ]
    },
    {
      number: "2.",
      days: "DAY 3-4",
      description: [
        "Drafting Board Resolution: Prepare a board resolution for the approval of increasing authorized share capital. The resolution should also mention the rationale for the increase.",
        "Convene the Board Meeting: Hold a board meeting to approve the proposal. The Board will decide on the date and agenda for the Extraordinary General Meeting (EGM) to seek shareholders’ approval."
      ]
    },
    {
      number: "3.",
      days: "DAY 4-6",
      description: [
        "Issuing Notice for EGM: Send a notice to all shareholders, directors, and auditors of the company, notifying them of the EGM where shareholders will approve the increase in authorized share capital."
      ]
    },
    {
      number: "4.",
      days: "DAY 7-8",
      description: [
        "Holding EGM: The shareholders gather for the EGM to pass a Special Resolution. The special resolution will approve the increase in authorized share capital and the necessary amendments to the Memorandum of Association (MOA).",
        "Approval: Shareholders must approve the special resolution for increasing the authorized capital."
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
      question: "What is Authorized Share Capital?",
      answer:
        "Authorized Share Capital refers to the maximum value of share capital that a company can issue to its shareholders, as stated in its Memorandum of Association (MOA). It sets an upper limit for the company to issue shares without needing to amend its authorized share capital."
    },
    {
      id: 2,
      question: "Why would a company increase its authorized share capital?",
      answer:
        "Raise additional funds from investors,Issue bonus shares to existing shareholders,Facilitate growth and expansion by issuing new shares to new investors or partners"
    },
    {
      id: 3,
      question: "Does increasing authorized share capital require shareholder approval?",
      answer:
        "Yes, a special resolution must be passed by the shareholders, typically at an Extraordinary General Meeting (EGM), to approve the increase in authorized share capital."
    },
    {
      id: 4,
      question: "Is there any fee involved in increasing authorized share capital?",
      answer:
        "Yes, a government fee is applicable, and the fee is calculated based on the amount of increase in authorized share capital, as prescribed under the Companies Act and ROC fee structure."
    },
    {
      id: 5,
      question: "How long does it take for the process to complete?",
      answer:
        "Typically, the process takes around 7-10 working days to complete, depending on the ROC processing time and the submission of required documents."
    }
  ]
  
  const plans = [
    {
      title: "Business Plan:",
      price: "₹ 4599.00",
      items: [
        "Documents Preparations",
        "filling a ROC forms SH-7 for up to Rs. 100 Lakh",
      ],
      highlight: false,
    },
    {
      title: "Economy Plan :",
      price: "RS.₹3599.00",
      items: [
        "Documents Preparations",
        "filling a ROC forms SH-7 for up to Rs. 50 Lakh",
        "New E-MOA and E-AOA* ROC fees, Registration Fees, Stamp duty are excluded. Have to Pay on actual basis",
      ],
      highlight: true,
    },
    {
      title: "Starter Plan:",
      price: "RS.₹ 2599.00",
      items: [
        "Documents Preparations",
        "filling a ROC forms SH-7 for up to Rs. 25 lakh",
        "Filing of Affidavit in Support of Opposition or Application",
        "New E-MOA and E-AOA* ROC fees, Registration Fees, Stamp duty are excluded. Have to Pay on actual basis",
      ],
      highlight: false,
    },
  ];

   const handleDotClick = (index) => {
      setActiveSlide(index);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev % advantages.length) + 1);
      }, 4000);
  
      setTimer(interval);
      return () => clearInterval(interval);
    }, []);
  
    const prevIndex =
      activeSlide === 1 ? advantages.length - 1 : activeSlide - 2;
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
        style={{ backgroundImage: `url(${Company})` }}
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14387f] mb-2 uppercase tracking-wide">              
            Authorized Share Capital
            </h2>
            <p className="font-bold text-white mb-4 tracking-wide">
              APPOINTMENT AND/OR RESIGNATION OF DIRECTORS
            </p>
            <p className="mb-2 text-white">
              Team helps you with Change in Directors.
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
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-blue-900 uppercase  ">
        More About Increasing Authorized Share Capital
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7">
            Why Increasing Authorised Share Capital?
            </h2>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 ml-7">
                <li>When a company needs more capital for expansion, launching new projects, or covering operational costs, increasing authorized share capital allows the issuance of new shares to raise funds from investors.</li>

                <li>A company that anticipates growth will often need to increase its authorized share capital to accommodate future share issuance for acquisitions, partnerships, or new business ventures.</li>

                <li>Increasing authorized capital makes it possible to issue additional shares, helping the company bring in new investors or stakeholders to support growth and development.</li>

                <li>Companies may issue bonus shares to existing shareholders as a form of reward. To do this, an increase in authorized capital is necessary to allow the creation of additional shares.</li>

                <li>Under the Companies Act, a company cannot issue more shares than its authorized share capital. Therefore, increasing it becomes a legal necessity before allotting new shares.</li>

                <li>Having a higher authorized share capital can improve a company’s balance sheet and financial credibility, which can be advantageous for securing loans, investors, and business deals.</li>
              </p>
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
        FAQ on Increasing Authorized Share Capital<br />COMPANY
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

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 ml-7">
            <div>
              <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600 ">
                <li>Company PAN Card</li>
                <li>Certification of Incorporation (COI), MOA and AOA</li>
                <li>Current List of Shareholding </li>
                <li>List of Current Directors</li>
                <li>Digital Signature of Director</li>
                <li>Earlier Stamp duty paid Challan and Forms</li>
                <li>Information of Increasing Authorised Share Capital From amount to amount.</li>
                <li>Object for Increasing Authorised Share capital.</li>
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
        <h1 className="text-3xl font-extrabold text-blue-900 leading-tight">
          STEPS INVOLVED IN<br />REGISTRATION
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
