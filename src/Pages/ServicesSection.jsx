import React, { useRef, useEffect, useState } from "react";
import cur from "../image/cur.svg";
import round from "../image/round.svg";
import men2 from "../image/men2.png";

const servicesData = [
  {
    id: 1,
    title: "PRIVATE LIMITED COMPANY",
    packageText: "Packages Starting From",
    price: "₹ 6999/-",
    priceNote: "(All Inclusive)",
    buttonText: "KNOW MORE",
  },
  {
    id: 2,
    title: "GST RETURNS",
    packageText: "Packages Starting From",
    price: "₹ 499/-",
    priceNote: "(All Inclusive)",
    buttonText: "KNOW MORE",
  },
  {
    id: 3,
    title: "IEC REGISTRATION",
    packageText: "Packages Starting From",
    price: "₹ 2899/-",
    priceNote: "(All Inclusive)",
    buttonText: "KNOW MORE",
  },
  {
    id: 4,
    title: "IEC REGISTRATION",
    packageText: "Packages Starting From",
    price: "₹ 2899/-",
    priceNote: "(All Inclusive)",
    buttonText: "KNOW MORE",
  },
];

function ServicesSection() {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIdx, setActiveIdx] = useState(servicesData.length - 1); // Start at last card

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !cardRefs.current[activeIdx]) return;

    const card = cardRefs.current[activeIdx];
    const containerWidth = scrollContainer.offsetWidth;
    const cardWidth = card.offsetWidth;
    const cardLeft = card.offsetLeft;

    // Center the active card
    scrollContainer.scrollTo({
      left: cardLeft - (containerWidth - cardWidth) / 2,
      behavior: "smooth",
    });

    // Auto-scroll from right to left
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [activeIdx]);

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="relative flex flex-col items-start mb-10">
          <img
            src={round}
            alt=""
            className="absolute left-0 top-0 w-20 h-20 sm:w-24 sm:h-24 opacity-10 pointer-events-none select-none"
          />
          <div className="flex items-center mb-1">
            <span className="text-gray-400 font-bold uppercase tracking-wider text-xs sm:text-sm mr-2">
              POPULAR SERVICE
            </span>
            <span className="block w-16 sm:w-24 h-px bg-gray-300"></span>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#002C6D] tracking-wide">
            POPULAR SERVICE
          </h1>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden scroll-smooth no-scrollbar snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {servicesData.map((card, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                className={`relative min-w-[280px] sm:min-w-[320px] max-w-xs rounded-lg shadow-md overflow-hidden flex-shrink-0 transition-transform duration-300 snap-center
                  ${isActive ? "bg-[#002C6D] scale-105" : "bg-[#EDF4FF] scale-100"}
                `}
                style={{ height: "340px" }}
              >
                {/* Decorative image */}
                <img
                  src={cur}
                  alt=""
                  className="absolute top-0 right-0 h-full object-cover"
                  style={{ width: "50%" }}
                />

                {/* Faded circle background inside card */}
                <img
                  src={round}
                  alt=""
                  className="absolute top-4 right-4 w-20 h-20 sm:w-24 sm:h-24 opacity-10 pointer-events-none select-none"
                />

                <div className="p-6 sm:p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-extrabold uppercase tracking-wide ${
                        isActive ? "text-white" : "text-[#002C6D]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-gray-600 text-xs sm:text-sm ${
                        isActive ? "text-blue-100" : ""
                      }`}
                    >
                      {card.packageText}
                    </p>
                    <div
                      className={`text-xl sm:text-2xl font-bold ${
                        isActive ? "text-white" : "text-[#002C6D]"
                      }`}
                    >
                      {card.price}
                      <span
                        className={`text-xs sm:text-sm font-normal ml-1 ${
                          isActive ? "text-blue-100" : "text-gray-600"
                        }`}
                      >
                        {card.priceNote}
                      </span>
                    </div>
                  </div>
                  <button
                    className={`w-full rounded py-2 sm:py-3 font-bold transition ${
                      isActive
                        ? "bg-white text-[#002C6D] hover:bg-blue-100"
                        : "bg-[#002C6D] text-white hover:bg-blue-900"
                    }`}
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section with Image and Content */}
        <div className="flex flex-col md:flex-row mt-12 md:mt-16 gap-8 md:gap-12">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto">
            <img
              src={men2}
              alt="Instructor"
              className="w-full h-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-2 sm:px-6 md:px-0">
            <p className="text-gray-600 uppercase tracking-wider text-xs sm:text-sm font-medium mb-2">
              Teach what you love
            </p>
            <div className="w-16 h-0.5 bg-gray-300 mb-4"></div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002C6D] mb-5 leading-tight">
              BECOME AN <br className="hidden sm:block" />
              INSTRUCTOR!
            </h2>

            <p className="text-gray-600 mb-3 text-sm sm:text-base">
              Monotonectally conceptualize covalent strategic theme areas and
              cross-unit deliverables.
            </p>

            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Consectetur adipisicing elit. Voluptate incidunt dolorum perferendis
              accusamus nesciunt et est consequuntur placeat, dolor quia.
            </p>

            <button className="bg-[#002C6D] text-white font-bold py-3 px-8 rounded w-fit transition duration-200 hover:bg-blue-800">
              START TEACHING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
