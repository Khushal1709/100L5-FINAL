// import React from 'react'
// import Aboutwhychoose from '../Pages/Aboutwhychoose';
// import StatsSection from '../Pages/StatsSectio';
// import ProfileCard from '../Pages/ProfileCard'; 
// import Demo from '../Pages/Demo';
// import TrustedSection from '../Pages/TrustedSection';

// export default function Aboutus() {
//     return (
//         <>
//             <div className="pb-24">
//                 <Aboutwhychoose />
//             </div>
//             <div className="mt-16">
//                 <StatsSection />
//             </div>
//             <ProfileCard />
//             <Demo />
//             <TrustedSection />
//         </>
//     )
// }
// import React from 'react'
import React from 'react';
import aboutback from "../image/aboutback.svg";
import ProfileCard from '../Pages/ProfileCard';
import Demo from '../Pages/Demo';
import TrustedSection from '../Pages/TrustedSection';
import StatsSection from '../Pages/StatsSectio';

const AboutSection = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[300px] md:h-[450px] text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutback})` }}
      >
        <div className="absolute inset-0 bg-opacity-60" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase mb-2">
            About Us
          </h1>
          <p className="text-sm md:text-lg text-gray-200">
            Everything you need to know about our Company
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#f2f6fd] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold uppercase text-[#0f2f5f] mb-3">
              Why Choose Us.
            </h3>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quasi
              quidem minus id omnis, nam expedita, ea fuga commodi voluptas
              iusto, hic autem deleniti dolores explicabo labore enim repellat
              earum perspiciatis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0f2f5f] p-6 rounded-lg shadow-md text-white">
            <h3 className="text-lg font-bold uppercase mb-3">
              Our Mission.
            </h3>
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quasi
              quidem minus id omnis, nam expedita, ea fuga commodi voluptas
              iusto, hic autem deleniti dolores explicabo labore enim repellat
              earum perspiciatis.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f2f6fd] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold uppercase text-[#0f2f5f] mb-3">
              What We Do.
            </h3>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quasi
              quidem minus id omnis, nam expedita, ea fuga commodi voluptas
              iusto, hic autem deleniti dolores explicabo labore enim repellat
              earum perspiciatis.
            </p>
          </div>
        </div>
      </div>

      {/* Sections Below */}
      <div className="mt-20">
        <StatsSection />
      </div>
      <div className="mt-10">
        <ProfileCard />
      </div>
      <div className="mt-10">
        <Demo />
      </div>
      <div className="mt-10">
        <TrustedSection />
      </div>
    </section>
  );
};

export default AboutSection;

