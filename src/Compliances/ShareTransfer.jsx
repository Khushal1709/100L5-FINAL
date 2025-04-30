import com from "../image/com.svg";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaDownload, FaEnvelope, FaBars, FaPhone } from 'react-icons/fa';

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
      days: "DAY 1",
      description: [
        "Discussion between LeglBoss Team & the Promoters/Directors of the Company.",
      ]
    },
    {
      number: "2.",
      days: "DAY 2",
      description: [
        "Drafting necessary Documents and resolutions ",
      ]
    },
    {
      number: "3.",
      days: "DAY 3",
      description: [
        "Pay stamp duty on Share Transfer",
      ]
    },
    {
      number: "4.",
      days: "DAY 7-8",
      description: [
        "Issue of Share Certificate", 
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
      question: "How Do I Become An Author?",
      answer:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Assumenda, Dolorum, Vero Ipsum Molestiae Minima Odio Quo Voluptate Illum Excepturi Quam Cum Voluptates Doloribus Quae Nisi Tempore Necessitatibus Dolores Ducimus Enim Libero Eaque Explicabo Suscipit Animi At Quaerat Aliquid Ex Expedita Perspiciatis? Saepe, Aperiam, Nam Unde Quas Beatae Vero Vitae Nulla."
    },
    {
      id: 2,
      question: "Helpful Resources For Authors",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis nesciunt tempore quibusdam repellat excepturi quisquam ut minima quidem voluptatem."
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
  // Calculate previous and next indices
  const prevIndex = activeSlide === 1 ? advantages.length - 1 : activeSlide - 2
  const nextIndex = activeSlide === advantages.length ? 0 : activeSlide

  const plans = [
    {
      title: "Business Plan :",
      price: "₹14,999.00",
      items: [
        "Document Preparations",
        "Draft Share Transfer Form (SH-4)",
      ],
      highlight: false,
    },
    {
      title: "Economy Plan:",
      price: "RS.₹25,999.00",
      items: [
        "Document Preparations",
        "Draft Share Transfer Form (SH-4)",
        "Issue of Share Certificate(One or Two Person to One or Two another Person)",
      ],
      highlight: true,
    },
    {
      title: "Starter Plan:",
      price: "RS.₹34,999.00",
      items: [
        "Document Preparations",
        "Draft Share Transfer Form (SH-4)",
        "Filing of Affidavit in Support of Opposition or Application",
        "Issue of Share Certificate(One Person to One another Person)",
      ],
      highlight: false,
    },
  ];
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
            Transfer / Transmission
            </h2>
            <p className="font-bold text-white mb-4 tracking-wide">
            Share Transfer & Transmission
            </p>
            <p className="mb-2 text-white">
            Start Your Corporate compliances Journey.
            </p>
            <p className="text-white">
              Service Start From: <span className="text-white">₹Rs. 1499/-</span>
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
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-blue-900 uppercase">
        More About Share Transfer & Transmission
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-8">
              Why More About Share Transfer & Transmission?
            </h2>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 ml-7">
                <li>Share Transfer allows shareholders to sell or transfer their shares to another individual or entity, which is crucial for businesses that want to change ownership, raise capital, or facilitate exit strategies for investors.</li>

                <li>Through Share Transmission, when a shareholder passes away or becomes incapable of managing their shares, the transmission of shares to legal heirs or nominees ensures that the company’s ownership structure remains intact, allowing the business to continue its operations without disruption.</li>

                <li>For companies that issue publicly traded shares, Share Transfer is essential for providing liquidity in the market. This gives shareholders an opportunity to sell their shares in the open market or to other investors, contributing to better price discovery and a more dynamic stock exchange.</li>

                <li>Clear and transparent procedures for Share Transfer & Transmission can improve investor confidence in the company. Investors are more likely to invest in a company where the transfer or transmission process is well-defined, secure, and legally compliant.</li>

                <li>Having a structured and legally compliant process for Share Transfer & Transmission ensures that all transactions are transparent and traceable. This provides protection to both the buyer and the seller, reducing potential conflicts or legal issues related to the transfer of ownership.</li>

                <li>Share Transmission is particularly relevant in the context of inheritance. It simplifies the process for the heirs of a deceased shareholder, allowing them to inherit the shares easily and continue their stake in the company.</li>
              </p>
            </div>
          </section>
        </div>
      </div>

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
              <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600 ml-7">
                <li>Company COI, MOA and AOA</li>
                <li>Company Pan Card</li>
                <li>Original Share Certificate</li>
                <li>Transferor and Transferee PAN Card, Aadhar Card,� Email ID, Contact No.</li>
                <li>Death certificate in case of Transmission</li>
                <li>Succession Certificate in Case of Transmission��</li>
                <li>Other Documents and information as may required based on case to case</li>
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
        Step Involved in Share Transfer & Transmission
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
