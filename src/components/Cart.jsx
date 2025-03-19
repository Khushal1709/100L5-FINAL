import React, { useState } from "react";
import Cart from "../image/Cart.svg";
import { User, Mail, Phone, MessageSquare, MapPin } from "lucide-react"
import pro from "../image/pro.svg";


const App = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Krishna's Grace",
      description: "Immerse in Krishna's grace with our timeless collection, blending.",
      price: 1200,
      image: Cart,
      quantity: 1,
    },
    {
      id: 2,
      name: "Krishna's Grace",
      description: "Immerse in Krishna's grace with our timeless collection, blending.",
      price: 1200,
      image: Cart,
      quantity: 1,
    },
    {
      id: 3,
      name: "Krishna's Grace",
      description: "Immerse in Krishna's grace with our timeless collection, blending.",
      price: 1200,
      image: Cart,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const product = [
    {
      id: 1,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },
    {
      id: 2,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },
    {
      id: 3,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },
    {
      id: 4,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },
    {
      id: 5,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },
    {
      id: 6 ,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },
    {
      id: 6 ,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },
    {
      id: 6 ,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },


  ];

  return (
    <div className="bg-[#EBFFF6] min-h-screen p-4 md:p-6 lg:p-10 xl:p-12">
      {/* Breadcrumb */}
      <div className="text-gray-600 text-lg md:text-2xl lg:text-2xl xl:text-3xl mb-4">Home / Cart</div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
        <div className="lg:col-span-8 xl:col-span-9">
          <div className="flex justify-between">
            <h2 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl mb-4">Product</h2>
            <h2 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl mb-4">Price</h2>
          </div>
          <hr className="my-2 text-[#1B342F] " />
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-[#EBFFF6] p-4 rounded-lg mb-4 space-x-5"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded mb-2 sm:mb-0"
              />
              <div className="flex-grow sm:ml-4 text-center sm:text-left">
                <h3 className="text-2xl text-[#1B342F] font-semibold">{item.name}</h3>
                <p className="text-[#1B342F] text-lg">{item.description}</p>
              </div>
              <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="w-10 h-10 flex items-center justify-center bg-[#1B342F] text-white rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, +1)}
                  className="w-10 h-10 flex items-center justify-center bg-[#1B342F] text-white rounded"
                >
                  +
                </button>
              </div>
              <div className="text-lg font-semibold sm:ml-4">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4 xl:col-span-3 bg-[#EBFFF6] p-6 h-80 w-full ring-1 ring-[#74B6A9] rounded-lg ml-0 md:ml-4 lg:ml-6 xl:ml-8">
          <h2 className="text-lg font-bold mb-4">Total Amount</h2>
          <div className="flex justify-between mb-2 space-y-2">
            <span>Total MRP</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 space-y-2">
            <span>Discount</span>
            <span>₹0.00</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg space-y-2">
            <span>Total MRP</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 bg-[#1B342F] text-white py-2 rounded hover:bg-[#143026] space-y-2">
            Buy Now
          </button>
        </div>
      </div>

      {/* Recommended Products Section */}
      <h3 className="mt-8 text-lg font-bold md:text-2xl lg:text-2xl xl:text-3xl">Recommended Product</h3>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 py-19">
        {product.map((products) => (
          <div
            key={products.id}
            className="ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none rounded-lg shadow-md  p-4"
          >
            {/* Product Image */}
            <img
              src={products.image}
              alt={products.title}
              className="rounded-lg w-full h-auto mb-4"
            />

            {/* Product Details */}
            <h3 className="text-lg font-semibold">{products.title}</h3>
            <p className="text-xl font-bold mt-2">{products.price}</p>
            <p className="text-sm text-gray-600">{products.description}</p>


            {/* Rating */}
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="ml-1 text-sm">{products.rating} ({products.reviews})</span>
            </div>
          </div>
        ))}
      </div>
        <div className="flex flex-col md:flex-row w-full  absoulate">
                     {/* Left side - Form */}
                     <div className="flex-[2] h-200 bg-[#e8f7f2] p-6 md:p-12">
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

export default App;
