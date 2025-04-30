import { useState, useEffect, useRef } from "react";
import Company from "../image/Company.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import document from "../image/document.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaFacebook, FaTwitter, FaInstagram, FaDownload, FaEnvelope, FaBars, FaPhone } from 'react-icons/fa';


const plans = [
  {
    name: "BUSINESS PLAN",
    price: "RS. 18999.00",
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
      "Filing of Commencement of Business (INC-20A)",
      "MSME Registration",
      "GST Registration",
      "Trademark Application - 1 Brand/1 Class",
      "Trademark Objection Replay - 1 Brand/1 Class",
      "Domain registration - 1 year",
      "Complementary Incorporation Kit -",
      "MOA and AOA - 1 Copy",
      "Draft 1st Meeting of Minutes",
      "6 Month Social Media Marketing Tool",
      "Share Certificates",
      "Customized Printing T-Shirt with Logo - 2 Nos.",
      "Assistance in bank Account Opening",
    ],
  },
  {
    name: "CORPORATE PLAN",
    price: "RS. 31999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 2",
      "DIN (Director Identification Number) - 2",
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
      "Complementary Incorporation Kit -",
      "MOA and AOA - 2 Copy",
      "Draft 1st Meeting of Minutes",
      "1 year Social Media Marketing Tool",
      "Share Certificates",
      "Customized Printing T-Shirt with Logo - 2 Nos.",
      "Assistance in bank Account Opening",
    ],
  },
  // Additional 3 plans as requested
  {
    name: "ECONOMY PLAN",
    price: "RS. 15999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 2",
      "DIN (Director Identification Number) - 2",
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
      "Complementary Incorporation Kit -",
      "MOA and AOA - 1 Copy",
      "Draft 1st Meeting of Minutes",
      "3 Month Social Media Marketing Tool",
      "Share Certificates",
      "Customized Printing T-Shirt with Logo - 1 Nos.",
      "Assistance in bank Account Opening ",
    ],
  },
  {
    name: "STARTUP PLAN",
    price: "RS. 8999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 2 ",
      "DIN (Director Identification Number) - 2 ",
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
      "Assistance in bank Account Opening ",
    ],
  },
  {
    name: "GLOBAL PLAN",
    price: "RS. 49999.00",
    bg: "#EDF4FF",
    textColor: "text-blue-900",
    buttonColor: "bg-[#002C6D] text-white",
    features: [
      "DSC (Digital Signature Certificate) - 15",
      "DIN (Director Identification Number) - 10",
      "Company Name Reservation Application - Unlimited",
      "Registration Fees on capital up to Rs. 10 Lakh",
      "Stamp duty on capital up to Rs. 10 Lakh",
      "E-MOA and E-AOA",
      "PAN and TAN",
      "PF Registration",
      "ESIC Registration",
      "Filing of Commencement of Business (INC-20A)",
      "MSME Registration",
      "GST Registration",
      "Trademark Application - 5 Brand/5 Class",
      "Complementary Incorporation Kit",
      "MOA and AOA - 5 Copies",
      "Draft 1st Meeting of Minutes",
      "24 Month Social Media Marketing Tool",
      "Share Certificates",
      "Customized Printing T-Shirt with Logo - 10 Nos.",
      "Assistance in bank Account Opening",
      "Business Email Setup",
      "Website Development (Premium)",
      "Digital Marketing Consultation",
      "Legal Consultation - 5 Hours",
      "International Business Setup Guidance",
      "Tax Planning Consultation",
    ],
  },
];

// Slider cards section
const advantages = [
  {
    id: 1,
    title: "LIMITED LIABILITY",
    description:
      "Shareholders of a Private Limited Company are only liable to the extent of the unpaid value of their shares.",
  },
  {
    id: 2,
    title: "SEPARATE LEGAL ENTITY",
    description:
      "A Private Limited Company is a separate legal entity from its owners and shareholders. This means that the company itself can own property, enter into contracts, and be sued or sue others in its own name. ",
  },
  {
    id: 3,
    title: "TRANSFERABILITY",
    description: "The ownership of a Private Limited Company is easier to transfer. Shares can be sold or transferred to other individuals or entities, subject to certain restrictions as per the company's articles. This makes it easier for shareholders to exit the company if desired.",
  },
  {
    id: 4,
    title: "PERPETUAL SUCCESSION",
    description:
      "A Private Limited Company has perpetual succession, meaning it continues to exist even if shareholders or directors change, or if one of the shareholders passes away. ",
  },
  {
    id: 5,
    title: "TAX BENEFITS",
    description:
      "Private Limited Companies can avail several tax deductions and benefits that are not available to other business structures.",
  },
  {
    id: 6,
    title: "ABILITY TO RAISE VENTURE CAPITAL",
    description:
      "Private Limited Companies are more likely to attract venture capital funding as compared to other business structures.",
  },
];

const steps = [
  {
    number: "1.",
    days: "DAY 1-2",
    description: [
      "Obtain Digital Signature Certificate (DSC)",
      "Apply for Director Identification Number (DIN)",
    ],
  },
  {
    number: "2.",
    days: "DAY 3-4",
    description: [
      "Choose a Unique Company Name",
      "Draft the Memorandum of Association (MOA) and Articles of Association (AOA)",
    ],
  },
  {
    number: "3.",
    days: "DAY 4-6",
    description: [
      "Provide the Registered Office Address",
      "File the Incorporation Application",
    ],
  },
  {
    number: "4.",
    days: "DAY 7-8",
    description: [
      "Payment of Government Fees",
      "Obtain PAN and TAN",
    ],
  },
];

