// import React, { useState, useEffect, useRef } from 'react';
// import { Star } from 'lucide-react';
// import search from "../image/search.svg";
// import explore from "../image/explore.svg";
// import finder from "../image/finder.svg";
// import firefox from "../image/firefox.svg";
// import Getleaf from "../image/Getleaf.svg";
// import Support from "../Pages/Support"; // Import the Support component
// import finderp from "../image/finderp.svg";
// import {
//     FaLayerGroup, FaCog, FaCode, FaLightbulb, FaBullhorn, FaBriefcase,
//     FaMoneyBillWave, FaRobot, FaComments, FaHeart
// } from 'react-icons/fa';
// import productback from "../image/productback.svg";
// import Text from "../image/Text.svg";
// import folder from "../image/folder.svg";
// import cloud2 from "../image/cloud2.svg";
// import cloud1 from "../image/cloud1.svg";
// import Product1 from "../image/Product1.svg";
// import { FiExternalLink } from "react-icons/fi"; // You can replace this icon if needed


// const ProductFinderHero = () => {
//     const [selectedProduct, setSelectedProduct] = useState('');
//     const [selectedPackage, setSelectedPackage] = useState(1);
//     const [showAuthModal, setShowAuthModal] = useState(false);
//     const isAuthenticated = false; // Replace with actual auth logic
//     // const [activeCategory, setActiveCategory] = useState('productivity');
//     const scrollRef = useRef(null);
//     const [activeCategory, setActiveCategory] = useState("All");


//     const handleProductClick = () => {
//         if (!isAuthenticated) {
//             setShowAuthModal(true);
//         }
//     };

//     const handleSubmit = () => {
//         if (!isAuthenticated) {
//             setShowAuthModal(true);
//             return;
//         }
//         alert(`Submitting for ${'Unknown Product'} with `);
//     };

//     const categories = [
//         { id: 'all', label: 'ALL', icon: <FaLayerGroup /> },
//         { id: 'productivity', label: 'Productivity', icon: <FaCog /> },
//         { id: 'development', label: 'Development', icon: <FaCode /> },
//         { id: 'design', label: 'Design', icon: <FaLightbulb /> },
//         { id: 'marketing', label: 'Marketing', icon: <FaBullhorn /> },
//         { id: 'business', label: 'Business', icon: <FaBriefcase /> },
//         { id: 'finance', label: 'Finance', icon: <FaMoneyBillWave /> },
//         { id: 'ai', label: 'AI Product', icon: <FaRobot /> },
//         { id: 'social', label: 'Social Media', icon: <FaComments /> },
//         { id: 'lifestyle', label: 'Lifestyle', icon: <FaHeart /> },
//     ];

//     useEffect(() => {
//         const scrollContainer = scrollRef.current;
//         let scrollAmount = 0;
//         const speed = 2;

//         const scroll = () => {
//             if (!scrollContainer) return;
//             scrollAmount += speed;
//             if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//                 scrollAmount = 0;
//             }
//             scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
//         };

//         const interval = setInterval(scroll, 100); // Adjust speed here

//         return () => clearInterval(interval);
//     }, []);

//     const categories1 = [
//         "All", "Tags", "AI Prompting", "Accounting", "Code Editor", "Documentation",
//         "E-Commerce", "Conversion", "Coloring", "Blogging", "Bootstrap", "Automation",
//         "Animation", "Affiliation", "Background", "Calendar", "Code Editor", "Documentation",
//         "Conversion", "Copywriting", "Database", "Accounting", "Automation", "Tags", "AI Prompting", "Accounting", "Code Editor", "Cryptocurrency", "Calendar", "Conversion", "Coloring", "Blogging", "Bootstrap", "Automation", "Animation", "Affiliation", "Background", "Facebook", "Email Marketing"
//     ];

//     const cards = Array(9).fill({
//         title: "CleanSnap",
//         description:
//             "CleanSnap is a free AI tool that transforms screenshots into watermark-free, professional images.",
//         tags: ["#Kevin", "#AI", "#Tool"],
//         price: "Free",
//         date: "20 June",
//         time: "1 Min Read",
//         image: Product1
//     });

//     return (
//         <section className="w-full relative">
//             {/* Leaf Background */}
//             <img
//                 src={Getleaf}
//                 alt="Leaf Background"
//                 className="absolute left-0 top-0 w-48 md:w-64 lg:w-80 opacity-5 z-0"
//             />
//             <div className='max-w-7xl mx-auto'>


