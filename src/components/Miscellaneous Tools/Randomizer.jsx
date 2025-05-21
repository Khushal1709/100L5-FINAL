import React, { useState } from "react";
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
import { FiAlertCircle } from 'react-icons/fi';
import { FiShare2 } from "react-icons/fi";
import Comment from "../Text tools/Comment";

export default function ListRandomizer() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [uniqueList, setUniqueList] = useState([]);
  const [removeDuplicates, setRemoveDuplicates] = useState(true);
  const [bugDescription, setBugDescription] = useState("");
  const [activeTab, setActiveTab] = useState("tool");
  const [format, setFormat] = useState("Space-separated");
  const [randomized, setRandomized] = useState([]);
  const [numSelect, setNumSelect] = useState("Select All");
  const [open, setOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const onFavoriteToggle = () => setIsFavorite(!isFavorite);

  const splitInput = (str) => {
    if (format === "Space-separated") return str.trim().split(/\s+/);
    if (format === "Comma-separated") return str.split(",").map(s => s.trim()).filter(Boolean);
    if (format === "Line-separated") return str.split("\n").map(s => s.trim()).filter(Boolean);
    return [];
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
    const arr = splitInput(value);
    setList(arr);
    setUniqueList([...new Set(arr)]);
  };

  const handleFormat = (e) => {
    setFormat(e.target.value);
    const arr = splitInput(input);
    setList(arr);
    setUniqueList([...new Set(arr)]);
  };

  const handleRandomize = () => {
    let arr = removeDuplicates ? [...uniqueList] : [...list];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    let count = arr.length;
    if (numSelect !== "Select All" && !isNaN(numSelect)) {
      count = Math.min(Number(numSelect), arr.length);
    }
    setRandomized(arr.slice(0, count));
  };

  const handleReset = () => {
    setInput("");
    setList([]);
    setUniqueList([]);
    setRandomized([]);
    setNumSelect("Select All");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 mt-3">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <MdOutlineContentPaste className="text-4xl text-indigo-500" />
          <h1 className="text-2xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">List Randomizer</h1>
        </div>
        <div className="flex flex-wrap gap-2">
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
            className={`px-4 py-2 text-sm rounded-xl border ${
              isFavorite
                ? "bg-indigo-100 border-indigo-600 text-indigo-700"
                : "bg-indigo-50 border-indigo-300 text-indigo-600"
            }`}
          >
            {isFavorite ? (
              <>
                <FaCheck className="inline mr-1" size={12} /> Added
              </>
            ) : (
              <>
                <FaRegStar className="inline mr-1" size={12} /> Add to Favorites
              </>
            )}
          </button>
        </div>
      </div>

      {/* Share Popup */}
      {shareOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center p-3">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative ">
            <div className="flex justify-between mb-4 bg-indigo-50 p-1 rounded-xl">
              <button onClick={() => setActiveTab("tool")} className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${activeTab === "tool" ? "bg-indigo-600 text-white" : "text-indigo-600 hover:bg-indigo-600 hover:text-white"}`}>⚙️ Share Tool</button>
              <button onClick={() => setActiveTab("home")} className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${activeTab === "home" ? "bg-indigo-600 text-white" : "text-indigo-600 hover:bg-indigo-600 hover:text-white"}`}>🏠 Share 10015</button>
            </div>
            <div className="text-center border border-gray-300 rounded-xl p-6">
              <p className="text-sm mb-1 text-gray-500">You are currently sharing:</p>
              <h2 className="text-xl font-semibold mb-5 text-gray-600">{activeTab === "tool" ? "Google Fonts Pair Finder" : "10015 Tools"}</h2>
              <div className="flex justify-center mb-6">
                <MdShare className="text-indigo-500 text-7xl" />
              </div>
              <div className="flex justify-center gap-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaCopy].map((Icon, i) => (
                  <button key={i} className="text-white bg-indigo-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <Icon />
                  </button>
                ))}
              </div>
            </div>
            <button className="absolute top-4 right-4 text-gray-600 text-lg" onClick={() => setShareOpen(false)}>✕</button>
          </div>
        </div>
      )}

      {/* Bug Report Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/30 flex z-40 justify-center items-center">
          <div className="bg-white max-w-md w-full p-6 rounded-2xl shadow-lg relative">
            <h2 className="text-xl font-bold mb-2">Bug Report</h2>
            <p className="text-sm mb-4"><strong>Tool:</strong> Lorem Ipsum Generator</p>
            <label className="text-sm mb-1 block" htmlFor="bugDescription">Please describe the issue.</label>
            <textarea
              id="bugDescription"
              className="w-full p-3 border border-blue-300 rounded-xl text-base h-32 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Description*"
              value={bugDescription}
              onChange={(e) => setBugDescription(e.target.value)}
            />
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setOpen(false)} className="px-4 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black rounded-lg">Cancel</button>
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

      {/* Textarea Input */}
      <textarea
        value={input}
        onChange={handleInput}
        placeholder="Enter your list..."
        rows={8}
        className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
      />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-6">
        <div>
          <div className="font-semibold text-gray-600 ">Total Count</div>
          <div className="text-lg font-bold">{list.length}</div>
        </div>
        <div>
          <div className="font-semibold text-gray-600">Unique Count</div>
          <div className="text-lg font-bold">{uniqueList.length}</div>
        </div>
        <div>
          <div className="font-semibold text-gray-600">Duplicate Count</div>
          <div className="text-lg font-bold">{list.length - uniqueList.length}</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select
          value={format}
          onChange={handleFormat}
          className="px-3 py-2 border border-blue-300 rounded-md text-sm outline-none "
        >
          <option>Space-separated</option>
          <option>Comma-separated</option>
          <option>Line-separated</option>
        </select>
        <select
          value={numSelect}
          onChange={(e) => setNumSelect(e.target.value)}
          className="px-3 py-2 border border-blue-300 rounded-md text-sm outline-none"
        >
          <option>Select All</option>
          {[...Array(uniqueList.length || 1)].map((_, i) => (
            <option key={i + 1}>{i + 1}</option>
          ))}
        </select>
        <label className="flex items-center gap-2 text-lg">
          <input
            type="checkbox"
            checked={removeDuplicates}
            onChange={(e) => setRemoveDuplicates(e.target.checked)}
            className="form-checkbox"
          />
          Remove Duplicates
        </label>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] rounded-md text-lg cursor-pointer"
        >
          Reset
        </button>
        <button
          onClick={handleRandomize}
          className="px-4 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] rounded-md text-lg"
        >
          Randomize
        </button>
      </div>
      <Comment/>
    </div>
  );
}
