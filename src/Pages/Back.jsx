import React, { useState } from "react";
import background from "../image/background.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaDownload, FaEnvelope, FaBars, FaPhone } from 'react-icons/fa';

export default function Back() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

  // Toggle the social menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setIsPhoneOpen(false); // Close phone if opening menu
  };

  // Toggle the phone section
  const togglePhone = () => {
    setIsPhoneOpen(!isPhoneOpen);
    if (!isPhoneOpen) setIsMenuOpen(false); // Close menu if opening phone
  };

  return (
    <div
      className="relative  w-full  py-16 flex justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Left Content */}
      <div className="relative z-10  ml-8 md:ml-80 text-white">
        <div className="mb-2 font-bold text-gray-200 tracking-widest text-lg">WELCOME TO</div>
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
          REGISTER YOUR<br />
          COMPANY IN<br />
          JUST 1 MIN
        </h1>
        <p className="mb-6 text-base md:text-lg text-gray-200 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded transition">
          CONTACT US
        </button>
      </div>

      {/* Right Side - Social Media Links */}
      <div className="relative z-10 ml-auto mr-4 flex flex-col items-end gap-2">
        {/* Toggle Buttons */}
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

        {/* Social Media Menu */}
        <div
          className={`absolute bottom-20 right-4 sm:right-8 md:right-12 lg:right-16 mt-4 bg-blue-50 rounded-md shadow-lg overflow-hidden transition-all duration-300
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

        {/* Phone Section */}
        <div
          className={`absolute bottom-4 right-4 sm:right-6 md:right-8 lg:right-12 bg-blue-50 rounded-md shadow-lg overflow-hidden transition-all duration-300
        ${isPhoneOpen ? "block w-64 sm:w-80" : "hidden"}
      `}
          style={{ zIndex: 9999 }}
        >
          <div className="px-4 py-3 flex items-center gap-4 rounded-md">
            <div className="top-10">
            <span className="bg-[#002C6D] w-10 h-10 flex items-center justify-center rounded-md">
              <FaPhone className="text-white" size={16} />
            </span>
            <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium select-text">
              +91 56560 56562
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}