//                 {/* Main Blur Container */}
//                 <div className={`${showAuthModal ? 'blur-sm pointer-events-none select-none' : ''}`}>
//                     <div className="py-12 px-4 relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
//                         {/* Left Content */}
//                         <div className="flex-1 text-center lg:text-left space-y-6">
//                             <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Product Finder</h1>
//                             <p className="text-gray-600 text-lg">
//                                 Find Exactly What You Need <br /> Your Shortcut to the Right Choice
//                             </p>

//                             {/* Buttons */}
//                             <div className="flex gap-4 flex-wrap">
//                                 <div className="relative inline-flex items-center">
//                                     <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-8 py-2 rounded-full shadow-md">
//                                         EXPLORE TOOL
//                                     </button>
//                                     <img
//                                         src={explore}
//                                         alt="Arrow Icon"
//                                         className="absolute right-[-10px] w-6 h-6"
//                                     />
//                                 </div>

//                                 <div className="relative inline-flex items-center">
//                                     <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-6 py-2 rounded-full shadow-md">
//                                         PRODUCT FINDER
//                                     </button>
//                                     <img
//                                         src={finder}
//                                         alt="Finder Icon"
//                                         className="absolute -top-1 -right-2 w-6 h-6 transition-transform duration-300 transform hover:scale-150"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Login/Register + Extension */}
//                             <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 mt-10">
//                                 {/* Login/Register Section */}
//                                 <div className="flex flex-col items-center space-y-3">
//                                     <button className="bg-gray-100 px-8 py-2 rounded-full text-gray-600 font-semibold shadow-md">
//                                         LOGIN / REGISTER
//                                     </button>
//                                     <div className="text-red-600 font-semibold cursor-pointer hover:underline">
//                                         SIGN IN
//                                     </div>
//                                 </div>

//                                 {/* Extension Info */}
//                                 <div className="text-center">
//                                     <p className="text-sm text-gray-500 mb-2">
//                                         Get the extension and access all tools with just one click
//                                     </p>
//                                     <div className="flex items-center justify-center gap-4">
//                                         <div className="h-px w-12 bg-gray-300" />
//                                         <img
//                                             src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
//                                             alt="Chrome"
//                                             className="w-6 h-6"
//                                         />
//                                         <img
//                                             src={firefox}
//                                             alt="Firefox"
//                                             className="w-6 h-6"
//                                         />
//                                         <div className="h-px w-12 bg-gray-300" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Image */}
//                         <div className="flex-1 mt-10 lg:mt-0 flex justify-center">
//                             <img
//                                 src={search}
//                                 alt="Illustration"
//                                 className="w-full max-w-md"
//                             />
//                         </div>
//                     </div>
//                     <div className="py-10 bg-white">
//                         <div
//                             className="text-center py-16 bg-white bg-no-repeat bg-center bg-contain"
//                             style={{
//                                 backgroundImage: `url(${productback})`,
//                             }}
//                         >
//                             <h2 className="text-3xl font-bold text-center text-[#0D1440]">Product Categories</h2>
//                             <p className="text-sm text-center text-gray-500 mt-1">"Find the Right Tool for Every Task"</p>
//                             <div
//                                 ref={scrollRef}
//                                 className="mt-6 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide"
//                             >
//                                 <div className="inline-flex gap-4 min-w-max">
//                                     {categories.map((cat) => {
//                                         const isActive = cat.id === activeCategory;
//                                         return (
//                                             <button
//                                                 key={cat.id}
//                                                 onClick={() => setActiveCategory(cat.id)}
//                                                 className={`flex items-center gap-3 px-6 py-4 rounded-full transition-all ${isActive
//                                                     ? 'bg-blue-200 text-[#0D1440]'
//                                                     : 'bg-gray-100 text-gray-600 hover:bg-blue-100'
//                                                     }`}
//                                             >
//                                                 <div
//                                                     className={`text-lg p-2 rounded-full ${isActive ? 'bg-[#0D1440] text-white' : 'bg-blue-100 text-blue-600'
//                                                         }`}
//                                                 >
//                                                     {cat.icon}
//                                                 </div>
//                                                 <span className="text-sm font-medium whitespace-nowrap">{cat.label}</span>
//                                             </button>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='w-full'>
//                 <div
//                     className="relative  py-12 px-4 text-center bg-[#cbdcf6] bg-no-repeat bg-cover bg-center"
//                     style={{
//                         backgroundImage: `url(${Text})`,
//                     }}
//                 >
//                     {/* Floating sub-images */}
//                     <img
//                         src={cloud2} // replace with actual path
//                         alt="Cloud"
//                         className="absolute top-15 right-180 w-30 opacity-80"
//                     />
//                     <img
//                         src={Text}
//                         alt="Folder"
//                         className="absolute bottom-50 left-194 w-20 top-10  opacity-10"
//                     />


