import { useState, useEffect, useRef } from "react";
import company from "../image/company.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import document from "../image/document.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaFacebook, FaTwitter, FaInstagram, FaDownload, FaEnvelope, FaBars, FaPhone } from 'react-icons/fa';

const plans = [
  {
    name: "ECONOMY PLAN",
    price: "RS. 15999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 2 ",
      "DIN (Director Identification Number) - 1",
      "Company Name Reservation Application - 1 Time",
      "Registration Fees on capital up to Rs. 1 Lakh",
      "Stamp duty on capital up to Rs. 1 Lakh",
      "E-MOA and E-AOA",
      "PAN and TAN",
      "PF Registration",
      "ESIC Registration",
      "Filling of Commencement of Business (INC-20A)",
      "MSME Certificate",
      "GST Registration",
      "Trademark Application - 1 Brand/1 Class",
      "Complementary Incorporation Kit-",
      "MOA and AOA - 1 Copy",
      "Draft 1st Meeting of Minutes",
      "3 Month Social Media Marketing Tool",
      "Share Certificates",
      "Customized Printing T-Shirt with Logo - 1 Nos.",
      "Assistance in bank Account Opening ",
    ],
  },
  {
    name: "STARTER PLAN",
    price: "RS. 8999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 2 ",
      "DIN (Director Identification Number) - 1",
      "Company Name Reservation Application - 1 Time",
      "Registration Fees on capital up to Rs. 1 Lakh",
      "Stamp duty on capital up to Rs. 1 Lakh",
      "E-MOA and E-AOA",
      "PAN and TAN",
      "PF Registration",
      "ESIC Registration",
      "Filling of Commencement of Business (INC-20A)",
      "Complementary Incorporation Kit -",
      "MOA and AOA - 1 Copy",
      "1 Month Social Media Marketing Tool",
      "Share Certificates",
      "Assistance in bank Account Opening",
    ],
  },
  // Additional 3 plans as requested
  {
    name: "CORPORATE PLAN",
    price: "RS. 31999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 2",
      "DIN (Director Identification Number) - 1 ",
      "Company Name Reservation Application - 1 Time",
      "Registration Fees on capital up to Rs. 1 Lakh",
      "Stamp duty on capital up to Rs. 1 Lakh",
      "E-MOA and E-AOA",
      "PAN and TAN",
      "PF Registration",
      "ESIC Registration",
      "Filling of Commencement of Business (INC-20A)",
      "MSME Certificate",
      "GST Registration",
      "Trademark Application - 1 Brand/1 Class",
      "Trademark Objection Replay - 1 Brand/1 Class",
      "Domain registration - 1 year",
      "Website Hosting - 1 year",
      "Website Development",
    ],
  },
  {
    name: "BUSINESS PLAN",
    price: "RS. 6999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 2",
      "DIN (Director Identification Number) - 1",
      "Company Name Reservation Application - 1 Time",
      "Registration Fees on capital up to Rs. 1 Lakh",
      "Stamp duty on capital up to Rs. 1 Lakh",
      "E-MOA and E-AOA",
      "PAN and TAN",
      "PF Registration",
      "ESIC Registration",
      "Filling of Commencement of Business (INC-20A)",
      "MSME Certificate",
      "GST Registration",
      "Trademark Application - 1 Brand/1 Class",
      "Trademark Objection Replay - 1 Brand/1 Class",
      "Domain registration - 1 year",
      "Complementary Incorporation Kit-",
      "MOA and AOA - 2 Copy",
      "Draft 1st Meeting of Minutes",
      "6 Month Social Media Marketing Tool",
      "Share Certificates",
      "Customized Printing T-Shirt with Logo - 2 Nos.",
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
    title: "COMPLETE CONTROL",
    description:
      "The sole owner retains full control over the company's operations and decision-making. There’s no need to consult with partners, making it easier to implement business strategies swiftly.",
  },
  {
    id: 4,
    title: "LOWER COMPLIANCE REQUIREMENTS",
    description:
      "Compared to Private Limited Companies, OPCs have a simplified compliance process. The regulatory and filing requirements are less burdensome, reducing administrative overhead and associated costs.",
  },
  {
    id: 5,
    title: "ENHANCED CREDIBILITY AND TRUST",
    description:
      "Registering as a company gives the business a formal structure, enhancing its credibility in the market. It’s more likely to gain trust from customers, suppliers, and investors compared to a sole proprietorship.",
  },
  {
    id: 6,
    title: "EASY FUNDRAISING",
    description:
      "OPCs find it easier to raise funds from banks or financial institutions compared to sole proprietorships due to their corporate structure. This access to credit can fuel business growth.",
  },
  {
    id: 7,
    title: "FLEXIBLE GROWTH",
    description:
      "If the business expands, an OPC can easily be converted into a Private Limited Company, allowing for greater flexibility in growth and enabling the addition of shareholders and investors.",
  },
];

