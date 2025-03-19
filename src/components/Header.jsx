import  { useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import logo from "../image/logo.svg"; // Replace with your logo path
import {Link} from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#EBFFF6] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to ="/" className="text-gray-800 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link to="/About" className="text-gray-800 hover:text-green-600 font-medium">
              About Us
            </Link>
            <Link to="/NewArrival" className="text-gray-800 hover:text-green-600 font-medium">
              New Arrival
            </Link>
            <Link to="/offer" className="text-gray-800 hover:text-green-600 font-medium">
              Offer
            </Link>
            <Link to ="/Contact" className="text-gray-800 hover:text-green-600 font-medium">
              Contact Us
            </Link>
          </div>

          {/* Icons Section */}
          <div className="hidden md:flex space-x-4 items-center">
            <button className="p-2 ring-1 ring-green-300 hover:bg-[#1B342F] rounded-full cursor-pointer">
              <FaShoppingCart size={20} className="text-gray-800 hover:text-white" />
            </button>
            <button className="p-2 ring-1 ring-green-300 hover:bg-[#1B342F] rounded-full cursor-pointer">
              <FaUserCircle size={20} className="text-gray-800 hover:text-white"/>
            </button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-green-100 p-4 space-y-2">
            <a href="#home" className="block text-gray-800 hover:text-green-600 font-medium">
              Home
            </a>
            <a href="#about" className="block text-gray-800 hover:text-green-600 font-medium">
              About Us
            </a>
            <a href="#new-arrival" className="block text-gray-800 hover:text-green-600 font-medium">
              New Arrival
            </a>
            <a href="#offer" className="block text-gray-800 hover:text-green-600 font-medium">
              Offer
            </a>
            <a href="#contact" className="block text-gray-800 hover:text-green-600 font-medium">
              Contact Us
            </a>

            {/* Icons in Mobile Menu */}
            <div className="flex space-x-4 mt-4">
              <button className="p-2 ring-1 ring-green-300 hover:bg-[#1B342F] rounded-full cursor-pointer flex items-center justify-center w-full">
                <FaShoppingCart size={20} className="text-gray-800 hover:text-white" />
              </button>
              <button className="p-2 ring-1 ring-green-300 hover:bg-[#1B342F] rounded-full cursor-pointer flex items-center justify-center w-full">
                <FaUserCircle size={20} className="text-gray-800 hover:text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
