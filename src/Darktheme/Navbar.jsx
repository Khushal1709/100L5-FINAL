// import { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";
// import logo from "../image/logo.svg";
// import s1 from "../image/searchicon.svg";
// import home from "../image/home.svg";
// import chrome from "../image/chrome.svg";
// import fire from "../image/fire.svg";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [featuredOpen, setFeaturedOpen] = useState(false);
//   const [extensionsOpen, setExtensionsOpen] = useState(false);
//   const [mobileFeaturedOpen, setMobileFeaturedOpen] = useState(false);
//   const [mobileExtensionsOpen, setMobileExtensionsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const location = useLocation();
//   const isSpecialPage =
//     location.pathname === "/Productfinder" ||
//     location.pathname === "/Getfeatured" ||
//     location.pathname === "/Submit";

//   const toggleMobileFeatured = (e) => {
//     e.preventDefault();
//     setMobileFeaturedOpen(!mobileFeaturedOpen);
//     setMobileExtensionsOpen(false);
//   };

//   const toggleMobileExtensions = (e) => {
//     e.preventDefault();
//     setMobileExtensionsOpen(!mobileExtensionsOpen);
//     setMobileFeaturedOpen(false);
//   };

//   const toggleSearch = () => {
//     setShowSearch(!showSearch);
//     if (showSearch) {
//       setSearchTerm("");
//     }
//   };

//   // Helper to set active class
//   const getNavLinkClass = (active) =>

//     active
//       ? "text-[#ffffff]"
//       : "text-white";

//   return (
//     <div className="bg-[#16283E]">
//     <header className="w-full lg-static top-0 left-0 z-50 relative">
//       <div
//         className={`w-full mx-auto px-4 py-3 lg:px-8 flex justify-between items-center ${
//           mobileMenuOpen ? "relative z-50" : ""
//         }`}
//       >
//         {/* Left Section: Logo */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={logo || "/placeholder.svg"}
//             alt="Logo"
//             className="h-8 w-auto"
//           />
//         </Link>

//         {/* Center Icons (Mobile/Tablet only) */}
//         <div className="flex items-center gap-4 lg:hidden">
//           <div className="relative p-1 top-1">
//             <button onClick={toggleSearch}>
//               <img
//                 src={s1 || "/placeholder.svg"}
//                 alt="Search"
//                 className="h-6 w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//               />
//             </button>
//             <div
//               className={`absolute right-[-90px] top-full mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top ${
//                 showSearch
//                   ? "opacity-100 scale-y-100"
//                   : "opacity-0 scale-y-0 pointer-events-none"
//               }`}
//             >
//               <div className="relative p-2">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search over 5000+ AI..."
//                   className="w-full pl-8 pr-8 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                   autoFocus={showSearch}
//                 />
//                 <button
//                   onClick={toggleSearch}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <Link to="/" className="p-1">

//             <img
//               src={home || "/placeholder.svg"}
//               alt="Home"
//               className="h-6 w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125 "
//             />
//           </Link>
//         </div>

//         {/* Hamburger Menu (Mobile/Tablet) */}
//         <div className="lg:hidden">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? (
//               <X className="h-6 w-6 text-white" />
//             ) : (
//               <Menu className="h-6 w-6 text-white" />
//             )}
//           </button>
//         </div>

//         {/* Mobile/Tablet Menu */}
//         {mobileMenuOpen && (
//           <div className="fixed inset-0 bg-[#16283E] z-40 lg:hidden">
//             <div className="flex justify-between items-center p-4">
//               <Link
//                 to="/"
//                 className="flex"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <img
//                   src={logo || "/placeholder.svg"}
//                   alt="Logo"
//                   className="h-8 w-auto"
//                 />
//               </Link>
//               <button
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="p-2 rounded-full hover:bg-gray-100"
//               >
//                 <X className="h-6 w-6 text-white" />
//               </button>
//             </div>
//             <nav className="px-4 py-6 flex flex-col space-y-4">
//               <Link
//                 to="/About"
//                 className="text-white"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 About
//               </Link>
//               {isSpecialPage ? (
//                 <>
//                   <Link
//                     to="/Submit"
//                     className={getNavLinkClass(location.pathname === "/Submit")}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Submit
//                   </Link>
//                   <Link
//                     to="/Getfeatured"
//                     className={getNavLinkClass(location.pathname === "/Getfeatured")}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Get Featured
//                   </Link>
//                 </>
//               ) : (
//                 <Link
//                   to="/Productfinder"
//                   className={getNavLinkClass(location.pathname === "/Productfinder")}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Product Finder
//                 </Link>
//               )}
//               {/* Categories Dropdown for other pages */}
//               {!isSpecialPage && (
//                 <div className="relative z-10">
//                   <button
//                     className="flex items-center text-white w-full justify-between"
//                     onClick={toggleMobileFeatured}
//                   >
//                     Categories
//                     <ChevronDown
//                       className={`ml-1 h-4 w-4 transition-transform ${
//                         mobileFeaturedOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                   {mobileFeaturedOpen && (
//                     <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
//                       <Link
//                         to="/Texttool"
//                         className="block px-4 py-2 text-sm text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Text Tool
//                       </Link>
//                       <Link
//                         to="/Imagetool"
//                         className="block px-4 py-2 text-sm text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Image Tool
//                       </Link>
//                       <Link
//                         to="/CSStool"
//                         className="block px-4 py-2 text-sm text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         CSS Tool
//                       </Link>
//                       <Link
//                         to="/Codingtool"
//                         className="block px-4 py-2 text-sm text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Coding Tools
//                       </Link>
//                       <Link
//                         to="/Colortool"
//                         className="block px-4 py-2 text-sm text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Color Tools
//                       </Link>
//                       <Link
//                         to="/Socialmediatool"
//                         className="block px-4 py-2 text-sm text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Social Media Tools
//                       </Link>
//                       <Link
//                         to="/Miscellaneoustool"
//                         className="block px-4 py-2 text-sm text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Miscellaneous Tools
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               )}
//               {/* Extensions Dropdown Mobile */}
//               <div className="relative z-10">
//                 <button
//                   className="flex items-center text-white w-full justify-between"
//                   onClick={toggleMobileExtensions}
//                 >
//                   Extensions
//                   <ChevronDown
//                     className={`ml-1 h-4 w-4 transition-transform ${
//                       mobileExtensionsOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {mobileExtensionsOpen && (
//                   <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
//                     <a
//                       href="https://chrome.google.com/webstore"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-4 py-2 text-sm text-white"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <img
//                         src={chrome || "/placeholder.svg"}
//                         alt="Chrome"
//                         className="h-5 w-5 mr-3"
//                       />
//                       Add To Chrome
//                     </a>
//                     <a
//                       href="https://addons.mozilla.org/en-US/firefox/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-4 py-2 text-sm text-white"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <img
//                         src={fire || "/placeholder.svg"}
//                         alt="Firefox"
//                         className="h-5 w-5 mr-3"
//                       />
//                       Add To Firefox
//                     </a>
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/Contact"
//                 className="bg-[#D5C7FF] text-black px-4 py-2 rounded-full text-sm font-medium  transition-colors text-center mt-4"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 CONTACT US
//               </Link>
//             </nav>
//           </div>
//         )}

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-10">
//           <div className="relative">
//             <button className="p-2 rounded-lg" onClick={toggleSearch}>
//               <img
//                 src={s1 || "/placeholder.svg"}
//                 alt="Search"
//                 className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//               />
//             </button>
//             <div
//               className={`absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
//                 showSearch
//                   ? "opacity-100 scale-y-100"
//                   : "opacity-0 scale-y-0 pointer-events-none"
//               }`}
//             >
//               <div className="relative p-2">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search over 5000+ AI..."
//                   className="w-full pl-8 pr-8 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                   autoFocus={showSearch}
//                 />
//                 <button
//                   onClick={toggleSearch}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <Link to="/" className="p-2 lg:p-0">
//             <img
//               src={home || "/placeholder.svg"}
//               alt="Home"
//               className="h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 transform hover:scale-125"
//             />
//           </Link>

//           <Link to="/About" className="text-white">
//             About
//           </Link>

