import React, { useState, useEffect } from 'react';
import john from "../image/john.svg";
// import left from "../image/left.svg";
// import right from "../image/right.svg";
import round from "../image/round.svg";

// Sample testimonials data - replace with your actual content
const testimonials = [
  {
    id: 1,
    name: "JOHN DOE",
    position: "XYZ DIRECTOR",
    image:john, // Replace with your actual path
    testimonial: "Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!",
    rating: 4.5,
  },
  {
    id: 2,
    name: "JANE SMITH",
    position: "MARKETING HEAD",
    image: john, // Replace with your actual path
    testimonial: "Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!",
    rating: 5,
  },
  {
    id: 3,
    name: "ROBERT JOHNSON",
    position: "CEO COMPANY",
    image: john, // Replace with your actual path
    testimonial: "Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!",
    rating: 4,
  },
  {
    id: 4,
    name: "ROBERT JOHNSON",
    position: "CEO COMPANY",
    image: john, // Replace with your actual path
    testimonial: "Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!",
    rating: 4,
  },
];

function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scrolling functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="relative py-16 overflow-hidden">
      {/* Left side background image */}
           
      {/* <div 
        className="absolute left-0 top-0 h-full w-1/3 bg-left " 
        style={{ backgroundImage: `url(${left})` }}
      /> */}
      
      {/* Right side background image */}
      {/* <div 
        className="absolute right-0 top-0 h-full w-1/3 bg-right bg-no-repeat opacity-10" 
        style={{ backgroundImage: `url(${right})` }}
      /> */}

      
      {/* Main content */}
      <div className="max-w-7xl  mx-auto px-4 relative z-10">
        {/* Header */}
        <div className=" relative mb-14">
          
           <div className="absolute left-5 -top-10 w-40 h-40 bg-blue-50 rounded-full opacity-70">
                               <img src={round} alt='hello'></img>
                           </div>
          <div className="relative flex items-center mb-2">
            <p className="text-gray-500 uppercase font-medium text-sm tracking-wider">CLIENTS FEEDBACK</p>
            <div className="ml-3 h-px bg-gray-300 w-24 hidden sm:block"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-[#002E6D] mt-4 relative">
            OUR TESTIMONIAL FROM
            <br className="md:block" /> 
            BEST CLIENTS
            
          
          </h2>
        </div>
        </div>
        </div>
        
        {/* Testimonial carousel */}
        <div className=" bg-[#f0f5fb] overflow-hidden">
          
          
          <div 
            className="flex transition-all duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 mb-10 mt-10">
                <div className="flex flex-col items-center text-center">
                  {/* Profile image */}
                  <div className="mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                    />
                  </div>
                  
                  {/* Name and position */}
                  <h3 className="text-xl font-bold text-[#002E6D]">{testimonial.name}</h3>
                  <p className="text-gray-500 mb-6">{testimonial.position}</p>
                  
                  {/* Testimonial text */}
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    {testimonial.testimonial}
                  </p>
                  
                  {/* Star rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">
                        {i < Math.floor(testimonial.rating) ? (
                          // Full star
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ) : i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0 ? (
                          // Half star
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" opacity="0.5" />
                          </svg>
                        ) : (
                          // Empty star
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                          </svg>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-[#002E6D]' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        {/* <img src={left} alt="left background" className="absolute left-0  w-48 md:w-60 z-0" />
      <img src={right} alt="right background" className="absolute right-0  w-48 md:w-60 z-0" /> */}
     
    </>
  );
}

export default TestimonialSlider;
