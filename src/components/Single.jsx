import React from "react";
import Single from "../image/Single.svg";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

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

  return (
    <div className="bg-green-50 p-6 px-19">
      <div className="m mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg shadow-md w-full"
          />
          {/* Image Carousel */}
          <div className="flex mt-4 space-x-2">
            {[product.image, product.image, product.image].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 rounded-lg cursor-pointer border border-gray-200"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="ring-1 ring-[#74B6A9] h-150 p-6">
          <div className="flex items-center mt-2 space-y-3">
            {/* Rating */}
            <span className="text-yellow-500 text-xl">★★★★★ {product.rating}</span>
            <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
          </div>
          <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
          {/* Price */}
          <p className="mt-4 text-lg font-semibold">
            <span className="text-red-500">₹{product.price}</span>{" "}
            <span className="line-through text-gray-500">₹{product.originalPrice}</span>
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
            <button className="px-60 py-3 bg-[#1B342F] text-white rounded-md cursor-pointer ">
              Buy Now
            </button>
            <button className="px-10 py-3 bg-[#1B342F] text-white rounded-md flex justify-between space-x-2 cursor-pointer ">
              
              <FaShoppingCart size={20} className="text-white cursor-pointer" /><span >Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;