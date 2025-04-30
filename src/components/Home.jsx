import React from 'react'
import Back from "../Pages/Back";
import ServicesSection from '../Pages/ServicesSection';
import WhyChooseUs from '../Pages/WhyChooseUs';
import FAQSection from '../Pages/FAQSection';
import TestimonialSlider from '../Pages/TestimonialSlider';
import TrustedSection from '../Pages/TrustedSection';
import { ChevronUp } from 'lucide-react';

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <Back/>
    <ServicesSection/>
    <WhyChooseUs/>
    <FAQSection/>
    <TestimonialSlider/>
    <TrustedSection/>

      <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#002B6B] text-white p-3 rounded-full shadow-lg hover:bg-[#001A41] transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
    </>
)
}
