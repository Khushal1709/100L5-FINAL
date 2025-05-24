import React, { useState, useRef } from 'react';
 import { PiFileCssLight } from "react-icons/pi";
import { CgGoogle } from "react-icons/cg";
 import { FiShare2 } from "react-icons/fi";
 import { FiAlertCircle } from 'react-icons/fi';
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

const CSSTextGlitchEffectGenerator = () => {
  const [glitchEffect, setGlitchEffect] = useState('Glitch with Color');
  const [text, setText] = useState('glitch');
  const [fontSize, setFontSize] = useState(80);
  const [backgroundColor, setBackgroundColor] = useState('#222222');
  const [textColor, setTextColor] = useState('#ffffff');
  const [glitchColor1, setGlitchColor1] = useState('#00ffff');
  const [glitchColor2, setGlitchColor2] = useState('#ff00ff');
  const codeRef = useRef(null);

  const generateCode = () => {
    return `<div class="glitch-wrapper">
  <div class="glitch" data-glitch="${text}">${text}</div>
</div>

<style>
.glitch-wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${backgroundColor};
  box-sizing: border-box;
  padding: 2vw;
}
.glitch {
  position: relative;
  font-size: clamp(24px, 8vw, 120px);
  font-weight: 700;
  line-height: 1.2;
  color: ${textColor};
  letter-spacing: 0.1em;
  z-index: 1;
  word-break: break-word;
  max-width: 90vw;
}
.glitch:before, .glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
}
.glitch:before {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: ${glitchColor1};
  z-index: -1;
}
.glitch:after {
  animation: glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: ${glitchColor2};
  z-index: -2;
}
@keyframes glitch-color {
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
}
/* Extra responsiveness for very small devices */
@media (max-width: 768px) {
  .glitch {
    font-size: clamp(18px, 10vw, 60px);
    letter-spacing: 0.08em;
  }
  .glitch-wrapper {
    padding: 4vw;
  }
}
@media (max-width: 480px) {
  .glitch {
    font-size: clamp(14px, 14vw, 36px);
    letter-spacing: 0.05em;
  }
  .glitch-wrapper {
    padding: 6vw;
  }
}
</style>`;
  };

  const handleReset = () => {
    setText('glitch');
    setFontSize(80);
    setBackgroundColor('#222222');
    setTextColor('#ffffff');
    setGlitchColor1('#00ffff');
    setGlitchColor2('#ff00ff');
  };
   const [open, setOpen] = useState(false);
  const [bugDescription, setBugDescription] = useState("");
  const [shareOpen, setShareOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tool");
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoriteToggle = () => setIsFavorite(!isFavorite);
  return (
    <div className="max-w-4xl mx-auto mt-7 p-2">
      {/* Header */}
<div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <span className="text-4xl text-indigo-400">
            <CgGoogle />

          </span>
          <span className="text-base font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
            CSS&nbsp;Text&nbsp;Glitch&nbsp;Effect&nbsp;Generator
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
            className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ml-0 cursor-pointer border-indigo-600 ${isFavorite
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

      {/* Main Content */}
      <div className="bg-white p-3 sm:p-6 rounded-md shadow-sm mb-4 sm:mb-6">
        {/* Controls Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 sm:mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Glitch Effect</label>
            <select
              className="w-full p-2 border border-gray-300 rounded outline-none"
              value={glitchEffect}
              onChange={(e) => setGlitchEffect(e.target.value)}
            >
              <option>Glitch with Color</option>
              <option>Simple Glitch</option>
              <option>RGB Glitch</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Text</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Font Size: {fontSize}px</label>
            <input
              type="range"
              className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
              min="20"
              max="150"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
            />
          </div>
        </div>

        {/* Preview */}
        <div className="mb-4 sm:mb-6 overflow-x-auto">
          <div
            className="w-full min-h-[80px] sm:min-h-[120px] flex items-center justify-center"
            style={{
              backgroundColor: backgroundColor,
              padding: '3vw',
              minHeight: '20vh',
              borderRadius: '8px',
            }}
          >
            <div
              className="relative font-bold text-center"
              style={{
                fontSize: `clamp(18px, ${fontSize / 11}vw, 120px)`,
                color: textColor,
                letterSpacing: '0.1em',
                lineHeight: 1.2,
                wordBreak: 'break-word',
                maxWidth: '95vw',
                width: '100%',
              }}
              data-glitch={text}
            >
              {text}
              <span
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                  color: glitchColor1,
                  opacity: 0.8,
                  animation: 'glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
                  zIndex: -1,
                  overflow: 'hidden',
                }}
                aria-hidden="true"
              >
                {text}
              </span>
              <span
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                  color: glitchColor2,
                  opacity: 0.8,
                  animation: 'glitch-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite',
                  zIndex: -2,
                  overflow: 'hidden',
                }}
                aria-hidden="true"
              >
                {text}
              </span>
            </div>
          </div>
        </div>

        {/* Color Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4 sm:mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Background Color</label>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2" style={{ backgroundColor: backgroundColor }}></div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded outline-none"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Text Color</label>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2" style={{ backgroundColor: textColor }}></div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded outline-none"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Glitch Color #1</label>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2" style={{ backgroundColor: glitchColor1 }}></div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded outline-none"
                value={glitchColor1}
                onChange={(e) => setGlitchColor1(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Glitch Color #2</label>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2" style={{ backgroundColor: glitchColor2 }}></div>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded outline-none"
                value={glitchColor2}
                onChange={(e) => setGlitchColor2(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Code Display */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">HTML & CSS Code</label>
          <div className="border border-gray-300 rounded bg-gray-50 p-2 sm:p-4 overflow-x-auto">
            <pre className="text-xs sm:text-sm overflow-x-auto" ref={codeRef}>
              <code className="language-html">{generateCode()}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Button Row */}
      <div className="flex flex-row sm:flex-row  justify-center items-center gap-2 sm:gap-4">
        <button
          onClick={handleReset}
          className="px-4 py-2 transition bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] cursor-pointer rounded-lg flex items-center "
        >
          Reset
        </button>
        <button
          className="px-4 py-2 transition bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] cursor-pointer rounded-lg flex items-center "
          onClick={() => {
            navigator.clipboard.writeText(generateCode());
          }}
        >
          Copy
        </button>
      </div>

      {/* Animation keyframes for the preview */}
      <style jsx global>{`
        @keyframes glitch-color {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        @media (max-width: 768px) {
          .glitch {
            font-size: clamp(18px, 10vw, 60px) !important;
            letter-spacing: 0.08em !important;
          }
          .glitch-wrapper {
            padding: 4vw !important;
          }
        }
        @media (max-width: 480px) {
          .glitch {
            font-size: clamp(14px, 14vw, 36px) !important;
            letter-spacing: 0.05em !important;
          }
          .glitch-wrapper {
            padding: 6vw !important;
          }
        }
      `}</style>
      <Comment/>
    </div>
  );
};

export default CSSTextGlitchEffectGenerator;
