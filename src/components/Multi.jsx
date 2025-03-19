import React, { useState } from "react";
import pro from "../image/pro.svg";
import { User, MessageSquare, Mail, Phone, MapPin } from "lucide-react";
import { IconButton } from "@material-tailwind/react";

const products = [
  {
    id: 1,
    title: "Krishna's Grace",
    price: 1200,
    description:
      "Immerse in Krishna's grace with our timeless collection, blending",
    rating: 4.5,
    reviews: 76,
    image: pro,
  },
  {
    id: 2,
    title: "Krishna's Grace",
    price: 1700,
    description:
      "Immerse in Krishna's grace with our timeless collection, blending",
    rating: 4.5,
    reviews: 76,
    image: pro,
  },
  {
    id: 3,
    title: "Krishna's Grace",
    price: 1600,
    description:
      "Immerse in Krishna's grace with our timeless collection, blending",
    rating: 4.5,
    reviews: 76,
    image: pro,
  },
  {
    id: 4,
    title: "Krishna's Grace",
    price: 1800,
    description:
      "Immerse in Krishna's grace with our timeless collection, blending",
    rating: 4.5,
    reviews: 76,
    image: pro,
  },
  {
    id: 5,
    title: "Krishna's Grace",
    price: 1300,
    description:
      "Immerse in Krishna's grace with our timeless collection, blending",
    rating: 4.5,
    reviews: 76,
    image: pro,
  },
  {
    id: 6,
    title: "Krishna's Grace",
    price: 1500,
    description:
      "Immerse in Krishna's grace with our timeless collection, blending",
    rating: 4.5,
    reviews: 76,
    image: pro,
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-[#EBFFF6]">
    <div className="ring-1 ring-[#74B6A9] p-4 bg-[#EBFFF6] rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto mb-2 md:mb-4 rounded"
      />
      <div className="flex justify-between items-center">
        <h3 className="text-[#1B342F] text-base md:text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-700 md:text-xl font-bold">₹{product.price}</p>
      </div>
      <p className="text-sm text-[#1B342F]">{product.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-yellow-500 text-base md:text-lg">★★★★★</span>
        <span className="text-[#1B342F] text-sm">{product.rating} ({product.reviews})</span>
      </div>
    </div>
  </div>
);

const ProductList = () => {
  const [price, setPrice] = useState(2000);

  const filteredProducts = products.filter((product) => product.price <= price);

  return (
    <div className="bg-[#EBFFF6] p-4 md:p-8 min-h-screen">
        
      <h1 className="text-xl md:text-2xl text-[#1B342F] mb-4 px-2 md:px-19">Home/Dress(Vagha)</h1>
      <div className="flex">
      <h1 className="text-2xl md:text-3xl font-bold text-[#1B342F] mb-4 px-2 md:px-19">Krishna's Grace, Timeless Divine Beauty!</h1>
       {/* Filter Icon */}
       <IconButton variant="text" className="rounded-full ml-200 ">
        <i className="fas fa-filter text-gray-800 h-20 w-20"></i>
      </IconButton>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:px-19">
        <div className="md:w-1/4 p-4 ring-1 ring-[#74B6A9] bg-[#EBFFF] h-[10%] mb-4 md:mb-0 md:ml-6 rounded-lg md:order-2">
          <h2 className="font-bold text-lg">Price</h2>
          <input
            type="range"
            min="1200"
            max="2000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full mt-2 accent-[#1B342F] bg-[#EBFFF6]"
          />
          <div className="flex justify-between text-base mt-2 text-[#1B342F] font-bold">
            <span>Min ₹1200</span>
            <span>Max ₹{price}</span>
          </div>
        </div>
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:order-1">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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
  );
};

export default ProductList;
