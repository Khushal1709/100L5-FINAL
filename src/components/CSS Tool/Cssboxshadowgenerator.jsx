import React, { useState } from "react";
import { PiFileCssLight } from "react-icons/pi";
import { FaBoxArchive } from "react-icons/fa6";
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

const Cssboxshadowgenerator = () => {
  const [shape, setShape] = useState("box");
  const [hOffset, setHOffset] = useState(3);
  const [vOffset, setVOffset] = useState(3);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(3);
  const [inset, setInset] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [boxColor, setBoxColor] = useState("#474bff");
  const [shadowColor, setShadowColor] = useState("#dddddd");

  // Define fixed shape sizes to fit inside preview
  const shapeStyles = {
    box: "rounded-md w-24 h-24",
    circle: "rounded-full w-24 h-24",
    header: "rounded-md w-32 h-10",
  };

  const shadowValue = `${
    inset ? "inset " : ""
  }${hOffset}px ${vOffset}px ${blur}px ${spread}px ${shadowColor}`;

  const cssCode = `
-webkit-box-shadow: ${shadowValue};
-moz-box-shadow: ${shadowValue};
box-shadow: ${shadowValue};
`;

  const handleReset = () => {
    setHOffset(3);
    setVOffset(3);
    setBlur(10);
    setSpread(3);
    setInset(false);
    setBgColor("#ffffff");
    setBoxColor("#474bff");
    setShadowColor("#dddddd");
    setShape("box");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssCode.trim());
    alert("CSS copied to clipboard!");
  };
  const [open, setOpen] = useState(false);
  const [bugDescription, setBugDescription] = useState("");
  const [shareOpen, setShareOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tool");
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoriteToggle = () => setIsFavorite(!isFavorite);
  return (
    <div className="max-w-4xl mx-auto mt-7 p-2">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-3 mb-2 sm:mb-0">
            <span className="text-4xl text-indigo-400">
              <FaBoxArchive />
            </span>
            <span className="text-lg font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
              CSS&nbsp;Box&nbsp;Shadow&nbsp;Generator
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
                  {[
                    FaFacebookF,
                    FaTwitter,
                    FaLinkedinIn,
                    FaEnvelope,
                    FaCopy,
                  ].map((Icon, i) => (
                    <button
                      key={i}
                      className="text-white bg-indigo-500 rounded-full w-10 h-10 flex items-center justify-center"
                    >
                      <Icon />
                    </button>
                  ))}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Shape & Preview */}
          <div className="space-y-4">
            <div className="flex gap-4">
              {["Box", "Circle", "Header"].map((type) => (
                <label
                  key={type.toLowerCase()}
                  className="flex items-center gap-2"
                >
                  <input
                    type="radio"
                    value={type.toLowerCase()}
                    checked={shape === type.toLowerCase()}
                    onChange={(e) => setShape(e.target.value)}
                  />
                  {type}
                </label>
              ))}
            </div>

            {/* Preview Area */}
            <div
              className="w-40 h-40 mx-auto rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden"
              style={{
                backgroundColor: bgColor,
                transition: "background 0.2s",
              }}
            >
              <div
                className={`${shapeStyles[shape]}`}
                style={{
                  backgroundColor: boxColor,
                  boxShadow: shadowValue,
                  transition: "all 0.2s",
                }}
              ></div>
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-4">
            <div>
              <label className="text-sm">Horizontal Offset: {hOffset}px</label>
              <input
                type="range"
                min="-50"
                max="50"
                value={hOffset}
                onChange={(e) => setHOffset(+e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm">Vertical Offset: {vOffset}px</label>
              <input
                type="range"
                min="-50"
                max="50"
                value={vOffset}
                onChange={(e) => setVOffset(+e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm">Blur: {blur}px</label>
              <input
                type="range"
                min="0"
                max="100"
                value={blur}
                onChange={(e) => setBlur(+e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="text-sm">Spread: {spread}px</label>
              <input
                type="range"
                min="-50"
                max="50"
                value={spread}
                onChange={(e) => setSpread(+e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Color & Inset */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm " >Background Color</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-10 p-1  "
              />
            </div>
            <div>
              <label className="block text-sm">Box Color</label>
              <input
                type="color"
                value={boxColor}
                onChange={(e) => setBoxColor(e.target.value)}
                className="w-full h-10 p-1"
              />
            </div>
            <div>
              <label className="block text-sm">Shadow Color</label>
              <input
                type="color"
                value={shadowColor}
                onChange={(e) => setShadowColor(e.target.value)}
                className="w-full h-10 p-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={inset}
                onChange={(e) => setInset(e.target.checked)}
              />
              <label>Inset</label>
            </div>
          </div>
        </div>

        {/* CSS Output */}
        <div className="border border-gray-300 bg-gray-100 p-4 rounded mt-6 font-mono text-sm whitespace-pre overflow-auto">
          <h1>CSS</h1>
          {cssCode}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={handleReset}
            className="px-4 py-2 transition bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] cursor-pointer rounded-lg"
          >
            Reset
          </button>
          <button
            onClick={handleCopy}
            className="px-4 py-2 transition bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] cursor-pointer rounded-lg"
          >
            Copy
          </button>
        </div>
      </div>
      <Comment/>
    </div>
  );
};

export default Cssboxshadowgenerator;
