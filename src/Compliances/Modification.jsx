import com from "../image/com.svg";
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
            "Collection of Basic Documents and Information's",
            "Application for Digital Signature Certificate (DSC)"
          ]
        },
        {
          number: "2.",
          days: "DAY 3-4",
          description: [
            "Search Proposed Company Name Availability.",
            "Draft Required Documents for registration of Company."
          ]
        },
        {
          number: "3.",
          days: "DAY 4-6",
          description: [
            "Application for Name Reservation",
            "Filing a Forms for Registration of the Company."
          ]
        },
        {
          number: "4.",
          days: "DAY 7-8",
          description: [
            "Getting a Incorporation Certificate (Registration Certificate)",
            "Getting PAN, PF, ESIC, TAN Number"
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
            question: "How Do I Become An Author?",
            answer:
                "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Assumenda, Dolorum, Vero Ipsum Molestiae Minima Odio Quo Voluptate Illum Excepturi Quam Cum Voluptates Doloribus Quae Nisi Tempore Necessitatibus Dolores Ducimus Enim Libero Eaque Explicabo Suscipit Animi At Quaerat Aliquid Ex Expedita Perspiciatis? Saepe, Aperiam, Nam Unde Quas Beatae Vero Vitae Nulla."
        },
        {
            id: 2,
            question: "Helpful Resources For Authors",
            answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis nesciunt tempore quibusdam repellat excepturi quisquam ut minima quidem voluptatem."
        },
        {
            id: 3,
            question: "How Much Money Can I Make?",
            answer:
                "The income potential varies widely depending on factors like genre, publishing method, marketing efforts, and audience size. Self-published authors typically earn 70% of royalties through platforms like Amazon KDP, while traditionally published authors may receive 10-15% royalties but benefit from publisher support."
        },
        {
            id: 4,
            question: "How Do I Become An Author?",
            answer:
                "Start by developing your writing skills through practice and education. Choose your genre and publishing path (traditional or self-publishing). For traditional publishing, you'll need to query agents or publishers. For self-publishing, platforms like Amazon KDP, IngramSpark, or Draft2Digital can help you publish your work."
        },
        {
            id: 5,
            question: "Helpful Resources For Authors",
            answer:
                "Consider joining writing communities like Scribophile or Critique Circle, using tools such as Grammarly or ProWritingAid, and exploring courses on platforms like MasterClass or Udemy. Books like 'On Writing' by Stephen King and 'Bird by Bird' by Anne Lamott are also valuable resources."
        }
    ]
    // Calculate previous and next indices
    const prevIndex = activeSlide === 1 ? advantages.length - 1 : activeSlide - 2
    const nextIndex = activeSlide === advantages.length ? 0 : activeSlide
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
            <PricingPlans />
            <PublicLimitedCompany />
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
