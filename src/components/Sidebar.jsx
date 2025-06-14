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
import { useContext, useState, useEffect } from "react";
import { FaSwatchbook } from "react-icons/fa";
import { HiCircleStack } from "react-icons/hi2";
import { FaReact } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { RiCodeBlock } from "react-icons/ri";
import { TbHtml } from "react-icons/tb";
import { PiFileHtmlBold } from "react-icons/pi";
import { ImHtmlFive2 } from "react-icons/im";
import { PiFileCssLight } from "react-icons/pi";
import { PiFileJsxBold } from "react-icons/pi";
import { LiaHtml5 } from "react-icons/lia";
import { SiCsswizardry } from "react-icons/si";
import { AiOutlineRadiusUpright } from "react-icons/ai";
import { TbBackground } from "react-icons/tb";
import { FaBoxArchive } from "react-icons/fa6";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { LuSpline } from "react-icons/lu";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdGradient } from "react-icons/md";
import { CgGoogle } from "react-icons/cg";
import { IoTriangleSharp } from "react-icons/io5";
import { LuLoader } from "react-icons/lu";
import { MdFormatColorFill } from "react-icons/md";
import { GiSlowBlob } from "react-icons/gi";
import { FaCropSimple } from "react-icons/fa6";
import { TbColorPicker } from "react-icons/tb";
import { MdMovieFilter } from "react-icons/md";
import { BsTextareaResize } from "react-icons/bs";
import { TbFileTypeSvg } from "react-icons/tb";
import { SiConvertio } from "react-icons/si";
import { MdPostAdd } from "react-icons/md";
import { LuGitGraph } from "react-icons/lu";
import { FaTwitterSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoVimeo } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FavoritesContext } from "../Context/FavoriteContext";
import { TbFilters } from "react-icons/tb";
import { MdOutlineImageSearch } from "react-icons/md";