const steps = [
  {
    number: "1.",
    days: "DAY 1-2",
    description: [
      "Obtain Digital Signature Certificate (DSC)",
      "Obtain Director Identification Number (DIN)",
    ],
  },
  {
    number: "2.",
    days: "DAY 3-4",
    description: [
      "Choose a Company Name",
      "Draft the Memorandum and Articles of Association (MOA and AOA)",
    ],
  },
  {
    number: "3.",
    days: "DAY 4-6",
    description: [
      "Prepare the Required Documents",
      "File the SPICe+ Form for OPC Registration",
    ],
  },
  {
    number: "4.",
    days: "DAY 7-8",
    description: [
      "Submit the Application with Required Fees",
      "Obtain Certificate of Incorporation",
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
      question: "Who can register a One Person Company (OPC)?",
      answer:
        "Only an Indian citizen and resident (someone who has stayed in India for at least 120 days during the financial year) can register an OPC. Foreign nationals are not eligible.",
    },
    {
      id: 2,
      question: " Can I start more than one OPC at a time?",
      answer:
        "No, an individual can incorporate only one OPC and cannot be a nominee in more than one OPC at the same time.",
    },
    {
      id: 3,
      question: "Is a nominee mandatory for OPC registration?",
      answer:
        "Yes, it is compulsory to nominate one person who will take over the company in case the sole member is unable to continue.",
    },
    {
      id: 4,
      question: "Is there any minimum capital requirement for starting an OPC?",
      answer:
        "No, there is no minimum paid-up capital requirement to start an OPC.",
    },
    {
      id: 5,
      question: "What documents are required for OPC registration?",
      answer:
        "Key documents include the PAN Card, Aadhaar Card, proof of address, passport-size photographs of the director/shareholder, and proof of the registered office address.",
    },
    {
      id: 6,
      question: "What happens if the OPC crosses turnover limits?",
      answer:
        "If the OPC’s turnover exceeds ₹2 crore or the paid-up capital crosses ₹50 lakh, it must mandatorily convert into a Private Limited Company.",
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
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Double Exposure Effect */}
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14387f] mb-2">
                ONE PERSON COMPANY (OPC)
              </h2>
              <p className="font-bold text-white mb-4 tracking-wide">
                ALL YOU NEED TO KNOW
              </p>
              <p className="mb-2 text-white">
                A One Person Company (OPC) offers the benefits of a Private
                Limited Company while allowing a single entrepreneur to operate
                as a corporate entity. In India, an OPC can be registered with
                only one shareholder and one director, making it ideal for solo
                founders who want full control with limited liability. The
                single owner enjoys legal protection of personal assets and a
                separate legal identity for the business. OPCs are easier to
                manage compared to Private Limited Companies, but they must
                convert into a Private or Public Limited Company if their annual
                turnover crosses prescribed limits.
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
              ONE PERSON COMPANY(OPC)
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
              MORE ABOUT ONE PERSON COMPANY (OPC)
            </h1>
          </div>
          <div className="min-h-screen bg-blue-50 p-4 sm:p-6 md:p-10">
            <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
              {/* Section 1: What is Public Limited Company */}
              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 uppercase">
                  What is a One Person Company (OPC)?
                </h2>
                <div className="p-3 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    A One Person Company (OPC) is a type of business entity
                    introduced under the Companies Act, 2013, that allows a
                    single individual to incorporate and operate a company with
                    limited liability and a separate legal identity. It combines
                    the benefits of a sole proprietorship and a Private Limited
                    Company, giving the owner full control while protecting
                    their personal assets.
                  </p>
                </div>
              </section>

              {/* Section 2: Why Choose Public Limited Company */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                  WHY CHOOSE ONE PERSON COMPANY (OPC)?
                </h2>
                <div className=" bg-opacity-70 p-6 ">
                  <p>
                    Choosing a One Person Company (OPC) is ideal for solo
                    entrepreneurs who want the benefits of a corporate structure
                    while maintaining full control over their business. An OPC
                    offers limited liability protection, ensuring that the
                    personal assets of the owner are safe in case of business
                    risks or losses. It enjoys a separate legal identity,
                    allowing it to own property, enter into contracts, and be
                    recognized independently in the eyes of law. Compared to
                    other company types, OPCs have a lower compliance burden,
                    making management easier and cost-effective. Moreover,
                    having a formal company status enhances the brand image and
                    credibility, helping the business secure loans and build
                    trust with customers and partners. As the business grows, an
                    OPC can be easily converted into a Private Limited Company,
                    offering greater flexibility for future expansion.
                  </p>
                </div>
              </section>

              {/* Section 3: Minimum Requirements */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
                  MINIMUM REQUIREMENT TO INCORPORATE OPC :
                </h2>
                <div className=" bg-opacity-70 p-6 ">
                  <ul className="space-y-4 text-gray-600">
                    <li>Minimum 1 Shareholder</li>
                    <li>Minimum 1 Directors</li>
                    <li>The directors and shareholders can be same person</li>
                    <li>
                      Minimum 1 Nominee ? Only Indian residents can be
                      Shareholder & Nominee
                    </li>
                    <li>
                      DIN (Director Identification Number) for all Directors
                    </li>
                    <li>
                      DSC (Digital Signature Certificate) for 1
                      Promoters/Director & 1 Nominee
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
              FAQ ON ONE PERSON COMPANY (OPC)
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
              DOCUMENTS REQUIRED FOR ONE PERSON COMPANY (OPC)
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
                      Information of Proposed Directors/Shareholders Required :
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
              ADVANTAGES OF ONE PERSON COMPANY (OPC)
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
              STEPS INVOLVED IN REGISTRATION OF
              <br />
              ONE PERSON COMPANY (OPC)
            </h1>
          </div>
          <div className="max-w-6xl mx-auto p-3 sm:p-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-[#0a3277] flex items-center justify-center text-white font-bold text-xl sm:text-2xl z-10">
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
