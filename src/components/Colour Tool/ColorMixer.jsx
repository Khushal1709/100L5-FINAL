import React, { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { IoColorFilterOutline } from "react-icons/io5";
import { MdOutlineContentPaste, MdShare } from "react-icons/md";
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
import Comment from "../Text tools/Comment";
import { HiCircleStack } from "react-icons/hi2";
import { FiAlertCircle } from 'react-icons/fi';
import { FiShare2 } from "react-icons/fi";

// Utility: HEX to RGB
function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map(x => x + x).join("");
  const num = parseInt(hex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

// Utility: RGB to HEX
function rgbToHex({ r, g, b }) {
  return (
    "#" +
    [r, g, b]
      .map(x => Math.round(x).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

// Mix two colors by ratio (0 to 1)
function mixRgb(c1, c2, ratio) {
  return {
    r: c1.r + (c2.r - c1.r) * ratio,
    g: c1.g + (c2.g - c1.g) * ratio,
    b: c1.b + (c2.b - c1.b) * ratio
  };
}

const stepsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function ColorMixer() {
  const [startColor, setStartColor] = useState("#ff0000");
  const [endColor, setEndColor] = useState("#0000ff");
  const [step, setStep] = useState(5);

  // Picker popover state for Start and End
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  // Mixed colors state
  const [mixedColors, setMixedColors] = useState([]);

  // Copy feedback
  const [copied, setCopied] = useState(false);

  // Refs for click outside detection
  const startPickerRef = useRef();
  const endPickerRef = useRef();
   const [open, setOpen] = useState(false);
    const [bugDescription, setBugDescription] = useState("");
    const [shareOpen, setShareOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("tool");
    const [isFavorite, setIsFavorite] = useState(false);
  
    const onFavoriteToggle = () => setIsFavorite(!isFavorite);

  useEffect(() => {
    function handleClickOutside(event) {
      if (showStartPicker && startPickerRef.current && !startPickerRef.current.contains(event.target)) {
        setShowStartPicker(false);
      }
      if (showEndPicker && endPickerRef.current && !endPickerRef.current.contains(event.target)) {
        setShowEndPicker(false);
      }
    }
    if (showStartPicker || showEndPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showStartPicker, showEndPicker]);

  // Mix colors on button click
  const handleMixColors = () => {
    const rgb1 = hexToRgb(startColor);
    const rgb2 = hexToRgb(endColor);
    const arr = [];
    for (let i = 0; i < step; ++i) {
      const ratio = step === 1 ? 0 : i / (step - 1);
      const mixed = mixRgb(rgb1, rgb2, ratio);
      arr.push(rgbToHex(mixed));
    }
    setMixedColors(arr);
  };

  // Reset all
  const handleReset = () => {
    setStartColor("#ff0000");
    setEndColor("#0000ff");
    setStep(5);
    setMixedColors([]);
    setCopied(false);
  };

  // Copy all colors to clipboard
  const handleCopy = async () => {
    if (mixedColors.length === 0) return;
    const text = mixedColors.join(", ");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 mt-3">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
              <div className="flex items-center gap-3 mb-2 sm:mb-0">
                <span className="text-4xl text-indigo-400">
                  <HiCircleStack />
                </span>
                <h1 className="text-2xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
                  Color&nbsp;Mixer&nbsp;
                </h1>
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
                  className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ml-0 cursor-pointer ${isFavorite
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
                            className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${activeTab === "tool"
                              ? "bg-indigo-600 text-white"
                              : "text-indigo-600 hover:bg-indigo-600 hover:text-white"
                              }`}
                          >
                            ⚙️ Share Tool
                          </button>
                          <button
                            onClick={() => setActiveTab("home")}
                            className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${activeTab === "home"
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
                          className="absolute top-4 right-4 text-gray-600 text-lg"
                          onClick={() => setShareOpen(false)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}
            
                  {/* Bug Report Popup */}
                  {open && (
                    <div className="fixed inset-0 bg-black/30 z-20 flex justify-center items-center">
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

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-6">
        {/* Start Color */}
        <div className="flex-1">
          <label className="block text-xs text-gray-400 mb-1">Start Color</label>
          <div className="relative">
            <button
              type="button"
              className="flex items-center px-4 py-3 border border-blue-300 outline-none rounded-lg bg-white text-gray-500 w-full"
              onClick={() => setShowStartPicker((v) => !v)}
            >
              <span
                className="w-5 h-5 mr-3 rounded-full border"
                style={{ background: startColor }}
              />
              <span className="font-mono text-gray-700">{startColor}</span>
            </button>
            {showStartPicker && (
              <div
                ref={startPickerRef}
                className="absolute z-20 left-0 mt-2"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}
              >
                <HexColorPicker color={startColor} onChange={setStartColor} />
              </div>
            )}
          </div>
        </div>
        {/* End Color */}
        <div className="flex-1">
          <label className="block text-xs text-gray-400 mb-1">End Color</label>
          <div className="relative">
            <button
              type="button"
              className="flex items-center px-4 py-3 border border-blue-300 rounded-lg bg-white text-gray-500 w-full"
              onClick={() => setShowEndPicker((v) => !v)}
            >
              <span
                className="w-5 h-5 mr-3 rounded-full border"
                style={{ background: endColor }}
              />
              <span className="font-mono text-gray-700">{endColor}</span>
            </button>
            {showEndPicker && (
              <div
                ref={endPickerRef}
                className="absolute z-20 left-0 mt-2"
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}
              >
                <HexColorPicker color={endColor} onChange={setEndColor} />
              </div>
            )}
          </div>
        </div>
        {/* Step */}
        <div className="w-32">
          <label className="block text-xs text-gray-400 mb-1">Step</label>
          <select
            className="w-full px-4 py-3 border border-blue-300 rounded-lg bg-white text-gray-500"
            value={step}
            onChange={e => setStep(Number(e.target.value))}
          >
            {stepsArray.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] px-5 py-2 rounded-xl cursor-pointer transition"
        >
          {/* Reset Icon */}
          Reset
        </button>
        <button
          onClick={handleMixColors}
          className="flex items-center gap-2  bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] cursor-pointer px-5 py-2 rounded-xl transition"
        >
          {/* Mix Icon */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M4 13V7a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0Zm8 0a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0v-6Z" /></svg>
          Mix Colors
        </button>
      </div>

      {/* Result/Preview */}
      <div className="max-w-2xl mx-auto flex flex-wrap gap-3 bg-white rounded-xl shadow overflow-hidden min-h-[80px] mb-8 p-6">
        {mixedColors.length > 0 ? (
          mixedColors.map((color, idx) => (
            <div key={color + idx} className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-md border"
                style={{ background: color }}
                title={color}
              />
              <span className="text-xs font-mono mt-1">{color}</span>
            </div>
          ))
        ) : (
          <div className="flex-1 flex items-center justify-center text-indigo-200 text-2xl">?</div>
        )}
      </div>

      {/* Copy Button */}
      <div className="flex justify-center">
        <button
          onClick={handleCopy}
          disabled={mixedColors.length === 0}
          className={`flex items-center gap-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] px-8 py-3 rounded-xl cursor-pointer transition ${
            mixedColors.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {/* Copy Icon */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><rect x="8" y="8" width="8" height="8" rx="2" /><path d="M4 12V6a2 2 0 0 1 2-2h6" /></svg>
          {copied ? "Copied!" : "Copy All Color"}
        </button>
      </div>
      <Comment/>
    </div>
  );
}
