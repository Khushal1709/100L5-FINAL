import React from "react";
import Single from "../image/Single.svg";
import { FaShoppingCart } from "react-icons/fa";
import pro from "../image/pro.svg";
import user2 from "../image/user2.svg";
import { User, Mail, Phone, MessageSquare, MapPin } from "lucide-react"
import Header from "../components/Header";
import Footer from "../components/Footer";


function ProductPage() {
  const product = {
    title: "Krishna's Grace, Timeless Divine Beauty!",
    price: 980,
    originalPrice: 1960,
    colors: ["#8FBC8F", "#654321", "#A52A2A"],
    sizes: [1, 11],
    image: Single,
    rating: 4.8,
    reviews: 41,
    description:
      "Sara and I absolutely loved our stay at Motel Mirambeena! The swimming pool was a great way to unwind, the dinner was fantastic, and the rooms were the best we've experienced. Highly recommend for a perfect getaway in Australia!",
  };

  const products = [
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
      id: 6,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },
    {
      id: 7,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },
    {
      id: 8,
      title: "Krishna's Grace",
      price: "₹1200.00",
      description:
        "Immerse in Krishna's grace with our timeless collection, blending",
      rating: 4.5,
      reviews: 76,
      image: pro
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Nikita Yadav",
      review:
        "Sara And I Absolutely Loved Our Stay At Motel Mirambeena! The Swimming Pool Was A Great Way To Unwind, The Dinner Was Fantastic, And The Rooms Were The Best We've Experienced. Highly Recommend For A Perfect Getaway In Australia!",
      rating: 5,
      images: [user2],
    },
    {
      id: 2,
      name: "Nikita Yadav",
      review:
        "Sara And I Absolutely Loved Our Stay At Motel Mirambeena! The Swimming Pool Was A Great Way To Unwind, The Dinner Was Fantastic, And The Rooms Were The Best We've Experienced. Highly Recommend For A Perfect Getaway In Australia!",
      rating: 5,
      images: [user2],
    },
  ];

  return (
    <>
    <Header/>
    <div className="bg-[#e8f7f2] p-6">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-19">
        {/* Product Image */}
        <div>
          <img src={product.image} alt={product.title} className="rounded-lg shadow-md w-full" />
          {/* Image Carousel */}
          <div className="flex mt-4 space-x-2">
            {[product.image, product.image, product.image].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-70 h-70 rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="ring-1 ring-[#74B6A9] p-6">
          <div className="flex items-center space-x-3">
            <span className="text-yellow-500 text-xl">★★★★★ {product.rating}</span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>
          <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
          {/* Price */}
          <p className="mt-4 text-lg font-semibold ">
            <span className="text-red-500">₹{product.price}</span>
            <span className="ml-2 line-through text-gray-500">₹{product.originalPrice}</span>
          </p>

          {/* Description */}
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="font-semibold">Select Color:</h3>
            <div className="flex space-x-2 mt-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
                ></div>
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="mt-6">
            <h3 className="font-semibold">Select Your Size:</h3>
            <div className="flex space-x-4 mt-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="flex-1 py-3 bg-[#1B342F] text-white rounded-md cursor-pointer text-center">
              Buy Now
            </button>
            <button className="flex-1 py-3 bg-[#1B342F] text-white rounded-md flex items-center justify-center space-x-2 cursor-pointer">
              <FaShoppingCart size={20} className="text-white" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      {/* Products Grid */}
      <h2 className="text-[#1B342F] text-2xl px-19">Recommand Product </h2>
      <h2 className='text-[#1B342F] text-4xl mb-6 font-bold px-19'>Krishna's Grace, Timeless Divine Beauty!</h2>
      <div className="px-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none rounded-lg shadow-md p-4"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg w-full h-auto mb-4"
            />

            {/* Product Details */}
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-xl font-bold">{product.price}</p>
            </div>
            <br></br>
            <p className="text-sm text-gray-600">{product.description}</p>


            {/* Rating */}
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="ml-1 text-sm">{product.rating} ({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#e8f7f2] p-6 px-19 ">
        <h2 className="text-2xl font-semibold mb-4 text-[#1B342F] ">User Review</h2>
        <div className="flex justify-center  mb-2 p-4 ring-1 ring-[#74B6A9] mr-[70%] rounded">
          <span className="text-yellow-400 text-2xl">★</span>
          <span className="text-xl font-bold ml-2">4.7</span>
          <span className="text-sm ml-1">(23 Reviews)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className=" p-4 rounded p-4 ring-1 ring-[#74B6A9] mr-[3%]">

            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center mb-1">
                <span className="text-sm w-6">{star} ★</span>
                <div className="flex-1 bg-gray-200 h-2 ml-2">
                  <div className="bg-gray-600 h-2 w-2/3"></div>
                </div>
                <span className="text-xs ml-2">12</span>
              </div>
            ))}
          </div>
          <div className="col-span-2 space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-lg p-6 bg-[#EAF8F5] shadow-md ring-1 ring-[#74B6A9]"
              >
                {/* Reviewer Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={user2}
                      alt={`${review.name}'s avatar`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-lg text-gray-800">{review.name}</p>
                      <span className="text-blue-500 text-sm cursor-pointer">Verify</span>
                    </div>
                  </div>
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>

                {/* Review Images */}
                {review.images?.length > 0 && (
                  <div className="flex space-x-4 mb-4">
                    {review.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={pro}
                        alt={`Review Image ${idx + 1}`}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                    ))}
                  </div>
                )}

                {/* Review Text */}
                <p className="text-gray-700 text-base leading-relaxed">
                  {`"${review.review}"`}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* Products Grid */}
      <h2 className="text-[#1B342F] text-2xl px-19">Similar Product </h2>
      <h2 className='text-[#1B342F] text-4xl mb-6 font-bold px-19'>Krishna's Grace, Timeless Divine Beauty!</h2>
      <div className="px-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="ring-1 ring-[#74B6A9] bg-[#EBFFF6] py-3 px-4 outline-none rounded-lg shadow-md p-4"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg w-full h-auto mb-4"
            />

            {/* Product Details */}
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-xl font-bold">{product.price}</p>
            </div>
            <br></br>
            <p className="text-sm text-gray-600">{product.description}</p>


            {/* Rating */}
            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="ml-1 text-sm">{product.rating} ({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      <br></br>
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
    <Footer/>
    </>
  );
}

export default ProductPage;