export default function Sidebar() {
  const navigate = useNavigate();
  const { favoriteTools, updateFavorites } = useContext(FavoritesContext);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdownKey, setOpenDropdownKey] = useState(null);
  const [selectedTool, setSelectedTool] = useState("");

  // Update favorites when component mounts
  useEffect(() => {
    updateFavorites();
  }, []);

  const toggleDropdown = (key) => {
    setOpenDropdownKey((prev) => (prev === key ? null : key));
  };

  const allTools = [
    {
      label: "Case Converter",
      icon: <VscCaseSensitive />,
      link: "/caseconverter",
    },
    {
      label: "Lorem Ipsum Generator",
      icon: <MdOutlineContentPaste />,
      link: "/lorem",
    },
    { label: "Letter Counter", icon: <SlEnvolopeLetter />, link: "/letter" },
    { label: "Text to Handwriting", icon: <TbTransform />, link: "/Text" },
    {
      label: "Bionic Reading Converter",
      icon: <FaBookReader />,
      link: "/BionicReading",
    },
    {
      label: "Multiple Whitespace Remove",
      icon: <BsScissors />,
      link: "/Whitespace",
    },
    {
      label: "Google Fonts Pair Finder",
      icon: <MdGroups />,
      link: "/Googlefont",
    },
    { label: "Photo Censor", icon: <MdMovieFilter />, link: "/Photocensor" },
    { label: "Image Resizer", icon: <BsTextareaResize />, link: "/Resizer" },
    { label: "SVG to PNG Converter", icon: <SiConvertio />, link: "/Svgpng" },
    { label: "Image Cropper", icon: <FaCropSimple />, link: "/ImageCropper" },
    {
      label: "Image Average Color Finder",
      icon: <MdFormatColorFill />,
      link: "/AverageColor",
    },
    {
      label: "Image Color Picker",
      icon: <TbColorPicker />,
      link: "/ImageColorPicker",
    },
    { label: "SVGpattern", icon: <TbFileTypeSvg />, link: "/SVGpattern" },
    { label: "BlobGenerator", icon: <GiSlowBlob />, link: "/BlobGenerator" },
    {
      label: "Image Color Extractor",
      icon: <FaCropSimple />,
      link: "/ImageColorExtractor",
    },
    {
      label: "CSS Clip Path Generator",
      icon: <MdOutlineDocumentScanner />,
      link: "/Cssclippathgenerator",
    },
    { label: "CSS Loader", icon: <LuLoader />, link: "/Cssloader" },
    {
      label: "CSS Background Pattern",
      icon: <TbBackground />,
      link: "/CSSbackgroundpattern",
    },
    { label: "CSS Cubic", icon: <LuSpline />, link: "/Csscubic" },
    {
      label: "CSS Glass Morphism",
      icon: <IoMdPhonePortrait />,
      link: "/Cssglassmorphism",
    },
    { label: "CSS Text Glitch", icon: <CgGoogle />, link: "/Csstextglitch" },
    {
      label: "CSS Gradient Generator",
      icon: <MdGradient />,
      link: "/Cssgradientgenerator",
    },
    {
      label: "CSS Triangle Generator",
      icon: <IoTriangleSharp />,
      link: "/CSStrianglegenerator",
    },
    {
      label: "CSS Box Shadow Generator",
      icon: <FaBoxArchive />,
      link: "/Cssboxshadowgenerator",
    },
    {
      label: "Border Radius Generator",
      icon: <AiOutlineRadiusUpright />,
      link: "/Borderradiusgenerator",
    },
    {
      label: "Code to Image Generator",
      icon: <RiCodeBlock />,
      link: "/CodetoImage",
    },
    { label: "URL Slug Generator", icon: <FaLink />, link: "/Slug" },
    {
      label: "React Native Shadow Generator",
      icon: <FaReact />,
      link: "/Shadow",
    },
    {
      label: "Base64 Encoder Decoder Generator",
      icon: <FaBrain />,
      link: "/BaseEncoderDecoder",
    },
    {
      label: "HTML Encoder/Decoder",
      icon: <TbHtml />,
      link: "/HTMLEncoderDecoder",
    },
    {
      label: "URL Encoder/Decoder",
      icon: <PiFileHtmlBold />,
      link: "/URLEncoderDcoder",
    },
    { label: "HTML Minifier", icon: <ImHtmlFive2 />, link: "/HTMLMinifier" },
    { label: "CSS Minifier", icon: <PiFileCssLight />, link: "/CSSMinifier" },
    {
      label: "JavaScript Minifier",
      icon: <PiFileJsxBold />,
      link: "/JavaScriptMinifier",
    },
    { label: "HTML Formatter", icon: <LiaHtml5 />, link: "/Hf" },
    { label: "CSS Formatter", icon: <SiCsswizardry />, link: "/Cs" },
    { label: "Javascript Formatter", icon: <PiFileJsxBold />, link: "/Javaf" },
    {
      label: "AI Color Palette Generator",
      icon: <FaBrain />,
      link: "/AIColor",
    },
    {
      label: "HEX to RGBA Converter",
      icon: <IoColorFilterOutline />,
      link: "/HEX",
    },
    { label: "RGBA to HEX Converter", icon: <FaHashtag />, link: "/RGBA" },
    { label: "Color Mixer", icon: <HiCircleStack />, link: "/ColorMixer" },
    {
      label: "Color Shades Generator",
      icon: <FaSwatchbook />,
      link: "/ColorShades",
    },
    {
      label: "Instagram Filters",
      icon: <MdMovieFilter />,
      link: "/InstagramFilters",
    },
    {
      label: "Instagram Post Generator",
      icon: <MdPostAdd />,
      link: "/InstagramPostGenerator",
    },
    {
      label: "Tweet Generator",
      icon: <FaTwitterSquare />,
      link: "/TweetGenerator",
    },
    {
      label: "Open Graph Meta Generator",
      icon: <LuGitGraph />,
      link: "/Opengraphmetagenerator",
    },
    {
      label: "Vimeo Thumbnail Grabber",
      icon: <IoLogoVimeo />,
      link: "/Vimeothumbnailgrabber",
    },
    {
      label: "YouTube Thumbnail Grabber",
      icon: <FaYoutube />,
      link: "/Youtubethumbnailgrabber",
    },
    {
      label: "Twitter Ad Revenue Generator",
      icon: <FaXTwitter />,
      link: "/Twitteradrevenuegenerator",
    },
    {
      label: "Strong Random Password Generator",
      icon: <BiSolidLock />,
      link: "/StrongRandom",
    },
    {
      label: "List Randomizer",
      icon: <SlEnvolopeLetter />,
      link: "/Randomizer",
    },
    { label: "QR Code Generator", icon: <BsQrCode />, link: "/QRcode" },
    { label: "Bar Code Generator", icon: <ImBarcode />, link: "/Barcode" },
    { label: "Image Filter", icon: <TbFilters />, link: "/Imagefilter" },
    {
      label: "Image Caption",
      icon: <MdOutlineImageSearch />,
      link: "/ImageCaptionGenerator",
    }, // Added missing tool
  ];

  // Find favorite tools by matching labels
  const favoriteItems = favoriteTools
    .map((label) => allTools.find((tool) => tool.label === label))
    .filter(Boolean);

  const sections = [
    {
      key: "favorite",
      icon: <IoText />,
      label: "Favorite Tools",
      items: favoriteItems,
    },
    {
      key: "text",
      icon: <IoText />,
      label: "Text Tools",
      items: [
        {
          label: "Case Converter",
          icon: <VscCaseSensitive className="text-white w-[30px] h-[30px] rounded-lg bg-blue-500" />,
          link: "/caseconverter",
        },
        {
          label: "Lorem Ipsum Generator",
          icon: <MdOutlineContentPaste className="text-white w-[30px] h-[30px] p-1 rounded-lg bg-yellow-500" />,
          link: "/lorem",
        },
        {
          label: "Letter Counter",
          icon: <SlEnvolopeLetter className="text-white w-[30px] h-[30px] p-1 rounded-lg bg-pink-500" />,
          link: "/letter",
        },
        {
          label: "Text to Handwriting",
          icon: <TbTransform className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-orange-500" />,
          link: "/Text",
        },
        {
          label: "Bionic Reading Converter",
          icon: <FaBookReader className="text-white w-[30px] h-[30px]  p-1 rounded-lg bg-pink-500" />,
          link: "/BionicReading",
        },
        {
          label: "Multiple Whitespace Remove",
          icon: <BsScissors className="text-white w-[30px] h-[30px]  p-1 rounded-lg bg-orange-500" />,
          link: "/Whitespace",
        },
        {
          label: "Google Fonts Pair Finder",
          icon: <MdGroups className="text-white w-[30px] h-[30px] rounded-lg p-1  bg-blue-500" />,
          link: "/Googlefont",
        },
      ],
    },
    {
      key: "image",
      icon: <IoImages />,
      label: "Image Tools",
       items: [
        { label: "Image Resizer", icon: <BsTextareaResize className="text-white w-[30px] p-1  h-[30px] rounded-lg bg-blue-400"/>, link: "/Resizer" },
        { label: "Image Cropper", icon: <FaCropSimple className="text-white w-[30px] p-1  h-[30px] rounded-lg bg-yellow-400"/>, link: "/ImageCropper" },
        { label: "Image Average Color Finder", icon: <MdFormatColorFill className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-pink-400"/>, link: "/AverageColor" },
        { label: "Image Color Extractor", icon: <FaCropSimple className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-orange-400"/>, link: "/ImageColorExtractor" },
        { label: "Image Color Picker", icon: <TbColorPicker className="text-white w-[30px] p-1  h-[30px] rounded-lg bg-pink-400"/>, link: "/ImageColorPicker" },
        { label: "SVGpattern", icon: <TbFileTypeSvg className="text-white w-[30px] p-1  h-[30px] rounded-lg bg-orange-400"/>, link: "/SVGpattern" },
        { label: "Photo Censor", icon: <MdMovieFilter className="text-white w-[30px] p-1  h-[30px] rounded-lg bg-blue-400"/>, link: "/Photocensor" },
        { label: "SVG to PNG Converter", icon: <SiConvertio className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-yellow-400"/>, link: "/Svgpng" },
        { label: "Image Filter", icon: <TbFilters className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-blue-400"/>, link: "/Imagefilter" },
        { label: "Image Caption", icon: <MdOutlineImageSearch className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-yellow-400"/>, link: "/ImageCaptionGenerator" }, // Fixed icon
        { label: "BlobGenerator", icon: <GiSlowBlob className="text-white w-[30px] h-[30px] p-1 rounded-lg bg-pink-400"/>, link: "/BlobGenerator" },
      ],
    },
    {
      key: "css",
      icon: <IoLogoCss3 />,
      label: "CSS Tools",
        items: [
        { label: "CSS Clip Path Generator", icon: <MdOutlineDocumentScanner className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-blue-400"/>, link: "/Cssclippathgenerator" },
        { label: "CSS Loader", icon: <LuLoader className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-yellow-400"/>, link: "/Cssloader" },
        { label: "CSS Background Pattern", icon: <TbBackground className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-pink-400"/>, link: "/CSSbackgroundpattern" },
        { label: "CSS Cubic Bezier Generator", icon: <LuSpline className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-orange-400"/>, link: "/Csscubic" },
        { label: "CSS Glass Morphism", icon: <IoMdPhonePortrait className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-pink-400"/>, link: "/Cssglassmorphism" },
        { label: "CSS Text Glitch", icon: <CgGoogle className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-orange-400"/>, link: "/Csstextglitch" },
        { label: "CSS Gradient Generator", icon: <MdGradient className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-blue-400"/>, link: "/Cssgradientgenerator" },
        { label: "CSS Triangle Generator", icon: <IoTriangleSharp className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-yellow-400"/>, link: "/CSStrianglegenerator" },
        { label: "CSS Box Shadow Generator", icon: <FaBoxArchive className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-orange-400"/>, link: "/Cssboxshadowgenerator" },
        { label: "Border Radius Generator", icon: <AiOutlineRadiusUpright className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-pink-400"/>, link: "/Borderradiusgenerator" },
      ],
    },
    {
      key: "coding",
      icon: <FaCode />,
      label: "Coding Tools",
        items: [
        { label: "Code to Image Generator", icon: <RiCodeBlock className=" text-white w-[30px] p-1 h-[30px] rounded-lg bg-blue-400"/>, link: "/CodetoImage" },
        { label: "URL Slug Generator", icon: <FaLink className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-yellow-400"/>, link: "/Slug" },
        { label: "React Native Shadow Generator", icon: <FaReact className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-pink-400"/>, link: "/Shadow" },
        { label: "Base64 Encoder Decoder Generator", icon: <FaBrain className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-orange-400"/>, link: "/BaseEncoderDecoder" },
        { label: "HTML Encoder/Decoder", icon: <TbHtml className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-pink-400"/>, link: "/HTMLEncoderDecoder" },
        { label: "URL Encoder/Decoder", icon: <PiFileHtmlBold className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-orange-400"/>, link: "/URLEncoderDcoder" },
        { label: "HTML Minifier", icon: <ImHtmlFive2 className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-blue-400"/>, link: "/HTMLMinifier" },
        { label: "CSS Minifier", icon: <PiFileCssLight className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-yellow-400"/>, link: "/CSSMinifier" },
        { label: "JavaScript Minifier", icon: <PiFileJsxBold className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-blue-400"/>, link: "/JavaScriptMinifier" },
        { label: "HTML Formatter", icon: <LiaHtml5 className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-yellow-400"/>, link: "/Hf" },
        { label: "CSS Formatter", icon: <SiCsswizardry className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-pink-400"/>, link: "/Cs" },
        { label: "JavaScript Formatter", icon: <PiFileJsxBold className="text-white w-[30px] p-1 h-[30px] rounded-lg bg-orange-400" />, link: "/Javaf" },
      ],
    },
    {
      key: "color",
      icon: <BiSolidColorFill />,
      label: "Color Tools",
       items: [
        { label: "AI Color Palette Generator", icon: <FaBrain className="w-[30px]  h-[30px]  text-white rounded-lg p-1 bg-blue-400"/>, link: "/AIColor" },
        { label: "HEX to RGBA Converter", icon: <IoColorFilterOutline className="w-[30px]  h-[30px]  text-white rounded-lg p-1 bg-yellow-400"/>, link: "/HEX" },
        { label: "RGBA to HEX Converter", icon: <FaHashtag className="w-[30px]  h-[30px]  text-white rounded-lg p-1 bg-pink-400"/>, link: "/RGBA" },
        { label: "Color Mixer", icon: <HiCircleStack className="w-[30px]  h-[30px]  text-white rounded-lg p-1 bg-orange-400"/>, link: "/ColorMixer" },
        { label: "Color Shades Generator", icon: <FaSwatchbook className="w-[30px]  h-[30px]  text-white rounded-lg p-1 bg-blue-400"/>, link: "/ColorShades" },
      ],
    },
    {
      key: "social",
      icon: <TbSocial />,
      label: "Social Media Tools",
       items: [
        { label: "Instagram Filters", icon: <MdMovieFilter className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-blue-400"/>, link: "/InstagramFilters" },
        { label: "Instagram Post Generator", icon: <MdPostAdd className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-yellow-400"/>, link: "/InstagramPostGenerator" },
        { label: "Tweet Generator", icon: <FaTwitterSquare className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-pink-400"/>, link: "/TweetGenerator" },
        { label: "Open Graph Meta Generator", icon: <LuGitGraph className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-orange-400"/>, link: "/Opengraphmetagenerator" },
        { label: "Vimeo Thumbnail Grabber", icon: <IoLogoVimeo className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-pink-400"/>, link: "/Vimeothumbnailgrabber" },
        { label: "YouTube Thumbnail Grabber", icon: <FaYoutube className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-orange-400"/>, link: "/Youtubethumbnailgrabber" },
        { label: "Twitter Ad Revenue Generator", icon: <FaXTwitter className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-blue-400"/>, link: "/Twitteradrevenuegenerator" },
      ],
    },
    {
      key: "misc",
      icon: <IoIosSettings />,
      label: "Miscellaneous Tools",

 items: [
        { label: "Strong Random Password Generator", icon: <BiSolidLock className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-blue-400"/>, link: "/StrongRandom" },
        { label: "List Randomizer", icon: <MdOutlineContentPaste className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-yellow-400"/>, link: "/Randomizer" },
        { label: "QR Code Generator", icon: <BsQrCode className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-pink-400"/>, link: "/QRcode" },
        { label: "Bar Code Generator", icon: <ImBarcode className="w-[30px]  h-[30px]  text-white rounded-lg p-1  bg-orange-400"/>, link: "/Barcode" },
      ],
    },
  ];

  // Auto-open favorites section if there are favorites
  useEffect(() => {
    if (favoriteItems.length > 0 && openDropdownKey === null) {
      setOpenDropdownKey("favorite");
    }
  }, [favoriteItems.length]);

  return (
    <div className="flex flex-col lg:flex-row ">
      {/* Topbar for mobile and tablet (hidden on large screens) */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-2 flex justify-between items-center fixed top-0 left-0 right-0 z-20">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-600"
        >
          <FaChevronDown
            className={`transition-transform duration-200 mt-15 ${
              sidebarOpen ? "rotate-180" : ""
            }`}
            size={22}
          />
        </button>
        <span className="font-bold text-lg mt-15">Toolbox</span>
        <div />
      </div>

      {/* Sidebar: toggled on mobile/tablet, always visible on large screens */}
      <aside
        className={`
          bg-white w-full lg:w-72 border-r border-gray-200 p-4 h-[100%] space-y-3 overflow-y-auto z-10 transition-all duration-300 ease-in-out
          fixed top-14 left-0 right-0 max-h-[calc(100vh-3.5rem)]
          ${sidebarOpen ? "block" : "hidden"}
          lg:sticky lg:top-0 lg:left-0 lg:h-screen lg:max-h-screen lg:block
        `}
      >
        <h2 className="text-gray-500 font-bold text-sm tracking-wider uppercase">
          Tool Categories
        </h2>
        {sections.map(({ key, icon, label, items }) => (
          <div key={key}>
            <button
              onClick={() => toggleDropdown(key)}
              className="flex justify-between items-center w-full text-left font-semibold text-gray-700 mb-1"
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{icon}</span> {label}
                {key === "favorite" && items.length > 0 && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                    {items.length}
                  </span>
                )}
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
                      setSidebarOpen(false); // close on mobile/tablet
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
    </div>
  );
}
