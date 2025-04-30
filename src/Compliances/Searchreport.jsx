import Company from "../image/Company.svg";
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
            days: "DAY 1-2",
            description: [
                "Introductory meeting to understand the objective and scope of the search.",
                "Identification of the target company and retrieval of all necessary public records and filings from the Ministry of Corporate Affairs (MCA) database."
            ]
        },
        {
            number: "2.",
            days: "DAY 3-4",
            description: [
                "A detailed examination of financial and legal documents such as charge details, director history, and shareholding pattern.",
                "Compilation of the Search Report, summarizing key findings and insights for loan processing, investment assessment, or legal due diligence."
            ]
        },
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
            price: "₹2199.00",
            items: [
                "Inspection of Documents - 1 Company",
                "Download Required Documents -  1 Company",
                "Preparation of Search report - 1 Company",
            ],
            highlight: false,
        },
        {
            title: "Starter Plan:",
            price: "RS.₹1199.00",
            items: [
                "Inspection of Documents - 1 Company",
                "Download Required Documents",
            ],
            highlight: true,
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
                            Search Report
                        </h2>
                        <p className="font-bold text-white mb-4 tracking-wide">
                            Companies Detailing Report
                        </p>
                        <p className="mb-2 text-white">
                            Help you in Generating Search report.
                        </p>
                        <p className="text-white">
                            Service Start From: <span className="text-white">₹Rs. 1199/-</span>
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
                    More About the Search Report
                </h1>
            </div>
            <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
                <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
                    {/* Section 1: What is Public Limited Company */}
                    <section>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7">
                            What is a Search Report?
                        </h2>
                        <div className="p-3 sm:p-6">
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 ml-3">
                                <ul><li>A Search Report is a comprehensive legal document that reflects the financial and structural background of a company. It is commonly used by banks, financial institutions, and investors to assess the company’s creditworthiness, existing liabilities, and overall compliance status. This report is generally prepared by qualified professionals such as Company Secretaries (CS), Chartered Accountants (CA), Cost Accountants (CMA), or Legal Advisors. The report is compiled after thoroughly examining the company’s records maintained with the Registrar of Companies (ROC), following payment of the applicable statutory fees.</li></ul>
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Why Choose Public Limited Company */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7">
                            Purpose of a Search Report
                        </h2>
                        <div className=" bg-opacity-70 p-6 ">
                            <ul className="space-y-4 text-gray-600 ml-3">
                                <li>Essential for loan approval processes by banks or NBFCs.</li>
                                <li>Helps investors and promoters understand a company’s financial obligations and liabilities.</li>
                                <li>Provides transparency on existing borrowings and charges on company assets.</li>
                                <li>Offers insights into the legal and financial standing of a company before making investment decisions.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3: Why Choose Public Limited Company */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-extrabold text-blue-900 uppercase ml-7">
                            What Information is Covered in a Search Report?
                        </h2>
                        <div className=" bg-opacity-70 p-6 ">
                            <ul className="space-y-4 text-gray-600 ml-3">
                                <li>Company Name and Corporate Identification Number (CIN)</li>
                                <li>Registered Office Address of the company</li>
                                <li>Details of Authorized, Issued, and Paid-up Capital</li>
                                <li>Updated list of Directors and Key Management Personnel</li>
                                <li>List of current Shareholders and their shareholdings</li>
                                <li>Information on Charges created, modified, or satisfied</li>
                                <li>Any additional information as required by the requesting institution (usually the bank)</li>
                            </ul>
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
                    <h2 className="text-blue-900 font-bold text-xl sm:text-2xl mb-4 sm:mb-8 ml-7">
                        MINIMUM REQUIREMENT
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                            <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600 ml-7">
                                <li>Company Master Data</li>
                                <li>Company name and CIN</li>
                                <li>Company PAN Card</li>
                                <li>Any specific things required to search</li>
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
                Step Involved in Search Report
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
