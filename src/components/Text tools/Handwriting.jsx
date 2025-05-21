import React, {
  useState,
  useImperativeHandle,
  forwardRef
} from "react";
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
import Comment from "./Comment";
import ReactQuill from 'react-quill-new'; // Instead of 'react-quill'
import 'react-quill-new/dist/quill.snow.css';
import { TbTransform } from "react-icons/tb";
import { FiAlertCircle } from 'react-icons/fi';
import { FiShare2 } from "react-icons/fi";
import { MdOutlineContentPaste, MdShare } from "react-icons/md";


// Sample options for dropdowns
const fontFamilies = [
  { label: "Roboto", value: "Roboto, sans-serif" },
  { label: "Courier New", value: "Courier New, monospace" },
  { label: "Times New Roman", value: "Times New Roman, serif" }
];

const fontSizes = ["14px", "16px", "18px", "20px", "24px", "28px"];

const inkColors = [
  { label: "Black", value: "#000000" },
  { label: "Blue", value: "#1e3a8a" },
  { label: "Red", value: "#b91c1c" }
];

const paperTypes = [
  { label: "White", value: "white" },
  { label: "Yellow", value: "yellow" },
  { label: "Love Letter 8", value: "love8", image: "/images/love8.png" },
  { label: "Love Letter 9", value: "love9", image: "/images/love9.png" },
  { label: "Christmas 1", value: "christmas1", image: "/images/christmas1.png" },
  { label: "Christmas 2", value: "christmas2", image: "/images/christmas2.png" },
  { label: "Christmas 3", value: "christmas3", image: "/images/christmas3.png" }
];

