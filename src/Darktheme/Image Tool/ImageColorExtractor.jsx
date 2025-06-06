import React, { useState, useRef, useCallback, useContext, useEffect } from "react";
import ColorThief from "colorthief";
import { FaCropSimple } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { FiAlertCircle } from 'react-icons/fi';
import {
  FaCheck,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaCopy,
  FaRegStar,
} from "react-icons/fa6";
import { MdShare } from "react-icons/md";
import Comment from "../Text tools/Comment";
import { FavoritesContext } from "../../Context/FavoriteContext";

export default function ImageColorExtractor({ id = "Image Color Extractor" }) {
  const { updateFavorites } = useContext(FavoritesContext);
  const [open, setOpen] = useState(false);
  const [bugDescription, setBugDescription] = useState("");
  const [shareOpen, setShareOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tool");
  const [isFavorite, setIsFavorite] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [extractedColors, setExtractedColors] = useState([]);
  const [colorCount, setColorCount] = useState(5);
  const [dragActive, setDragActive] = useState(false);

  const [copied, setCopied] = useState(false);
  const imgRef = useRef(null);
  const fileInputRef = useRef(null);

  // Convert RGB to Hex
  const rgbToHex = (r, g, b) => {
    return "#" + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  };

  // Extract colors from image
  const extractColors = useCallback((image) => {
    const colorThief = new ColorThief();
    try {
      const palette = colorThief.getPalette(image, colorCount);
      const colors = palette.map(color => rgbToHex(color[0], color[1], color[2]));
      setExtractedColors(colors);
    } catch (error) {
      console.error("Error extracting colors:", error);
    }
  }, [colorCount]);

  // Handle image load
  const handleImageLoad = () => {
    if (imgRef.current) {
      extractColors(imgRef.current);
    }
  };

  // Handle file selection
  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setExtractedColors([]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  // Handle browse click
  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  // Handle color count change
  const handleColorCountChange = (newCount) => {
    setColorCount(newCount);
    if (imgRef.current) {
      extractColors(imgRef.current);
    }
  };

  // Copy all colors
  const copyAllColors = () => {
    const colorString = extractedColors.join(", ");
    navigator.clipboard.writeText(colorString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Copy individual color
  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
  };

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
      <div className="  bg-[#16283E] ">
        <div className="max-w-4xl mx-auto p-3">
          {/* Header */}

          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
            <div className="flex items-center gap-3 mb-2 sm:mb-0">
              <span className="text-4xl text-orange-400 mt-8">
                <FaCropSimple />
              </span>
              <span className="text-2xl font-bold text-white md:text-lg lg:text-2xl sm:text-lg mt-8">
                {/* Java&nbsp;Script&nbsp;Minifier */}
                Image&nbsp;Color&nbsp;Extractor&nbsp;
              </span>
            </div>
            <div className="flex flex-col w-full md:flex-row md:justify-center md:items-center md:gap-4 md:mt-5 lg:justify-end lg:gap-2">
              <button
                onClick={() => setShareOpen(true)}
                className="flex items-center justify-center md:w-auto px-3 py-2 text-sm rounded-xl border  mb-2 md:mb-0 cursor-pointer bg-[#273D58] text-white"
              >
                <FiShare2 className="mr-2" size={18} />
                Share
              </button>
              <button
                className="flex items-center justify-center gap-2 w-full md:w-auto px-3 py-2 text-sm rounded-xl border text-white bg-[#273D58] cursor-pointer  transition"
                onClick={() => setOpen(true)}
              >
                <FiAlertCircle className="text-white text-base" />
                Report Bug
              </button>
              <button
                onClick={onFavoriteToggle}
                className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ml-0 cursor-pointer text-white bg-[#273D58] ${isFavorite
                  ? ""
                  : ""
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
                      ? "bg-[#273D58] text-white"
                      : "text-black"
                      }`}
                  >
                    ⚙️ Share Tool
                  </button>
                  <button
                    onClick={() => setActiveTab("home")}
                    className={`w-1/2 px-4 py-2 rounded-xl font-semibold text-sm ${activeTab === "home"
                      ? "bg-[#273D58] text-white"
                      : "text-black"
                      }`}
                  >
                    🏠 Share 10015
                  </button>
                </div>
                <div className="text-center border border-gray-300 rounded-xl p-6">
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
            <div className="fixed inset-0  z-40 flex justify-center items-center text-white ">
              <div className="bg-[#16283E] border border-white max-w-md w-full p-6 rounded-2xl shadow-lg relative">
                <h2 className="text-xl font-bold mb-2">Bug Report</h2>
                <p className="text-sm mb-4">
                  <strong>Tool:</strong> Lorem Ipsum Generator
                </p>
                <label className="text-sm mb-1 block" htmlFor="bugDescription">
                  Please describe the issue.
                </label>
                <textarea
                  id="bugDescription"
                  className="w-full p-3 border border-gray-300 rounded-xl text-base h-32 "
                  placeholder="Description*"
                  value={bugDescription}
                  onChange={(e) => setBugDescription(e.target.value)}
                />
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 bg-[#273D58] text-white border border-white rounded-lg"
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

          {/* Upload Area */}
          <div
            className={`relative w-full border-2 border-white border-dashed rounded-xl p-8 sm:p-12 lg:p-16 text-center transition-colors ${dragActive
              ? ""
              : ""
              }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {!uploadedImage ? (
              <div className="space-y-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl text-gray-400">
                  📁
                </div>
                <p className="text-gray-400 text-sm sm:text-base">
                  Drag your image here, or click to{" "}
                  <button
                    onClick={handleBrowseClick}
                    className="text-gray-400 underline"
                  >
                    browse
                  </button>
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <img
                  ref={imgRef}
                  src={uploadedImage}
                  alt="Uploaded"
                  className="max-w-full max-h-96 mx-auto rounded-lg shadow-lg"
                  onLoad={handleImageLoad}
                  crossOrigin="anonymous"
                />
                <p className="text-gray-600 text-sm">
                  {uploadedImage ? "Image uploaded successfully" : ""}
                </p>
              </div>
            )}
          </div>

          {/* Color Extraction Results */}
          {extractedColors.length > 0 && (
            <div className="mt-8 space-y-6">
              {/* Color Count Selector & Copy Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-400 mb-2 ">
                    Color Count
                  </label>
                  <select
                    value={colorCount}
                    onChange={(e) => handleColorCountChange(Number(e.target.value))}
                    className="block w-full px-3 py-2 border border-white  rounded-lg   bg-[#16283E]  text-white "
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num} >
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={copyAllColors}
                  className={`cursor-pointer border  text-white bg-[#273D58]  flex items-center gap-2 px-6 py-3 rounded-lg  transition-colors `}
                >
                  <FaCopy size={14} />
                  {copied ? "Copied!" : "Copy All"}
                </button>
              </div>

              {/* Color Palette */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {extractedColors.map((color, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => copyColor(color)}
                  >
                    <div
                      className="w-full h-32 sm:h-40"
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="p-3 text-center">
                      <p className="text-sm font-medium text-gray-900">
                        {color.toUpperCase()}
                      </p>
                    </div>
                    <div className="absolute inset-0  transition-opacity flex items-center justify-center">
                      <FaCopy className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Comment />
    </>
  );
}