//           {isSpecialPage ? (
//             <>
//               <Link
//                 to="/Submit"
//                 className={getNavLinkClass(location.pathname === "/Submit")}
//               >
//                 Submit
//               </Link>
//               <Link
//                 to="/Getfeatured"
//                 className={getNavLinkClass(location.pathname === "/Getfeatured")}
//               >
//                 Get Featured
//               </Link>
//             </>
//           ) : (
//             <Link
//               to="/Productfinder"
//               className={getNavLinkClass(location.pathname === "/Productfinder")}
//             >
//               Product Finder
//             </Link>
//           )}

//           {/* Categories Dropdown for other pages */}
//           {!isSpecialPage && (
//             <div
//               className="relative"
//               onMouseEnter={() => setFeaturedOpen(true)}
//               onMouseLeave={() => setFeaturedOpen(false)}
//             >
//               <button className="flex items-center text-white">
//                 Categories
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {featuredOpen && (
//                 <div className="absolute top-full w-60 bg-[#273D58] rounded-xl shadow-lg py-2 z-10 text-center">
//                   <Link
//                     to="/Texttool"
//                     className="block px-4 py-2 text-sm text-white "
//                   >
//                     Text Tool
//                   </Link>
//                   <Link
//                     to="/Imagetool"
//                     className="block px-4 py-2 text-sm text-white "
//                   >
//                     Image Tool
//                   </Link>
//                   <Link text-white
//                     to="/CSStool"
//                     className="block px-4 py-2 text-sm text-white "
//                   >
//                     CSS Tool
//                   </Link>
//                   <Link
//                     to="/Codingtool"
//                     className="block px-4 py-2 text-sm text-white "
//                   >
//                     Coding Tools
//                   </Link>
//                   <Link
//                     to="/Colortool"
//                     className="block px-4 py-2 text-sm text-white "
//                   >
//                     Color Tools
//                   </Link>
//                   <Link
//                     to="/Socialmediatool"
//                     className="block px-4 py-2 text-sm text-white "
//                   >
//                     Social Media Tools
//                   </Link>
//                   <Link
//                     to="/Miscellaneoustool"
//                     className="block px-4 py-2 text-sm text-white"
//                   >
//                     Miscellaneous Tools
//                   </Link>
//                 </div>
//               )}
//             </div>
//           )}
//           {/* Extensions Dropdown Desktop */}
//           <div
//             className="relative"
//             onMouseEnter={() => setExtensionsOpen(true)}
//             onMouseLeave={() => setExtensionsOpen(false)}
//           >
//             <button className="flex items-center text-white">
//               Extensions
//               <ChevronDown className="ml-1 h-4 w-4" />
//             </button>
//             {extensionsOpen && (
//               <div className="absolute top-full w-56 bg-[#273D58] rounded-xl shadow-lg py-2 z-10">
//                 <a
//                   href="https://chrome.google.com/webstore"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-4 py-2 text-sm text-white"
//                 >
//                   <img
//                     src={chrome || "/placeholder.svg"}
//                     alt="Chrome"
//                     className="h-5 w-5 mr-3"
//                   />
//                   Add To Chrome
//                 </a>
//                 <a
//                   href="https://addons.mozilla.org/en-US/firefox/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-4 py-2 text-sm text-white"
//                 >
//                   <img
//                     src={fire || "/placeholder.svg"}
//                     alt="Firefox"
//                     className="h-5 w-5 mr-3"
//                   />
//                   Add To Firefox
//                 </a>
//               </div>
//             )}
//           </div>

//           <Link
//             to="/Contact"
//             className="bg-[#D5C7FF] text-black px-4 py-2 rounded-full text-sm font-medium transition-colors"
//           >
//             CONTACT US
//           </Link>
//         </nav>
//       </div>
//     </header>
//     </div>
//   );
// }

// ------------
// import { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";
// import logo from "../image/logo.svg";
// import s1 from "../image/searchicon.svg";
// import home from "../image/home.svg";
// import chrome from "../image/chrome.svg";
// import fire from "../image/fire.svg";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [featuredOpen, setFeaturedOpen] = useState(false);
//   const [extensionsOpen, setExtensionsOpen] = useState(false);
//   const [mobileFeaturedOpen, setMobileFeaturedOpen] = useState(false);
//   const [mobileExtensionsOpen, setMobileExtensionsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [themeOpen, setThemeOpen] = useState(false); // State for theme dropdown
//   const [mobileThemeOpen, setMobileThemeOpen] = useState(false); // State for mobile theme dropdown

//   const location = useLocation();
//   const isSpecialPage =
//     location.pathname === "/Productfinder" ||
//     location.pathname === "/Getfeatured" ||
//     location.pathname === "/Submit";

//   const toggleMobileFeatured = (e) => {
//     e.preventDefault();
//     setMobileFeaturedOpen(!mobileFeaturedOpen);
//     setMobileExtensionsOpen(false);
//     setMobileThemeOpen(false);
//   };

//   const toggleMobileExtensions = (e) => {
//     e.preventDefault();
//     setMobileExtensionsOpen(!mobileExtensionsOpen);
//     setMobileFeaturedOpen(false);
//     setMobileThemeOpen(false);
//   };

//   const toggleMobileTheme = (e) => {
//     e.preventDefault();
//     setMobileThemeOpen(!mobileThemeOpen);
//     setMobileFeaturedOpen(false);
//     setMobileExtensionsOpen(false);
//   };

//   const toggleSearch = () => {
//     setShowSearch(!showSearch);
//     if (showSearch) {
//       setSearchTerm("");
//     }
//   };

//   // Helper to set active class
//   const getNavLinkClass = (active) => (active ? "text-white" : "text-white");

//   return (
//     <div className="bg-[#16283E]">
//       <header className="w-full lg-static top-0 left-0 z-50 relative">
//         <div
//           className={`w-full mx-auto px-4 py-3 lg:px-8 flex justify-between items-center ${
//             mobileMenuOpen ? "relative z-50" : ""
//           }`}
//         >
//           {/* Left Section: Logo */}
//           <Link to="/" className="flex items-center">
//             <img
//               src={logo || "/placeholder.svg"}
//               alt="Logo"
//               className="h-8 w-auto"
//             />
//           </Link>

//           {/* Center Icons (Mobile/Tablet only) */}
//           <div className="flex items-center gap-4 lg:hidden">
//             <div className="relative p-1 top-1">
//               <button onClick={toggleSearch}>
//                 <img-
//                   src={s1 || "/placeholder.svg"}
//                   alt="Search"
//                   className="h-6 w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//                 />
//               </button>
//               <div
//                 className={`absolute right-[-90px] top-full mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top ${
//                   showSearch
//                     ? "opacity-100 scale-y-100"
//                     : "opacity-0 scale-y-0 pointer-events-none"
//                 }`}
//               >
//                 <div className="relative p-2">
//                   <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     placeholder="Search over 5000+ AI..."
//                     className="w-full pl-8 pr-8 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                     autoFocus={showSearch}
//                   />
//                   <button
//                     onClick={toggleSearch}
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                   >
//                     <X className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <Link to="/" className="p-1">
//               <img
//                 src={home || "/placeholder.svg"}
//                 alt="Home"
//                 className="h-6 w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//               />
//             </Link>
//           </div>

//           {/* Hamburger Menu (Mobile/Tablet) */}
//           <div className="lg:hidden">
//             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6 text-white" />
//               ) : (
//                 <Menu className="h-6 w-6 text-white" />
//               )}
//             </button>
//           </div>

//           {/* Mobile/Tablet Menu */}
//           {mobileMenuOpen && (
//             <div className="fixed inset-0 bg-[#16283E] z-40 lg:hidden">
//               <div className="flex justify-between items-center p-4">
//                 <Link
//                   to="/"
//                   className="flex"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <img
//                     src={logo || "/placeholder.svg"}
//                     alt="Logo"
//                     className="h-8 w-auto"
//                   />
//                 </Link>
//                 <button
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="p-2 rounded-full hover:bg-gray-100"
//                 >
//                   <X className="h-6 w-6 text-white" />
//                 </button>
//               </div>
//               <nav className="px-4 py-6 flex flex-col space-y-4">
//                 <Link
//                   to="/About"
//                   className="text-white"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   About
//                 </Link>
//                 {isSpecialPage ? (
//                   <>
//                     <Link
//                       to="/Submit"
//                       className={getNavLinkClass(
//                         location.pathname === "/Submit"
//                       )}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Submit
//                     </Link>
//                     <Link
//                       to="/Getfeatured"
//                       className={getNavLinkClass(
//                         location.pathname === "/Getfeatured"
//                       )}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Get Featured
//                     </Link>
//                   </>
//                 ) : (
//                   <Link
//                     to="/Productfinder"
//                     className={getNavLinkClass(
//                       location.pathname === "/Productfinder"
//                     )}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Product Finder
//                   </Link>
//                 )}
//                 {/* Categories Dropdown for other pages */}
//                 {!isSpecialPage && (
//                   <div className="relative z-10">
//                     <button
//                       className="flex items-center text-white w-full justify-between"
//                       onClick={toggleMobileFeatured}
//                     >
//                       Categories
//                       <ChevronDown
//                         className={`ml-1 h-4 w-4 transition-transform ${
//                           mobileFeaturedOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {mobileFeaturedOpen && (
//                       <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
//                         <Link
//                           to="/Texttool"
//                           className="block px-4 py-2 text-sm text-white"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           Text Tool
//                         </Link>
//                         <Link
//                           to="/Imagetool"
//                           className="block px-4 py-2 text-sm text-white"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           Image Tool
//                         </Link>
//                         <Link
//                           to="/CSStool"
//                           className="block px-4 py-2 text-sm text-white"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           CSS Tool
//                         </Link>
//                         <Link
//                           to="/Codingtool"
//                           className="block px-4 py-2 text-sm text-white"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           Coding Tools
//                         </Link>
//                         <Link
//                           to="/Colortool"
//                           className="block px-4 py-2 text-sm text-white"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           Color Tools
//                         </Link>
//                         <Link
//                           to="/Socialmediatool"
//                           className="block px-4 py-2 text-sm text-white"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           Social Media Tools
//                         </Link>
//                         <Link
//                           to="/Miscellaneoustool"
//                           className="block px-4 py-2 text-sm text-white"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           Miscellaneous Tools
//                         </Link>
//                       </div>
//                     )}
//                   </div>
//                 )}
//                 {/* Extensions Dropdown Mobile */}
//                 <div className="relative z-10">
//                   <button
//                     className="flex items-center text-white w-full justify-between"
//                     onClick={toggleMobileExtensions}
//                   >
//                     Extensions
//                     <ChevronDown
//                       className={`ml-1 h-4 w-4 transition-transform ${
//                         mobileExtensionsOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                   {mobileExtensionsOpen && (
//                     <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
//                       <a
//                         href="https://chrome.google.com/webstore"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center px-4 py-2 text-sm text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         <img
//                           src={chrome || "/placeholder.svg"}
//                           alt="Chrome"
//                           className="h-5 w-5 mr-3"
//                         />
//                         Add To Chrome
//                       </a>
//                       <a
//                         href="https://addons.mozilla.org/en-US/firefox/"
//                         target="_blank"
//                         rel="noreferrer noopener"
//                         className="flex items-center px-4 py-2 text-sm text-white"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         <img
//                           src={fire || "/placeholder.svg"}
//                           alt="Firefox"
//                           className="h-5 w-5 mr-3"
//                         />
//                         Add To Firefox
//                       </a>
//                     </div>
//                   )}
//                 </div>
//                 {/* Theme Dropdown Mobile */}
//                 <div className="relative z-10">
//                   <button
//                     className="flex items-center text-white w-full justify-between"
//                     onClick={toggleMobileTheme}
//                   >
//                     Theme
//                     <ChevronDown
//                       className={`ml-1 h-4 w-4 transition-transform ${
//                         mobileThemeOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                   {mobileThemeOpen && (
//                     <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
//                       <button
//                         className="block px-4 py-2 text-sm text-white w-full text-left"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Dark Theme
//                       </button>
//                       <button
//                         className="block px-4 py-2 text-sm text-white w-full text-left"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         Light Theme
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 <Link
//                   to="/Contact"
//                   className="bg-[#273D58] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors text-center mt-4"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   CONTACT US
//                 </Link>
//               </nav>
//             </div>
//           )}

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-10">
//             <div className="relative">
//               <button className="p-2 rounded-lg" onClick={toggleSearch}>
//                 <img
//                   src={s1 || "/placeholder.svg"}
//                   alt="Search"
//                   className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//                 />
//               </button>
//               <div
//                 className={`absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
//                   showSearch
//                     ? "opacity-100 scale-y-100"
//                     : "opacity-0 scale-y-0 pointer-events-none"
//                 }`}
//               >
//                 <div className="relative p-2">
//                   <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     placeholder="Search over 5000+ AI..."
//                     className="w-full pl-8 pr-8 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                     autoFocus={showSearch}
//                   />
//                   <button
//                     onClick={toggleSearch}
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                   >
//                     <X className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <Link to="/" className="p-2 lg:p-0">
//               <img
//                 src={home || "/placeholder.svg"}
//                 alt="Home"
//                 className="h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 transform hover:scale-125"
//               />
//             </Link>

//             <Link to="/About" className="text-white">
//               About
//             </Link>

//             {isSpecialPage ? (
//               <>
//                 <Link
//                   to="/Submit"
//                   className={getNavLinkClass(location.pathname === "/Submit")}
//                 >
//                   Submit
//                 </Link>
//                 <Link
//                   to="/Getfeatured"
//                   className={getNavLinkClass(
//                     location.pathname === "/Getfeatured"
//                   )}
//                 >
//                   Get Featured
//                 </Link>
//               </>
//             ) : (
//               <Link
//                 to="/Productfinder"
//                 className={getNavLinkClass(
//                   location.pathname === "/Productfinder"
//                 )}
//               >
//                 Product Finder
//               </Link>
//             )}

//             {/* Categories Dropdown for other pages */}
//             {!isSpecialPage && (
//               <div
//                 className="relative"
//                 onMouseEnter={() => setFeaturedOpen(true)}
//                 onMouseLeave={() => setFeaturedOpen(false)}
//               >
//                 <button className="flex items-center text-white h">
//                   Categories
//                   <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 {featuredOpen && (
//                   <div className="absolute top-full w-60 bg-[#273D58] rounded-xl shadow-lg py-2 z-10 text-center">
//                     <Link
//                       to="/Texttool"
//                       className="block px-4 py-2 text-sm text-white"
//                     >
//                       Text Tool
//                     </Link>
//                     <Link
//                       to="/Imagetool"
//                       className="block px-4 py-2 text-sm text-white"
//                     >
//                       Image Tool
//                     </Link>
//                     <Link
//                       to="/CSStool"
//                       className="block px-4 py-2 text-sm text-white"
//                     >
//                       CSS Tool
//                     </Link>
//                     <Link
//                       to="/Codingtool"
//                       className="block px-4 py-2 text-sm text-white"
//                     >
//                       Coding Tools
//                     </Link>
//                     <Link
//                       to="/Colortool"
//                       className="block px-4 py-2 text-sm text-white"
//                     >
//                       Color Tools
//                     </Link>
//                     <Link
//                       to="/Socialmediatool"
//                       className="block px-4 py-2 text-sm text-white"
//                     >
//                       Social Media Tools
//                     </Link>
//                     <Link
//                       to="/Miscellaneoustool"
//                       className="block px-4 py-2 text-sm text-white"
//                     >
//                       Miscellaneous Tools
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}
//             {/* Extensions Dropdown Desktop */}
//             <div
//               className="relative"
//               onMouseEnter={() => setExtensionsOpen(true)}
//               onMouseLeave={() => setExtensionsOpen(false)}
//             >
//               <button className="flex items-center text-white">
//                 Extensions
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {extensionsOpen && (
//                 <div className="absolute top-full w-45 bg-[#273D58] rounded-xl shadow-lg py-2 z-10">
//                   <a
//                     href="https://chrome.google.com/webstore"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center px-4 py-2 text-sm text-white"
//                   >
//                     <img
//                       src={chrome || "/placeholder.svg"}
//                       alt="Chrome"
//                       className="h-5 w-5 mr-3"
//                     />
//                     Add To Chrome
//                   </a>
//                   <a
//                     href="https://addons.mozilla.org/en-US/firefox/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center px-4 py-2 text-sm text-white"
//                   >
//                     <img
//                       src={fire || "/placeholder.svg"}
//                       alt="Firefox"
//                       className="h-5 w-5 mr-3"
//                     />
//                     Add To Firefox
//                   </a>
//                 </div>
//               )}
//             </div>
//             {/* Theme Dropdown Desktop */}
//             <div
//               className="relative"
//               onMouseEnter={() => setThemeOpen(true)}
//               onMouseLeave={() => setThemeOpen(false)}
//             >
//               <button className="flex items-center text-white">
//                 Theme
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {themeOpen && (
//                 <div className="absolute top-full w-45 bg-[#273D58] rounded-xl shadow-lg py-2 z-10">
//                   <button
//                     onClick={() => localStorage.setItem("theme", "dark")}
//                     className="block px-4 py-2 text-sm text-white bg-[#273D58] w-full text-center cursor-pointer "
//                   >
//                     Dark Theme
//                   </button>
//                   <button
//                     className="block px-4 py-2 text-sm text-white bg-[#273D58] w-full text-center cursor-pointer"
//                     onClick={() => localStorage.setItem("theme", "light")}
//                   >
//                     Light Theme
//                   </button>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/Contact"
//               className="bg-[#D5C7FF] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
//             >
//               CONTACT US
//             </Link>
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";
// import logo from "../image/logo.svg";
// import s1 from "../image/searchicon.svg";
// import homedark from "../image/homedark.svg";
// import chrome from "../image/chrome.svg";
// import fire from "../image/fire.svg";
// import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [featuredOpen, setFeaturedOpen] = useState(false);
//   const [extensionsOpen, setExtensionsOpen] = useState(false);
//   const [mobileFeaturedOpen, setMobileFeaturedOpen] = useState(false);
//   const [mobileExtensionsOpen, setMobileExtensionsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [themeOpen, setThemeOpen] = useState(false);
//   const [mobileThemeOpen, setMobileThemeOpen] = useState(false);

//   const location = useLocation();
//   const isSpecialPage =
//     location.pathname === "/Productfinder" ||
//     location.pathname === "/Getfeatured" ||
//     location.pathname === "/Submit";

//   // List of tools for search filtering
//   const tools = [
//     { name: "Text Tool", path: "/Texttool" },
//     { name: "Image Tool", path: "/Imagetool" },
//     { name: "CSS Tool", path: "/CSStool" },
//     { name: "Coding Tools", path: "/Codingtool" },
//     { name: "Color Tools", path: "/Colortool" },
//     { name: "Social Media Tools", path: "/Socialmediatool" },
//     { name: "Miscellaneous Tools", path: "/Miscellaneoustool" },
//   ];

//   // Filter tools based on search term
//   const filteredTools = tools.filter((tool) =>
//     tool.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleMobileFeatured = (e) => {
//     e.preventDefault();
//     setMobileFeaturedOpen(!mobileFeaturedOpen);
//     setMobileExtensionsOpen(false);
//     setMobileThemeOpen(false);
//   };

//   const toggleMobileExtensions = (e) => {
//     e.preventDefault();
//     setMobileExtensionsOpen(!mobileExtensionsOpen);
//     setMobileFeaturedOpen(false);
//     setMobileThemeOpen(false);
//   };

//   const toggleMobileTheme = (e) => {
//     e.preventDefault();
//     setMobileThemeOpen(!mobileThemeOpen);
//     setMobileFeaturedOpen(false);
//     setMobileExtensionsOpen(false);
//   };

//   const toggleSearch = () => {
//     setShowSearch(!showSearch);
//     if (showSearch) {
//       setSearchTerm("");
//     }
//   };

//   const getNavLinkClass = (active) => (active ? "text-white" : "text-white");

//   return (
//     <header className="w-full lg-static top-0 left-0 z-50 relative bg-transparent">
//       <div
//         className={`w-full mx-auto px-4 py-3 lg:px-8 flex justify-between items-center ${
//           mobileMenuOpen ? "relative z-50" : ""
//         }`}
//       >
//         {/* Left Section: Logo */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={logo || "/placeholder.svg"}
//             alt="Logo"
//             className="h-8 w-auto"
//           />
//         </Link>

//         {/* Center Icons (Mobile/Tablet only) */}
//         <div className="flex items-center gap-4 lg:hidden">
//           <div className="relative p-1 top-1">
//             <button onClick={toggleSearch}>
//               <img
//                 src={s1 || "/placeholder.svg"}
//                 alt="Search"
//                 className="h-6 w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//               />
//             </button>
//             <div
//               className={`absolute right-[-90px] top-full mt-2 w-64  rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top ${
//                 showSearch
//                   ? "opacity-100 scale-y-100"
//                   : "opacity-0 scale-y-0 pointer-events-none"
//               }`}
//             >
//               <div className="relative p-2">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search over 5000+ AI..."
//                   className="w-full pl-8 pr-8 py-2 text-sm border  bg-white  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                   autoFocus={showSearch}
//                 />
//                 <button
//                   onClick={toggleSearch}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2  "
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//               {/* Search Results */}
//               {showSearch && searchTerm && (
//                 <div className="max-h-60 overflow-y-hidden p-10">
//                   {filteredTools.length > 0 ? (
//                     filteredTools.map((tool) => (
//                       <Link
//                         key={tool.path}
//                         to={tool.path}
//                         className="block px-4 py-2 text-sm text-black"
//                         onClick={() => {
//                           setShowSearch(false);
//                           setSearchTerm("");
//                           setMobileMenuOpen(false);
//                         }}
//                       >
//                         {tool.name}
//                       </Link>
//                     ))
//                   ) : (
//                     <div className="px-4 py-2 text-sm text-black">
//                       No tools found
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//           <Link to="/" className="p-1">
//             <img
//               src={homedark || "/placeholder.svg"}
//               alt="Home"
//               className="h-6 w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//             />
//           </Link>
//         </div>

//         {/* Hamburger Menu (Mobile/Tablet) */}
//         <div className="lg:hidden">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? (
//               <X className="h-6 w-6 text-white" />
//             ) : (
//               <Menu className="h-6 w-6 text-white" />
//             )}
//           </button>
//         </div>

//         {/* Mobile/Tablet Menu */}
//         {mobileMenuOpen && (
//           <div className="fixed inset-0 bg-[#16283E] z-40 lg:hidden">
//             <div className="flex justify-between items-center p-4">
//               <Link
//                 to="/"
//                 className="flex"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <img
//                   src={logo || "/placeholder.svg"}
//                   alt="Logo"
//                   className="h-8 w-auto"
//                 />
//               </Link>
//               <button
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="p-2 rounded-full hover:bg-gray-100"
//               >
//                 <X className="h-6 w-6 text-white" />
//               </button>
//             </div>
//             <nav className="px-4 py-6 flex flex-col space-y-4">
//               <Link
//                 to="/About"
//                 className="text-white"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 About
//               </Link>
//               {isSpecialPage ? (
//                 <>
//                   <Link
//                     to="/Submit"
//                     className={getNavLinkClass(location.pathname === "/Submit")}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Submit
//                   </Link>
//                   <Link
//                     to="/Getfeatured"
//                     className={getNavLinkClass(
//                       location.pathname === "/Getfeatured"
//                     )}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Get Featured
//                   </Link>
//                 </>
//               ) : (
//                 <Link
//                   to="/Productfinder"
//                   className={getNavLinkClass(
//                     location.pathname === "/Productfinder"
//                   )}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Product Finder
//                 </Link>
//               )}
//               {/* Categories Dropdown for other pages */}
//               {!isSpecialPage && (
//                 <div className="relative z-10">
//                   <button
//                     className="flex items-center text-white w-full justify-between"
//                     onClick={toggleMobileFeatured}
//                   >
//                     Categories
//                     <ChevronDown
//                       className={`ml-1 h-4 w-4 transition-transform ${
//                         mobileFeaturedOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                   {mobileFeaturedOpen && (
//                     <div className="w-full bg-gray-50 rounded-lg mt-2 py-2">
//                       {tools.map((tool) => (
//                         <Link
//                           key={tool.path}
//                           to={tool.path}
//                           className="block px-4 py-2 text-sm text-white"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {tool.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}
//               {/* Extensions Dropdown Mobile */}
//               <div className="relative z-10">
//                 <button
//                   className="flex items-center text-white justify-between"
//                   onClick={toggleMobileExtensions}
//                 >
//                   Extensions
//                   <ChevronDown
//                     className={`ml-1 h-4 w-4 transition-transform ${
//                       mobileExtensionsOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {mobileExtensionsOpen && (
//                   <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
//                     <a
//                       href="https://chrome.google.com/webstore"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-4 py-2 text-sm text-white"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <img
//                         src={chrome || "/placeholder.svg"}
//                         alt="Chrome"
//                         className="h-5 w-5 mr-3"
//                       />
//                       Add To Chrome
//                     </a>
//                     <a
//                       href="https://addons.mozilla.org/en-US/firefox/"
//                       target="_blank"
//                       rel="noreferrer noopener"
//                       className="flex items-center px-4 py-2 text-sm text-white"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <img
//                         src={fire || "/placeholder.svg"}
//                         alt="Firefox"
//                         className="h-5 w-5 mr-3"
//                       />
//                       Add To Firefox
//                     </a>
//                   </div>
//                 )}
//               </div>
//               {/* Theme Dropdown Mobile */}
//               <div className="relative z-10">
//                 <button
//                   className="flex items-center text-white  w-full justify-between"
//                   onClick={toggleMobileTheme}
//                 >
//                   Theme
//                   <ChevronDown
//                     className={`ml-1 h-4 w-4 transition-transform ${
//                       mobileThemeOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {mobileThemeOpen && (
//                   <div className="w-full bg-gray-50 rounded-lg mt-2 py-2">
//                     <button
//                       className="block px-4 py-2 text-sm text-white w-full text-left"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Dark Theme
//                     </button>
//                     <button
//                       className="block px-4 py-2 text-sm text-white w-full text-left"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       Light Theme
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/Contact"
//                 className="bg-[#00063F] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors text-center mt-4"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 CONTACT US
//               </Link>
//             </nav>
//           </div>
//         )}

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-10">
//           <div className="relative">
//             <button className="p-2 rounded-lg" onClick={toggleSearch}>
//               <img
//                 src={s1 || "/placeholder.svg"}
//                 alt="Search"
//                 className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//               />
//             </button>
//             <div
//               className={`absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
//                 showSearch
//                   ? "opacity-100 scale-y-100"
//                   : "opacity-0 scale-y-0 pointer-events-none"
//               }`}
//             >
//               <div className="relative p-2">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search over 5000+ AI..."
//                   className="w-full pl-8 pr-8 py-2 text-black border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                   autoFocus={showSearch}
//                 />
//                 <button
//                   onClick={toggleSearch}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//               {/* Search Results */}
//               {showSearch && searchTerm && (
//                 <div className="max-h-60 overflow-y-auto p-2">
//                   {filteredTools.length > 0 ? (
//                     filteredTools.map((tool) => (
//                       <Link
//                         key={tool.path}
//                         to={tool.path}
//                         className="block px-4 py-2 text-sm text-black"
//                         onClick={() => {
//                           setShowSearch(false);
//                           setSearchTerm("");
//                         }}
//                       >
//                         {tool.name}
//                       </Link>
//                     ))
//                   ) : (
//                     <div className="px-4 py-2 text-sm text-black">
//                       No tools found
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           <Link to="/" className="p-2 lg:p-0">
//             <img
//               src={homedark || "/placeholder.svg"}
//               alt="Home"
//               className="h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 transform hover:scale-125"
//             />
//           </Link>

//           <Link to="/About" className="text-white">
//             About
//           </Link>

//           {isSpecialPage ? (
//             <>
//               <Link
//                 to="/Submit"
//                 className={getNavLinkClass(location.pathname === "/Submit")}
//               >
//                 Submit
//               </Link>
//               <Link
//                 to="/Getfeatured"
//                 className={getNavLinkClass(
//                   location.pathname === "/Getfeatured"
//                 )}
//               >
//                 Get Featured
//               </Link>
//             </>
//           ) : (
//             <Link
//               to="/Productfinder"
//               className={getNavLinkClass(
//                 location.pathname === "/Productfinder"
//               )}
//             >
//               Product Finder
//             </Link>
//           )}

//           {/* Categories Dropdown for other pages */}
//           {!isSpecialPage && (
//             <div
//               className="relative"
//               onMouseEnter={() => setFeaturedOpen(true)}
//               onMouseLeave={() => setFeaturedOpen(false)}
//             >
//               <button className="flex items-center text-white">
//                 Categories
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {featuredOpen && (
//                 <div className="absolute top-full w-60 bg-[#273D58] rounded-xl shadow-lg py-2 z-10 text-center">
//                   {tools.map((tool) => (
//                     <Link
//                       key={tool.path}
//                       to={tool.path}
//                       className="block px-4 py-2 text-sm text-white"
//                     >
//                       {tool.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//           {/* Extensions Dropdown Desktop */}
//           <div
//             className="relative"
//             onMouseEnter={() => setExtensionsOpen(true)}
//             onMouseLeave={() => setExtensionsOpen(false)}
//           >
//             <button className="flex items-center text-white">
//               Extensions
//               <ChevronDown className="ml-1 h-4 w-4" />
//             </button>
//             {extensionsOpen && (
//               <div className="absolute top-full w-45 bg-[#273D58] rounded-xl shadow-lg py-2 z-10">
//                 <a
//                   href="https://chrome.google.com/webstore"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-4 py-2 text-sm text-white "
//                 >
//                   <img
//                     src={chrome || "/placeholder.svg"}
//                     alt="Chrome"
//                     className="h-5 w-5 mr-3"
//                   />
//                   Add To Chrome
//                 </a>
//                 <a
//                   href="https://addons.mozilla.org/en-US/firefox/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-4 py-2 text-sm text-white"
//                 >
//                   <img
//                     src={fire || "/placeholder.svg"}
//                     alt="Firefox"
//                     className="h-5 w-5 mr-3"
//                   />
//                   Add To Firefox
//                 </a>
//               </div>
//             )}
//           </div>
//           {/* Theme Dropdown Desktop */}
//           <div
//             className="relative"
//             onMouseEnter={() => setThemeOpen(true)}
//             onMouseLeave={() => setThemeOpen(false)}
//           >
//             <button className="flex items-center text-white ">
//               Theme
//               <ChevronDown className="ml-1 h-4 w-4" />
//             </button>
//             {themeOpen && (
//               <div className="absolute top-full w-41 bg-[#273D58] rounded-xl shadow-lg py-2 z-10">
//                 <button
//                   onClick={() => {
//                     localStorage.removeItem("theme");
//                     localStorage.setItem("theme", "dark");
//                   }}
//                   className="flex items-center gap-2 px-4 py-2 text-sm text-white w-full text-left cursor-pointer hover:bg-[#1f2f45] transition-all"
//                 >
//                   <MdDarkMode size={20} />
//                   <span>Dark Theme</span>
//                 </button>
//                 <button
//                   onClick={() => {
//                     localStorage.removeItem("theme");
//                     localStorage.setItem("theme", "light");
//                   }}
//                   className="flex items-center gap-2 px-4 py-2 text-sm text-white w-full text-left cursor-pointer hover:bg-[#1f2f45] transition-all"
//                 >
//                   <MdOutlineLightMode size={20} />
//                   <span>Light Theme</span>
//                 </button>
//               </div>
//             )}
//           </div>

//           <Link
//             to="/Contact"
//             className="bg-[#D5C7FF] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
//           >
//             CONTACT US
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }









// import { useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";
// import logo from "../image/logo.svg";
// import s1 from "../image/searchicon.svg";
// import homedark from "../image/homedark.svg";
// import chrome from "../image/chrome.svg";
// import fire from "../image/fire.svg";
// import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [featuredOpen, setFeaturedOpen] = useState(false);
//   const [extensionsOpen, setExtensionsOpen] = useState(false);
//   const [mobileFeaturedOpen, setMobileFeaturedOpen] = useState(false);
//   const [mobileExtensionsOpen, setMobileExtensionsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [themeOpen, setThemeOpen] = useState(false);
//   const [mobileThemeOpen, setMobileThemeOpen] = useState(false);

//   const location = useLocation();
//   const isSpecialPage =
//     location.pathname === "/Productfinder" ||
//     location.pathname === "/Getfeatured" ||
//     location.pathname === "/Submit";

//   // List of tools for search filtering
//   const tools = [
//     { name: "Text Tool", path: "/Texttool" },
//     { name: "Image Tool", path: "/Imagetool" },
//     { name: "CSS Tool", path: "/CSStool" },
//     { name: "Coding Tools", path: "/Codingtool" },
//     { name: "Color Tools", path: "/Colortool" },
//     { name: "Social Media Tools", path: "/Socialmediatool" },
//     { name: "Miscellaneous Tools", path: "/Miscellaneoustool" },
//   ];

//   // Filter tools based on search term
//   const filteredTools = tools.filter((tool) =>
//     tool.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Initialize theme on component mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       document.documentElement.classList.toggle("dark", savedTheme === "dark");
//     } else {
//       // Default to system preference if no theme is saved
//       const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//       document.documentElement.classList.toggle("dark", prefersDark);
//       localStorage.setItem("theme", prefersDark ? "dark" : "light");
//     }
//   }, []);

//   const toggleMobileFeatured = (e) => {
//     e.preventDefault();
//     setMobileFeaturedOpen(!mobileFeaturedOpen);
//     setMobileExtensionsOpen(false);
//     setMobileThemeOpen(false);
//   };

//   const toggleMobileExtensions = (e) => {
//     e.preventDefault();
//     setMobileExtensionsOpen(!mobileExtensionsOpen);
//     setMobileFeaturedOpen(false);
//     setMobileThemeOpen(false);
//   };

//   const toggleMobileTheme = (e) => {
//     e.preventDefault();
//     setMobileThemeOpen(!mobileThemeOpen);
//     setMobileFeaturedOpen(false);
//     setMobileExtensionsOpen(false);
//   };

//   const toggleSearch = () => {
//     setShowSearch(!showSearch);
//     if (showSearch) {
//       setSearchTerm("");
//     }
//   };

//   const setTheme = (theme) => {
//     localStorage.setItem("theme", theme);
//     document.documentElement.classList.toggle("dark", theme === "dark");
//   };

//   const getNavLinkClass = (active) => (active ? "text-white" : "text-white");

//   return (
//     <header className="w-full lg-static top-0 left-0 z-50 relative bg-transparent">
//       <div
//         className={`w-full mx-auto px-4 py-3 lg:px-8 flex justify-between items-center ${
//           mobileMenuOpen ? "relative z-50" : ""
//         }`}
//       >
//         {/* Left Section: Logo */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={logo || "/placeholder.svg"}
//             alt="Logo"
//             className="h-8 w-auto"
//           />
//         </Link>

//         {/* Center Icons (Mobile/Tablet only) */}
//         <div className="flex items-center gap-4 lg:hidden">
//           <div className="relative p-1 top-1">
//             <button onClick={toggleSearch}>
//               <img
//                 src={s1 || "/placeholder.svg"}
//                 alt="Search"
//                 className="h-6 w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//               />
//             </button>
//             <div
//               className={`absolute right-[-90px] top-full mt-2 w-64 rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top ${
//                 showSearch
//                   ? "opacity-100 scale-y-100"
//                   : "opacity-0 scale-y-0 pointer-events-none"
//               }`}
//             >
//               <div className="relative p-2">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search over 5000+ AI..."
//                   className="w-full pl-8 pr-8 py-2 text-sm border bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                   autoFocus={showSearch}
//                 />
//                 <button
//                   onClick={toggleSearch}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//               {/* Search Results */}
//               {showSearch && searchTerm && (
//                 <div className="max-h-60 overflow-y-hidden p-10">
//                   {filteredTools.length > 0 ? (
//                     filteredTools.map((tool) => (
//                       <Link
//                         key={tool.path}
//                         to={tool.path}
//                         className="block px-4 py-2 text-sm text-black"
//                         onClick={() => {
//                           setShowSearch(false);
//                           setSearchTerm("");
//                           setMobileMenuOpen(false);
//                         }}
//                       >
//                         {tool.name}
//                       </Link>
//                     ))
//                   ) : (
//                     <div className="px-4 py-2 text-sm text-black">
//                       No tools found
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//           <Link to="/" className="p-1">
//             <img
//               src={homedark || "/placeholder.svg"}
//               alt="Home"
//               className="h-6 w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//             />
//           </Link>
//         </div>

//         {/* Hamburger Menu (Mobile/Tablet) */}
//         <div className="lg:hidden">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? (
//               <X className="h-6 w-6 text-white" />
//             ) : (
//               <Menu className="h-6 w-6 text-white" />
//             )}
//           </button>
//         </div>

//         {/* Mobile/Tablet Menu */}
//         {mobileMenuOpen && (
//           <div className="fixed inset-0 bg-[#16283E] z-40 lg:hidden">
//             <div className="flex justify-between items-center p-4">
//               <Link
//                 to="/"
//                 className="flex"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <img
//                   src={logo || "/placeholder.svg"}
//                   alt="Logo"
//                   className="h-8 w-auto"
//                 />
//               </Link>
//               <button
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="p-2 rounded-full hover:bg-gray-100"
//               >
//                 <X className="h-6 w-6 text-white" />
//               </button>
//             </div>
//             <nav className="px-4 py-6 flex flex-col space-y-4">
//               <Link
//                 to="/About"
//                 className="text-white"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 About
//               </Link>
//               {isSpecialPage ? (
//                 <>
//                   <Link
//                     to="/Submit"
//                     className={getNavLinkClass(location.pathname === "/Submit")}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Submit
//                   </Link>
//                   <Link
//                     to="/Getfeatured"
//                     className={getNavLinkClass(
//                       location.pathname === "/Getfeatured"
//                     )}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     Get Featured
//                   </Link>
//                 </>
//               ) : (
//                 <Link
//                   to="/Productfinder"
//                   className={getNavLinkClass(
//                     location.pathname === "/Productfinder"
//                   )}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   Product Finder
//                 </Link>
//               )}
//               {/* Categories Dropdown for other pages */}
//               {!isSpecialPage && (
//                 <div className="relative z-10">
//                   <button
//                     className="flex items-center text-white w-full justify-between"
//                     onClick={toggleMobileFeatured}
//                   >
//                     Categories
//                     <ChevronDown
//                       className={`ml-1 h-4 w-4 transition-transform ${
//                         mobileFeaturedOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                   {mobileFeaturedOpen && (
//                     <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
//                       {tools.map((tool) => (
//                         <Link
//                           key={tool.path}
//                           to={tool.path}
//                           className="block px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {tool.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               )}
//               {/* Extensions Dropdown Mobile */}
//               <div className="relative z-10">
//                 <button
//                   className="flex items-center text-white w-full justify-between"
//                   onClick={toggleMobileExtensions}
//                 >
//                   Extensions
//                   <ChevronDown
//                     className={`ml-1 h-4 w-4 transition-transform ${
//                       mobileExtensionsOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {mobileExtensionsOpen && (
//                   <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
//                     <a
//                       href="https://chrome.google.com/webstore"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <img
//                         src={chrome || "/placeholder.svg"}
//                         alt="Chrome"
//                         className="h-5 w-5 mr-3"
//                       />
//                       Add To Chrome
//                     </a>
//                     <a
//                       href="https://addons.mozilla.org/en-US/firefox/"
//                       target="_blank"
//                       rel="noreferrer noopener"
//                       className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <img
//                         src={fire || "/placeholder.svg"}
//                         alt="Firefox"
//                         className="h-5 w-5 mr-3"
//                       />
//                       Add To Firefox
//                     </a>
//                   </div>
//                 )}
//               </div>
//               {/* Theme Dropdown Mobile */}
//               <div className="relative z-10">
//                 <button
//                   className="flex items-center text-white w-full justify-between"
//                   onClick={toggleMobileTheme}
//                 >
//                   Theme
//                   <ChevronDown
//                     className={`ml-1 h-4 w-4 transition-transform ${
//                       mobileThemeOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {mobileThemeOpen && (
//                   <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
//                     <button
//                       className="flex items-center gap-2 px-4 py-2 text-sm text-white w-full text-left hover:bg-[#1f2f45]"
//                       onClick={() => {
//                         setTheme("dark");
//                         setMobileMenuOpen(false);
//                       }}
//                     >
//                       <MdDarkMode size={20} />
//                       <span>Dark Theme</span>
//                     </button>
//                     <button
//                       className="flex items-center gap-2 px-4 py-2 text-sm text-white w-full text-left hover:bg-[#1f2f45]"
//                       onClick={() => {
//                         setTheme("light");
//                         setMobileMenuOpen(false);
//                       }}
//                     >
//                       <MdOutlineLightMode size={20} />
//                       <span>Light Theme</span>
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/Contact"
//                 className="bg-[#D5C7FF] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors text-center mt-4"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 CONTACT US
//               </Link>
//             </nav>
//           </div>
//         )}

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-10">
//           <div className="relative">
//             <button className="p-2 rounded-lg" onClick={toggleSearch}>
//               <img
//                 src={s1 || "/placeholder.svg"}
//                 alt="Search"
//                 className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer transition-transform duration-300 transform hover:scale-125"
//               />
//             </button>
//             <div
//               className={`absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
//                 showSearch
//                   ? "opacity-100 scale-y-100"
//                   : "opacity-0 scale-y-0 pointer-events-none"
//               }`}
//             >
//               <div className="relative p-2">
//                 <input
//                   type="text"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   placeholder="Search over 5000+ AI..."
//                   className="w-full pl-8 pr-8 py-2 text-sm text-black border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//                   autoFocus={showSearch}
//                 />
//                 <button
//                   onClick={toggleSearch}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//               {/* Search Results */}
//               {showSearch && searchTerm && (
//                 <div className="max-h-60 overflow-y-auto p-2">
//                   {filteredTools.length > 0 ? (
//                     filteredTools.map((tool) => (
//                       <Link
//                         key={tool.path}
//                         to={tool.path}
//                         className="block px-4 py-2 text-sm text-black"
//                         onClick={() => {
//                           setShowSearch(false);
//                           setSearchTerm("");
//                         }}
//                       >
//                         {tool.name}
//                       </Link>
//                     ))
//                   ) : (
//                     <div className="px-4 py-2 text-sm text-black">
//                       No tools found
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           <Link to="/" className="p-2 lg:p-0">
//             <img
//               src={homedark || "/placeholder.svg"}
//               alt="Home"
//               className="h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 transform hover:scale-125"
//             />
//           </Link>

//           <Link to="/About" className="text-white">
//             About
//           </Link>

//           {isSpecialPage ? (
//             <>
//               <Link
//                 to="/Submit"
//                 className={getNavLinkClass(location.pathname === "/Submit")}
//               >
//                 Submit
//               </Link>
//               <Link
//                 to="/Getfeatured"
//                 className={getNavLinkClass(
//                   location.pathname === "/Getfeatured"
//                 )}
//               >
//                 Get Featured
//               </Link>
//             </>
//           ) : (
//             <Link
//               to="/Productfinder"
//               className={getNavLinkClass(
//                 location.pathname === "/Productfinder"
//               )}
//             >
//               Product Finder
//             </Link>
//           )}

//           {/* Categories Dropdown for other pages */}
//           {!isSpecialPage && (
//             <div
//               className="relative"
//               onMouseEnter={() => setFeaturedOpen(true)}
//               onMouseLeave={() => setFeaturedOpen(false)}
//             >
//               <button className="flex items-center text-white">
//                 Categories
//                 <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {featuredOpen && (
//                 <div className="absolute top-full w-60 bg-[#273D58] rounded-xl shadow-lg py-2 z-10 text-center">
//                   {tools.map((tool) => (
//                     <Link
//                       key={tool.path}
//                       to={tool.path}
//                       className="block px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
//                     >
//                       {tool.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//           {/* Extensions Dropdown Desktop */}
//           <div
//             className="relative"
//             onMouseEnter={() => setExtensionsOpen(true)}
//             onMouseLeave={() => setExtensionsOpen(false)}
//           >
//             <button className="flex items-center text-white">
//               Extensions
//               <ChevronDown className="ml-1 h-4 w-4" />
//             </button>
//             {extensionsOpen && (
//               <div className="absolute top-full w-45 bg-[#273D58] rounded-xl shadow-lg py-2 z-10">
//                 <a
//                   href="https://chrome.google.com/webstore"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
//                 >
//                   <img
//                     src={chrome || "/placeholder.svg"}
//                     alt="Chrome"
//                     className="h-5 w-5 mr-3"
//                   />
//                   Add To Chrome
//                 </a>
//                 <a
//                   href="https://addons.mozilla.org/en-US/firefox/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
//                 >
//                   <img
//                     src={fire || "/placeholder.svg"}
//                     alt="Firefox"
//                     className="h-5 w-5 mr-3"
//                   />
//                   Add To Firefox
//                 </a>
//               </div>
//             )}
//           </div>
//           {/* Theme Dropdown Desktop */}
//           <div
//             className="relative"
//             onMouseEnter={() => setThemeOpen(true)}
//             onMouseLeave={() => setThemeOpen(false)}
//           >
//             <button className="flex items-center text-white">
//               Theme
//               <ChevronDown className="ml-1 h-4 w-4" />
//             </button>
//             {themeOpen && (
//               <div className="absolute top-full w-41 bg-[#273D58] rounded-xl shadow-lg py-2 z-10">
//                 <button
//                   onClick={() => setTheme("dark")}
//                   className="flex items-center gap-2 px-4 py-2 text-sm text-white w-full text-left cursor-pointer hover:bg-[#1f2f45] transition-all"
//                 >
//                   <MdDarkMode size={20} />
//                   <span>Dark Theme</span>
//                 </button>
//                 <button
//                   onClick={() => setTheme("light")}
//                   className="flex items-center gap-2 px-4 py-2 text-sm text-white w-full text-left cursor-pointer hover:bg-[#1f2f45] transition-all"
//                 >
//                   <MdOutlineLightMode size={20} />
//                   <span>Light Theme</span>
//                 </button>
//               </div>
//             )}
//           </div>

//           <Link
//             to="/Contact"
//             className="bg-[#D5C7FF] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
//           >
//             CONTACT US
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }


import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../image/logo.svg";
import s1 from "../image/searchicon.svg";
import homedark from "../image/homedark.svg";
import chrome from "../image/chrome.svg";
import fire from "../image/fire.svg";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuredOpen, setFeaturedOpen] = useState(false);
  const [extensionsOpen, setExtensionsOpen] = useState(false);
  const [mobileFeaturedOpen, setMobileFeaturedOpen] = useState(false);
  const [mobileExtensionsOpen, setMobileExtensionsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const location = useLocation();
  const isSpecialPage =
    location.pathname === "/Productfinder" ||
    location.pathname === "/Getfeatured" ||
    location.pathname === "/Submit";

  // List of tools for search filtering
  const tools = [
    { name: "Text Tool", path: "/Texttool" },
    { name: "Image Tool", path: "/Imagetool" },
    { name: "CSS Tool", path: "/CSStool" },
    { name: "Coding Tools", path: "/Codingtool" },
    { name: "Color Tools", path: "/Colortool" },
    { name: "Social Media Tools", path: "/Socialmediatool" },
    { name: "Miscellaneous Tools", path: "/Miscellaneoustool" },
  ];

  // Filter tools based on search term
  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      setIsDarkTheme(savedTheme === "dark");
    } else {
      // Default to system preference if no theme is saved
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
      setIsDarkTheme(prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleMobileFeatured = (e) => {
    e.preventDefault();
    setMobileFeaturedOpen(!mobileFeaturedOpen);
    setMobileExtensionsOpen(false);
  };

  const toggleMobileExtensions = (e) => {
    e.preventDefault();
    setMobileExtensionsOpen(!mobileExtensionsOpen);
    setMobileFeaturedOpen(false);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchTerm("");
    }
  };

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDarkTheme(!isDarkTheme);
  };

  const getNavLinkClass = (active) => (active ? "text-white" : "text-white");

  return (
    <header className="w-full lg-static top-0 left-0 z-50 relative bg-transparent">
      <div
        className={`w-full mx-auto px-4 py-3 lg:px-8 flex justify-between items-center ${
          mobileMenuOpen ? "relative z-50" : ""
        }`}
      >
        {/* Left Section: Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo || "/placeholder.svg"}
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Center Icons (Mobile/Tablet only) */}
        <div className="flex items-center gap-4 lg:hidden">
          <div className="relative p-1 top-1">
            <button onClick={toggleSearch}>
              <img
                src={s1 || "/placeholder.svg"}
                alt="Search"
                className="h-6 w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125"
              />
            </button>
            <div
              className={`absolute right-[-90px] top-full mt-2 w-64 rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top ${
                showSearch
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-0 pointer-events-none"
              }`}
            >
              <div className="relative p-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search over 5000+ AI..."
                  className="w-full pl-8 pr-8 py-2 text-sm border bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                  autoFocus={showSearch}
                />
                <button
                  onClick={toggleSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              {/* Search Results */}
              {showSearch && searchTerm && (
                <div className="max-h-60 overflow-y-hidden p-10">
                  {filteredTools.length > 0 ? (
                    filteredTools.map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        className="block px-4 py-2 text-sm text-black"
                        onClick={() => {
                          setShowSearch(false);
                          setSearchTerm("");
                          setMobileMenuOpen(false);
                        }}
                      >
                        {tool.name}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-black">
                      No tools found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <Link to="/" className="p-1">
            <img
              src={homedark || "/placeholder.svg"}
              alt="Home"
              className="h-6 w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125"
            />
          </Link>
        </div>

        {/* Hamburger Menu (Mobile/Tablet) */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#16283E] z-40 lg:hidden">
            <div className="flex justify-between items-center p-4">
              <Link
                to="/"
                className="flex"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img
                  src={logo || "/placeholder.svg"}
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="px-4 py-6 flex flex-col space-y-4">
              <Link
                to="/About"
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              {isSpecialPage ? (
                <>
                  <Link
                    to="/Submit"
                    className={getNavLinkClass(location.pathname === "/Submit")}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Submit
                  </Link>
                  <Link
                    to="/Getfeatured"
                    className={getNavLinkClass(
                      location.pathname === "/Getfeatured"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Featured
                  </Link>
                </>
              ) : (
                <Link
                  to="/Productfinder"
                  className={getNavLinkClass(
                    location.pathname === "/Productfinder"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Product Finder
                </Link>
              )}
              {/* Categories Dropdown for other pages */}
              {!isSpecialPage && (
                <div className="relative z-10">
                  <button
                    className="flex items-center text-white w-full justify-between"
                    onClick={toggleMobileFeatured}
                  >
                    Categories
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        mobileFeaturedOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileFeaturedOpen && (
                    <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
                      {tools.map((tool) => (
                        <Link
                          key={tool.path}
                          to={tool.path}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {tool.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {/* Extensions Dropdown Mobile */}
              <div className="relative z-10">
                <button
                  className="flex items-center text-white w-full justify-between"
                  onClick={toggleMobileExtensions}
                >
                  Extensions
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      mobileExtensionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExtensionsOpen && (
                  <div className="w-full bg-[#273D58] rounded-lg mt-2 py-2">
                    <a
                      href="https://chrome.google.com/webstore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <img
                        src={chrome || "/placeholder.svg"}
                        alt="Chrome"
                        className="h-5 w-5 mr-3"
                      />
                      Add To Chrome
                    </a>
                    <a
                      href="https://addons.mozilla.org/en-US/firefox/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <img
                        src={fire || "/placeholder.svg"}
                        alt="Firefox"
                        className="h-5 w-5 mr-3"
                      />
                      Add To Firefox
                    </a>
                  </div>
                )}
              </div>
              {/* Theme Toggle Mobile */}
              <button
                className="flex items-center text-white w-full justify-between"
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
              >
                {isDarkTheme ? (
                  <div className="flex items-center gap-2">
                    <MdOutlineLightMode size={20} />
                    <span>Light Theme</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <MdDarkMode size={20} />
                    <span>Dark Theme</span>
                  </div>
                )}
              </button>

              <Link
                to="/Contact"
                className="bg-[#D5C7FF] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-10">
          <div className="relative">
            <button className="p-2 rounded-lg" onClick={toggleSearch}>
              <img
                src={s1 || "/placeholder.svg"}
                alt="Search"
                className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer transition-transform duration-300 transform hover:scale-125"
              />
            </button>
            <div
              className={`absolute left-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
                showSearch
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-0 pointer-events-none"
              }`}
            >
              <div className="relative p-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search over 5000+ AI..."
                  className="w-full pl-8 pr-8 py-2 text-sm text-black border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                  autoFocus={showSearch}
                />
                <button
                  onClick={toggleSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              {/* Search Results */}
              {showSearch && searchTerm && (
                <div className="max-h-60 overflow-y-auto p-2">
                  {filteredTools.length > 0 ? (
                    filteredTools.map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        className="block px-4 py-2 text-sm text-black"
                        onClick={() => {
                          setShowSearch(false);
                          setSearchTerm("");
                        }}
                      >
                        {tool.name}
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-black">
                      No tools found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <Link to="/" className="p-2 lg:p-0">
            <img
              src={homedark || "/placeholder.svg"}
              alt="Home"
              className="h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 transform hover:scale-125"
            />
          </Link>

          <Link to="/About" className="text-white">
            About
          </Link>

          {isSpecialPage ? (
            <>
              <Link
                to="/Submit"
                className={getNavLinkClass(location.pathname === "/Submit")}
              >
                Submit
              </Link>
              <Link
                to="/Getfeatured"
                className={getNavLinkClass(
                  location.pathname === "/Getfeatured"
                )}
              >
                Get Featured
              </Link>
            </>
          ) : (
            <Link
              to="/Productfinder"
              className={getNavLinkClass(
                location.pathname === "/Productfinder"
              )}
            >
              Product Finder
            </Link>
          )}

          {/* Categories Dropdown for other pages */}
          {!isSpecialPage && (
            <div
              className="relative"
              onMouseEnter={() => setFeaturedOpen(true)}
              onMouseLeave={() => setFeaturedOpen(false)}
            >
              <button className="flex items-center text-white cursor-pointer">
                Categories
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {featuredOpen && (
                <div className="absolute top-full w-60 bg-[#273D58] rounded-xl shadow-lg py-2 z-10 text-center">
                  {tools.map((tool) => (
                    <Link
                      key={tool.path}
                      to={tool.path}
                      className="block px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
          {/* Extensions Dropdown Desktop */}
          {/* <div
            className="relative"
            onMouseEnter={() => setExtensionsOpen(true)}
            onMouseLeave={() => setExtensionsOpen(false)}
          >
            <button className="flex items-center text-white cursor-pointer">
              Extensions
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {extensionsOpen && (
              <div className="absolute top-full w-45 bg-[#273D58] rounded-xl shadow-lg py-2 z-10">
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
                >
                  <img
                    src={chrome || "/placeholder.svg"}
                    alt="Chrome"
                    className="h-5 w-5 mr-3"
                  />
                  Add To Chrome
                </a>
                <a
                  href="https://addons.mozilla.org/en-US/firefox/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm text-white hover:bg-[#1f2f45]"
                >
                  <img
                    src={fire || "/placeholder.svg"}
                    alt="Firefox"
                    className="h-5 w-5 mr-3"
                  />
                  Add To Firefox
                </a>
              </div>
            )}
          </div> */}
          {/* Theme Toggle Desktop */}
          <button
            className="flex items-center text-white"
            onClick={toggleTheme}
          >
            {isDarkTheme ? (
              <MdOutlineLightMode size={20} className="transition-transform duration-300 transform hover:scale-150 cursor-pointer" />
            ) : (
              <MdDarkMode size={20} className="transition-transform duration-300 transform hover:scale-150 cursor-pointer" />
            )}
          </button>

          <Link
            to="/Contact"
            className="bg-[#D5C7FF] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  );
}