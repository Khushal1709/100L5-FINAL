import company from "../image/company.svg";
import React, { useState,useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaDownload, FaEnvelope, FaBars, FaPhone } from 'react-icons/fa';

import document from "../image/document.svg";


const ChangesInDirectors = () => {
 const [activeSlide, setActiveSlide] = useState(1);
   const [timer, setTimer] = useState(null);
   const [openItem, setOpenItem] = useState(0);
   const [open, setOpen] = useState(false);

  const steps = [
    {
      number: "1.",
      days: "DAY 1",
      description: [
        "Discussion between LeglBoss Team & the Promoters/Directors of the Company.",
        "Drafting necessary Documents and resolutions "
      ]
    },
    {
      number: "2.",
      days: "DAY 2-3",
      description: [
        "Signing of Required Documents.",
        "Preparation for ROC forms for Changes"
      ]
    },
    {
      number: "3.",
      days: "DAY 3-5",
      description: [
        "Filling of Forms and Documents with ROC",
        "Paying ROC Fees"
      ]
    },
    {
      number: "4.",
      days: "DAY 5 Onwards",
      description: [
        "ROC processing Time / Approval Time",
        "Send Approval Letter with Forms and Challan "
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
      title: "Shifting/Changing Registered Office to Another State",
      description:
        "When a company plans to shift its registered office from one state to another, it must first obtain the approval of its shareholders by passing a special resolution. This shift is also subject to confirmation by the Regional Director of the Ministry of Corporate Affairs (MCA).The company is required to publish a public notice about the proposed change in at least one English daily newspaper and one local (regional language) newspaper.Once approval from the Regional Director is received, the company must file the updated details with the concerned Registrar of Companies (ROC) by submitting Form INC-22 within the prescribed timeframe."
    },
    {
      id: 2,
      title: "Shifting/ Change registered office Out Site City/ Town/ Village but within same state:",
      description:
        "Such types of change must need shareholder approval by passing special resolution. After getting approval /passed shareholder resolution board shall intimate the change to the respective ROC within stipulate time in INC -22 E-form."
    },
    {
      id: 3,
      title: "Shifting/Changing Registered Office Outside City/Town/Village Within Same State (Different ROC/Jurisdiction)",
      description: "If a company wishes to move its registered office outside the existing city, town, or village but within the same state — involving a change in ROC jurisdiction — it must first seek shareholder approval by passing a special resolution.This relocation also requires confirmation from the Regional Director under the Ministry of Corporate Affairs (MCA).Additionally, the company must publish a notice regarding the proposed change in both an English-language newspaper and a regional-language newspaper.After receiving approval, the company must notify the concerned ROC by filing Form INC-22 within the prescribed timeline."
    },
    {
      id: 4,
      title: "Shifting/Changing Registered Office Within the Same City/Town/Village",
      description:
        "When a company shifts its registered office within the same city, town, or village, the authority to approve the change lies with the Board of Directors.The Board must pass a resolution approving the change, and the company is required to inform the concerned Registrar of Companies (ROC) by filing Form INC-22 within the specified timeframe."
    },
  ]
  const faqItems = [
    {
      id: 1,
      question: "Why do I need to update my office address with the ROC?",
      answer:
        "The Registered Office Address is the official communication address for your company. Not updating it with the Registrar of Companies (ROC) can result in missed legal notices and non-compliance."
    },
    {
      id: 2,
      question: "Can I change my registered office address to a new city or state?",
      answer:
        "Yes, you can change your registered office to a different city or even another state. However, if you are shifting the address to another state, a special resolution passed by the shareholders is required, along with the necessary filings with ROC."
    },
    {
      id: 3,
      question: "How Much Money Can I Make?",
      answer:
        "The income potential varies widely depending on factors like genre, publishing method, marketing efforts, and audience size. Self-published authors typically earn 70% of royalties through platforms like Amazon KDP, while traditionally published authors may receive 10-15% royalties but benefit from publisher support."
    },
    {
      id: 4,
      question: "How Do I Become An Author?",
      answer:
        "Start by developing your writing skills through practice and education. Choose your genre and publishing path (traditional or self-publishing). For traditional publishing, you'll need to query agents or publishers. For self-publishing, platforms like Amazon KDP, IngramSpark, or Draft2Digital can help you publish your work."
    },
    {
      id: 5,
      question: "Helpful Resources For Authors",
      answer:
        "Consider joining writing communities like Scribophile or Critique Circle, using tools such as Grammarly or ProWritingAid, and exploring courses on platforms like MasterClass or Udemy. Books like 'On Writing' by Stephen King and 'Bird by Bird' by Anne Lamott are also valuable resources."
    }
  ]

  const plans = [
    {
      title: "Economy Plan  :",
      price: "₹4199.00",
      items: [
        "Documents Preparations",
        "Prepare ROC Forms",
        "Filling a ROC Form (MGT-14) for within State",
        "Filling of ROC Form (INC-22) for within State",
      ],
      highlight: false,
    },
    {
      title: "Starter Plan :",
      price: "RS.₹2199.00",
      items: [
        "Documents Preparations",
        "Prepare ROC Forms",
        "Filling of ROC Form (INC-22) for within Same City/Town/Village ",
      ],
      highlight: true,
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
        style={{ backgroundImage: `url(${company})` }}
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
            Change in Office Address
            </h2>
            <p className="mb-2 text-white">
            Help you in Change in registered office within city / State / outside the state.
            </p>
            <p className="mb-2 text-white">
            Shifting of registered Office Address
            </p>
            <p className="text-white">
              Service Start From: <span className="text-white">₹Rs. 2199/-</span>
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
          Cost Effective Packages
          </h3>
          <h2 className="text-3xl md:text-3xl font-extrabold text-[#002D6B] mt-2 uppercase">
          Choose your Package
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
        More About Shifting of Registered Office
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7">
            Why Shifting of Registered Office is Important?
            </h2>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 ml-7">
                <li>The Registered Office is the official address of the company and is where all formal communications from the Registrar of Companies (ROC) are sent. Shifting ensures your legal records are up-to-date.</li>

                <li>As companies grow, their operations might require a new office in a different location (either within the same state or another state), which necessitates changing the registered office.</li>

                <li>Moving to a more accessible location can improve business operations, employee convenience, or proximity to clients and stakeholders.</li>

                <li>Companies may move to areas offering tax advantages, better infrastructure, or a more suitable business environment.</li>
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
          FAQ ON  Change in Office Address
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
          <h2 className="text-blue-900 font-bold text-xl sm:text-2xl mb-4 sm:mb-8 ml-8">
            MINIMUM REQUIREMENT
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600 ml-8">
                <li>Digital Signature of Director</li>
                <li>Company PAN, COI, MOA and AOA</li>
                <li>
                New Registered office address proof (Electricity Bill, Telephone Bill not older than 2 Month)
                </li>
                <li>
                 Ownership Proof
                </li>
                <li>Rent Agreement with rent receipt (If rentered)</li>
                <li>NOC (NO objection certificate) required from the Owner.</li>
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
      {/* ADVANTAGES SLIDER */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mt-12">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-gray-500 uppercase tracking-wider">
            EASY DECISION
          </h1>
          <div className="h-0.5 w-40 bg-gray-500"></div>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-900 leading-tight uppercase">
          Shifting of office types:
        </h1>

        <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch">
          <div className="hidden md:block w-full md:w-1/3 bg-[#EEF4FF] rounded-lg p-6 transition-all duration-700">
            <h3 className="text-lg font-bold mb-4">{advantages[prevIndex].title}</h3>
            <p className="text-sm text-gray-700">{advantages[prevIndex].description}</p>
          </div>

          <div className="w-full md:w-1/3 bg-[#002B6B] text-white rounded-lg p-6 transition-all duration-700 md:scale-105 md:shadow-lg">
            <h3 className="text-lg font-bold mb-4">{advantages[activeSlide - 1].title}</h3>
            <p className="text-sm">{advantages[activeSlide - 1].description}</p>
          </div>

          <div className="hidden md:block w-full md:w-1/3 bg-[#EEF4FF] rounded-lg p-6 transition-all duration-700">
            <h3 className="text-lg font-bold mb-4">{advantages[nextIndex].title}</h3>
            <p className="text-sm text-gray-700">{advantages[nextIndex].description}</p>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {advantages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index + 1)}
              className={`w-6 h-1.5 rounded-full transition-all ${activeSlide === index + 1 ? "bg-[#002B6B] w-10" : "bg-gray-300"}`}
            ></button>
          ))}
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mt-12 mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-gray-500 uppercase tracking-wider">
            STEPS & TIME DURATION
          </h1>
          <div className="h-0.5 w-40 bg-gray-500"></div>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-900 leading-tight uppercase">
        Steps Involved in Shifting of Registered office address.
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
