import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Import your frame images
import frame1 from "../../image/frame1.png";
import frame2 from "../../image/frame2.png";
import frame3 from "../../image/frame3.png";
import frame4 from "../../image/frame4.png";
import frame5 from "../../image/frame5.png";
import frame6 from "../../image/frame6.png";
import frame7 from "../../image/frame7.png";
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
import { MdOutlineContentPaste, MdShare } from "react-icons/md";


// Font options for the dropdown
const fontOptions = [
  { label: "Satisfy", value: "Satisfy" },
  { label: "Homemade Apple", value: "Homemade Apple" },
  { label: "Mansalva", value: "Mansalva" },
  { label: "Mali", value: "Mali" },
  { label: "Amatic SC", value: "Amatic SC" },
  { label: "Dancing Script", value: "Dancing Script" },
  { label: "Pacifico", value: "Pacifico" },
  { label: "Indie Flower", value: "Indie Flower" },
  { label: "Shadows Into Light", value: "Shadows Into Light" },
  { label: "Gloria Hallelujah", value: "Gloria Hallelujah" },
  { label: "Patrick Hand", value: "Patrick Hand" },
  { label: "Caveat", value: "Caveat" },
  { label: "Covered By Your Grace", value: "Covered By Your Grace" },
  { label: "Reenie Beanie", value: "Reenie Beanie" },
  { label: "Handlee", value: "Handlee" },
  { label: "Rock Salt", value: "Rock Salt" },
  { label: "Just Another Hand", value: "Just Another Hand" },
  { label: "Kalam", value: "Kalam" },
  { label: "Permanent Marker", value: "Permanent Marker" },
  { label: "Amarante", value: "Amarante" },
];

// Paper frame options for the dropdown and preview
const paperFrames = [
  { label: "frame 1", value: "frame1", image: frame1 },
  { label: "frame 2", value: "frame2", image: frame2 },
  { label: "frame 3", value: "frame3", image: frame3 },
  { label: "frame 4", value: "frame4", image: frame4 },
  { label: "frame 5", value: "frame5", image: frame5 },
  { label: "frame 6", value: "frame6", image: frame6 },
  { label: "frame 7", value: "frame7", image: frame7 },
];

// Custom Quill toolbar with alignment group horizontally
const quillModules = {
  toolbar: [
    [
      { 'align': '' },
      { 'align': 'center' },
      { 'align': 'right' },
      { 'align': 'justify' }
    ],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['clean']
  ]
};