//                     {/* Title Section */}
//                     <div className="mb-8">
//                         <h2 className="text-4xl font-bold text-gray-900 flex justify-center items-center gap-2 relative z-10">
//                             {/* Wrapper for folder and cloud image */}
//                             <div className="relative w-16 h-16">
//                                 <img src={folder} alt="icon" className="w-full h-full" />
//                                 {/* Cloud image overlapping the folder */}
//                                 <img
//                                     src={cloud1}
//                                     alt="cloud"
//                                     className="absolute top-7 -left-2 w-15 h-15 opacity-90"
//                                 />
//                             </div>
//                             <p>
//                                 Product <br /> Categories
//                             </p>
//                         </h2>
//                         <p className="text-gray-700 mt-2">
//                             Digitize your documents and save time with this smart and reliable tool.
//                         </p>
//                     </div>


//                     {/* Tags */}
//                     <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
//                         {categories1.map((cat) => (
//                             <button
//                                 key={cat}
//                                 onClick={() => setActiveCategory(cat)}
//                                 className={`px-5 py-3 rounded-full text-sm font-medium border 
//           ${activeCategory === cat
//                                         ? " bg-[#070742] text-white"
//                                         : "bg-[#cbdcf6] text-gray-800 border-gray-400 "}`}
//                             >
//                                 #{cat}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//   {cards.map((card, index) => (
//     <div
//       key={index}
//       className="bg-white shadow rounded-[24px] overflow-hidden "
//     >
//       <div className="relative ">
//         <img
//           src={card.image}
//           alt={card.title}
//           className="w-full h-48 object-cover"
//         />
//         {/* Top-right icon */}
//         <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow text-gray-600 hover:text-black">
//           <FiExternalLink size={16} />
//         </button>
//       </div>

//       <div className="p-4">
//         <h2 className="font-bold text-lg text-gray-900">{card.title}</h2>
//         <p className="text-sm text-gray-500 mb-1">boosted by</p>
//         <p className="text-sm text-gray-600 mb-3">{card.description}</p>

//         <div className="flex flex-wrap gap-2 mb-3">
//           {card.tags.map((tag, i) => (
//             <span
//               key={i}
//               className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <div className="text-xs text-gray-500 flex justify-between pt-2 pt-3">
//           <span className="font-medium text-black">{card.price}</span>
//           <span className="text-gray-700">
//             {card.date} / {card.time}
//           </span>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
//             <Support />
//         </section>
//     );
// };

// export default ProductFinderHero;

