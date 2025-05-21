import React, { useState } from 'react';
import { FaBrain } from "react-icons/fa";
import { MdOutlineContentPaste, MdShare } from "react-icons/md";
import {FaCheck,FaRegStar,FaFacebookF,FaTwitter,FaLinkedinIn,FaEnvelope,FaCopy } from "react-icons/fa6";
import { FiAlertCircle } from 'react-icons/fi';
import { FiShare2 } from "react-icons/fi";
import Comment from "../Text tools/Comment";

const baseColors = {
    light: {
        red: ['#ff0000', '#ff4d4d', '#ff7373', '#ff9999', '#fff2f2', '#290000'],
        blue: ['#007bff', '#3399ff', '#66b3ff', '#99ccff', '#e6f2ff', '#00274d'],
        green: ['#28a745', '#5cd65c', '#85e085', '#b3ffb3', '#e6ffe6', '#003300'],
        purple: ['#800080', '#9932CC', '#DA70D6', '#E6E6FA', '#f5f5ff', '#330033'],
        orange: ['#ff6600', '#ff944d', '#ffb366', '#ffd1b3', '#fff2e6', '#4d2600'],
        default: ['#cccccc', '#dddddd', '#eeeeee', '#f4f4f4', '#fafafa', '#111111'],
    },
    dark: {
        red: ['#ff4d4d', '#cc0000', '#990000', '#660000', '#330000', '#ffffff'],
        blue: ['#66b3ff', '#3399ff', '#0066cc', '#004080', '#001f33', '#ffffff'],
        green: ['#85e085', '#28a745', '#1e7e34', '#145c2c', '#0b3d1e', '#ffffff'],
        purple: ['#DA70D6', '#9932CC', '#800080', '#4B0082', '#2c0033', '#ffffff'],
        orange: ['#ff944d', '#ff6600', '#cc5200', '#993d00', '#662900', '#ffffff'],
        default: ['#666666', '#4d4d4d', '#333333', '#1a1a1a', '#111111', '#ffffff'],
    }
};

const generateColors = (prompt, theme) => {
    const colors = baseColors[theme.toLowerCase()];
    return colors[prompt.toLowerCase()] || colors.default;
};

