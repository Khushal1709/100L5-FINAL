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


const FSSAIRegistration = () => {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const steps = [
    {
      number: "1.",
      days: "DAY 1-2",
      description: [
        "Gathering Essential Documents and Details",
        "Preparing Documents for Authorization",
      ],
    },
    {
      number: "2.",
      days: "DAY 3-4",
      description: [
        "Completing the Registration Forms for FASSI",
        "Paying the Registration Fees",
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
      question: "Who is eligible for FASSI registration?",
      answer:
        "FASSI registration is open to small-scale industries, associations, and entrepreneurs engaged in manufacturing, processing, or other related services that qualify as small-scale enterprises under relevant government regulations.",
    },
    {
      id: 2,
      question: "Is there a registration fee?",
      answer:
        "Yes, there may be a registration fee that varies depending on the type of membership and the size of your business. Please refer to the official FASSI website for detailed fee information.",
    },
    {
      id: 3,
      question: " How long does the registration process take? ",
      answer:
        "The registration process typically takes 1-2 weeks, depending on the completeness of the application and the verification of documents. You will receive an acknowledgment once your application is processed.",
    },
    {
      id: 4,
      question: "Can I renew my FASSI membership?",
      answer:
        "Yes, FASSI memberships are typically valid for one year. You can renew your membership by submitting the renewal form along with any necessary documents and payment.",
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
              Fassi registration
            </h2>
            <p className="font-bold text-white mb-4 tracking-wide uppercase">
              How to Get registration
            </p>
            <p className="mb-2 text-white">
              Team help you in getting FASSI Registration
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

      {/* More about Fassi  */}
      <div className="mb-10 px-3 md:px-6 max-w-7xl mx-auto">
        <div class="flex items-center space-x-4">
          <h1 class="text-lg font-bold text-gray-500 mt-12 uppercase word-spacing">
            OUR COMPANY
          </h1>
          <div class="h-0.5 w-40 bg-gray-500 mt-12"></div>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-blue-900 uppercase ">
          More About Fassi
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Section 1: What is Public Limited Company */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold ml-6 text-blue-900 uppercase">
              What is Fassi?
            </h2>
            <div className="p-3 sm:p-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4">
                The Food Safety and Standards Authority of India (FSSAI) is a
                regulatory body responsible for ensuring food safety under the
                Food Safety and Standards Act, 2006. It issues Food Licenses,
                granting brands the legal permission to sell food products
                within India. FSSAI registration is mandatory for food operators
                involved in manufacturing, processing, storing, distributing,
                and selling food, including businesses like restaurants. The
                FSSAI certification ensures adherence to food quality standards
                and is required before beginning any food-related business in
                India. Once registered, a unique 14-digit registration number is
                assigned, which must be printed on food products.
              </p>
            </div>
          </section>

          {/* Section 2: Why Choose Public Limited Company */}
          <section>
            <h2 className="text-xl md:text-2xl font-extrabold ml-6 text-blue-900 uppercase ">
              Types of FSSAI Licenses:
            </h2>
            <p className="text-sm sm:text-base text-gray-600 ml-6 leading-relaxed space-y-4">
              {" "}
              The type of FSSAI license required depends on the size, type of
              business activity, and annual turnover of the food business. After
              submitting the necessary documents, the application will be
              reviewed by the relevant authority. There are three categories of
              FSSAI licenses:
            </p>
            <div className=" bg-opacity-70 p-6 ">
              <ol className="space-y-4 text-gray-600">
                <li>
                <b>FSSAI Central License :-</b> A Central Food License is issued by
                  the Central Government and applies to businesses operating
                  nationwide. It is required for businesses with an annual
                  turnover exceeding ₹20 crores, including restaurants and large
                  food operators. The license is valid for a minimum of 1 year
                  and can extend up to 5 years.
                </li>

                <li>
                  <b>FSSAI State License :-</b> The FSSAI State License is essential
                  for small to medium-scale businesses operating in a single
                  state. Businesses with an annual turnover between ₹12 lakhs
                  and ₹20 lakhs must obtain this license. This license is issued
                  by the state government where the business is located. The
                  validity period of the license is between 1 and 5 years.
                </li>

                <li>
                <b>FSSAI Basic Registration :-</b> Small businesses with an annual
                  turnover of up to ₹12 lakhs are eligible for an FSSAI Basic
                  Registration. This license is also issued by the state
                  government and is suitable for businesses with minimal
                  turnover. The license is valid for a term of 1 to 5 years.
                </li>
                <li>
                <b>PROCEDURE FOR OBTAINING FSSAI REGISTRATION :-</b> <br />
                The FSSAI registration process begins with submitting an application to the Food Safety and Standards Department.
                </li>
                <li>
                The department will review the application and either accept or reject it within 7 days from the date of submission. The applicant will be notified in writing of the decision.
                </li>
                <li>
                If the application is approved, the department will issue a registration certificate, which includes the registration number and the applicant's photo.
                </li>
                <li>
                The food business operator is required to display the registration certificate prominently at the business location during operating hours.
                </li>
              </ol>
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
          FAQ ON FASSI REGISTRATION
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
          DOCUMENTS REQUIRED FOR FASSI REGISTRATION
        </h1>
      </div>
      <div className="bg-blue-50 p-4 sm:p-8 md:p-12 rounded-lg relative overflow-hidden ">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-blue-900 font-bold text-xl sm:text-2xl ml-6 mb-4 sm:mb-8">
            MINIMUM REQUIREMENT
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4  ml-6 text-sm sm:text-base text-gray-600">
                <li>Identity Proof</li>
                <li>Address Proof</li>
                <li>
                  Partnership Deed / Certificate of Incorporation / MOA & AOA
                </li>
                <li>
                Proof of premises like rental agreement, etc.
                </li>
                <li>Import and export code</li>
                <li>List of Partners and directors</li>
                <li>GST Registration Certificate</li>
                <li>MSME Registration Certificate</li>
              </ol>
              <div className="mt-6 sm:mt-8">
                <p className="text-gray-700 font-medium mb-3 sm:mb-4 ml-6 text-sm sm:text-base">
                  Specific Requirement :
                </p>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-4 text-sm ml-6 sm:text-base text-gray-600">
                  <li>List of products planned </li>
                  <li>Food safety management system plan</li>
                  <li>Supporting Documents (if any) like NOC by Municipality/Panchayat, Health NOC</li>
                  <li>Source of the raw materials</li>
                  <li>Water test reports</li>
                  <li>Equipment list</li>
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


      {/* STEPS SECTION */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mt-12 mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-gray-500  tracking-wider uppercase">
            Steps & Time Duration 
          </h1>
          <div className="h-0.5 w-40 bg-gray-500"></div>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-900 leading-tight">
          STEPS INVOLVED IN
          <br />
           FASSI REGISTRATION
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

export default FSSAIRegistration;
