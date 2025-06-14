import arror from "../../../image/arror.svg";
// import ston from "../../image/ston.svg";
import Information from "../../../Darktheme/Information"
import Codingtool1 from "./Codingtool1";

import Navbar from "../../Navbar";
import Footer from "../../../Darktheme/Footer";
import Oval2 from "../../../image/Oval2.svg";
import leaf1 from "../../../image/leaf1.svg";
import coding from "../../../image/coding.svg";

function Codingtool() {
  return (
    <>
        <div className="bg-[#16283E]">

    <div className="bg-[#16283E]">
      <div className="absolute h-[500px] hidden lg:block left-80 top-0 bottom-120 inset-0 overflow-hidden z-0 lg:left-0 2xl:right-100 ">
        <img
          src={Oval2}
          alt="Background"
          className="w-150 h-auto object-cover "
        />
      </div>
      {/* <div
        className="absolute inset-0 w-140 left-280 top-[-50px] hidden lg:block md:left-150 lg:left-115 xl:left-230 2xl:left-[63%] "
        style={{ zIndex: -1 }}
      >
        <img
          src={ston}
          alt="Background Shape"
          className="w-full h-auto object-cover"
        />
      </div> */}
      <Navbar />
      <img
        src={leaf1}
        alt="leav"
        className="top-15 absolute hidden lg:block"
      />
      <div>
        <div>
          <Information
            title="Online  Coding  Tools For Free"
            description="There are a lot of great online coding tools out there, but it can be tough to know which ones are the best.That's why we've put together the best coding tools available online, so you can get started on your next project with confidence."
            buttonText="EXPLORE TOOL"
            buttonText1="LOGIN / REGISTER"
            buttonText2="SIGN IN"
            srcImg={arror}
            srcImg1={coding}
            exploreLinkState={{ scrollTo: 'featured-tools' }}

          />

          {/* image grid section */}

          <Codingtool1 />
        </div>
      </div>
       <div className="bg-[#16283E]">
      <Footer />
      </div>
    </div>
          </div>

    </>
  );
}

export default Codingtool;


