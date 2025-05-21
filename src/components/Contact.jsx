import React from "react";
import explore from "../image/explore.svg";
import finder from "../image/finder.svg";
import Contact from "../image/contact.svg";
import Support from "../Pages/Support"; // Import the Support component


const ContactSection = () => {
    return (
        <div className="max-w-7xl mx-auto bg-white">
            {/* Top Contact Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-20">
                {/* Text Content */}
                <div className="max-w-xl space-y-6">
                    <h1 className="text-4xl font-david font-bold text-[#14143B]">Contact us</h1>
                    <p className="text-gray-500">
                        You can contact via email for your issues related with 10015.io. You can give feedback about current tools or suggest new tools that you want to see on 10015 Tools.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 flex-wrap">
                        <div className="relative inline-flex items-center">
                            <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-8 py-2 rounded-full shadow-md">
                                EXPLORE TOOL
                            </button>
                            <img
                                src={explore} // Replace with your arrow icon path
                                alt="Arrow Icon"
                                className="absolute right-[-10px] w-6 h-6"
                            />
                        </div>

                        <div className="relative inline-flex items-center">
                            <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-6 py-2 rounded-full shadow-md">
                                PRODUCT FINDER
                            </button>
                            <img
                                src={finder} // Replace with your search icon path
                                alt="Finder Icon"
                                className="absolute -top-1 -right-2 w-6 h-6 transition-transform duration-300 transform hover:scale-150"
                            />
                        </div>
                    </div>


                    {/* Login/Register */}
                    <div className="space-y-2 items-center justify-center mx-auto flex flex-col lg:flex-col gap-4">
                        <button className="bg-gray-100 px-6 py-2 rounded-full text-gray-600 font-medium mr-42 ">
                            Login / Register
                        </button>
                        <div className="text-red-500 font-semibold cursor-pointer hover:underline mr-42">Sign In</div>
                    </div>
                </div>

                {/* Image */}
                <div className="mt-10 lg:mt-0">
                    <img
                        src={Contact}
                        alt="Phone Illustration"
                        className="w-80 max-w-full"
                    />
                </div>
            </div>

         <Support/>

        </div>
    );
};

export default ContactSection;
