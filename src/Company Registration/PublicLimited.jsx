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
    name: "STARTUP PLAN",
    price: "RS. 15999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 7",
      "DIN (Director Identification Number) - 3",
      "Company Name Reservation Application - 1 Time",
      "Registration Fees on capital up to Rs. 1 Lakh",
      "Stamp duty on capital up to Rs. 1 Lakh",
      "E-MOA and E-AOA",
      "PAN and TAN",
      "PF Registration",
      "ESIC Registration",
      "Filling of Commencement of Business (INC-20A)",
      "MOA and AOA - 1 Copy",
      "1 Month Social Media Marketing Tool",
      "Share Certificates",
      "Assistance in bank Account Opening",
    ],
  },
  {
    name: "BUSINESS PLAN",
    price: "RS. 26999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 7",
      "DIN (Director Identification Number) - 3",
      "Company Name Reservation Application - 1 Time",
      "Registration Fees on capital up to Rs. 1 Lakh",
      "Stamp duty on capital up to Rs. 1 Lakh",
      "E-MOA and E-AOA",
      "PAN and TAN",
      "PF Registration",
      "ESIC Registration",
      "Filling of Commencement of Business (INC-20A)",
      "MSME Registration",
      "GST Registration",
      "Trademark Application - 1 Brand/1 Class",
      "Trademark Objection Replay - 1 Brand/1 Class",
      "Domain registration - 1 year",

      "Complementary Incorporation Kit -",
      "MOA and AOA - 2 Copy",
      "Draft 1st Meeting of Minutes",
      "6 Month Social Media Marketing Tool",
      "Share Certificates",
      "Customized Printing T-Shirt with Logo - 2 Nos.",
      "Assistance in bank Account Opening",
    ],
  },
  // Additional 3 plans as requested
  {
    name: "CORPORATE PLAN",
    price: "RS. 37999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 7 ",
      "DIN (Director Identification Number) - 3",
      "Company Name Reservation Application - 1 Time",
      "Registration Fees on capital up to Rs. 1 Lakh",
      "Stamp duty on capital up to Rs. 1 Lakh",
      "E-MOA and E-AOA",
      "PAN and TAN",
      "PF Registration",
      "ESIC Registration",
      "Filling of Commencement of Business (INC-20A)",
      "MSME Registration",
      "GST Registration",
      "Trademark Application - 1 Brand/1 Class",
      "Trademark Objection Replay - 1 Brand/1 Class",
      "Domain registration - 1 year",
      "Website Hosting - 1 year",
      "Website Development",
      "Complementary Incorporation Kit -",
      "MOA and AOA - 2 Copy",
      "Draft 1st Meeting of Minutes",
      "1 year Social Media Marketing Tool",
      "Share Certificates",
      "Customized Printing T-Shirt with Logo - 2 Nos.",
      "Assistance in bank Account Opening",
    ],
  },
  {
    name: "ECONOMY PLAN",
    price: "RS. 23999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 7 ",
      "DIN (Director Identification Number) - 3",
      "Company Name Reservation Application - 1 Time",
      "Registration Fees on capital up to Rs. 1 Lakh",
      "Stamp duty on capital up to Rs. 1 Lakh",
      "E-MOA and E-AOA",
      "PAN and TAN",
      "PF Registration",
      "ESIC Registration",
      "Filling of Commencement of Business (INC-20A)",
      "MSME Registration",
      "GST Registration",
      "Trademark Application - 1 Brand/1 Class",
    ],
  },
];

// Slider cards section
const advantages = [
  {
    id: 1,
    title: "LIMITED LIABILITY",
    description:
      "There Is No Personal Liability Of Director Shareholder For Any Debt Of The Company. Director Personal Property Are Safe.",
  },
  {
    id: 2,
    title: "SEPARATE LEGAL ENTITY",
    description:
      "Company Has A Spate PAN, Other Registration In Its Own Name And Its Legally Recognized As A Spate Entity. Company Can Own Property Its Own Name.",
  },
  {
    id: 3,
    title: "TRANSFERABILITY",
    description: "For The Number Of Shares And Shares Can Be Transfer Entity.",
  },
  {
    id: 4,
    title: "WIDER BRAND RECOGNITION",
    description:
      "Being publicly listed attracts media attention and wider brand visibility compared to private companies.",
  },
  {
    id: 5,
    title: "TAX BENEFITS",
    description:
      "Private limited companies enjoy various tax advantages and deductions not available to sole proprietorships.",
  },
  {
    id: 6,
    title: "ABILITY TO ATTRACT TOP TALENT",
    description:
      "Stock options and employee stock ownership plans (ESOPs) make it easier to hire and retain highly skilled employees.",
  },
];