// Simple Input component
const Input = React.forwardRef(function Input({ className = '', ...props }, ref) {
  return (
    <input
      ref={ref}
      className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${className}`}
      {...props}
    />
  );
});

// Simple Card component
function Card({ className = '', children, ...props }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

// Main Handwriting Converter component
export default function HandwritingConverter() {
    const [open, setOpen] = useState(false);
    const [bugDescription, setBugDescription] = useState("");
    const [shareOpen, setShareOpen] = useState(false);  
    const [activeTab, setActiveTab] = useState("tool");
    const [isFavorite, setIsFavorite] = useState(false);

    const onFavoriteToggle = () => setIsFavorite(!isFavorite);
  // State variables
  const [activeTabs, setActiveTabs] = useState('textarea'); // 'textarea' or 'editor'
  const [textAreaValue, setTextAreaValue] = useState('');
  const [editorValue, setEditorValue] = useState('');
  const [font, setFont] = useState('Satisfy');
  const [fontSize, setFontSize] = useState('18px');
  const [inkColor, setInkColor] = useState('#8B0000');
  const [frame, setFrame] = useState('frame2');

  // Get the selected frame object (for image preview)
  const selectedFrame = paperFrames.find(f => f.value === frame) || paperFrames[1];

  // Handle font size input with automatic px suffix if needed
  const handleFontSizeChange = (e) => {
    let value = e.target.value.trim();
    if (/^\d+$/.test(value)) {
      value = `${value}px`;
    }
    if (/^\d+(px|em|rem|%|pt)?$/.test(value)) {
      setFontSize(value);
    }
  };

  // Get the text to preview based on active tab
  const previewText = activeTab === 'textarea'
    ? (textAreaValue ? textAreaValue.replace(/\n/g, '<br/>') : 'Your handwriting text will appear here...')
    : (editorValue || 'Your handwriting text will appear here...');

  return (
    <div className="max-w-4xl mx-auto p-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <span className="text-4xl text-indigo-400">
            <FaCropSimple />
          </span>
          <span className="text-2xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
            {/* Java&nbsp;Script&nbsp;Minifier */}
            {/* Images&nbsp;Cropper */}
            Text&nbsp;to&nbsp;Handwriting&nbsp;Converter
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
            className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ml-0 cursor-pointer ${isFavorite
              ? "bg-indigo-100 border-indigo-600 text-indigo-700"
              : "bg-indigo-50  text-indigo-600"
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
              className="w-full p-3 border border-gray-300 rounded-xl text-base h-32 focus:outline-none focus:ring-2 focus:ring-indigo-300"
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


      <div className="max-w-3xl mx-auto space-y-4">

        {/* Tab Switcher */}
        <div className="flex bg-[#f3f4fa] rounded-lg p-1 w-fit mx-auto mb-2">
          <button
            className={`flex items-center gap-2 px-6 py-2 rounded-md transition font-medium text-base
              ${activeTabs === 'textarea'
                ? 'cursor-pointer bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B]    shadow'
                : 'text-[#7a7a9d]'
              }`}
            onClick={() => setActiveTabs('textarea')}
            style={{ border: 'none', outline: 'none', cursor: 'pointer' }}
          >
            <span role="img" aria-label="textarea" style={{ fontSize: 18 }}>📋</span>
            Text Area
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-2 rounded-md transition font-medium text-base ml-2
              ${activeTabs === 'editor'
                ? 'cursor-pointer bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF]   shadow'
                : 'text-[#7a7a9d]'
              }`}
            onClick={() => setActiveTabs('editor')}
            style={{ border: 'none', outline: 'none', cursor: 'pointer' }}
          >
            <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: 18 }}>T</span>
            Text Editor
          </button>
        </div>

        {/* Text Input Section */}
        {activeTabs === 'textarea' ? (
          <textarea
            className="w-full min-h-[120px] border border-gray-300 rounded px-3 py-2 outline-none"
            placeholder="Enter text here..."
            value={textAreaValue}
            onChange={e => setTextAreaValue(e.target.value)}
          />
        ) : (
          <ReactQuill
            theme="snow"
            value={editorValue}
            onChange={setEditorValue}
            modules={quillModules}
            placeholder="Type here..."
            style={{
              background: "white",
              borderRadius: "8px",
              height: "300px",
              marginBottom: "8px",
            }}
          />
        )}

        {/* Controls: Font, Font Size, Ink Color, Frame */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-15">
          {/* Font Dropdown */}
          <select
            className="border border-gray-3l00 rounded px-3 py-2 "
            value={font}
            onChange={e => setFont(e.target.value)}
          >
            {fontOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          {/* Font Size Input */}
          <input
            type="text"
            value={fontSize}
            onChange={handleFontSizeChange}
            placeholder="Font Size (e.g. 18px)"
            className="border border-gray-300 rounded px-3 py-2 outline-none"
          />

          {/* Ink Color Picker */}
          <input
            type="color"
            value={inkColor}
            onChange={e => setInkColor(e.target.value)}
            className="border border-gray-300 rounded  outline-none"

          />

          {/* Frame Dropdown */}
          <select
            className="border border-gray-300 rounded px-3 py-2"
            value={frame}
            onChange={e => setFrame(e.target.value)}
          >
            {paperFrames.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Frame image previews (clickable) */}
        {activeTabs === 'textarea' && (
          <div className="flex justify-center items-center gap-4 mt-2">
            {paperFrames.map(opt => (
              <div
                key={opt.value}
                onClick={() => setFrame(opt.value)}
                style={{
                  border: opt.value === frame ? '2px solid #0070f3' : '2px solid transparent',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  padding: '2px',
                  transition: 'border 0.2s'
                }}
                title={opt.label}
              >
                <img
                  src={opt.image}
                  alt={opt.label}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: 'cover',
                    borderRadius: '6px',
                    boxShadow: opt.value === frame ? '0 0 6px #0070f3' : '0 0 2px #ccc'
                  }}
                />
                <div className="text-xs text-center mt-1">{opt.label}</div>
              </div>
            ))}
          </div>
        )}
        {/* Card with handwriting preview */}
        {activeTabs === 'textarea' && (

          <Card
            className="p-6 mt-6 relative bg-white shadow-xl rounded-xl overflow-hidden max-w-2xl min-h-screen ml-10"
            style={{
              backgroundImage: `url(${selectedFrame.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="whitespace-pre-wrap mt-23 ml-15 space-y-5"
              style={{
                fontFamily: `'${font}', cursive, sans-serif`,
                fontSize: fontSize,
                color: inkColor,
                padding: '20px',
                minHeight: '300px',
              }}
              dangerouslySetInnerHTML={{
                __html: previewText
              }}
            />
          </Card>

        )}
      </div>
    </div>
  );
}
