import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../image/logo.svg"; // Replace with your logo path

const Footer = () => {
    return (
        <footer className="bg-[#EBFFF6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Logo and Navigation Links */}
                <div className="md:flex-row justify-between items-center">
                    <div className="md:flex md:items-center md:justify-center">
                        <img src={logo} alt="Logo" className="h-16 w-auto md:items-center md:justify-center" />
                    </div>
                    <br></br>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
                        <a href="#home" className="text-gray-800 hover:text-green-600 font-medium">
                            Home
                        </a>
                        <a href="#about" className="text-gray-800 hover:text-green-600 font-medium">
                            About Us
                        </a>
                        <a href="#category" className="text-gray-800 hover:text-green-600 font-medium">
                            Category
                        </a>
                        <a href="#new-arrival" className="text-gray-800 hover:text-green-600 font-medium">
                            New Arrival
                        </a>
                        <a href="#offer" className="text-gray-800 hover:text-green-600 font-medium">
                            Offer
                        </a>
                        <a href="#contact" className="text-gray-800 hover:text-green-600 font-medium">
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Copyright and Social Media Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                    {/* Copyright Text */}
                    <div className="text-center text-gray-600 text-sm md:text-left md:w-1/2">
                        &copy; 2025 All rights reserved by Kanha Collection
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
                        <button className="p-3 bg-green-700 text-white rounded-full shadow hover:bg-green-600">
                            <FaInstagram size={20} />
                        </button>
                        <button className="p-3 bg-green-700 text-white rounded-full shadow hover:bg-green-600">
                            <FaFacebook size={20} />
                        </button>
                        <button className="p-3 bg-green-700 text-white rounded-full shadow hover:bg-green-600">
                            <FaLinkedin size={20} />
                        </button>
                        <button className="p-3 bg-green-700 text-white rounded-full shadow hover:bg-green-600">
                            <FaTwitter size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
 