const steps = [
  {
    number: "1.",
    days: "DAY 1-2",
    description: [
      "Collection of Basic Documents and Information's",
      "Application for Digital Signature Certificate (DSC)",
    ],
  },
  {
    number: "2.",
    days: "DAY 3-4",
    description: [
      "Search Proposed Company Name Availability.",
      "Draft Required Documents for registration of Company.",
    ],
  },
  {
    number: "3.",
    days: "DAY 4-6",
    description: [
      "Application for Name Reservation",
      "Filing a Forms for Registration of the Company.",
    ],
  },
  {
    number: "4.",
    days: "DAY 7-8",
    description: [
      "Getting a Incorporation Certificate (Registration Certificate)",
      "Getting PAN, PF, ESIC, TAN Number",
    ],
  },
];

export default function CompanyRegistrationPage() {
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
      question: "What is the capital required to start a Limited Company?",
      answer:
        "There is No such minimum capital requirement. You can start a Limited Company with any amount of capital.",
    },
    {
      id: 2,
      question: "What are the documents required for incorporation?",
      answer: "As Mention Above.",
    },
    {
      id: 3,
      question:
        "Can a Foreigner or NRI (Non-Resident Indian) become a Director in a Public Limited Company in India?",
      answer:
        "Yes, a Foreigner or an NRI can become a Director in an Indian Public Limited Company.",
    },
    {
      id: 4,
      question: "Applicable tax rate for the Company?",
      answer:
        "Base Corporate Tax Rate is 22% under Section 115BAA (for companies not claiming certain exemptions/incentives).Plus, surcharge (10%) and cess (4%) are applicable, making the effective tax rate about 25.17%.",
    },
    {
      id: 5,
      question: "Can Limited Company Conduct multiple Business?",
      answer:
        "Yes, Company can do multiple business if, it is mention and approved memorandum of association (MOA) by the registrar.",
    },
    {
      id: 6,
      question: "How long is the incorporated Company is valid?",
      answer:
        "Once a Company is incorporated, it will be active and in-existence as long as the annual compliances are met with regularly. In case, annual compliances are not complied with, the Company will become a Dormant Company and maybe struck off from the register after a period of time. A struck-off Company can be revived for a period of up to 20 years.",
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
                PUBLIC LIMITED COMPANY
              </h2>
              <p className="font-bold text-white mb-4 tracking-wide">
                ALL YOU NEED TO KNOW
              </p>
              <p className="mb-2 text-white">
              A Public Limited Company offers limited liability, legal protection to its shareholders, and the ability to raise capital from the general public. A Public Limited Company in India is typically suited for businesses planning large-scale operations and seeking investment from public shareholders. It must be registered with a minimum of seven shareholders and three directors. Shares of a Public Limited Company can be freely traded on the stock exchange, and the company must adhere to strict regulatory and compliance requirements under Indian corporate laws.
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
              PUBLIC LIMITED COMPANY
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
              LIMITED COMPANY
            </h1>
          </div>
          <div className="min-h-screen bg-blue-50 p-4 sm:p-6 md:p-10">
            <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
              {/* Section 1: What is Public Limited Company */}
              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">
                  WHAT IS PUBLIC LIMITED COMPANY?
                </h2>
                <div className="p-3 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    A public limited company mainly two types 1. Unlisted Public
                    Company, 2. Listed Public Company. Public Limited Company
                    have also limited liability to its shareholder and
                    directors. A minimum of three Directors and seven members
                    are required for establishing a Public Limited Company and
                    it has more compliances and regulatory requirements compared
                    to a Private Limited Company.
                  </p>
                </div>
              </section>

              {/* Section 2: Why Choose Public Limited Company */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                  WHY CHOOSE PUBLIC LIMITED COMPANY:
                </h2>
                <div className=" bg-opacity-70 p-6 ">
                  <ul className="space-y-4 text-gray-600">
                    <li>It is flexible and has limited liability.</li>
                    <li>
                      A greater capital contribution and greater stability
                    </li>
                    <li>The possibility to grow big and expand</li>
                    <li>
                      It{"'"}s helpful to establish trust and brand Equity
                    </li>
                    <li>
                      Its have a option to get listed in recognized stock
                      exchange.
                    </li>
                    <li>
                      There is no limit on number of member to become
                      shareholder in public company.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Minimum Requirements */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                  MINIMUM REQUIREMENT TO INCORPORATE PUBLIC LIMITED COMPANY;
                </h2>
                <div className=" bg-opacity-70 p-6 ">
                  <ul className="space-y-4 text-gray-600">
                    <li>Minimum 3 Directors</li>
                    <li>Minimum 7 Shareholders</li>
                    <li>The directors and shareholders can be same person</li>
                    <li>One of the Directors must be Indian resident</li>
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
              FAQ ON PUBLIC LIMITED
              <br />
              COMPANY
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
          {/* EASY DECISION SECTION WITH CARDS SECTION  */}
          <div className="max-w-7xl mx-auto mb-6 px-4 sm:px-6">
            <div class="flex items-center space-x-4">
              <h1 class="text-lg font-bold text-gray-500 mt-12 uppercase tracking-wider">
                EASY DECISION
              </h1>
              <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-blue-900 leading-tight">
              ADVANTAGES OF A PUBLIC
              <br />
              LIMITED COMPANY
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
              REGISTRATION
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
