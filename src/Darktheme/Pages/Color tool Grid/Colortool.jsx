import arror from "../../../image/arror.svg";
// import ston from '../../image/ston.svg';
import Colortool1 from '../Color tool Grid/Colortool1';
import Information from "../../../Darktheme/Information"
import Oval2 from "../../../image/Oval2.svg";
import leaf1 from "../../../image/leaf1.svg";
import Navbar from "../../Navbar";
import Footer from "../../../Darktheme/Footer";
import search from "../../../image/search.svg";

function Colortool() {
  return (
    <>
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

        {/* image grid section */}
        <Information title="Online Color  Tools For Free" description="Looking for the best online social media tools to help you grow your online presence? Look no further than 10015.io. Our social media tools are designed to help you save time and engage with your audience easily. And best of all, they're free!" buttonText="EXPLORE TOOL" buttonText1="LOGIN / REGISTER" buttonText2="SIGN IN" srcImg={arror} srcImg1={search} exploreLinkState={{ scrollTo: 'featured-tools' }}
        />


        <Colortool1 />
      </div>
       <div className="bg-[#16283E]">
      <Footer />
      </div>
      </div>

    </>
  )
}

export default Colortool;