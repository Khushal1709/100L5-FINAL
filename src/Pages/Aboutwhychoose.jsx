import React from "react";
import aboutback from "../image/aboutback.svg";

const Aboutwhychoose = () => {
  return (
    <section
      className="relative max-w-7xl mx-auto mt-4 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${aboutback})` }}
    >
      <div className="">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          {/* <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">About Us</h2>
          <p className="text-lg md:text-xl font-light">
            Everything you need to know about our Company
          </p> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6 top-40 relative z-10">
        {/* Card 1 */}
        <div className="bg-[#eaf2fd] text-[#0f2f5f] p-6 md:p-8 shadow-md">
          <h3 className="text-xl font-bold uppercase mb-4">Why Choose Us.</h3>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            quidem minus id omnis, nam expedita, ea fuga commodi voluptas
            iusto, hic autem deleniti dolores explicabo labore enim repellat
            earum perspiciatis.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0f2f5f] text-white p-6 md:p-8 shadow-md">
          <h3 className="text-xl font-bold uppercase mb-4">Our Mission.</h3>
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            quidem minus id omnis, nam expedita, ea fuga commodi voluptas
            iusto, hic autem deleniti dolores explicabo labore enim repellat
            earum perspiciatis.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#eaf2fd] text-[#0f2f5f] p-6 md:p-8 shadow-md">
          <h3 className="text-xl font-bold uppercase mb-4">What We Do.</h3>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            quidem minus id omnis, nam expedita, ea fuga commodi voluptas
            iusto, hic autem deleniti dolores explicabo labore enim repellat
            earum perspiciatis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutwhychoose;
