import { useState, useEffect, useRef } from "react";
import company from "../image/company.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import document from "../image/document.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaBars,
} from "react-icons/fa";

const plans = [
  {
    name: "BUSINESS PLAN",
    price: "RS. 16999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 1",
      "DIN (Director Identification Number) - 2",
      "LLP Name Reservation Application - 1 Time",
      "LLP Registration",
      "Draft LLP Agreement",
      "Filling of LLP Agreement",
      "Application of PAN and TAN",
      "MSME Registration",
      "GST Registration",
      "Trademark Application - 1 Brand/1 Class",
      "Trademark Objection Replay - 1 Brand/1 Class",
      "Domain registration - 1 year",
      "Complementary Incorporation Kit-",
      "6 Month Social Media Marketing Tool",
      "Customized Printing T-Shirt with Logo - 2 Nos.",
      "Assistance in bank Account Opening",
    ],
  },
  {
    name: "CORPORATE PLAN",
    price: "RS. 26999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 1 ",
      "DIN (Director Identification Number) - 2",
      " LLP Name Reservation Application - 1 Time",
      "LLP Registration",
      "Draft LLP Agreement",
      "Filling of LLP Agreement",
      "Application of PAN and TAN",
      "MSME Registration",
      "GST Registration",
      "Trademark Application - 1 Brand/1 Class",
      "Trademark Objection Replay - 1 Brand/1 Class",
      "Domain registration - 1 year",
      "Website Hosting - 1 year",
      "Website Development",
      "1 year Social Media Marketing Tool",
      "Customized Printing T-Shirt with Logo - 2 Nos.",
      "Assistance in bank Account Opening ",
      "Complementary Incorporation Kit-",
      "1 year Social Media Marketing Tool",
      "Customized Printing T-Shirt with Logo - 2 Nos.",
      "Assistance in bank Account Opening",
    ],
  },
  // Additional 3 plans as requested
  {
    name: "ECONOMY PLAN",
    price: "RS. 13999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 1 ",
      "DIN (Director Identification Number) - 2",
      "LLP Name Reservation Application - 1 Time",
      "LLP Registration",
      "Draft LLP Agreement",
      "Filling of LLP Agreement",
      "Application of PAN and TAN",
      "MSME Registration",
      "GST Registration",
      "Trademark Application - 1 Brand/1 Class",
      "Complementary Incorporation Kit -",
      "3 Month Social Media Marketing Tool",
      "Customized Printing T-Shirt with Logo - 1 Nos.",
      "Assistance in bank Account Opening ",
    ],
  },
  {
    name: "STARTER PLAN",
    price: "RS. 6999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 1 ",
      "DIN (Director Identification Number) - 2",
      "LLP Name Reservation Application - 1 Time",
      "LLP Registration",
      "Draft LLP Agreement",
      "Filling of LLP Agreement",
      "Application of PAN and TAN",
      "Complementary Incorporation Kit-",
      "1 Month Social Media Marketing Tool",
      "Assistance in bank Account Opening",
    ],
  },
];

// Slider cards section
const advantages = [
  {
    id: 1,
    title: " LIMITED LIABILITY PROTECTION",
    description:
      "Partners are not personally liable for the debts or liabilities of the LLP. Their risk is limited to the amount they have invested.",
  },
  {
    id: 2,
    title: "SEPERATE LEGAL ENTITY",
    description:
      "An LLP is a separate legal entity from its partners. It can own property, sue, and be sued in its own name.",
  },
  {
    id: 3,
    title: "NO MINIMUM CAPITAL REQUIREMENT",
    description: "There is no minimum capital requirement to start an LLP. It can be formed with any amount of capital contributed by partners.",
  },
  {
    id: 4,
    title: "LOWER COMPLIANCE AND COSTS",
    description:
      "Compared to a Private Limited Company, LLPs have fewer filing requirements and lower maintenance costs.",
  },
  {
    id: 5,
    title: "TAX BENEFITS",
    description:
      "LLPs are taxed at a lower rate compared to companies, and there is no Dividend Distribution Tax (DDT) on profit sharing among partners.",
  },
  {
    id: 6,
    title: "IDEAL FOR PROFESSIONALS AND SMES",
    description:
      "LLP is a preferred choice for small businesses, consultants, lawyers, architects, and service providers who seek a formal structure with operational ease.",
  },
  {
    id: 7,
    title: "EASY TRANSFERABILITY",
    description:
      "LLP is a separate legal entity separate from its Partners, The ownership of a LLP can be easily transferred to another person by inducting them as a Partner of the LLP.",
  },
];

