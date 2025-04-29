import company from "../../image/company.svg";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaBars,
} from "react-icons/fa";
import document from "../../image/document.svg";

const Changeindesignatedpartner = () => {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const steps = [
    {
      number: "1.",
      days: "DAY 1",
      description: [
        "Consultation between the LegalBoss Team and the Company’s Promoters/Directors",
        "Preparation of Required Resolutions and Supporting Documents",
      ],
    },
    {
      number: "2.",
      days: "DAY 2-3",
      description: [
        "Execution of Necessary Documents",
        "Preparation and Filing of ROC Forms for Partner Changes",
      ],
    },
    {
      number: "3.",
      days: "DAY 3-5",
      description: [
        " Submission of Forms and Documents with the Registrar of Companies (ROC)",
        "Payment of Applicable ROC Fees",
      ],
    },
    {
      number: "4.",
      days: "DAY 5 Onwards",
      description: [
        " ROC Processing and Approval Timeline",
        "Sharing of Approval Letter along with Filed ROC Forms and Payment Challan",
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
      price: "RS.4999.00",
      items: [
        "Documents Preparations",
        "DSC for Incoming Designated Partner -1",
        "DIN of Incoming Designated Partner -1",
        "Draft LLP supplementary Agreement ",
        "Preparing ROC Form",
        "Filling of Forms LLP-3 and LLP-4.",
        "Filling of Forms for Resigned Designated partner/partner",
      ],
      highlight: false,
    },
    {
      title: "ECONOMY PLAN :",
      price: "RS.3999.00",
      items: [
        "Documents Preparations",
        "DSC for Incoming Designated Partner -1",
        "DIN of Incoming Designated Partner -1",
        "Draft LLP supplementary Agreement ",
        "Preparing ROC Form",
        "Filling of Forms LLP-3 and LLP-4.",
      ],
      highlight: true,
    },
    {
      title: "STARTER PLAN:",
      price: "RS.1999.00",
      items: [
        "Documents Preparations",
        "Draft LLP supplementary Agreement",
        "Preparing ROC Form",
        "Filling of Forms LLP-3 and LLP-4.",
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
      question: "Can a partner be appointed as a designated partner in an LLP?",
      answer:
        "Yes, an existing partner can be appointed as a designated partner by following the process outlined in the LLP agreement and filing the necessary forms with the Registrar of Companies.",
    },
    {
      id: 2,
      question: " Can a minor become a designated partner or partner in an LLP?",
      answer:
        "No, only individuals who are 18 years or older can be appointed as partners or designated partners in an LLP.",
    },
    {
      id: 3,
      question:
        "Is there any timeline for informing the Registrar about changes in partners?",
      answer:
        "Yes, changes must be reported to the Registrar within 30 days of the event.",
    },
  ];
  // Calculate previous and next indices
  const prevIndex = activeSlide === 1 ? advantages.length - 1 : activeSlide - 2;
  const nextIndex = activeSlide === advantages.length ? 0 : activeSlide;

  return (
    <>
      <div
        className="relative bg-cover bg-center py-16 px-4 md:px-8"
        style={{ backgroundImage: `url(${company})` }}
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
                { icon: <FaEnvelope />, label: "E-mail" },
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
              Changes in LLP
            </h2>
            <p className="font-bold text-white mb-4 tracking-wide uppercase">
              Changes in Designated partners
            </p>
            <p className="mb-2 text-white">
              Team help you in Change in Designated Partners
            </p>
            <p className="mb-2 text-white">Just Rs.1999/-</p>
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
          More About Change in Designated Partners
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 mb-4">
                In a Limited Liability Partnership (LLP), designated partners
                are responsible for managing the day-to-day operations and
                ensuring compliance with legal requirements. The appointment of
                designated partners and/or partners is carried out through a
                resolution passed according to the provisions of the LLP
                agreement. Following their appointment, the necessary forms must
                be filed with the Registrar of Companies. Similarly, the
                resignation of a designated partner or partner is processed by
                passing a resolution in accordance with the LLP Act and the LLP
                agreement. The change must be formally reported to the Registrar
                of Companies by submitting the prescribed forms.
              </p>
              <b>Why Change in Designated Partners:</b>
              <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base mb-4 text-gray-600">
                <li>To delegate management responsibilities without altering ownership structure.</li>
                <li>Due to the existing designated partner's or partner's inability to continue in their role.</li>
                <li>To bring new expertise and skills onto the board.</li>
                <li>To meet statutory or regulatory requirements.</li>
              </ul>
              <b>Important Point to be considered while Change Designated Partners:</b>
              <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600">
                <li>The individual must be at least 18 years of age at the time of appointment.</li>
                <li>The individual must obtain a valid Director Identification Number (DIN) before appointment.</li>
                <li>The individual must not be disqualified under the provisions of the LLP Act.</li>
                <li>A Supplementary LLP Agreement must be executed to reflect the changes.</li>
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
          FAQ ON CHANGE IN DESIGNATED PARTNER
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
          DOCUMENTS REQUIRED FOR CHANGE IN DESIGNATED PARTNER
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
                <li>PAN CARD</li>
                <li>AADHAR CARD</li>
                <li>PHOTO-2</li>
                <li>ID PROOF(DRIVING LICENCE/VOTING CARD/PASSPORT)</li>
                <li>RESIDENCE PROOF(DRIVING LICENCE/PASSPORT/VOTER ID/ELECTRICITY BILL) </li>
                <li>DIGITAL SIGNATURE OF DIRECTORS</li>
                <li>BEFORE APPOINTMENT REQUIRED TO GET DIRECTOR IDENTIFICATION NUMBER AND FOR THAT DIGITAL SIGNATURE REQUIREMENT IS MUST</li>
                <li>FOR RESIGNATION NOTICE OF RESIGNATION MUST OPT FORM RESIGNED PARTNERS/DESIGNATED PARTNERS.</li>

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
          STEPS INVOLVED IN DESIGNATED PARTNER 
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

export default Changeindesignatedpartner;
