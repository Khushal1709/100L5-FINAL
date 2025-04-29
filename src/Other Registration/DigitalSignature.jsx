import Company from "../image/Company.svg";
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
import document from "../image/document.svg";

const DSC = () => {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const steps = [
    {
      number: "1.",
      days: "DAY 1",
      description: [
        "Gathering Information and Documents",
        "Prepare Documents for Signing",
      ],
    },
    {
      number: "2.",
      days: "DAY 2",
      description: [
        " Submitting an Application for Digital Signature Certificate (DSC)",
        "Download the Digital Signature Certificate (DSC) after Verification",
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
      title: "CORPORATE PLAN :",
      price: "RS.3999.00",
      items: [
        "Class-3 Digital Signature certificate for TENDER - Valid for 2 year",
      ],
      highlight: false,
    },
    {
      title: "ENTREPRENEUR PLAN :",
      price: "RS.2499.00",
      items: ["Class-3 Digital Signature for DGFT with 2 year Validity"],
      highlight: true,
    },
    {
      title: "STARTUP PLAN:",
      price: "RS.1199.00",
      items: [
        "Class-3 Digital Signature with 2 year Validity [ for MCA, Income Tax, GST]",
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
      question: "What is a Digital Signature Certificate (DSC)?",
      answer:
        "A Digital Signature Certificate (DSC) is an electronic form of a signature used to authenticate the identity of individuals or organizations while signing electronic documents. It ensures the integrity and security of the document by verifying the signer’s identity.",
    },
    {
      id: 2,
      question: "Why is DSC required?",
      answer:
        "DSC is required for signing documents electronically in a secure and legally valid manner. It is used for various government and business-related applications such as GST filings, Income Tax returns, MCA submissions, and more.",
    },
    {
      id: 3,
      question: " What is the validity period of a DSC?",
      answer:
        "A Digital Signature Certificate typically has a validity period ranging from 1 to 3 years, after which it must be renewed.",
    },
    {
      id: 4,
      question: "What happens if my DSC expires?",
      answer:
        "If your DSC expires, you will need to renew it. Renewal is typically a simple process, but it may require you to resubmit your identity and address documents.",
    },
  ];
  // Calculate previous and next indices
  const prevIndex = activeSlide === 1 ? advantages.length - 1 : activeSlide - 2;
  const nextIndex = activeSlide === advantages.length ? 0 : activeSlide;

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
              Digital Signature Certificate (DSC)
            </h2>
            <p className="font-bold text-white mb-4 tracking-wide uppercase">
              How to Get Digital Signature Certificate (DSC)
            </p>
            <p className="mb-2 text-white">
              Team help you in getting Digital Signature Certificate (DSC)
            </p>
            <p className="mb-2 text-white">Just Rs.1199/-</p>
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
          More About Digital Signature Certificate (DSC)
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl ml-6 font-extrabold text-blue-900 uppercase">
              What is Digital Signature Certificate ?
            </h2>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4">
                Digital Signature Certificates (DSC), also known as Digital
                Signatures, are increasingly being utilized by various
                government bodies and have become a mandatory requirement for
                several applications. A Digital Signature serves as a way to
                authenticate electronic documents by the subscriber. It is
                typically stored on a USB token, which allows access through a
                computer to sign documents digitally. Essentially, a DSC is a
                secure digital key that verifies the identity of the holder.
                These certificates are issued by a Certifying Authority (CA). At
                present, Class III Digital Signatures are commonly used for
                purposes such as GST filings, MCA submissions, Income Tax
                returns, Tender applications, EPFO filings, and more.
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
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-tight">
          FAQ ON DIGITAL SIGNATURE CERTIFICATE
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
          DOCUMENTS REQUIRED FOR DIGITAL SIGNATURE CERTIFICATE
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
                <li>Pan Card - Self Certified</li>
                <li>Aadhar Card - Self Certified</li>
                <li>Photograph - 1 Copy</li>
                <li>Emial ID & Contact Number</li>
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
          STEPS INVOLVED IN GETTING
          <br />
          DIGITAL SIGNATURE CERTIFICATE (DSC) 
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

export default DSC;
