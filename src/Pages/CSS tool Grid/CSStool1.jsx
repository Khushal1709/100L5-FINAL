import arrowIcon from "../../image/arrowIcon.svg";
import arrowIcon2 from "../../image/arrowIcon2.svg";
import whishlist from "../../image/whishlist.svg"; // wishlist icon
import whishlist2 from "../../image/whishlist2.svg";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { LuLoader } from "react-icons/lu";
import { TbBackground } from "react-icons/tb";
 import { LuSpline } from "react-icons/lu";
import { IoMdPhonePortrait } from "react-icons/io";
import { CgGoogle } from "react-icons/cg";
import { MdGradient } from "react-icons/md";
import { IoTriangleSharp } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { AiOutlineRadiusUpright } from "react-icons/ai";

const tools = [
  {
    title: "CSS Clip Path Generator",
    description:
      "Generate CSS clip-path with different patterns and use clip-path property in your projects",
    icon:<MdOutlineDocumentScanner className='w-[200px] h-[60px] text-indigo-400' />
  },
  {
    title: "CSS Loader Generator",
    description:
      "Generate fancy CSS loaders by specifying the type,color, and sizeo of the loading indicator",
    icon:<LuLoader className='w-[200px] h-[60px] text-indigo-400' />
  },
  {
    title: "CSS Background Pattern Generator",
    description:
      "Generate beautiful CSS-only background patterns with and use it in your projects right away",
    icon:<TbBackground className='w-[200px] h-[60px] text-indigo-400' />
  },
  {
    title: "CSS Cubic Bezier Generator",
    description:
      "Generate CSS cubic Bezier easing functions by previewing animation and time-progress graph",
    icon:<LuSpline className='w-[200px] h-[60px] text-indigo-400' />
  },
  {
    title: "CSS Glassmorphism Generator",
    description:
      "Generate CSS for applying frosted-glass effect on your HTML elements by using background blur",
    icon:<IoMdPhonePortrait className='w-[200px] h-[60px] text-indigo-400' />
  },
  {
    title: "CSS Text Glitch Effect Generator",
    description:
      "Generate CSS text glitch effect and create fancy text animations by using pure CSS",
    icon:<CgGoogle className='w-[200px] h-[60px] text-indigo-400' />
  },
  {
    title: "CSS Gradient Generator",
    description:
      "Generate beautiful CSS gradients either by using presets or customizing your own",
    icon:<MdGradient className='w-[200px] h-[60px] text-indigo-400' />
  },
  {
    title: "CSS Triangle Generator",
    description:
      "Generate CSS Code for triangles shapes with desired width, height and color",
    icon:<IoTriangleSharp className='w-[200px] h-[60px] text-indigo-400' />
  },
  {
    title: "CSS Box Shadow Generator",
    description:
      "Generate CSS Code for box shadows while previewing it for box,circle or header design",
    icon:<FaBoxArchive className='w-[200px] h-[60px] text-indigo-400' />
  },
  {
    title: "CSS Border Radius Generator",
    description:
      "Generate advanced CSS border radius to shape your HTML elements corners individually", 
    icon:<AiOutlineRadiusUpright className='w-[200px] h-[60px] text-indigo-400' />
  },
];

function CSStools1() {
  return (
    <div>
      <div className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
        <h2
          style={{ fontFamily: "David Libre" }}
          className="text-2xl md:text-4xl font-semibold text-center text-[#1F2B56] mb-2"
        >
          CSS Tools
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Smart Tools. Simple Solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="relative rounded-2xl shadow-md cursor-pointer  p-6 bg-[#F6F5F8]  flex flex-col justify-between transition-all duration-300"
            >
              {/* Wishlist Icon */}
              <div className="group raltive">
                <img
                  src={whishlist}
                  alt="Wishlist"
                  className="absolute top-4 right-4 w-5 h-5 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={whishlist2}
                  alt="Wishlist"
                  className="absolute top-4 right-4 w-5 h-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>

              {/* Tool Icon with background */}
             <div className="rounded-md flex items-center justify-center mb-4">
                {/* <img src={tool.icon} alt="Tool Icon" className="w-auto h-16" /> */}
                <div  alt="Tool Icon" className="">{tool.icon} </div>
              </div>

              {/* Title */}
              <h3 className="text-center font-semibold text-[#1F2B56] mb-2 break-words">
                {tool.title}
              </h3>

              {/* Description */}
              <p className="text-center text-gray-600  mb-8">{tool.description}</p>

              {/* Arrow Button */}
              <div className="group absolute bottom-5.5 right-1">
                <div className="relative w-28 h-10 flex items-center justify-center bg-gray-100 rounded-full z-0">
                  <img
                    src={arrowIcon}
                    alt="Arrow"
                    className="absolute inset-0 m-auto transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={arrowIcon2}
                    alt="Arrow"
                    className="absolute inset-0 m-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100 "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CSStools1;
