import React, { useState,useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaDownload, FaEnvelope, FaBars, FaPhone } from 'react-icons/fa';
import document from "../image/document.svg";
import com from "../image/com.svg";


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
        "Discussion between LeglBoss Team & the Promoters/Directors of the Company.",
        "Drafting necessary Documents and resolutions "
      ]
    },
    {
      number: "2.",
      days: "DAY 3-4",
      description: [
        "Signing of Required Documents.",
        "Preparation for ROC forms for Changes"
      ]
    },
    {
      number: "3.",
      days: "DAY 4-6",
      description: [
        "Filling of Forms and Documents with ROC",
        "Paying ROC Fees"
      ]
    },
    {
      number: "4.",
      days: "DAY 7-8",
      description: [
        "ROC processing Time / Approval Time",
        "Send Approval Letter with ROC forms and Challan"
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
      title: "Additional Director:",
      description:
        "As far as there is no difference in Director and additional Director. Additional Director appoint by the Board of Directors and additional director hold his directorship till the conclusion of the next annual general meeting."
    },
    {
      id: 2,
      title: "Alternate Director:",
      description:
        "Alternate Director will appoint in place of absence director (Absence period not less than Three month). The board of director may if, so authorized by Article of association or by resolution passed in the Shareholder Meeting, Appoint person as alternate Director of the Company."
    },
    {
      id: 3,
      title: "Executive and Non Executive Director",
      description: "Executive Director is the whole time employment of the Company where non executive director is not a employment of the company. Executive Director participate in the company operation and take a remuneration where as non executive Director not participate in operation of the Company but they can participant on the Meeting and take seating fees."
    },
    {
      id: 4,
      title: "Independent directors",
      description:
        "They are not Managing directors, whole time directors or nominee directors, such directors have to comply with the criteria's given in section 149(6). An independent director can be appointed for a consecutive period of not more than 2 years then a gap of 3 years is required before their reappointment in the same company for the same position. Every listed public company shall have not less than one third of its directors as independent and prescribed public companies shall have minimum of 2 independent directors."
    },
    {
      id: 5,
      title: "Managing Director:",
      description:
        "The person who is in overall charge of the running of an organization or business. Appointment of MD by the Board of Director among its member to manage the affairs of the company as a whole time officer and calls him the Managing Director."
    },
    {
      id: 6,
      title: "Nominee director",
      description:
        "Such directors are appointed by third party subject to the articles of the company in pursuance with the law or any provisions for the time being in force. For example a director appointed by bank / Financial institution"
    }
  ]
  const faqItems = [
    {
      id: 1,
      question: "What is a change in directors?",
      answer:
        "A change in directors refers to the appointment, resignation, removal, or replacement of a company's directors by following the legal process under the Companies Act."
    },
    {
      id: 2,
      question: "When is a change in directors required?",
      answer:
        "It is required when a director resigns, retires, is removed, or when new directors are appointed to strengthen management, meet legal requirements, or during business restructuring."
    },
    {
      id: 3,
      question: "Is it mandatory to inform the Registrar of Companies (ROC)?",
      answer:
        "Yes, it is mandatory to file necessary forms (like DIR-12) with the ROC within the prescribed time limit to officially record the change."
    },
    {
      id: 4,
      question: "Which forms are filed for change in directors?",
      answer:
        "The main form is DIR-12. In some cases, supporting forms like DIR-2, DIR-8, and special resolutions (if required) must also be prepared and filed."
    },
    {
      id: 5,
      question: "What happens if the company doesn’t file the director change with ROC?",
      answer:
        "Failure to file timely can result in penalties, late fees, and non-compliance status for the company, which may affect future filings and operations."
    }
  ]


  const plans = [
    {
      title: "STARTER PLAN :",
      price: " ₹4,999/-",
      items: [
        "Preparation and Filing of Form DIR-12 for Appointment/Resignation of One (1) Director",
        "Drafting of Basic Board Resolution",
      ],
      highlight: false,
    },
    {
      title: "ENTREPRENEUR :",
      price: "₹8,999/-",
      items: [
        "Preparation and Filing of Form DIR-12 for Appointment/Resignation of One (1) Director",
        "Drafting of Board and Shareholder Resolutions (if needed)",
        "Assistance with DIR-2 and DIR-8 Declarations",
      ],
      highlight: true,
    },
    {
      title: "CORPORATE:",
      price: "₹12,999/-",
      items: [
        "End-to-end support for Appointment/Resignation/Change in Designation of Multiple Directors",
        "Drafting of Board and Shareholder Resolutions",
        "Assistance in updating Company’s Statutory Records (Register of Directors)",
        "Compliance advisory for future director changes",
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14387f] mb-2">
              CHANGES IN DIRECTORS
            </h2>
            <p className="font-bold text-white mb-4 tracking-wide">
              APPOINTMENT AND/OR RESIGNATION OF DIRECTORS
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
          More Change in Directors
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-900 uppercase">
              Why Change in Directors?
            </h2>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4">
                <li>New directors may be appointed to bring in fresh expertise, vision, and leadership during growth or strategic changes.</li>

                <li>Directors may step down voluntarily due to personal reasons, health issues, retirement, or change of career focus.</li>

                <li>Certain companies must meet minimum or maximum director requirements (e.g., minimum 2 for a private company in India). Changes help maintain legal compliance.</li>

                <li>Sometimes directors are removed or replaced to improve governance, accountability, or business performance.</li>

                <li>New investors or key partners may be appointed as directors to actively participate in business decision-making.</li>

                <li>In mergers, acquisitions, or internal reorganization, the board of directors is often reshaped to reflect new ownership.</li>
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
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-tight uppercase">
          FAQ ON Change in Directors
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
              <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm sm:text-base text-gray-600 ml-8">
                <li>PAN Card</li>
                <li>Aadhar Card</li>
                <li>
                Photo - 2
                </li>
                <li>
                ID proof (Driving Licence / Voting card / passport)
                </li>
                <li>Residence Proof (Driving License / passport / Voter ID / Electricity Bill / Mobile Bill not older than 2 month)</li>
                <li>Digital Signature of director</li>
                <li>Director Identification Number if, not then must have to apply before appointment.</li>
                <li>Before Appointment Required to Get Director identification Number and for that Digital signature requirement is must.</li>
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
      {/* ADVANTAGES SLIDER */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mt-12">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-bold text-gray-500 uppercase tracking-wider">
          EASY DECISION
        </h1>
        <div className="h-0.5 w-40 bg-gray-500"></div>
      </div>
      <h1 className="text-3xl font-extrabold text-blue-900 leading-tight uppercase">
        Types of Directors
      </h1>

      <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch">
        <div className="hidden md:block w-full md:w-1/3 bg-[#EEF4FF] rounded-lg p-6 transition-all duration-700">
          <h3 className="text-lg font-bold mb-4">
            {advantages[prevIndex].title}
          </h3>
          <p className="text-sm text-gray-700">
            {advantages[prevIndex].description}
          </p>
        </div>

        <div className="w-full md:w-1/3 bg-[#002B6B] text-white rounded-lg p-6 transition-all duration-700 md:scale-105 md:shadow-lg">
          <h3 className="text-lg font-bold mb-4">
            {advantages[activeSlide - 1].title}
          </h3>
          <p className="text-sm">{advantages[activeSlide - 1].description}</p>
        </div>

        <div className="hidden md:block w-full md:w-1/3 bg-[#EEF4FF] rounded-lg p-6 transition-all duration-700">
          <h3 className="text-lg font-bold mb-4">
            {advantages[nextIndex].title}
          </h3>
          <p className="text-sm text-gray-700">
            {advantages[nextIndex].description}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {advantages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index + 1)}
            className={`w-6 h-1.5 rounded-full transition-all ${
              activeSlide === index + 1 ? "bg-[#002B6B] w-10" : "bg-gray-300"
            }`}
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
        <h1 className="text-3xl font-extrabold text-blue-900 leading-tight uppercase">
        Step Involved in Change of Director
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
