import React from "react";
import left from "../image/left.svg";
import right from "../image/right.svg";
import a1 from "../image/a1.svg";
import a2 from "../image/a2.svg";
import a3 from "../image/a3.svg";
import a4 from "../image/a4.svg";


const StatsSection = () => {
  const stats = [
    {
      icon: a1,
      // number: "846+",
      label: "LINES OF CODES",
    },
    {
      icon: a2,
      // number: "15360+",
      label: "KBS OF HTML FILES",
    },
    {
      icon: a3,
      // number: "408+",
      label: "NO. OF TEMPLATES",
    },
    {
      icon: a4,
      // number: "1200+",
      label: "HOURS OF CODING",
    },
  ];

  return (
    <div className="relative bg-[#f1f7ff] py-16 px-4 sm:px-6  lg:px-8">
      <img
        src={left}
        alt="left background"
        className="absolute top-0 left-0 w-40 sm:w-56 md:w-72 opacity-50"
      />
      <img
        src={right}
        alt="right background"
        className="absolute top-0 right-0 w-40 sm:w-56 md:w-72 opacity-50"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center space-y-3"
          >
            <img src={stat.icon} className="text-4xl bg-[#f1f7ff]">
            
            </img>
            {/* <div className="text-3xl font-bold text-[#003366]">{stat.number}</div> */}
            <div className="text-xl text-[#003366] font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;