import React from 'react';
import logos from "../image/logos.svg";

const TrustedSection = () => (
  <section className="py-8 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-gray-400 font-semibold tracking-wider text-sm mb-2">
        TRUST OUR COMPANIES
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
        TRUSTED BY LEADING<br />CORPORATES
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 my-10 ">
        <img src={logos} alt="logos" className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto" />
      </div>
      <div className="bg-[#002C6D] text-white rounded-lg py-10 px-6 md:px-20 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          REGISTER YOUR COMPANY IN<br />JUST 1 MIN
        </h2>
        <button className="mt-4 bg-white text-blue-900 font-semibold rounded-md px-8 py-3 hover:bg-blue-100 transition">
          CONTACT US
        </button>
      </div>
    </div>
  </section>
);

export default TrustedSection;
