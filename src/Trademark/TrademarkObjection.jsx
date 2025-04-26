import Company from "../image/Company.svg";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaDownload,
    FaEnvelope,
    FaPhone,
    FaBars,
} from "react-icons/fa";
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
                                { icon: <FaEnvelope />, label: "E-mail" }
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
                        Trademark Objection
                        </h2>
                        <p className="font-bold text-white mb-4 tracking-wide uppercase">
                        Handling of Trademark Objection
                        </p>
                        <p className="text-white">
                        A Trademark Objection occurs when the Trademark Registrar raises concerns about your trademark application during the examination stage. It does not mean rejection, but it indicates that the Registrar needs clarification or finds issues that must be addressed before moving forward.
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

      {/* DOCUMENTS REQUIRED */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-gray-500 mt-12 uppercase tracking-wider">
            OUR COMPANY
          </h1>
          <div className="h-0.5 w-40 bg-gray-500 mt-12"></div>
        </div>
        <h1 className="text-3xl font-extrabold text-blue-900 leading-tight">
          DOCUMENTS REQUIRED
        </h1>

        <div className="bg-blue-50 p-6 rounded-lg mt-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 text-base">
                A Private Limited Company must have a registered office in India. Documents like bank statement or electricity bill should be recent. A utility bill, rent agreement or sale deed and an NOC from the landlord with his / her consent to use the office as a registered office of a company must be submitted as well.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={document || "/placeholder.svg"}
                alt="Document icon"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

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