// Component with forwardRef
const TextToHandwritingConverter = forwardRef((props, ref) => {
  const [tab, setTab] = useState("area");
  const [text, setText] = useState("");
  const [fontFamily, setFontFamily] = useState(fontFamilies[0].value);
  const [fontSize, setFontSize] = useState("16px");
  const [inkColor, setInkColor] = useState(inkColors[0].value);
  const [paperType, setPaperType] = useState(paperTypes[0].value);

  // Handlers
  const handleTabChange = (tabName) => setTab(tabName);
  const handleTextChange = (e) => setText(e.target.value);
  const handleFontFamilyChange = (e) => setFontFamily(e.target.value);
  const handleFontSizeChange = (e) => setFontSize(e.target.value);
  const handleInkColorChange = (e) => setInkColor(e.target.value);
  const handlePaperTypeChange = (e) => setPaperType(e.target.value);

  // Reset
  const resetAll = () => {
    setText("");
    setFontFamily(fontFamilies[0].value);
    setFontSize("16px");
    setInkColor(inkColors[0].value);
    setPaperType(paperTypes[0].value);
    setTab("area");
  };

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    resetAll,
    handleTabChange,
    handleFontFamilyChange,
    handleFontSizeChange,
    handleInkColorChange,
    handlePaperTypeChange,
    handleTextChange
  }));

  const [bugDescription, setBugDescription] = useState("");
  const [shareOpen, setShareOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tool");
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const onFavoriteToggle = () => setIsFavorite(!isFavorite);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl text-indigo-400">
            <TbTransform />
          </span>
          <h1 className="text-2xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
            Text&nbsp;to&nbsp;Handwriting&nbsp;Converter
          </h1>
        </div>
        <div className="flex flex-col w-full md:flex-row md:justify-center md:items-center md:gap-4 lg:justify-end lg:gap-6">
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
            className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ${isFavorite ? "bg-indigo-100 border-indigo-600 text-indigo-700" : "bg-indigo-50 border-indigo-300 text-indigo-600"
              }`}
          >
            {isFavorite ? (
              <>
                <FaCheck className="inline-block mr-1" size={12} /> Added
              </>
            ) : (
              <>
                <FaRegStar className="inline-block mr-1" size={12} /> Add to Favorites
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
        <div className="fixed inset-0 bg-black/30 z-40 flex justify-center items-center">
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

      {/* Tabs and Reset */}
      <div className="flex items-center mb-2">
        <div className="flex bg-[#f2f4fc] rounded-lg overflow-hidden">
          <button
            className={`px-6 py-2 text-sm font-semibold flex items-center gap-2 transition ${tab === "area"
              ? "bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B]"
              : "text-gray-500"
              }`}
            onClick={() => setTab("area")}
          >
            <span className="text-lg">📄</span>Text Area
          </button>
          <button
            className={`px-6 py-2 text-sm font-semibold flex items-center gap-2 transition ${tab === "editor"
              ? "bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B]"
              : "text-gray-500"
              }`}
            onClick={() => setTab("editor")}
          >
            <span className="text-lg">✏️</span>Text Editor
          </button>
        </div>
        <div className="flex-1" />
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black shadow text-sm"
          onClick={resetAll}
        >
          <span>⟳</span> Reset All
        </button>
      </div>

      Text Input
      <div className="relative mt-2 mb-4">
        {tab === "area" ? (
          <textarea
            className="w-full min-h-[220px] p-4 border border-indigo-300 rounded-lg resize-none text-base focus:outline-indigo-300 bg-white"
            placeholder="Text"
            value={text}
            onChange={handleTextChange}
            style={{
              fontFamily,
              fontSize,
              color: inkColor,
              background: paperType === "yellow" ? "#fffde7" : "#fff"
            }}
          />
        ) : (
          // RICH TEXT EDITOR WHEN "editor" TAB IS SELECTED
          <ReactQuill
            theme="snow"
            value={text}
            onChange={setText}
            style={{
              minHeight: "220px",
              fontFamily,
              fontSize,
              color: inkColor,
              background: paperType === "yellow" ? "#fffde7" : "#fff"
            }}
            placeholder="Type or paste your content here..."
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'color': [] }, { 'background': [] }],
                ['clean']
              ]
            }}
          />
        )}
        <span className="absolute top-2 right-4 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full select-none pointer-events-none">
          MULTIPAGE SUPPORTED
        </span>
      </div>

      {/* Control Panel */}
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm text-gray-500 mb-1">Font Family</label>
          <select
            className="border border-indigo-300 outline-none rounded-md px-3 py-2 bg-white text-sm"
            value={fontFamily}
            onChange={handleFontFamilyChange}
            style={{ fontFamily }}
          >
            {fontFamilies.map((f) => (
              <option key={f.value} value={f.value} style={{ fontFamily: f.value }}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-1">Font Size</label>
          <select
            className="border border-gray-200 rounded-md px-3 py-2 bg-white text-sm"
            value={fontSize}
            onChange={handleFontSizeChange}
          >
            {fontSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Ink Color</label>
          <select
            className="border border-gray-200 rounded-md px-3 py-2 bg-white text-sm"
            value={inkColor}
            onChange={handleInkColorChange}
          >
            {inkColors.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Paper Type</label>
          <select
            className="border border-gray-200 rounded-md px-3 py-2 bg-white text-sm"
            value={paperType}
            onChange={handlePaperTypeChange}
          >
            {paperTypes.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Placeholder Ad */}
      <div className="w-full flex justify-center py-3 bg-white text-gray-400 text-xs border-b">
        Ad closed by Google
      </div>

      {/* Preview Box */}
      <div className="flex-1 flex justify-center items-start w-full">
        <div className="mt-4 w-[90vw] max-w-3xl h-[80vh] bg-white rounded-lg shadow border relative overflow-auto">
          <div className="absolute top-4 left-4 text-xs text-gray-400">Sliding Image</div>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="w-full flex justify-between items-center px-8 py-6">
        <select className="border rounded px-3 py-2 text-sm bg-white shadow">
          <option>High Quality (DPI)</option>
          <option>Medium Quality (DPI)</option>
          <option>Low Quality (DPI)</option>
        </select>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-indigo-700 transition">
          Export Handwriting &rarr;
        </button>
      </div>

      {/* Footer */}
      <Comment />
    </div>
  );
});

export default TextToHandwritingConverter;
