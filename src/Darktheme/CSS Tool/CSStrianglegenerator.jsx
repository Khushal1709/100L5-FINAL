import React, { useState, useEffect, useContext } from "react";
import { PiFileCssLight } from "react-icons/pi";
import { IoTriangleSharp } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import {
  FaCheck,
  FaRegCopy,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaCopy,
  FaRegStar,
} from "react-icons/fa6";
import { MdOutlineContentPaste, MdShare } from "react-icons/md";
import Comment from "../Text tools/Comment";
import { FavoritesContext } from "../../Context/FavoriteContext";

const directions = [
  {
    name: "Top left",
    value: "top-right",
    borders: {
      borderWidth: (w, h) => `${h}px ${w}px 0 0`,
      borderColor: (color) => `${color} transparent transparent transparent`,
    },
  },
  {
    name: "Top",
    value: "top",
    borders: {
      borderWidth: (w, h) => `0 ${w / 2}px ${h}px ${w / 2}px`,
      borderColor: (color) => `transparent transparent ${color} transparent`,
    },
  },
  {
    name: "Top Right",
    value: "top-left",
    borders: {
      borderWidth: (w, h) => `${h}px 0 0 ${w}px`,
      borderColor: (color) => `${color} transparent transparent transparent`,
    },
  },
  {
    name: "Right",
    value: "right",
    borders: {
      borderWidth: (w, h) => `${h / 2}px 0 ${h / 2}px ${w}px`,
      borderColor: (color) => `transparent transparent transparent ${color}`,
    },
  },
  {
    name: "Bottom Right",
    value: "bottom-right",
    borders: {
      borderWidth: (w, h) => `0 0 ${h}px ${w}px`,
      borderColor: (color) => `transparent transparent ${color} transparent`,
    },
  },
  {
    name: "Bottom",
    value: "bottom",
    borders: {
      borderWidth: (w, h) => `${h}px ${w / 2}px 0 ${w / 2}px`,
      borderColor: (color) => `${color} transparent transparent transparent`,
    },
  },
  {
    name: "Bottom Left",
    value: "bottom-left",
    borders: {
      borderWidth: (w, h) => `${h}px 0 0 ${w}px`,
      borderColor: (color) => `transparent transparent transparent ${color}`,
    },
  },
  {
    name: "Left",
    value: "left",
    borders: {
      borderWidth: (w, h) => `${h / 2}px ${w}px ${h / 2}px 0`,
      borderColor: (color) => `transparent ${color} transparent transparent`,
    },
  },
];

function getBorderStyles(direction, width, height, color) {
  const dir = directions.find((d) => d.value === direction);
  if (!dir) return {};
  return {
    borderWidth: dir.borders.borderWidth(width, height),
    borderColor: dir.borders.borderColor(color),
  };
}

