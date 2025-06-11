import explore1 from "../image/explore1.svg";
import finder1 from "../image/finder1.svg";
import Contact from "../image/Contact.svg";
import Support from "./Support";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ston from "../image/ston.svg";
import Oval2 from "../image/Oval2.svg";
import leaf1 from "../image/leaf1.svg";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const exploreLinkState = {
    scrollTo: "featured-tools",
    fromContactPage: true,
    message: "Navigated from Contact Section",
  };

  return (
    <>
      <div className="relative bg-[#16283E]">
        {/* Background Image - Hidden on mobile/tablet, visible on lg screens */}
        {/* <div className="absolute hidden lg:block left-80 top-0 bottom-120 inset-0 overflow-hidden z-0 lg:left-0 2xl:right-100 ">
          <img
            src={Oval2}
            alt="Background"
            className="w-150 h-auto object-cover "
          />
          <img
            src={leaf1}
            alt="leav"
            className="top-15 absolute hidden lg:block"
          />
        </div> */}
        {/* <div
          className="absolute inset-0 w-140 left-280 top-[-50px] hidden lg:block md:left-150 lg:left-115 xl:left-230 2xl:left-[63%]"
          style={{ zIndex: 1 }}
        >
          <img
            src={ston || "/placehol der.svg"}
            alt="Background Shape"
            className="w-full h-auto object-cover"
          />
        </div> */}
        <Navbar />
        <div className=" max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 ">
          <div className="py-12 flex flex-col lg:flex-row items-center justify-between relative z-10 ">
            <div className="flex-1 text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Contact us
              </h1>
              <p className="text-white text-base sm:text-lg">
                You can contact via email for your issues related with 10015.io.
                You can give feedback about current tools or suggest new tools
                that you want to see on 10015 Tools.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                <div className="relative inline-flex items-center">
                  <Link to="/" state={exploreLinkState}>
                    <button
                      className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] 
  font-bold px-6 sm:px-8 py-2 rounded-full shadow-md whitespace-nowrap"
                    >
                      EXPLORE TOOL
                    </button>
                  </Link>
                  <img
                    src={explore1}
                    alt="Arrow Icon"
                    className="absolute right-[-10px] w-5 h-5 sm:w-6 sm:h-6  hover:scale-150 transition-transform"
                  />
                </div>
                <div className="relative inline-flex items-center">
                  <Link to="/Productfinder">
                    {" "}
                    <button
                      className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] 
 font-bold px-6 py-2 rounded-full shadow-md whitespace-nowrap"
                    >
                      PRODUCT FINDER
                    </button>
                  </Link>
                  <img
                    src={finder1}
                    alt="Finder Icon"
                    className="absolute -top-1 -right-2 w-5 h-5 sm:w-6 sm:h-6 hover:scale-150 transition-transform"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col items-center space-y-3 md:mx-auto lg:mx-25">
                  <Link to="/Signup">
                    <button className="bg-[#273D58] px-8 py-2 rounded-full text-white font-semibold shadow-md whitespace-nowrap cursor-pointer">
                      LOGIN / REGISTER
                    </button>
                  </Link>
                  <Link to="/Signup">
                    {/* <button className="text-red-600 font-semibold cursor-pointer hover:underline select-none">
                      SIGN IN
                    </button> */}
                  </Link>
                </div>

                {/* <div className="text-center ">
                  <p className="text-sm text-gray-500 mb-2 max-w-xs mx-auto sm:mx-0">
                    Get the extension and access all tools with just one click
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-gray-300" />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
                      alt="Chrome"
                      className="w-6 h-6"
                    />
                    <img src={firefox} alt="Firefox" className="w-6 h-6" />
                    <div className="h-px w-12 bg-gray-300" />
                  </div>
                </div> */}
              </div>
            </div>

            <div className="flex-1 flex justify-center max-w-md w-full">
              <img
                src={Contact}
                alt="Illustration"
                className="hidden lg:block w-full max-w-xs sm:max-w-sm md:max-w-md"
              />
              <div
                className="
                  hidden xl:block  2xl:block lg:block
                  absolute
                  xl:right-[-40px]  top-1/4   2xl:right-[-80px] lg:right-[-30px]
                  -translate-y-1/2
                  w-190  h-100
                  rounded-full
                  bg-gradient-to-br from-[#1F2B56] to-[#ffffff]     
                 blur-3xl
                  opacity-35
                  z-0
                "
                aria-hidden="true"
              />
            </div>
          </div>
          <Support />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactSection;
