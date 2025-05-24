import React, { useState, useRef } from "react";
import { PiFileCssLight } from "react-icons/pi";
import { AiOutlineRadiusUpright } from "react-icons/ai";
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

const BorderRadiusGenerator = () => {
  const [corners, setCorners] = useState({
    topLeft: 25,
    topRight: 25,
    bottomRight: 25,
    bottomLeft: 25,
  });

  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [previewType, setPreviewType] = useState("Solid Color");
  const [mergeEdges, setMergeEdges] = useState(false);
  const [hideGuides, setHideGuides] = useState(false);

  const containerRef = useRef(null);
  const draggingCorner = useRef(null);

  // UPDATED FUNCTION
  const getBorderRadius = () => {
    if (mergeEdges) {
      return "50% 50% 50% 50% / 50% 50% 50% 50%";
    }
    const { topLeft, topRight, bottomRight, bottomLeft } = corners;
    return `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% / ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
  };

  const handleCopy = () => {
    const code = `border-radius: ${getBorderRadius()};`;
    navigator.clipboard.writeText(code);
  };

  const handleReset = () => {
    setCorners({
      topLeft: 25,
      topRight: 25,
      bottomRight: 25,
      bottomLeft: 25,
    });
    setWidth(400);
    setHeight(400);
  };

  const handleMouseMove = (e) => {
    if (!draggingCorner.current || !containerRef.current) return;

    const box = document.getElementById("preview-box").getBoundingClientRect();
    const x = e.clientX - box.left;

    let percent = Math.min(Math.max(Math.round((x / box.width) * 100), 0), 50);
    if (
      draggingCorner.current === "topRight" ||
      draggingCorner.current === "bottomRight"
    ) {
      percent = 50 - percent;
    }

    setCorners((prev) => ({
      ...prev,
      [draggingCorner.current]: percent,
    }));
  };

  const handleMouseUp = () => {
    draggingCorner.current = null;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const startDrag = (corner) => {
    draggingCorner.current = corner;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const getPreviewBackground = () => {
    switch (previewType) {
      case "Gradient":
        return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      case "Image":
        return 'url("https://via.placeholder.com/400") center/cover no-repeat';
      case "Solid Color":
      default:
        return "#E6E7FA";
    }
  };
  const [open, setOpen] = useState(false);
  const [bugDescription, setBugDescription] = useState("");
  const [shareOpen, setShareOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tool");
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoriteToggle = () => setIsFavorite(!isFavorite);
  return (
    <div
      className="max-w-4xl mx-auto mt-7 p-2">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <span className="text-4xl text-indigo-400">
            <AiOutlineRadiusUpright />
          </span>
          <span className="text-lg font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
            CSS&nbsp;Border&nbsp;Radius&nbsp;Generator
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

      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <div
          ref={containerRef}
          className="relative w-full flex justify-center items-center border border-gray-100 rounded"
          style={{ height: "400px" }}
        >
          <div
            id="preview-box"
            className="relative"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              borderRadius: getBorderRadius(),
              background: getPreviewBackground(),
            }}
          >
            {/* UPDATED: Only show guides if not hiding and not merging */}
            {!hideGuides && !mergeEdges && (
              <>
                <div
                  className="absolute w-4 h-4 bg-blue-500 rounded-full cursor-pointer"
                  style={{
                    left: `${corners.topLeft}%`,
                    top: 0,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseDown={() => startDrag("topLeft")}
                />
                <div
                  className="absolute w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                  style={{
                    right: `${corners.topRight}%`,
                    top: 0,
                    transform: "translate(50%, -50%)",
                  }}
                  onMouseDown={() => startDrag("topRight")}
                />
                <div
                  className="absolute w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                  style={{
                    right: `${corners.bottomRight}%`,
                    bottom: 0,
                    transform: "translate(50%, 50%)",
                  }}
                  onMouseDown={() => startDrag("bottomRight")}
                />
                <div
                  className="absolute w-4 h-4 bg-blue-500 rounded-full cursor-pointer"
                  style={{
                    left: `${corners.bottomLeft}%`,
                    bottom: 0,
                    transform: "translate(-50%, 50%)",
                  }}
                  onMouseDown={() => startDrag("bottomLeft")}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Preview Type
          </label>
          <select
            className="w-full outline-none border border-gray-300 rounded py-2 px-3"
            value={previewType}
            onChange={(e) => setPreviewType(e.target.value)}
          >
            <option>Solid Color</option>
            <option>Gradient</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Width: {width}px
          </label>
          <input
            type="range"
            className="w-full"
            min="100"
            max="600"
            value={width}
            onChange={(e) => setWidth(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Height: {height}px
          </label>
          <input
            type="range"
            className="w-full"
            min="100"
            max="360"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="flex space-x-8 mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={mergeEdges}
            onChange={() => setMergeEdges(!mergeEdges)}
          />
          Merge Edge Radiuses
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={hideGuides}
            onChange={() => setHideGuides(!hideGuides)}
          />
          Hide Guides
        </label>
      </div>

      <div className="mb-4 ">
        <label className="block text-sm text-gray-600 mb-1 ">CSS Code</label>
        <div className="border border-gray-300 rounded p-3 bg-white overflow-auto">
          <code className="text-gray-800 whitespace-pre">
            border-radius: {getBorderRadius()};
          </code>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleReset}
          className="px-5 py-2 border border-gray-300 rounded-md bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] cursor-pointer rounded-lg "
        >
          Reset
        </button>
        <button
          onClick={handleCopy}
          className="px-5 py-2 bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] cursor-pointer rounded-lg "
        >
          Copy
        </button>
      </div>
      <Comment/>
    </div>
  );
};

export default BorderRadiusGenerator;