export default function TriangleGenerator({ id = "CSS Triangle Generator" }) {
  const { updateFavorites } = useContext(FavoritesContext);
  const [direction, setDirection] = useState("bottom-left");
  const [color, setColor] = useState("#000000");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const borderStyles = getBorderStyles(direction, width, height, color);
  const selectedDirectionName =
    directions.find((d) => d.value === direction)?.name || "";

  const cssCode = `
width: 0;
height: 0;
border-style: solid;
border-width: ${borderStyles.borderWidth};
border-color: ${borderStyles.borderColor};
`.trim();

  const previewBoxClass =
    "bg-transparent border border-gray-200 rounded-lg w-full sm:w-64 h-48 sm:h-64 flex items-center justify-center overflow-auto";

  const triangleStyle = {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: borderStyles.borderWidth,
    borderColor: borderStyles.borderColor,
  };

  const [open, setOpen] = useState(false);
  const [bugDescription, setBugDescription] = useState("");
  const [shareOpen, setShareOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tool");
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem("FavoriteTools") || "[]");
    let newFavorites;

    if (favorites.includes(id)) {
      newFavorites = favorites.filter((favId) => favId !== id);
      setIsFavorite(false);
    } else {
      newFavorites = [...favorites, id];
      setIsFavorite(true);
    }

    localStorage.setItem("FavoriteTools", JSON.stringify(newFavorites));
    updateFavorites();
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("FavoriteTools") || "[]");
    setIsFavorite(favorites.includes(id));
  }, [id]);

  return (
    <>
    <div className="w-full max-w-4xl mx-auto mt-6 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl sm:text-4xl mt-3 text-yellow-400">
            <IoTriangleSharp />
          </span>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center sm:text-left mt-3">
            CSS&nbsp;riangle&nbsp;Generator
          </span>
        </div>
          <div className="flex flex-col w-full md:flex-row md:justify-center md:items-center md:gap-4 lg:justify-end lg:gap-2">
           <button
            onClick={() => setShareOpen(true)}
            className="flex items-center justify-center md:w-auto px-3 py-2 text-sm rounded-xl border border-white bg-[#273D58]  border border-white text-white mb-2 md:mb-0 cursor-pointer"
          >
            <FiShare2 className="mr-2" size={18} />
            Share
          </button> <button
            className="flex items-center justify-center gap-2 w-full md:w-auto px-3 py-2 text-sm rounded-xl border border-white bg-[#273D58]  border border-white text-white cursor-pointer transition"
            onClick={() => setOpen(true)}
          >
            <FiAlertCircle className="text-white text-base" />
            Report Bug
          </button>
           <button
                     onClick={onFavoriteToggle}
                     className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ml-0 cursor-pointer ${isFavorite
                       ? "border border-white bg-[#273D58]  border border-white text-white"
                       : "bg-[#273D58]  border border-white text-white"
                       }`}
                   >
                     {isFavorite ? (
                       <>
                         <FaCheck className="inline-block mr-1" size={12} /> Added
                       </>
                     ) : (
                       <>
                         <FaRegStar className="inline-block mr-1" size={12} /> Add to
                         Favorites
                       </>
                     )}
                   </button>
        </div>
      </div>

      {/* Share Popup */}
   {shareOpen && (
                <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center">
                  <div className="bg-[#16283E] border border-white p-6 rounded-2xl shadow-xl max-w-md w-full relative">
                    <div className="flex justify-between mb-4 bg-indigo-50 p-1 rounded-xl">
                      <button
                        onClick={() => setActiveTab("tool")}
                        className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${activeTab === "tool"
                          ? "bg-[#273D58]  border border-white text-white"
                          : "text-black hover:bg-[#273D58] hover:text-white"
                          }`}
                      >
                        ⚙️ Share Tool
                      </button>
                      <button
                        onClick={() => setActiveTab("home")}
                        className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${activeTab === "home"
                          ? "bg-[#273D58]  border border-white text-white"
                          : "text-black hover:bg-[#273D58] hover:text-white"
                          }`}
                      >
                        🏠 Share 10015
                      </button>
                    </div>
                    <div className="text-center border border-gray-500 rounded-xl p-6">
                      <p className="text-sm mb-1 text-white">
                        You are currently sharing:
                      </p>
                      <h2 className="text-xl font-semibold mb-5 text-white">
                        {activeTab === "tool"
                          ? "Google Fonts Pair Finder"
                          : "10015 Tools"}
                      </h2>
                      <div className="flex justify-center mb-6">
                        <MdShare className="text-white text-7xl" />
                      </div>
                      <div className="flex justify-center gap-4">
                        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaCopy].map(
                          (Icon, i) => (
                            <button
                              key={i}
                              className="text-black bg-white rounded-full w-10 h-10 flex items-center justify-center"
                            >
                              <Icon />
                            </button>
                          )
                        )}
                      </div>
                    </div>
                    <button
                      className="absolute top-0 h-2 w-2 right-4 text-white text-lg cursor-pointer"
                      onClick={() => setShareOpen(false)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}



      {/* Bug Report Popup */}
{open && (
                <div className="fixed inset-0 bg-black/30 z-40 flex justify-center items-center">
                  <div className="bg-[#16283E] border border-white max-w-md w-full p-6 rounded-2xl shadow-lg relative">
                    <h2 className="text-xl font-bold mb-2 text-white">Bug Report</h2>
                    <p className="text-sm mb-4">
                     

                    </p>
                    <label className="text-sm mb-1 block text-white" htmlFor="bugDescription">
                      Please describe the issue.
                    </label>
                    <textarea
                      id="bugDescription"
                      className="w-full p-3 border border-gray-500 rounded-xl text-base h-32 text-white"
                      placeholder="Description*"
                      value={bugDescription}
                      onChange={(e) => setBugDescription(e.target.value)}
                    />
                    <div className="flex justify-end gap-3 mt-4">
                      <button
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 bg-[#273D58]  border border-white text-white border border-white rounded-lg"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          if (!bugDescription.trim()) {
                            alert("Please enter a description.");
                            return;
                          }
                          console.log("Bug description submitted:", bugDescription);
                          setOpen(false);
                          setBugDescription("");
                        }}
                        className="px-4 py-2 bg-[#273D58] border border-white text-white rounded-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}






      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Preview */}
        <div className="flex flex-col items-center">
          <div className={previewBoxClass}>
            <div style={triangleStyle}></div>
          </div>
          <div className="mt-2 text-center text-gray-500 font-semibold text-sm sm:text-base">
            {selectedDirectionName}
          </div>
          <div className="text-center text-white text-sm sm:text-base">Preview</div>
        </div>

        {/* Controls */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Direction */}
          <div>
            <div className="mb-1 font-medium text-sm sm:text-base text-white">Direction:</div>
            <div className="grid grid-cols-4 gap-2">
              {directions.map((dir) => (
                <button
                  key={dir.value}
                  onClick={() => setDirection(dir.value)}
                  className={`bg-white border rounded p-2 flex items-center justify-center cursor-pointer ${
                    direction === dir.value
                      ? " bg-[#16283E]"
                      : "border-gray-500"
                  }`}
                  aria-label={dir.name}
                  type="button"
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderStyle: "solid",
                      ...getBorderStyles(dir.value, 30, 30, "#1e293b"),
                    }}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <label className="block mb-1 font-medium text-white text-sm sm:text-base" htmlFor="triangleColor">
              Triangle Color
            </label>
            <input
              id="triangleColor"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-12 h-12 sm:w-14 sm:h-14 p-0 border-2 border-gray-500 rounded"
            />
          </div>

          {/* Width & Height */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <label className="block mb-1 font-medium text-sm sm:text-base text-white" htmlFor="widthInput">
                Width (px)
              </label>
              <input
                id="widthInput"
                type="number"
                min={1}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="border p-2 rounded w-full sm:w-24 focus:outline-none focus:ring-2 focus:ring-indigo-300 border-gray-500 text-white"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm sm:text-base text-white" htmlFor="heightInput">
                Height (px)
              </label>
              <input
                id="heightInput"
                type="number"
                min={1}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="border p-2 rounded w-full sm:w-24 focus:outline-none focus:ring-2 focus:ring-indigo-300 border-gray-500 text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Output */}
      <div className="mb-6">
        <div className="mb-2 font-medium text-sm sm:text-base text-white">CSS</div>
        <pre className="border border-gray-200 bg-[316283E] text-gray-400 p-4 rounded font-mono text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
          {cssCode}
        </pre>
        <button
          className="mt-2 px-6 py-2 transition bg-[#273D58] border border-white text-white cursor-pointer rounded-lg w-full sm:w-auto"
          onClick={() => {
            navigator.clipboard.writeText(cssCode);
          }}
        >
          Copy
        </button>
      </div>

      <style jsx global>{`
        /* Ensure text doesn't overflow */
        pre {
          overflow-wrap: break-word;
          word-break: break-word;
        }
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .w-full {
            width: 100% !important;
          }
          .max-w-5xl {
            max-width: 100% !important;
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          .sm\\:w-64 {
            width: 100% !important;
          }
          .h-48 {
            height: 180px !important;
          }
          .sm\\:h-64 {
            height: 180px !important;
          }
          .md\\:flex-row {
            flex-direction: column !important;
          }
          .sm\\:flex-row {
            flex-direction: column !important;
          }
          .sm\\:w-auto {
            width: 100% !important;
          }
          .min-w-\\[120px\\] {
            min-width: 100% !important;
            max-width: 180px;
          }
          .text-lg {
            font-size: 1rem !important;
          }
          .text-xl {
            font-size: 1.125rem !important;
          }
          .text-2xl {
            font-size: 1.25rem !important;
          }
          .text-3xl {
            font-size: 1.5rem !important;
          }
          .text-4xl {
            font-size: 1.75rem !important;
          }
          .text-5xl {
            font-size: 2rem !important;
          }
          .text-6xl {
            font-size: 2.25rem !important;
          }
          .mb-6 {
            margin-bottom: 1.5rem !important;
          }
          .gap-6 {
            gap: 1.5rem !important;
          }
          .gap-4 {
            gap: 1rem !important;
          }
          .gap-3 {
            gap: 0.75rem !important;
          }
          .gap-2 {
            gap: 0.5rem !important;
          }
          .p-4 {
            padding: 0.75rem !important;
          }
          .p-6 {
            padding: 1rem !important;
          }
          .px-4 {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          .py-6 {
            padding-top: 1.25rem !important;
            padding-bottom: 1.25rem !important;
          }
          .px-6 {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .py-2 {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
          .text-sm {
            font-size: 0.875rem !important;
          }
          .text-base {
            font-size: 1rem !important;
          }
          .w-12 {
            width: 2.5rem !important;
          }
          .h-12 {
            height: 2.5rem !important;
          }
          .sm\\:w-14 {
            width: 2.5rem !important;
          }
          .sm\\:h-14 {
            height: 2.5rem !important;
          }
          .sm\\:w-24 {
            width: 100% !important;
            max-width: 6rem;
          }
          .grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
          .grid > div {
            aspect-ratio: 1 / 1;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .max-w-5xl {
            max-width: 90% !important;
          }
          .sm\\:w-64 {
            width: 40% !important;
          }
          .sm\\:h-64 {
            height: 220px !important;
          }
          .text-sm {
            font-size: 0.9rem !important;
          }
          .text-base {
            font-size: 1rem !important;
          }
          .gap-4 {
            gap: 1.25rem !important;
          }
          .gap-3 {
            gap: 0.875rem !important;
          }
          .sm\\:w-24 {
            width: 6rem !important;
          }
        }
      `}</style>
    </div>
      <Comment />
      </>
  );
}