export default function PrivateLimited() {
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
      question: "What is a Private Limited Company?",
      answer:
        "A Private Limited Company is a business structure that limits the liability of its shareholders to the amount unpaid on their shares. It is a separate legal entity from its owners and is governed by the Companies Act of 2013 in India. Private limited companies are generally restricted from offering shares to the public and have a limited number of shareholders (maximum of 200).",
    },
    {
      id: 2,
      question: "Who can become a director in a Private Limited Company? ",
      answer:
        "Any individual can become a director in a Private Limited Company, provided they are above 18 years of age, have a valid Director Identification Number (DIN), and are not disqualified by law. The company must have at least 2 directors. One of the directors must be a resident of India.",
    },
    {
      id: 3,
      question: "Can a foreigner or NRI become a director in a Private Limited Company?",
      answer:
        "Yes, foreign nationals and Non-Resident Indians (NRIs) can become directors in a Private Limited Company in India. However, there must still be at least one Indian resident director.",
    },
    {
      id: 4,
      question: "What is the minimum capital required to incorporate a Private Limited Company?",
      answer:
        "There is no minimum capital requirement for incorporating a Private Limited Company in India. The company can be registered with a very nominal amount, but a reasonable amount of capital is usually recommended for business operations.",
    },
    {
      id: 5,
      question: "What are the tax implications for a Private Limited Company? ",
      answer:
        "Private Limited Companies are subject to corporate taxation. The tax rate can vary based on the income, and the company may be eligible for certain exemptions, deductions, and credits. The company must file an annual return with the Income Tax Department.",
    },
    {
      id: 6,
      question: "Can a Private Limited Company change its name after incorporation?",
      answer:
        "Yes, a Private Limited Company can change its name by passing a special resolution and applying to the Registrar of Companies (ROC). The new name must comply with naming guidelines set by the Ministry of Corporate Affairs (MCA).",
    },
    {
      id: 7,
      question: "How long does it take to register a Private Limited Company?  ",
      answer:
        "The process of registering a Private Limited Company typically takes 7-10 working days, depending on the accuracy and completeness of the submitted documents. Delays may occur if there are discrepancies in the documentation or if the name is not available.",
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14387f] mb-2">
                PRIVATE LIMITED COMPANY
              </h2>
              <p className="font-bold text-white mb-4 tracking-wide">
                ALL YOU NEED TO KNOW
              </p>
              <p className="mb-2 text-white">
                A Private Limited Company offers limited liability and legal
                protection to its shareholders. A Private Limited Company in
                India lies somewhere between a partnership firm and a widely
                owned public company. It can be registered with a minimum of two
                people. A person can be both a director and shareholder in a
                Private Limited Company.
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
              PRIVATE LIMITED COMPANY
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
              MORE ABOUT PRIVATE
              <br />
              LIMITED COMPANY
            </h1>
          </div>
          <div className="min-h-screen bg-blue-50 p-4 sm:p-6 md:p-10">
            <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
              {/* Section 1: What is Public Limited Company */}
              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 ml-7">
                  WHAT IS PRIVATE LIMITED COMPANY?
                </h2>
                <div className="p-3 sm:p-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed ml-3">
                    A Private Limited Company is a type of business entity that
                    is privately owned, where the liability of its members
                    (shareholders) is limited to the extent of their shares in
                    the company. It is one of the most common forms of business
                    structure used by entrepreneurs and businesses worldwide.
                  </p>
                </div>
              </section>

              {/* Section 2: Why Choose Public Limited Company */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 ml-7">
                  WHY CHOOSE PRIVATE LIMITED COMPANY:
                </h2>
                <div className=" bg-opacity-70 p-6ml">
                  <ul className="space-y-4 text-gray-600">
                    <li>Limited Liability Protection.</li>
                    <li>Separate Legal Entity</li>
                    <li>Enhanced Credibility and Trust</li>
                    <li>Ease of Raising Capital</li>
                    <li>Perpetual Succession</li>
                    <li>Tax Benefits and Deductions</li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Minimum Requirements */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 ml-7">
                  MINIMUM REQUIREMENT TO INCORPORATE PRIVATE LIMITED COMPANY;
                </h2>
                <div className=" bg-opacity-70 p-6 ml-7">
                  <ul className="space-y-4 text-gray-600 ">
                    <li>Minimum 2 Directors</li>
                    <li>Minimum 2 Shareholders</li>
                    <li>One Director must be an Indian Resident</li>
                    <li>Director Identification Number (DIN) for all Directors</li>
                    <li>
                      DIN (Director Identification Number) for all Directors
                    </li>
                    <li>
                      DSC (Digital Signature Certificate) for all Directors and
                      Shareholders
                    </li>
                    <li>
                    Registered Office Address
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
              FAQ ON PRIVATE LIMITED
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
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-900 text-white flex items-center justify-center mr-2 sm:mr-4 text-md sm:text-[12px]">
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
              <h2 className="text-blue-900 font-bold text-xl sm:text-2xl mb-4 sm:mb-8 ml-7">
                MINIMUM REQUIREMENT
              </h2>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 ml-7">
                <div>
                  <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600 ">
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
              ADVANTAGES OF A PRIVATE
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
