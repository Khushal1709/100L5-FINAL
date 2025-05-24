import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { PiFileCssLight } from "react-icons/pi";
import { MdGradient } from "react-icons/md";
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

const GradientGenerator = () => {
  const [startColor, setStartColor] = useState("#474bff");
  const [midColor, setMidColor] = useState("#8c6fff");
  const [endColor, setEndColor] = useState("#bc48ff");
  const [useMidColor, setUseMidColor] = useState(false);
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Added gradient presets from the image
  const presetGradients = [
    {
      name: "Default",
      startColor: "#474bff",
      endColor: "#bc48ff",
      midColor: "#8c6fff",
      useMid: false,
    },
    {
      name: "Warm Feelings",
      startColor: "#ff5e62",
      endColor: "#ff9966",
      midColor: "#ff7e5f",
      useMid: false,
    },
    {
      name: "Shiny Purple",
      startColor: "#5f2c82",
      endColor: "#7f7fd5",
      midColor: "#6a4d8f",
      useMid: false,
    },
    {
      name: "Candy Cake",
      startColor: "#ff758c",
      endColor: "#ff7eb3",
      midColor: "#ff7ea1",
      useMid: false,
    },
    {
      name: "Spring",
      startColor: "#00d2ff",
      endColor: "#3a7bd5",
      midColor: "#1fa7ea",
      useMid: false,
    },
    {
      name: "Metallic",
      startColor: "#e0e0e0",
      endColor: "#959595",
      midColor: "#c9c9c9",
      useMid: false,
    },
    {
      name: "Neon Green",
      startColor: "#00c9ff",
      endColor: "#92fe9d",
      midColor: "#50d18d",
      useMid: false,
    },
  ];

  const getGradient = () => {
    const colors = reverse
      ? [endColor, ...(useMidColor ? [midColor] : []), startColor]
      : [startColor, ...(useMidColor ? [midColor] : []), endColor];

    return `${type}-gradient(${
      type === "linear" ? `${angle}deg, ` : ""
    }${colors.join(", ")})`;
  };

  const handleShuffle = () => {
    const randomColor = () =>
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
    setStartColor(randomColor());
    setEndColor(randomColor());
    if (useMidColor) setMidColor(randomColor());
  };

  // Added function to handle preset selection
  const handlePresetChange = (e) => {
    const selectedPreset = presetGradients.find(
      (preset) => preset.name === e.target.value
    );

    if (selectedPreset) {
      setStartColor(selectedPreset.startColor);
      setEndColor(selectedPreset.endColor);
      setMidColor(selectedPreset.midColor);
      setUseMidColor(selectedPreset.useMid);
    }
  };

  const cssOutput = `background: ${startColor};\nbackground: -webkit-${getGradient()};\nbackground: ${getGradient()};`;
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
            <MdGradient />
          </span>
          <span className="text-xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
            CSS&nbsp;Gradient&nbsp;Generator
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

      <div className="flex gap-6 flex-wrap ">
        <div
          className="w-64 h-64 rounded shadow"
          style={{ background: getGradient() }}
        ></div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block font-medium mb-1">Preset Gradients</label>
            <select
              className="w-full border border-gray-200 rounded px-3 py-2 outline-none"
              onChange={handlePresetChange}
            >
              {presetGradients.map((preset, index) => (
                <option key={index} value={preset.name}>
                  {preset.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Start Color</label>
              <input
                type="color"
                value={startColor}
                onChange={(e) => setStartColor(e.target.value)}
                className="w-full h-10 p-0 border  border-gray-200  rounded"
              />
            </div>
            <div>
              <label className="block mb-1">End Color</label>
              <input
                type="color"
                value={endColor}
                onChange={(e) => setEndColor(e.target.value)}
                className="w-full h-10 p-0 border  border-gray-200  rounded"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={useMidColor}
              onChange={() => setUseMidColor(!useMidColor)}
            />
            <span>Use Mid Color</span>
            {useMidColor && (
              <input
                type="color"
                value={midColor}
                onChange={(e) => setMidColor(e.target.value)}
                className="h-8 w-16 ml-2 border rounded"
              />
            )}
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="linear"
                checked={type === "linear"}
                onChange={() => setType("linear")}
              />
              Linear
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="radial"
                checked={type === "radial"}
                onChange={() => setType("radial")}
              />
              Radial
            </label>
          </div>

          {type === "linear" && (
            <div>
              <label className="block mb-1">Angle: {angle}°</label>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => setAngle(e.target.value)}
                className="w-full"
              />
            </div>
          )}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={reverse}
              onChange={() => setReverse(!reverse)}
            />
            <span>Reverse</span>
          </div>

          <button
            onClick={handleShuffle}
            className="transition bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] cursor-pointer rounded-lg  px-6 py-2 "
          >
            Shuffle Colors
          </button>
        </div>
      </div>

      <div className="mt-6">
        <label className="block font-medium mb-1">CSS</label>
        <pre className="border border-gray-200  bg-gray-100 p-4 rounded overflow-auto whitespace-pre text-sm">
          {cssOutput}
        </pre>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          className="px-4 py-2 transition bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] cursor-pointer rounded-lg "
          onClick={() => {
            setStartColor("#474bff");
            setEndColor("#bc48ff");
            setMidColor("#8c6fff");
            setUseMidColor(false);
            setType("linear");
            setAngle(0);
            setReverse(false);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(cssOutput)}
          className="transition bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] cursor-pointer rounded-lg px-6 py-2 "
        >
          Copy
        </button>
      </div>
      <Comment/>
    </div>
  );
};

export default GradientGenerator;
