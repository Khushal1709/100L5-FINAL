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
        "Discussion between LeglBoss Team & the Promoters/Director/Individual/ partner of the Company.",
        "Collecting Documents and Details"
      ]
    },
    {
      number: "2.",
      days: "DAY 3-4",
      description: [
        "Analyse of Opposition Statement or Application",
        "Draft Counter Statement or Opposition statement "
      ]
    },
    {
      number: "3.",
      days: "DAY 4-6",
      description: [
        "Filling of Counter Statement/ Opposition Statement",
        "Sharing Acknowledgment of Filling a Statement "
      ]
    },
    {
      number: "4.",
      days: "DAY 7-8",
      description: [
        "Waiting for Further Filling of Statements or Order",
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
      title: "Protects Your Brand Identity",
      description:
        "Trademark opposition helps you stop others from registering a confusingly similar name, logo, or design — keeping your brand unique and strong."
    },
    {
      id: 2,
      title: "Avoids Customer Confusion",
      description:
        "It prevents customers from mistakenly associating someone else’s products or services with your brand."
    },
    {
      id: 3,
      title: "Safeguards Market Share",
      description: "By blocking similar trademarks early, you protect your market position and avoid losing customers to lookalike brands."
    },
    {
      id: 4,
      title: " Cost-Effective Protection",
      description:
        "Filing an opposition early is much cheaper than fighting a trademark infringement lawsuit later."
    },
    {
      id: 5,
      title: "Maintains Brand Reputation",
      description:
        "Prevent low-quality or misleading products/services from entering the market under a name similar to yours, thus protecting your goodwill."
    },
    {
      id: 6,
      title: "Acts as a Deterrent",
      description:
        "Taking firm action through opposition discourages others from attempting to misuse or copy your brand."
    }
  ]
  const faqItems = [
    {
      id: 1,
      question: " What is Trademark Opposition?",
      answer:
        "Trademark Opposition is a legal process where a third party objects to the registration of a trademark after it has been published in the Trademark Journal."
    },
    {
      id: 2,
      question: "Who can file a Trademark Opposition?",
      answer:
        "Any person or company who believes that the published trademark can cause confusion, dilute their brand, or harm their business can file an opposition."
    },
    {
      id: 3,
      question: "When can you file a Trademark Opposition?",
      answer:
        "You must file the opposition within 4 months from the date the trademark is published in the Trademark Journal."
    },
    {
      id: 4,
      question: "What are the common grounds for filing an opposition?",
      answer:
        "Similarity to an existing trademark,Likelihood of confusion among the public,Trademark is descriptive or generic,Trademark is filed in bad faith,Trademark violates any public policy or moral standards",
    },
    {
      id: 5,
      question: "What happens after filing an opposition?",
      answer:
        "The Registrar notifies the applicant.,The applicant must file a Counter-Statement,Both parties submit evidence,A hearing may be scheduled before a final decision is made."
    }
  ]
  

  const plans = [
    {
      title: "STARTER PLAN :",
      price: "₹14,999.00",
      items: [
        "For Oppose Statement or Counter Statement",
        "For One (1) Class, One (1) Application",
      ],
      highlight: false,
    },
    {
      title: "ENTREPRENEUR :",
      price: "RS.₹25,999.00",
      items: [
        "For Oppose Statement or Counter Statement",
        "For One (1) Class, One (1) Application",
        "Filing of Affidavit in Support of Opposition or Application",
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14387f] mb-2 uppercase">
              Trademark Opposition
            </h2>
            <p className="font-bold text-white mb-4 tracking-wide uppercase">
              Handling of Tradeamrk Opposition
            </p>
            <p className="text-white">
              Service Start from Rs.14999/-</p>
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
          More About Trademark Opposition
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-900 uppercase">
              Why Trademark Opposition?
            </h2>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4">
                <li>Stop others from using a name, logo, or design that’s too similar to yours.</li>

                <li>Prevent customers from getting confused between your brand and a competitor’s.</li>

                <li>Protect Your Products and Services: A registered trademark legally safeguards your brand identity.</li>

                <li>Maintain your uniqueness and prevent copycats from stealing your market share.</li>

                <li>Early opposition is cheaper and easier than fighting a trademark after it's registered.</li>

                <li>Taking action shows competitors you are serious about protecting your brand.</li>
              </p>
            </div>
          </section>

          {/* Section 2: Why Choose Public Limited Company */}
          <section>
            <h2 className="text-xl md:text-2xl font-extrabold text-blue-900 uppercase ">
              Simple Trademark Opposition registration process:
            </h2>
            <div className=" bg-opacity-70 p-6 ">
              <ul className="space-y-4 text-gray-600">
                <li>Step 1: Monitor Trademark Journal :-
                  Keep an eye on newly published trademarks.</li>

                <li>Step 2: Identify Conflicting Trademark :-
                  Spot any trademark that is similar or confusingly close to yours.</li>

                <li>Step 3: File Notice of Opposition :-
                  Within 4 months of publication, file a formal opposition explaining why it should be denied.</li>

                <li>Step 4: Counter-Statement by Applicant :-
                  The applicant (other party) files a reply defending their trademark.</li>

                <li>Step 5: Evidence Submission:-
                  Both sides submit evidence (documents, affidavits) to support their case.</li>

                <li>Step 6: Hearing :-
                  Attend a hearing before the Trademark Registrar to present arguments.</li>

                <li>Step 7: Decision :-
                  Registrar makes a decision — either rejecting or allowing the opposed trademark.</li>
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
          FAQ ON Trademark Opposition
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
              <ul className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600 ml-9">
               
                <li>Full Name</li>

                <li>Address</li>

                <li>Nationality</li>

                <li>Proof of business (like registration certificate, if applicable)</li>

                <li>Details of the Opposed Trademark</li>

                <li>Application Number</li>

                <li>Name of Applicant</li>

                <li>Class and Goods/Services description</li>

                <li>Publication Date in Trademark Journal</li>

                <li>Grounds for Opposition</li>

                <li>Clear reasons why the trademark should not be registered (conflict, confusion, bad faith, etc.)</li>

               
                <li>Trademark Registration Certificates (if you already have a registered mark)</li>

                <li>Usage Proof (invoices, ads, brochures, website screenshots, etc.)</li>

                <li>Affidavits or declarations (sworn statements supporting your claims)</li>

                <li>Power of Attorney (if filing through an agent or attorney)</li>

                <li>Signed authorization allowing your attorney to file and represent you.</li>

                <li>Government Prescribed Fee</li>

                <li>Payment receipt or confirmation (as per applicable fees).</li>
              </ul>
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
          ADVANTAGES OF A  Trademark Opposition
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
