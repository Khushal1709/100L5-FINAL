import React, { useState } from "react";
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

export default function TriangleGenerator() {
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
    "bg-transparent border border-gray-200 rounded-lg w-64 h-64 flex items-center justify-center overflow-auto";

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

  const onFavoriteToggle = () => setIsFavorite(!isFavorite);
  return (
    <div className="max-w-4xl mx-auto mt-7 p-2">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <span className="text-4xl text-indigo-400">
            <IoTriangleSharp />
          </span>
          <span className="text-xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
            CSS&nbsp;Triangle&nbsp;Generator
          </span>
        </div>
        <div className="flex flex-col w-full md:flex-row md:justify-center md:items-center md:gap-4 lg:justify-end lg:gap-2">
          <button
            onClick={() => setShareOpen(true)}
            className="flex items-center justify-center md:w-auto px-3 py-2 text-sm rounded-xl border border-indigo-600 bg-indigo-50 text-indigo-600 mb-2 md:mb-0 cursor-pointer"
          >
            <FiShare2 className="mr-2" size={18} />
            Share
          </button>
          <button
            className="flex items-center justify-center gap-2 w-full md:w-auto px-3 py-2 text-sm rounded-xl border border-indigo-600 bg-indigo-50 text-indigo-600 cursor-pointer hover:bg-indigo-100 transition"
            onClick={() => setOpen(true)}
          >
            <FiAlertCircle className="text-indigo-600 text-base" />
            Report Bug
          </button>
          <button
            onClick={onFavoriteToggle}
            className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ml-0 cursor-pointer border-indigo-600 ${
              isFavorite
                ? "bg-indigo-100 border-indigo-600 text-indigo-700"
                : "bg-indigo-50 border-indigo-300 text-indigo-600"
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
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative">
            <div className="flex justify-between mb-4 bg-indigo-50 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab("tool")}
                className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${
                  activeTab === "tool"
                    ? "bg-indigo-600 text-white"
                    : "text-indigo-600 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                ⚙️ Share Tool
              </button>
              <button
                onClick={() => setActiveTab("home")}
                className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${
                  activeTab === "home"
                    ? "bg-indigo-600 text-white"
                    : "text-indigo-600 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                🏠 Share 10015
              </button>
            </div>
            <div className="text-center border border-gray-300 rounded-xl p-6">
              <p className="text-sm mb-1 text-gray-500">
                You are currently sharing:
              </p>
              <h2 className="text-xl font-semibold mb-5 text-gray-600">
                {activeTab === "tool"
                  ? "Google Fonts Pair Finder"
                  : "10015 Tools"}
              </h2>
              <div className="flex justify-center mb-6">
                <MdShare className="text-indigo-500 text-7xl" />
              </div>
              <div className="flex justify-center gap-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaCopy].map(
                  (Icon, i) => (
                    <button
                      key={i}
                      className="text-white bg-indigo-500 rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      <Icon />
                    </button>
                  )
                )}
              </div>
            </div>
            <button
              className="absolute top-0 h-2 w-2 right-4 text-gray-600 text-lg cursor-pointer"
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
          <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-lg relative">
            <h2 className="text-xl font-bold mb-2">Bug Report</h2>
            <p className="text-sm mb-4">
              <strong>Tool:</strong> Lorem Ipsum Generator
            </p>
            <label className="text-sm mb-1 block" htmlFor="bugDescription">
              Please describe the issue.
            </label>
            <textarea
              id="bugDescription"
              className="w-full p-3 border border-blue-300 rounded-xl text-base h-32 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Description*"
              value={bugDescription}
              onChange={(e) => setBugDescription(e.target.value)}
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black rounded-lg"
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
                className="px-4 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Preview */}
        <div>
          <div className={previewBoxClass}>
            <div style={triangleStyle}></div>
          </div>
          <div className="mt-2 text-center text-gray-700 font-semibold">
            {selectedDirectionName}
          </div>
          <div className="text-center text-gray-500">Preview</div>
        </div>

        {/* Controls */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Direction */}
          <div>
            <div className="mb-1 font-medium">Direction:</div>
            <div className="grid grid-cols-4 gap-2">
              {directions.map((dir) => (
                <button
                  key={dir.value}
                  onClick={() => setDirection(dir.value)}
                  className={`border rounded p-2 flex items-center justify-center ${
                    direction === dir.value
                      ? "border-blue-600 ring-2 ring-blue-200"
                      : "border-gray-200"
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
            <label className="block mb-1 font-medium" htmlFor="triangleColor">
              Triangle Color
            </label>
            <input
              id="triangleColor"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-12 h-12 p-0 border-2 border-gray-200 rounded"
            />
          </div>

          {/* Width & Height */}
          <div className="flex gap-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="widthInput">
                Width (px)
              </label>
              <input
                id="widthInput"
                type="number"
                min={1}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="border p-2 rounded w-24"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="heightInput">
                Height (px)
              </label>
              <input
                id="heightInput"
                type="number"
                min={1}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="border p-2 rounded w-24"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Output */}
      <div className="mt-8">
        <div className="mb-2 font-medium">CSS</div>
        <pre className="border  border-gray-200  bg-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
          {cssCode}
        </pre>
        <button
          className="mt-2 px-4 py-2 transition bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] cursor-pointer rounded-lg"
          onClick={() => {
            navigator.clipboard.writeText(cssCode);
          }}
        >
          Copy
        </button>
      </div>
      <Comment/>
    </div>
  );
}
