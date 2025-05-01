import React from "react";
import aboutback from "../image/aboutback.svg";

const Aboutwhychoose = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white mb-10 h-[300px] md:h-[400px] lg:h-[450px]"
      style={{ backgroundImage: `url(${aboutback})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase mb-2">About Us</h1>
        <p className="text-sm md:text-lg text-gray-200 max-w-xl">
          Everything you need to know about our Company
        </p>
      </div>
    
      {/* Overlay for better readability on image */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          {/* Optional Title and Subtitle */}
          {/* <h2 className="text-3xl sm:text-4xl font-extrabold uppercase mb-2">About Us</h2>
          <p className="text-base sm:text-lg font-light text-gray-100">
            Everything you need to know about our Company
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  z-10 relative top-60">
          {/* Card 1 */}
          <div className="bg-[#eaf2fd] text-[#0f2f5f] p-6  hover:shadow-lg transition duration-300">
            <h3 className="text-lg sm:text-xl font-bold uppercase mb-3">Why Choose Us.</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              quidem minus id omnis, nam expedita, ea fuga commodi voluptas
              iusto, hic autem deleniti dolores explicabo labore enim repellat
              earum perspiciatis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0f2f5f] text-white p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-lg sm:text-xl font-bold uppercase mb-3">Our Mission.</h3>
            <p className="text-sm sm:text-base text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              quidem minus id omnis, nam expedita, ea fuga commodi voluptas
              iusto, hic autem deleniti dolores explicabo labore enim repellat
              earum perspiciatis.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#eaf2fd] text-[#0f2f5f] p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-lg sm:text-xl font-bold uppercase mb-3">What We Do.</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              quidem minus id omnis, nam expedita, ea fuga commodi voluptas
              iusto, hic autem deleniti dolores explicabo labore enim repellat
              earum perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutwhychoose;