const steps = [
  {
    number: "1.",
    days: "DAY 1-2",
    description: [
      "All proposed designated partners must obtain a Digital Signature Certificate (DSC) to sign electronic documents during the registration process.",
      "Each designated partner must apply for a DIN or DPIN through the Ministry of Corporate Affairs (MCA) portal.",
    ],
  },
  {
    number: "2.",
    days: "DAY 3-4",
    description: [
      "File the RUN-LLP (Reserve Unique Name-LLP) form with the MCA to get the desired LLP name approved.",
      "Submit the FiLLiP (Form for Incorporation of LLP) along with necessary documents like address proof, identity proof, and consent letters of partners to MCA.",
    ],
  },
  {
    number: "3.",
    days: "DAY 4-6",
    description: [
      "Draft an LLP Agreement that defines the roles and responsibilities of partners.",
      "Upon successful verification, the Registrar of Companies (ROC) issues a Certificate of Incorporation (COI), officially recognizing the LLP.",
    ],
  },
  {
    number: "4.",
    days: "DAY 7-8",
    description: [
      "Post-incorporation, apply for the Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) for the LLP.",
      "Use the Certificate of Incorporation, PAN, and other required documents to open a current bank account in the name of the LLP.",
    ],
  },
];

export default function LLPRegistration() {
    
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openItem, setOpenItem] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const faqItems = [
    {
      id: 1,
      question: "What is a Limited Liability Partnership (LLP)?",
      answer:
        "A Limited Liability Partnership (LLP) is a legal business structure where two or more partners form a partnership, and their liability is limited to the amount they invest. LLPs combine the flexibility of a traditional partnership with the advantages of limited liability.",
    },
    {
      id: 2,
      question: " Is there a minimum capital requirement to start an LLP?",
      answer:
        "No, there is no minimum capital requirement for an LLP. Partners can contribute any agreed amount as per the LLP Agreement.",
    },
    {
      id: 3,
      question: "Who can be a partner in an LLP?",
      answer:
        "Any individual or corporate body (company, LLP, etc.) can become a partner in an LLP. Foreign nationals and NRIs can also be partners, subject to certain conditions.",
    },
    {
      id: 4,
      question: "Is an LLP a separate legal entity?",
      answer:
        "Yes, an LLP is a separate legal entity from its partners. It can own assets, sue, and be sued in its own name.",
    },
    {
      id: 5,
      question: "How long does it take to register an LLP?",
      answer:
        "Typically, an LLP can be registered within 10–15 working days, depending on the availability of documents and approvals.",
    },
    {
      id: 6,
      question: "I am an NRI. Can I start an LLP business in India?",
      answer:
        "Yes, non-resident Indians and foreign nationals who are willing to enter into an LLP partnership can do so, provided they submit the necessary documents after getting it notarized by the concerned authorities. Although, at least one of the designated partners in an LLP should be an Indian national.",
    },
  ];

  // Big cards section
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto scroll for mobile only
  useEffect(() => {
    if (isMobile) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % plans.length);
      }, 3000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isMobile, plans.length]);
  // Touch events for mobile swipe
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? 0 : id);
  };

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };

  // Function to handle previous button click
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + plans.length) % plans.length
    );
  };

  // Calculate indices for the three visible cards
  const leftIndex = (currentIndex - 1 + plans.length) % plans.length;
  const middleIndex = currentIndex;
  const rightIndex = (currentIndex + 1) % plans.length;

  // Slider cards section
  const [activeSlide, setActiveSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Apply transition effect
    setTimeout(() => {
      setActiveSlide((prev) => (prev === advantages.length ? 1 : prev + 1));

      // End transition effect after the slide has changed
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 300);
  };

  // Set up auto-sliding - separate from other effects
  useEffect(() => {
    // Start auto-sliding immediately
    intervalRef.current = setInterval(() => {
      goToNextSlide();
    }, 3000); // Slide every 3 seconds

    // Clean up on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []); // Empty dependency array ensures this only runs once on mount

  // Clean up timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleDotClick = (index) => {
    if (isTransitioning || index === activeSlide) return;

    // Clear existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    setIsTransitioning(true);

    // Apply transition effect
    timeoutRef.current = setTimeout(() => {
      setActiveSlide(index);

      // End transition effect
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);

        // Restart auto-sliding
        intervalRef.current = setInterval(() => {
          goToNextSlide();
        }, 3000);
      }, 500);
    }, 300);
  };

  // Calculate previous and next indices
  const prevIndex = activeSlide === 1 ? advantages.length - 1 : activeSlide - 2;
  const nextIndex = activeSlide === advantages.length ? 0 : activeSlide;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Double Exposure Effect */}
        <div
          className="relative bg-cover bg-center py-16 px-4 md:px-8"
          style={{ backgroundImage: `url(${company})` }}
        >
          {/* Floating Social Menu */}
          <div className="fixed z-50 right-4 top-1/4 flex flex-col items-end">
            <div className="flex flex-col">
              <button
                className="bg-[#14387f] p-3 rounded-t-md text-white text-2xl flex items-center justify-center cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Open menu"
              >
                <FaBars />
              </button>
              <button className="bg-[#14387f] p-3 rounded-b-md text-white text-2xl flex items-center justify-center border-t border-white cursor-pointer ">
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14387f] mb-2">
                LIMITED LIABILITY PARTNERSHIP(LLP)
              </h2>
              <p className="font-bold text-white mb-4 tracking-wide">
                ALL YOU NEED TO KNOW
              </p>
              <p className="mb-2 text-white">
                A Limited Liability Partnership (LLP) is a hybrid business
                structure that combines the benefits of a traditional
                partnership with the advantages of a private limited company. It
                offers limited liability protection to its partners while
                allowing them the flexibility to manage the business directly.
                An LLP in India can be registered with a minimum of two
                partners, and there is no upper limit. Unlike companies, LLPs
                have fewer compliance requirements and are well-suited for small
                and medium-sized businesses, professionals, and service
                providers seeking a structured yet simple form of organization.
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

        {/* Main Content */}
        <div className=" py-8 -mt-16 relative z-20">
          {/* Package Selection Header */}
          <div className="max-w-7xl mx-auto mb-6 px-4 sm:px-6">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <h1 className="text-lg sm:text-2xl font-bold text-gray-500 mt-12 uppercase tracking-wider">
                CHOOSE YOUR PACKAGE
              </h1>
              <div className="h-0.5 w-20 sm:w-40 bg-gray-500 mt-10"></div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-blue-900 leading-tight">
            LIMITED LIABILITY PARTNERSHIP(LLP)
              <br />
              REGISTRATION PACKAGE
            </h1>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-7xl mx-auto relative mt-12">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute -left-2 sm:-left-4 md:-left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-blue-900 rounded-full hidden md:flex items-center justify-center text-white z-10 hover:bg-blue-800 transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-2 sm:-right-4 md:-right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-blue-900 rounded-full hidden md:flex items-center justify-center text-white z-10 hover:bg-blue-800 transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Desktop View - Grid Layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6">
              {/* Left Plan */}
              <div
                className={`bg-[${plans[leftIndex].bg}] border-0 shadow-md overflow-hidden rounded-lg flex flex-col md:block`}
              >
                <div className={`bg-[${plans[leftIndex].bg}] p-4 md:p-6`}>
                  <h3
                    className={`text-center ${plans[leftIndex].textColor} font-bold text-sm sm:text-base`}
                  >
                    {plans[leftIndex].name} :
                  </h3>
                  <p
                    className={`text-center ${plans[leftIndex].textColor} font-bold text-lg sm:text-xl`}
                  >
                    {plans[leftIndex].price}
                  </p>
                </div>
                <div className="p-4 md:p-6 text-xs sm:text-sm space-y-1 sm:space-y-2 flex-grow">
                  {plans[leftIndex].features.map((feature, idx) => (
                    <p key={idx}>{feature}</p>
                  ))}
                </div>
                <div className="p-4 md:p-6 pt-0">
                  <button
                    className={`w-full ${plans[leftIndex].buttonColor} py-2 px-4 rounded font-medium cursor-pointer text-sm`}
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>

              {/* Middle Plan - Highlighted */}
              <div
                className={`bg-[#002C6D] text-white border-0 shadow-lg overflow-hidden rounded-lg flex flex-col md:transform md:scale-105`}
              >
                <div className="bg-[#002C6D] p-4 md:p-6">
                  <h3 className="text-center font-bold text-sm sm:text-base">
                    {plans[middleIndex].name} :
                  </h3>
                  <p className="text-center font-bold text-lg sm:text-xl">
                    {plans[middleIndex].price}
                  </p>
                </div>
                <div className="p-4 md:p-6 text-xs sm:text-sm space-y-1 sm:space-y-2 flex-grow">
                  {plans[middleIndex].features.map((feature, idx) => (
                    <p key={idx}>{feature}</p>
                  ))}
                </div>
                <div className="p-4 md:p-6 pt-0">
                  <button className="w-full bg-white hover:bg-gray-100 text-blue-900 py-2 px-4 rounded font-medium cursor-pointer text-sm">
                    ORDER NOW
                  </button>
                </div>
              </div>

              {/* Right Plan */}
              <div
                className={`bg-[${plans[rightIndex].bg}] border-0 shadow-md overflow-hidden rounded-lg flex flex-col md:block`}
              >
                <div className={`bg-[${plans[rightIndex].bg}] p-4 md:p-6`}>
                  <h3
                    className={`text-center ${plans[rightIndex].textColor} font-bold text-sm sm:text-base`}
                  >
                    {plans[rightIndex].name} :
                  </h3>
                  <p
                    className={`text-center ${plans[rightIndex].textColor} font-bold text-lg sm:text-xl`}
                  >
                    {plans[rightIndex].price}
                  </p>
                </div>
                <div className="p-4 md:p-6 text-xs sm:text-sm space-y-1 sm:space-y-2 flex-grow">
                  {plans[rightIndex].features.map((feature, idx) => (
                    <p key={idx}>{feature}</p>
                  ))}
                </div>
                <div className="p-4 md:p-6 pt-0">
                  <button
                    className={`w-full ${plans[rightIndex].buttonColor} py-2 px-4 rounded font-medium cursor-pointer text-sm`}
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile View - Swiper */}
            <div className="md:hidden p-2">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="pricing-swiper"
              >
                {plans.map((plan, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`bg-[#002C6D] text-white border-0 shadow-lg overflow-hidden rounded-lg flex flex-col`}
                    >
                      <div className="bg-[#002C6D] p-4 md:p-6">
                        <h3 className="text-center font-bold text-sm sm:text-base">
                          {plan.name} :
                        </h3>
                        <p className="text-center font-bold text-lg sm:text-xl">
                          {plan.price}
                        </p>
                      </div>
                      <div className="p-4 md:p-6 text-xs sm:text-sm space-y-1 sm:space-y-2 flex-grow">
                        {plan.features.map((feature, idx) => (
                          <p key={idx}>{feature}</p>
                        ))}
                      </div>
                      <div className="p-4 md:p-6 pt-0">
                        <button className="w-full bg-white hover:bg-gray-100 text-blue-900 py-2 px-4 rounded font-medium cursor-pointer text-sm">
                          ORDER NOW
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Custom styles for Swiper */}
            <style jsx global>{`
              .pricing-swiper {
                padding-bottom: 40px !important;
              }
              .pricing-swiper .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                background: #002c6d;
                opacity: 0.1;
              }
              .pricing-swiper .swiper-pagination-bullet-active {
                opacity: 1;
              }
              .swiper-slide {
                transition: transform 0.3s ease;
              }
            `}</style>
          </div>
          {/* Our Company Section */}
          <div className="max-w-7xl mx-auto mb-6 px-4 sm:px-6 ">
            <div class="flex items-center space-x-4">
              <h1 class="text-2xl font-bold text-gray-500 mt-12 uppercase tracking-wider">
                OUR COMPANY
              </h1>
              <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-blue-900 leading-tight">
              MORE ABOUT PUBLIC
              <br />
              LIMITED LIABILITY PARTNERSHIP(LLP)
            </h1>
          </div>
          <div className="min-h-screen bg-blue-50 p-4 sm:p-6 md:p-10">
            <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
              {/* Section 1: What is Public Limited Company */}
              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 uppercase">
                  What is Limited Liability Partnership?
                </h2>
                <div className="p-3 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    A Limited Liability Partnership (LLP) is a unique business
                    structure that blends the features of a partnership and a
                    company. In an LLP, partners have limited liability, meaning
                    they are not personally responsible for the debts of the
                    business beyond their agreed contribution. At the same time,
                    an LLP offers the flexibility of internal management like a
                    traditional partnership. Minimum of two partners required
                    (no maximum limit). It is a separate legal entity from its
                    partners. Partners are protected from the misconduct or
                    negligence of other partners. Lower compliance requirements
                    compared to a Private Limited Company. Governed by the
                    Limited Liability Partnership Act, 2008 in India.
                  </p>
                </div>
              </section>

              {/* Section 2: Why Choose Public Limited Company */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                  WHY CHOOSE PUBLIC LIMITED COMPANY:
                </h2>
                <div className=" bg-opacity-70 p-6 ">
                  <p>
                    The main advantage of a Limited Liability Partnership over a
                    traditional partnership firm is that in a LLP, one partner
                    is not responsible or liable for another partner's
                    misconduct or negligence. A LLP also provides limited
                    liability protection for the owners from the debts of the
                    LLP. Therefore, all partners in a LLP enjoy a form of
                    limited liability protection for each individual's
                    protection within the partnership, similar to that of the
                    shareholders of a private limited company. However, unlike
                    private limited company shareholder, the partners of a LLP
                    have the right to manage the business directly.
                  </p>
                </div>
              </section>

              {/* Section 3: Minimum Requirements */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                  MINIMUM REQUIREMENT TO INCORPORATE LLP;
                </h2>
                <div className=" bg-opacity-70 p-6 ">
                  <ul className="space-y-4 text-gray-600">
                    <li>
                      At least two individuals or corporate entities are
                      required to start an LLP.
                    </li>
                    <li>
                      Out of the partners, at least two must be designated
                      partners responsible for regulatory compliance. At least
                      one designated partner must be a resident of India.
                    </li>
                    <li>
                      All designated partners must have a valid Digital
                      Signature Certificate to sign electronic documents.
                    </li>
                    <li>
                      There is no concept of share capital, but there has to be
                      some sort of contribution from each partners
                    </li>
                    <li>
                      DIN (Director Identification Number) for all Directors
                    </li>
                    <li>
                      DSC (Digital Signature Certificate) for all Directors and
                      Shareholders
                    </li>
                    <li>
                      The registered office of an OPC does not have to be a
                      commercial space. Even a rented home can be the registered
                      office, so long as an NoC is obtained from the landlord.
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
          {/* ASK SOMETHING */}
          <div className="max-w-7xl mx-auto mb-6 px-4 sm:px-6">
            <div class="flex items-center space-x-4">
              <h1 class="text-lg font-bold text-gray-500 mt-12 uppercase tracking-wider">
                ASK SOMETHING
              </h1>
              <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-blue-900 leading-tight">
              FAQ ON LIMITED LIABILITY PARTNERSHIP(LLP)
            </h1>
          </div>
          <div className="max-w-7xl mx-auto p-2 sm:p-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="mb-2 rounded-md overflow-hidden bg-blue-50"
              >
                <div
                  className="flex items-center justify-between p-3 sm:p-4 cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-900 text-white flex items-center justify-center mr-2 sm:mr-4 text-xs sm:text-base">
                      <span>{item.id}.</span>
                    </div>
                    <h3 className="font-medium text-blue-900 text-sm sm:text-base">
                      {item.question}
                    </h3>
                  </div>
                  <div>
                    {openItem === item.id ? (
                      <ChevronUp className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <ChevronDown className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                </div>

                {openItem === item.id && (
                  <div className="px-8 sm:px-16 pb-3 sm:pb-4 text-gray-600 text-xs sm:text-sm">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
              <h2 className="text-blue-900 font-bold text-xl sm:text-2xl mb-4 sm:mb-8">
                MINIMUM REQUIREMENT
              </h2>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
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
                      Information of Proposed Designated Partners/Partners Required:
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
          {/* EASY DECISION SECTION WITH CARDS SECTION  */}
          <div className="max-w-7xl mx-auto mb-6 px-4 sm:px-6">
            <div class="flex items-center space-x-4">
              <h1 class="text-lg font-bold text-gray-500 mt-12 uppercase tracking-wider">
                EASY DECISION
              </h1>
              <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-blue-900 leading-tight">
              ADVANTAGES OF LIMITED LIABILITY PARTNERSHIP(LLP)

            </h1>
          </div>
          <div className="relative max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-12 overflow-hidden">
            {/* Slider */}
            <div className="relative">
              <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 px-2 sm:px-4">
                {/* Left (Previous) Card - Hidden on mobile */}
                <div
                  className={`hidden md:block w-full md:w-1/3 bg-[#EEF4FF] rounded-lg p-6 transition-all duration-700 transform ${
                    isTransitioning
                      ? "opacity-50 translate-x-4"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-4">
                    {advantages[prevIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm">
                    {advantages[prevIndex].description}
                  </p>
                </div>

                {/* Middle (Active) Card */}
                <div
                  className={`w-full md:w-1/3 bg-[#002B6B] text-white rounded-lg p-4 sm:p-6 transition-all duration-700 transform md:scale-105 md:-mt-2 md:-mb-2 md:z-10 shadow-lg ${
                    isTransitioning ? "opacity-90 scale-[1.02]" : "opacity-100"
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {advantages[activeSlide - 1].title}
                  </h3>
                  <p className="text-xs sm:text-sm">
                    {advantages[activeSlide - 1].description}
                  </p>
                </div>

                {/* Right (Next) Card - Hidden on mobile */}
                <div
                  className={`hidden md:block w-full md:w-1/3 bg-[#EEF4FF] rounded-lg p-6 transition-all duration-700 transform ${
                    isTransitioning
                      ? "opacity-50 translate-x-[-4px]"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-4">
                    {advantages[nextIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm">
                    {advantages[nextIndex].description}
                  </p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {advantages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index + 1)}
                    className={`w-6 h-1.5 rounded-full transition-all ${
                      activeSlide === index + 1
                        ? "bg-[#002B6B] w-10"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* STEPS AND TIME DURATION SECTION  */}
          <div className="max-w-7xl mx-auto mb-6 px-4 sm:px-6">
            <div class="flex items-center space-x-4">
              <h1 class="text-lg font-bold text-gray-500 mt-12 uppercase tracking-wider">
                STEPS & TIME DURATION
              </h1>
              <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-blue-900 leading-tight">
              STEPS INVOLVED IN
              <br />
              LIMITED LIABILITY PARTNERSHIP(LLP)
            </h1>
          </div>
          <div className="max-w-6xl mx-auto p-3 sm:p-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0a3277] flex items-center justify-center text-white font-bold text-xl sm:text-2xl z-10">
                    {step.number}
                  </div>

                  <div className="bg-[#eef3fb] p-4 sm:p-6 pt-12 sm:pt-16 pb-6 sm:pb-8 rounded-lg h-full relative">
                    <div className="font-bold text-[#0a3277] mb-3 sm:mb-4 text-sm sm:text-base">
                      {step.days}
                    </div>

                    <div className="text-gray-700 space-y-2 sm:space-y-4">
                      {step.description.map((desc, i) => (
                        <p key={i} className="text-xs sm:text-sm">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#002B6B] text-white p-3 rounded-full shadow-lg hover:bg-[#001A41] transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
}
