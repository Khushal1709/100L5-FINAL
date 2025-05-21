import { FaChevronDown } from "react-icons/fa";
import { IoText, IoImages } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { BiSolidColorFill } from "react-icons/bi";
import { TbSocial } from "react-icons/tb";
import { MdOutlineContentPaste } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { VscCaseSensitive } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";
import { BsQrCode } from "react-icons/bs";
import { BiSolidLock } from "react-icons/bi";
import { ImBarcode } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { BsScissors } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { TbTransform } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";
import { IoColorFilterOutline } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSwatchbook } from "react-icons/fa";
import { HiCircleStack } from "react-icons/hi2";

export default function Sidebar() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdownKey, setOpenDropdownKey] = useState(null);
  const [selectedTool, setSelectedTool] = useState("");

  const toggleDropdown = (key) => {
    setOpenDropdownKey(prev => (prev === key ? null : key));
  };

  const [favoriteTools, setFavoriteTools] = useState([]);
  
  const addToFavorites = (tool) => {
  setFavoriteTools(prev => {
    if (!prev.find(t => t.label === tool.label)) {
      return [...prev, tool];
    }
    return prev;
  });
};

  const sections = [
   {
  key: "favorite",
  icon: <IoText />,
  label: "Favorite Tools",
  items: favoriteTools,
},
    {
      key: "text",
      icon: <IoText />,
      label: "Text Tools",
      items: [
        { label: "Case Converter", icon: <VscCaseSensitive />, link: "/caseconverter" },
        { label: "Lorem Ipsum Generator", icon: <MdOutlineContentPaste />, link: "/lorem" },
        { label: "Letter Counter", icon: <SlEnvolopeLetter />, link: "/letter" },
        { label: "Text to Handwriting", icon: <TbTransform />, link: "/Text" },
        { label: "Bionic Reading Converter", icon: <FaBookReader />, link: "/BionicReading" },
        { label: "Multiple Whitespace Remove", icon: <BsScissors />, link: "/Whitespace" },
        { label: "Google Fonts Pair Finder", icon: <MdGroups />, link: "/Googlefont" },
      ],
    },
    {
      key: "image",
      icon: <IoImages />,
      label: "Image Tools",
      items: [
        { label: "Photo Censor", icon: <VscCaseSensitive />, link: "/ImageCensor" },
         { label: "Image Resizer", icon: <VscCaseSensitive />, link: "/Resizer" },
          { label: "SVG to PNG Converter", icon: <VscCaseSensitive />, link: "/Svgpng" },
      ],
    },
    {
      key: "css",
      icon: <IoLogoCss3 />,
      label: "CSS Tools",
      items: [{ label: "Coming Soon...", icon: <IoLogoCss3 /> }],
    },
    {
      key: "coding",
      icon: <FaCode />,
      label: "Coding Tools",
      items: [ { label: "Code to Image Generator", icon:  <FaBrain />, link: "/CodetoImage" },
                { label: "URL Slug Generator", icon:  <FaBrain />, link: "/Slug" },
                  { label: "React Native Shadow Generator", icon:  <FaBrain />, link: "/Shadow" },
                    { label: "Base64 Encoder Decoder Generator", icon:  <FaBrain />, link: "/BaseEncoderDecoder" },
      ],
    },
    {
      key: "color",
      icon: <BiSolidColorFill />,
      label: "Color Tools",
     items: [
        { label: "AI Color Palette Generator", icon:  <FaBrain />, link: "/AIColor" },
        { label: "HEX to RGBA Converter", icon:  <IoColorFilterOutline />, link: "/HEX" },
        { label: "RGBA to HEX Converter", icon:  <FaHashtag />, link: "/RGBA" },
        { label: "Color Mixer", icon:  <HiCircleStack />, link: "/ColorMixer" },
        { label: "Color Shades Generator", icon:<FaSwatchbook/>, link: "/ColorShades" },
      ],
    },
    {
      key: "social",
      icon: <TbSocial />,
      label: "Social Media Tools",
      items: [{ label: "Coming Soon...", icon: <TbSocial /> }],
    },
    {
      key: "misc",
      icon: <IoIosSettings />,
      label: "Miscellaneous Tools",
      items: [
        { label: "Strong Random Password Generator", icon: <BiSolidLock />, link: "/StrongRandom" },
        { label: "List Randomizer", icon: <SlEnvolopeLetter />, link: "/Randomizer" },
        { label: "QR Code Generator", icon: <BsQrCode />, link: "/QRcode" },
          { label: "Bar Code Generator", icon: <ImBarcode />, link: "/Barcode" },
      ],
    },
  ];

  return (
  <div className="flex flex-col md:flex-row h-screen overflow-hidden ">
    {/* Mobile Topbar */}
    <div className="md:hidden bg-white border-b border-gray-200 p-2 flex justify-between items-center fixed top-0 left-0 right-0 z-20">
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600">
        <FaChevronDown
          className={`transition-transform duration-200 mt-15 ${sidebarOpen ? "rotate-180" : ""}`}
          size={22}
        />
      </button>
      <span className="font-bold text-lg mt-15">Toolbox</span>
      <div />
    </div>

    {/* Sidebar */}
   <aside
  className={`
    bg-white w-full md:w-72 border-r border-gray-200 p-4 space-y-4 overflow-y-auto z-10 transition-all duration-300 ease-in-out
    md:sticky md:top-0 md:h-screen md:block
    fixed top-14 left-0 right-0 max-h-[calc(100vh-3.5rem)]
    ${sidebarOpen ? "block" : "hidden"}
  `}
>
  <h2 className="text-gray-500 font-bold text-sm tracking-wider uppercase">Tool Categories</h2>
  {sections.map(({ key, icon, label, items }) => (
    <div key={key}>
      <button
        onClick={() => toggleDropdown(key)}
        className="flex justify-between items-center w-full text-left font-semibold text-gray-700 mb-1"
      >
        <span className="flex items-center gap-2">
          <span className="text-lg">{icon}</span> {label}
        </span>
        <FaChevronDown
          className={`text-gray-500 transition-transform duration-200 ${
            openDropdownKey === key ? "rotate-180" : ""
          }`}
        />
      </button>
      {openDropdownKey === key && (
        <ul className="ml-5 mt-1 space-y-1">
          {items.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                setSelectedTool(item.label);
                if (item.link) navigate(item.link);
                setSidebarOpen(false); // close on mobile
              }}
              className={`flex items-center gap-2 p-2 rounded cursor-pointer  ${
                selectedTool === item.label
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              {item.label}
            </li>            
          ))}
        </ul>
      )}
    </div>
  ))}
</aside>

    {/* Optional Main Content (example placeholder) */}
    {/* <main className="flex-1 overflow-y-auto mt-14 md:mt-0 p-4">
      <div className="text-gray-500">Your content goes here...</div>
    </main> */}
  </div>
);
}