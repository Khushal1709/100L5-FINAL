import React, { useState } from "react";
import Check from "../image/Check.svg";
import Header from "../components/Header";
;import Footer from "../components/Footer";

const Checkout = () => {
  const [quantities, setQuantities] = useState([1, 1]);

  const handleQuantityChange = (index, delta) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(1, newQuantities[index] + delta);
      return newQuantities;
    });
  };

  return (
    <>
    <Header/>
    <div className="bg-[#EBFFF6] p-15 flex justify-center">
      <div className="w-full max-w-9xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section - Contact & Shipping Information */}
        <div className="lg:col-span-2 bg-[#EBFFF6] p-6 ring-1 ring-[#74B6A9] rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input type="email" placeholder="Email Address" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
            <input type="tel" placeholder="Phone Number" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
          </div>
          
          <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
            <input type="text" placeholder="Last Name" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
            <input type="text" placeholder="Address Line 1" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
            <input type="text" placeholder="Apt, Suit" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
          </div>
          <div className="py-3">
            <input type="text" placeholder="Address Line 2" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Country" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
            <input type="text" placeholder="Pin Code" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
            <input type="text" placeholder="State" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
            <input type="text" placeholder="City" className="ring-1 ring-[#74B6A9] outline-none p-3 rounded w-full" />
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="bg-[#EBFFF6] ring-1 ring-[#74B6A9] p-6 rounded-lg">
          <div className="space-y-4 border-b pb-4">
            {[1, 2].map((item, index) => (
              <div key={index} className="flex items-center gap-4 flex-wrap">
                <img src={Check} alt="Product" className="w-16 h-16 rounded" />
                <div className="flex-1 min-w-[100px]">
                  <p className="font-semibold">Krishna's Grace</p>
                  <p className="line-through text-sm text-gray-500">₹2000</p>
                  <p className="text-lg font-bold">₹1200</p>
                </div>
                <div className="flex items-center border rounded w-24 justify-between">
                  <button className="px-3 py-1" onClick={() => handleQuantityChange(index, -1)}>-</button>
                  <span className="px-2">{quantities[index]}</span>
                  <button className="px-3 py-1" onClick={() => handleQuantityChange(index, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Pricing */}
          <div className="mt-4 space-y-2">
            <p className="font-bold text-lg">Order Summary</p>
            <div className="flex justify-between text-lg">
              <p>Total MRP</p>
              <p>₹{quantities.reduce((total, qty) => total + qty * 1200, 0)}</p>
            </div>
            <div className="flex justify-between text-lg">
              <p>Discount</p>
              <p>₹00.00</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <p>Total MRP</p>
              <p>₹{quantities.reduce((total, qty) => total + qty * 1200, 0)}</p>
            </div>
          </div>

          {/* Buy Now Button */}
          <button className="w-full bg-[#1B342F] text-white py-3 rounded mt-4 hover:bg-[#163028] transition">Buy Now</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;