import React, { useState, useEffect, useRef } from 'react';
import { FiExternalLink } from "react-icons/fi";
import {
  FaLayerGroup, FaCog, FaCode, FaLightbulb, FaBullhorn, FaBriefcase,
  FaMoneyBillWave, FaRobot, FaComments, FaHeart
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import search from "../image/search.svg";
import explore from "../image/explore.svg";
import finder from "../image/finder.svg";
import firefox from "../image/firefox.svg";
import Getleaf from "../image/Getleaf.svg";
import productback from "../image/productback.svg";
import Text from "../image/Text.svg";
import folder from "../image/folder.svg";
import cloud2 from "../image/cloud2.svg";
import cloud1 from "../image/cloud1.svg";
import Product1 from "../image/Product1.svg";
import Support from "../Pages/Support";

const ProductFinderHero = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTags, setActiveTags] = useState([]);
  const scrollRef = useRef(null);

  const categoryTagMap = {
    all: ["All", "Tags", "AI Prompting", "Accounting", "Code Editor", "Documentation", "E-Commerce", "Conversion", "Coloring", "Blogging", "Bootstrap", "Automation"],
    productivity: ["Calendar", "Task Manager", "Note Taking", "Automation"],
    development: ["Code Editor", "Documentation", "Database", "Version Control"],
    design: ["Coloring", "Background", "Animation", "UX Tools"],
    marketing: ["Email Marketing", "Affiliation", "Conversion", "SEO"],
    business: ["Accounting", "CRM", "Project Management"],
    finance: ["Budgeting", "Crypto", "Investment"],
    ai: ["AI Prompting", "Chatbot", "Automation", "Image Generation"],
    social: ["Facebook", "Instagram", "Content Planner"],
    lifestyle: ["Health", "Fitness", "Productivity"]
  };

  const categoryDataMap = {
    all: Array(6).fill({
      title: "CleanSnap",
      description: "Transforms screenshots into watermark-free, professional images.",
      tags: ["#Kevin", "#AI", "#Tool"],
      price: "Free",
      date: "20 June",
      time: "1 Min Read",
      image: Product1
    }),
    productivity: [
      {
        title: "TaskFlow",
        description: "Manage your daily tasks seamlessly.",
        tags: ["#Productivity", "#Tasks"],
        price: "Free",
        date: "2 May",
        time: "2 Min Read",
        image: Product1
      }
    ],
    development: [
      {
        title: "CodeSmith",
        description: "A fast, AI-based code editor.",
        tags: ["#Code", "#DevTools"],
        price: "$10/mo",
        date: "5 Apr",
        time: "3 Min Read",
        image: Product1
      }
    ],
    design: [
      {
        title: "ColorWave",
        description: "Generate and manage color palettes.",
        tags: ["#Design", "#Color"],
        price: "Free",
        date: "12 Mar",
        time: "1 Min Read",
        image: Product1
      }
    ],
    marketing: [
      {
        title: "MailBoost",
        description: "Boost your campaigns with smart targeting.",
        tags: ["#Email", "#Marketing"],
        price: "Free Trial",
        date: "8 Feb",
        time: "2 Min Read",
        image: Product1
      }
    ],
    business: [
      {
        title: "BizSuite",
        description: "Manage CRM, invoices and teams.",
        tags: ["#CRM", "#Business"],
        price: "$25/mo",
        date: "1 Jan",
        time: "3 Min Read",
        image: Product1
      }
    ],
    finance: [
      {
        title: "FinTrack",
        description: "Track expenses and plan budgets.",
        tags: ["#Finance", "#Budgeting"],
        price: "Free",
        date: "9 May",
        time: "2 Min Read",
        image: Product1
      }
    ],
    ai: [
      {
        title: "Promptify",
        description: "Generate high-quality AI prompts.",
        tags: ["#AI", "#Prompt"],
        price: "Free",
        date: "10 May",
        time: "2 Min Read",
        image: Product1
      }
    ],
    social: [
      {
        title: "PlanPost",
        description: "Schedule and plan content.",
        tags: ["#Social", "#Planner"],
        price: "Free",
        date: "22 Apr",
        time: "1 Min Read",
        image: Product1
      }
    ],
    lifestyle: [
      {
        title: "FitLife",
        description: "Track workouts and nutrition.",
        tags: ["#Fitness", "#Health"],
        price: "Free",
        date: "15 Apr",
        time: "2 Min Read",
        image: Product1
      }
    ]
  };

  useEffect(() => {
    setActiveTags(categoryTagMap[activeCategory] || []);
  }, [activeCategory]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const speed = 2;
    const scroll = () => {
      if (!scrollContainer) return;
      scrollAmount += speed;
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };
    const interval = setInterval(scroll, 100);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 'all', label: 'ALL', icon: <FaLayerGroup /> },
    { id: 'productivity', label: 'Productivity', icon: <FaCog /> },
    { id: 'development', label: 'Development', icon: <FaCode /> },
    { id: 'design', label: 'Design', icon: <FaLightbulb /> },
    { id: 'marketing', label: 'Marketing', icon: <FaBullhorn /> },
    { id: 'business', label: 'Business', icon: <FaBriefcase /> },
    { id: 'finance', label: 'Finance', icon: <FaMoneyBillWave /> },
    { id: 'ai', label: 'AI Product', icon: <FaRobot /> },
    { id: 'social', label: 'Social Media', icon: <FaComments /> },
    { id: 'lifestyle', label: 'Lifestyle', icon: <FaHeart /> },
  ];

  const cards = categoryDataMap[activeCategory] || [];

  

  return (
    <section className="w-full relative bg-white">
    <img src={Getleaf} alt="Leaf Background" className="hidden lg:block absolute left-0 top-0 w-36 sm:w-48 md:w-64 lg:w-80 opacity-5 z-0" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10">
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Product Finder
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Find Exactly What You Need <br /> Your Shortcut to the Right Choice
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <div className="relative inline-flex items-center">
              <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-6 sm:px-8 py-2 rounded-full shadow-md whitespace-nowrap">
                EXPLORE TOOL
              </button>
              <img src={explore} alt="Arrow Icon" className="absolute right-[-10px] w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="relative inline-flex items-center">
              <button className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-bold px-6 py-2 rounded-full shadow-md whitespace-nowrap">
                PRODUCT FINDER
              </button>
              <img src={finder} alt="Finder Icon" className="absolute -top-1 -right-2 w-5 h-5 sm:w-6 sm:h-6 hover:scale-150 transition-transform" />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col items-center space-y-3">
              <button className="bg-gray-100 px-8 py-2 rounded-full text-gray-600 font-semibold shadow-md whitespace-nowrap">
                LOGIN / REGISTER
              </button>
              <div className="text-red-600 font-semibold cursor-pointer hover:underline select-none">
                SIGN IN
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2 max-w-xs mx-auto sm:mx-0">
                Get the extension and access all tools with just one click
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-gray-300" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png" alt="Chrome" className="w-6 h-6" />
                <img src={firefox} alt="Firefox" className="w-6 h-6" />
                <div className="h-px w-12 bg-gray-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center max-w-md w-full">
  <img
    src={search}
    alt="Illustration"
    className="hidden lg:block w-full max-w-xs sm:max-w-sm md:max-w-md"
  />
</div>
      </div>

      {/* Category Buttons */}
      <div className="bg-white">
        <div
          className="text-center py-2 bg-white bg-no-repeat bg-center bg-contain mb-10"
          style={{ backgroundImage: `url(${productback})` }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1440]">Product Categories</h2>
          <p className="text-sm text-gray-500 mt-1">"Find the Right Tool for Every Task"</p>
          <div
            ref={scrollRef}
            className="mt-6 px-4 overflow-x-hidden whitespace-nowrap scrollbar-hide"
            aria-label="Product categories"
          >
            <div className="inline-flex gap-4 min-w-max">
              {categories.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-blue-200 text-[#0D1440]'
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-100'
                    }`}
                    aria-pressed={isActive}
                  >
                    <div
                      className={`text-lg p-2 rounded-full ${
                        isActive ? 'bg-[#0D1440] text-white' : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {cat.icon}
                    </div>
                    <span className="text-sm font-medium">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Tags Section */}
      <div className="w-full">
        <div className="relative py-12 px-4 text-center bg-[#cbdcf6] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${Text})` }}>
          <img src={cloud2} alt="Cloud" className="hidden sm:block md:left-117 lg:left-149 xl:left-200 2xl:left-260 absolute top-15 right-180 w-30 opacity-80" />
          <img src={Text} alt="Folder" className="hidden sm:block md:left-50 lg:left-80 xl:left-130 2xl:left-190 absolute bottom-50 left-194 w-20 top-10 opacity-10 " />
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 flex justify-center items-center gap-2 relative z-10">
              <div className="relative w-16 h-16">
                <img src={folder} alt="icon" className="hidden sm:block md:right-6 w-full h-full" />
                <img src={cloud1} alt="cloud" className="hidden sm:block md:left-6 absolute top-7 -left-2 w-15 h-15 opacity-90" />
              </div>
              <div className='justify-center items-center mr-15'>
              <p>Product <br /> Categories</p>
              </div>
            </h2>
            <p className="text-gray-700 mt-2">Digitize your documents and save time with this smart and reliable tool.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {activeTags.map((tag) => (
              <button key={tag} className="px-5 py-3 rounded-full text-sm font-medium border bg-[#070742] text-white">
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

    <Link to="/Productfinder">
      {/* Product Cards */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <div key={index} className="bg-white shadow rounded-[24px] overflow-hidden">
              <div className="relative">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow text-gray-600 hover:text-black">
                  <FiExternalLink size={16} />
                </button>
              </div>
              <div className="p-4">
                <h2 className="font-bold text-lg text-gray-900">{card.title}</h2>
                <p className="text-sm text-gray-500 mb-1">boosted by</p>
                <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 flex justify-between pt-2 pt-3">
                  <span className="font-medium text-black">{card.price}</span>
                  <span className="text-gray-700">{card.date} / {card.time}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products found in this category.</p>
        )}
      </div>
      </Link>
      <Support />
    </section>
  );
};

export default ProductFinderHero;

