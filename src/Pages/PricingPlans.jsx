import React from "react";

const plans = [
  {
    title: "STARTER PLAN :",
    price : "₹14,999.00",
    items: [
      "For Oppose Statement or Counter Statement",
      "For One (1) Class, One (1) Application",
    ],
    highlight: false,
  },
  {
    title: "ENTREPRENEUR :",
    price: "RS.₹25,999.00",
    items: [
      "For Oppose Statement or Counter Statement",
      "For One (1) Class, One (1) Application",
      "Filing of Affidavit in Support of Opposition or Application",
    ],
    highlight: true, 
  },
  {
    title: "CORPORATE:",
    price: "RS.₹34,999.00",
    items: [
      "For Oppose Statement or Counter Statement",
      "For One (1) Class, One (1) Application",
      "Filing of Affidavit in Support of Opposition or Application",
      "Hearing for the Opposition or Application",
    ],
    highlight: false,
  },
];

function PricingPlans() {
  return (
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
            className={`flex flex-col items-start text-left rounded-xl shadow min-w-[320px] max-w-[350px] w-full px-6 py-8 ${
              plan.highlight
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
              className={`mb-6 space-y-2 text-sm ${
                plan.highlight ? "text-white" : "text-[#002D6B]"
              }`}
            >
              {plan.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <button
              className={`mt-auto w-full py-3 rounded font-bold text-base ${
                plan.highlight
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
  );
}

export default PricingPlans;