const ColorPaletteGenerator = () => {
    const [prompt, setPrompt] = useState('red');
    const [theme, setTheme] = useState('light');
    const [palette, setPalette] = useState(generateColors('red', 'light'));
    const [showPreview, setShowPreview] = useState(false);
    const [showExportModal, setShowExportModal] = useState(false);
     const [open, setOpen] = useState(false);
       const [bugDescription, setBugDescription] = useState("");
        const [shareOpen, setShareOpen] = useState(false);
        const [activeTab, setActiveTab] = useState("tool");
        const [isFavorite, setIsFavorite] = useState(false);
      
        const onFavoriteToggle = () => setIsFavorite(!isFavorite);
      

    const handleGenerate = () => {
        setPalette(generateColors(prompt, theme));
        setShowPreview(false);
    };

    const [primary, accent, , , background, text] = palette;

    return (
        <div className="max-w-4xl mx-auto px-4 py-6 mt-3">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <span className="text-4xl text-indigo-400">
                        <FaBrain />
                    </span>
                    <h1 className="text-2xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
                        AI&nbsp;Color&nbsp;Palette&nbsp;Generator&nbsp;
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

            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter a color (e.g., red)"
                    className="flex-1 p-3 border border-blue-300 outline-none rounded-md"
                />
                <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="p-3 border border-blue-300 outline-none rounded-md"
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
                <button
                    onClick={handleGenerate}
                    className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black px-5 py-3 rounded-md cursor-pointer"
                >
                     Generate
                </button>
            </div>

            <div>
                <h2 className="text-lg mb-3 mt-4">Color Palette</h2>
                <div className="flex flex-wrap gap-1 mb-3">
                    {palette.map((color, idx) => (

                        <div
                            key={idx}
                            className="h-6 w-6 rounded-sm"
                            style={{ backgroundColor: color }}
                            title={color}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 ">
                <ColorCard label="Primary" hex={primary} />
                <ColorCard label="Accent" hex={accent} />
                <ColorCard label="Background" hex={background} />
                <ColorCard label="Text" hex={text} />
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
                <button
                    onClick={() => setShowExportModal(true)}
                    className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black px-4 py-2 rounded-md cursor-pointer"
                >
                    Export Colors
                </button>
            </div>

            {showPreview && (
                <PreviewSection primary={primary} accent={accent} background={background} text={text} />
            )}

            <ExportModal
                open={showExportModal}
                onClose={() => setShowExportModal(false)}
                palette={palette}
            />
        </div>

    );
};

const ColorCard = ({ label, hex }) => {
    const rgba = hexToRgba(hex);
    return (
        <div className="border border-gray-200 rounded-md overflow-hidden bg-white shadow">
            <div className="h-20" style={{ backgroundColor: hex }} />
            <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-500">{label}</h3>
                <p className="font-mono text-sm">HEX: {hex}</p>
                <p className="font-mono text-sm">RGB: {rgba}</p>
            </div>
        </div>
    );
};

const PreviewSection = ({ primary, accent, background, text }) => {
    return (
        <div
            className="p-6 mt-6 rounded-lg shadow-lg border"
            style={{ backgroundColor: background, color: text }}
        >
            <h2 className="text-2xl font-bold mb-2" style={{ color: primary }}>
                Product Card Example
            </h2>
            <p className="mb-4">This is how your color palette looks on a sample component.</p>
            <button
                className="px-4 py-2 rounded-md font-semibold"
                style={{ backgroundColor: accent, color: '#fff' }}
            >
                Call to Action
            </button>
        </div>
    );
};

const ExportModal = ({ open, onClose, palette }) => {
    const [tab, setTab] = useState('css');
    const [copied, setCopied] = useState(false);

    // CSS Variables format
    const cssVariables = `
:root {
  --primary-100: ${palette[0]};
  --primary-200: ${palette[1]};
  --primary-300: ${palette[2]};
  --accent-100: ${palette[1]};
  --accent-200: ${palette[2]};
  --accent-300: ${palette[3]};
  --background-100: ${palette[4]};
  --background-200: ${palette[3]};
  --background-300: ${palette[2]};
  --text-100: ${palette[5]};
  --text-200: ${palette[0]};
  --text-300: ${palette[1]};
}
`.trim();

    // Free Text format (as in your screenshot)
    const freeText = `
Primary-100: ${palette[0]};
Primary-200: ${palette[1]};
Primary-300: ${palette[2]};
Accent-100: ${palette[1]};
Accent-200: ${palette[2]};
Accent-300: ${palette[3]};
Background-100: ${palette[4]};
Background-200: ${palette[3]};
Background-300: ${palette[2]};
Text-100: ${palette[5]};
Text-200: ${palette[0]};
Text-300: ${palette[1]};
`.trim();

    // Copy to clipboard handler
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(tab === 'css' ? cssVariables : freeText);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            setCopied(false);
        }
    };

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-black/40 z-90 flex items-center justify-center bg-opacity-40"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg p-6 shadow-lg min-w-[500px] max-w-[90vw]"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex gap-4 mb-4">
                    <button
                        className={`px-4 py-2 rounded font-semibold ${tab === 'css' ? 'bg-blue-100 text-blue-700 cursor-pointer' : 'text-gray-400'}`}
                        onClick={() => setTab('css')}
                    >
                        CSS Variables
                    </button>
                    <button
                        className={`px-4 py-2 rounded font-semibold ${tab === 'free' ? 'bg-blue-100 text-blue-700 cursor-pointer' : 'text-gray-400'}`}
                        onClick={() => setTab('free')}
                    >
                        Free Text
                    </button>
                </div>
                <div className="mb-2 text-gray-500 font-semibold text-sm">Color List</div>
                <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto mb-4" style={{ minHeight: 180 }}>
                    {tab === 'css' ? cssVariables : freeText}
                </pre>
                <button
                    className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black cursor-pointer px-4 py-2 rounded-md"
                    onClick={handleCopy}
                >
                    {copied ? 'Copied!' : 'Copy Colors'}
                </button>
                <button
                    className="ml-2 px-4 py-2 rounded-md cursor-pointer bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-black"
                    onClick={onClose}
                >
                    Close
                </button>
                   <Comment/>
            </div>
        </div>
    );
};

const hexToRgba = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
};

export default ColorPaletteGenerator;
