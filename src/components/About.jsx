import React from "react";
import { CheckCircle } from "lucide-react";
import About from "../image/About.svg";
import { User, Mail, Phone, MessageSquare, MapPin } from "lucide-react"
import Header from "../components/Header";
import Footer from "../components/Footer";

const KrishnaGrace = () => {
  return (
    <>
    <Header/> 
    <div className="bg-[#EBFFF6] py-10 px-4 md:px-10">
    <div className="md:max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={About}
          alt="Krishna's Grace"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-[#1B342F] text-lg md:text-xl font-semibold">
          Who We Are
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">
          Krishna's Grace, Timeless Divine Beauty!
        </h2>
        <p className="text-[#1B342F] text-base md:text-lg mt-4 text-justify">
          Experience the divine charm and timeless elegance of the Sri Krishna Collection—where 
          spirituality meets artistry. Inspired by the essence of Lord Krishna, each piece in our 
          collection is a tribute to devotion, grace, and tradition.
        </p>
        <p className="text-[#1B342F] text-base md:text-lg mt-4 text-justify">
          Our designs reflect the beauty of Indian heritage, blending exquisite craftsmanship 
          with intricate details that resonate with the soulful presence of Sri Krishna. Whether 
          it’s jewelry, clothing, or decor, every creation is infused with devotion and a deep 
          connection to divine aesthetics.
        </p>

        {/* Bullet Points */}
        <div className="mt-6 space-y-3">
          {[
            "Timeless Elegance, Divine Inspiration",
            "Graceful Craftsmanship, Spiritual Essence",
            "Celebrate Tradition with Sri Krishna’s Charm",
          ].map((item, index) => (
            <div key={index} className="flex items-center text-[#1B342F] text-base md:text-lg">
              <CheckCircle className="h-5 w-5 text-[#1a3b39] mr-2" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
      <br></br>
      <br></br>
      <div className="flex flex-col md:flex-row w-full  absoulate">
                {/* Left side - Form */}
                <div className="flex-[2] h-200 bg-[#EBFFF6] p-6 md:p-12">
                    <div className="max-w-md mx-auto mr-150">
                        <div className="text-center mb-8">
                            <h2 className="text-gray-800 text-lg font-medium ">Contact</h2>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Connect With Us Today!</h1>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-3 flex items-center">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="fullName"
                                        placeholder="Enter Your Full Name"
                                        className="pl-10 w-200 ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none focus:ring-2 focus:ring-[#74B6A9] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter Your Gmail Address"
                                        className="pl-10 w-200 ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none focus:ring-2 focus:ring-[#74B6A9] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                    Mobile Number
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        placeholder="Enter Your Mobile Number"
                                        className="pl-10 w-200 ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none focus:ring-2 focus:ring-[#74B6A9] focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Send Message
                                </label>
                                <div className="relative">
                                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                        <MessageSquare className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Send Your message"
                                        className="pl-10 w-200 ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none focus:ring-2 focus:ring-[#74B6A9] focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                {/* Right side - Contact Info */}
                <div className="flex-1 bg-[#1a3b39] h-200 md:p-15 flex items-center justify-center relative">
                    <div className="bg-[#EBFFF6] mt-10 ring-1 ring-[#74B6A9] p-9 max-w-sm w-full absolute mr-150">
                        <div className="space-y-7">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1a3b39] rounded-full p-2 flex items-center justify-center">
                                    <Mail className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Address</p>
                                    <p className="font-medium">xyztechnology04@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#1a3b39] rounded-full p-2 flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone Number</p>
                                    <p className="font-medium">+91 83000 00042</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#1a3b39] rounded-full p-2 flex items-center justify-center">
                                    <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">B-8, 210, Township-2 Sarthana Jakatnaka, Surat Gujarat 395008</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <Footer/>
    </>
  );
};

export default KrishnaGrace;
