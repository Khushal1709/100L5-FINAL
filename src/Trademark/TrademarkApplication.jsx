import com from "../image/com.svg";
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
                "Check if your desired trademark is already in use.",
                "Identify the correct class for your goods or services."
            ]
        },
        {
            number: "2.",
            days: "DAY 3-4",
            description: [
                "Submit the application with all necessary details and documents.",
                "The Registrar examines your application for compliance."
            ]
        },
        {
            number: "3.",
            days: "DAY 4-6",
            description: [
                "Respond to any objections raised by the Registrar.",
                "Attend a hearing to justify your trademark application."
            ]
        },
        {
            number: "4.",
            days: "DAY 7-8",
            description: [
                "If accepted, your trademark is published for public review.",
                "If no opposition is filed, you receive the trademark registration certificate."
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

    // Slider cards section
    const advantages = [
        {
            id: 1,
            title: " Legal Ownership and Protection",
            description:
                "A Private Limited Company can legally own the trademark, ensuring that the brand name, logo, tagline, or any unique identity is fully protected from unauthorized use by competitors."
        },
        {
            id: 2,
            title: "Exclusive Rights Across India",
            description:
                "Trademark registration grants the company exclusive rights to use the mark across the country for the goods or services it represents, giving it a significant edge in the market."
        },
        {
            id: 3,
            title: "Stronger Brand Image and Trust",
            description: "A registered trademark enhances the company's credibility and creates trust among customers, investors, and business partners. It signals professionalism and reliability."
        },
        {
            id: 4,
            title: "Creation of a Valuable Asset",
            description:
                "A trademark becomes an intangible asset of the company. Over time, it can significantly appreciate in value and can be sold, franchised, assigned, or licensed for commercial gain."
        },
        {
            id: 5,
            title: "Competitive Advantage",
            description:
                "With exclusive rights, the company can legally prevent others from using a similar mark that might confuse customers. It helps maintain a unique identity and competitive position."
        },
        {
            id: 6,
            title: "Global Expansion Made Easier",
            description:
                "Trademark registration simplifies the process of securing trademarks in other countries if the company plans to expand internationally, especially through treaties like the Madrid Protocol."
        }
    ]
    const faqItems = [
        {
            id: 1,
            question: "Who can Apply Trademark?",
            answer:
                "Any individual, business, company, LLP, trust, or foreign entity can apply for a trademark to protect their brand identity."
        },
        {
            id: 2,
            question: "When can I use mark TM?",
            answer:
                "You can use the ™ symbol as soon as you file a trademark application to show that you claim rights over the brand."
        },
        {
            id: 3,
            question: "Validity of Trademark Registration??",
            answer:
                "Trademark registration is valid for 10 years and can be renewed indefinitely every 10 years."
        },
        {
            id: 4,
            question: "How much Time it will take for trademark registration?",
            answer:
                "Trademark registration usually takes around 6 to 18 months, depending on the examination and objection process."
        },
        {
            id: 5,
            question: "Can registered trademark use all over the world?",
            answer:
                "No, a registered trademark is protected only within the country where it is registered; for global protection, separate applications are needed in each country."
        }
    ]
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
                            Trademark registration
                        </h2>
                        <p className="font-bold text-white mb-4 tracking-wide uppercase">
                            How to Get Trademark registration
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
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-blue-900 uppercase ">
                    More About Trademark
                </h1>
            </div>
            <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
                <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
                    {/* Section 1: What is Public Limited Company */}
                    <section>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7">
                            Why Trademark?
                        </h2>
                        <div className="p-3 sm:p-6">
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4">
                                <li>Stand Out from Competitors: A trademark helps distinguish your products or services from others in the market.</li>

                                <li>Build Strong Brand Recognition: It creates a lasting impression among customers and boosts brand loyalty.</li>

                                <li>Protect Your Products and Services: A registered trademark legally safeguards your brand identity.</li>

                                <li>Valuable Business Asset: Over time, your trademark grows in value and becomes an important asset for your business.</li>

                                <li>Simple Application and Usage: Registering and using a trademark is a straightforward process.</li>

                                <li>Avoid Brand Damage: Operating without a registered trademark can harm your brand's reputation and legal standing.</li>
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Why Choose Public Limited Company */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7 ">
                            Simple Trademark registration process:
                        </h2>
                        <div className=" bg-opacity-70 p-6 ">
                            <ul className="space-y-4 text-gray-600">
                                <li>Step 1: Conduct a Trademark Search :-
                                    Check if your brand name or logo is already in use to avoid future conflicts.</li>

                                <li>Step 2: Choose the Right Class :-
                                    Identify the appropriate class for your product or service under the trademark classification system.</li>

                                <li>Step 3: File the Trademark Application :-
                                    Submit the application with complete details and supporting documents to the Trademark Office.</li>

                                <li>Step 4: Examination and Objection (If Any) :-
                                    The Trademark Office examines your application and may raise objections based on legal grounds.</li>

                                <li>Step 5: Respond to Objection :-
                                    File a detailed reply addressing the Registrar's concerns to move the application forward.</li>

                                <li>Step 6: Attend Hearing (If Required) :-
                                    If the Registrar requires, appear for a hearing to defend your trademark application.</li>

                                <li>Step 7: Application Approval :-
                                    Upon satisfaction, the application is accepted and published in the Trademark Journal for public review.</li>

                                <li>Step 8: Issuance of Registration Certificate :-
                                    If no opposition is received, your trademark gets officially registered, and you receive the Registration Certificate.</li>
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
                    FAQ ON PRIVATE LIMITED<br />COMPANY
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
                            <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600">
                                <li>Pan Card - self Certified Copy</li>
                                <li>Aadhar card -self Certified Copy</li>
                                <li>
                                    ID proof (Driving License, Voter ID, Passport) -self
                                    Certified Copy
                                </li>
                                <li>
                                    Address proof (Lightbill, Mobile Bill, Bank statement -
                                    not older than 2 month) -self Certified Copy
                                </li>
                                <li>Two photo (Passport Size)</li>
                            </ol>

                            <div className="mt-6 sm:mt-8">
                                <p className="text-gray-700 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                                    Information of Proposed Directors/Shareholders Required:
                                </p>
                                <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600">
                                    <li>Education Qualification</li>
                                    <li>Current Occupancy</li>
                                    <li>Birth Place with District, Taluka, State</li>
                                    <li>
                                        No of year stay at present address (year and month)
                                    </li>
                                    <li>Email ID</li>
                                    <li>Contact no.</li>
                                </ol>
                            </div>
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
                <h1 className="text-3xl font-extrabold text-blue-900 leading-tight">
                    ADVANTAGES OF A PRIVATE<br />LIMITED COMPANY
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
                    <h1 className="text-lg font-bold text-gray-500 uppercase tracking-wider uppercase">
                        Steps Involved in Trademark Registration
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
