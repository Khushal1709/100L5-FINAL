import React, { useContext,useState, useRef, useEffect } from "react";
import {
  FaCheck,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaCopy,
  FaRegStar,
} from "react-icons/fa6";
import { MdKeyboardArrowDown, MdShare } from "react-icons/md";
import Comment from "./Comment";
import { FaBookReader } from "react-icons/fa";
import { FiAlertCircle } from 'react-icons/fi'; // Add this at the top
import { FiShare2 } from "react-icons/fi";
import { FavoritesContext } from "../../Context/FavoriteContext";

const fixationLevels = [
  { label: "Very Low - 40%", value: 0.4 },
  { label: "Low - 50%", value: 0.5 },
  { label: "Medium - 60%", value: 0.6 },
  { label: "High - 70%", value: 0.7 },
];

const contrastLevels = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

function getBionicText(text, fixation = 0.4) {
  return text
    .split(" ")
    .map((word) => {
      if (!word) return "";
      const n = Math.ceil(word.length * fixation);
      return `<b>${word.slice(0, n)}</b>${word.slice(n)}`;
    })
    .join(" ");
}

const contrastClass = {
  low: "bionic-low",
  medium: "bionic-medium",
  high: "bionic-high",
};

function BionicReadingConverter({ id = "Bionic Reading Converter" }) {
    const { updateFavorites } = useContext(FavoritesContext);
  const [fixation, setFixation] = useState(0.4);
  const [contrast, setContrast] = useState("medium");
  const [text, setText] = useState("");
  const [bionic, setBionic] = useState("");
  const [fileError, setFileError] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const exportRef = useRef(null);
  const fileInputRef = useRef(null);
  const mainRef = useRef(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("tool");
  const [shareOpen, setShareOpen] = useState(false);
  const [bugDescription, setBugDescription] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (exportRef.current && !exportRef.current.contains(event.target)) {
        setExportOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFileChange = async (e) => {
    setFileError("");
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setFileError("File size exceeds 5MB. Please choose a smaller file.");
      e.target.value = "";
      return;
    }
    if (!(file.type === "application/pdf" || file.name.toLowerCase().endsWith(".epub"))) {
      setFileError("Only PDF or EPUB files are allowed.");
      e.target.value = "";
      return;
    }
    try {
      if (file.type === "application/pdf") {
        const reader = new FileReader();
        reader.onload = async function () {
          const typedarray = new Uint8Array(this.result);
          // pdfjsLib must be globally available
          const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
          let fullText = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const txt = await page.getTextContent();
            fullText += txt.items.map((s) => s.str).join(" ") + "\n";
          }
          setText(fullText.trim());
          setFileError("PDF imported successfully!");
        };
        reader.readAsArrayBuffer(file);
      } else if (file.name.toLowerCase().endsWith(".epub")) {
        const reader = new FileReader();
        reader.onload = async function () {
          // ePub must be globally available
          const book = ePub(this.result);
          let fullText = "";
          await book.ready;
          const spine = book.spine.spineItems;
          for (let item of spine) {
            const text = await item.load(book.load.bind(book)).then(() => item.text());
            fullText += text.replace(/<[^>]+>/g, " ") + " ";
          }
          setText(fullText.trim());
          setFileError("EPUB imported successfully!");
        };
        reader.readAsArrayBuffer(file);
      }
    } catch (err) {
      setFileError("Error reading file: " + err.message);
    }
  };

  const handleConvert = () => setBionic(getBionicText(text, fixation));
  const handleReset = () => {
    setText("");
    setBionic("");
    setFileError("");
  };

  const handleExport = () => {
    const blob = new Blob(
      [
        `<html><head><meta charset="UTF-8"><title>Bionic Reading Export</title></head><body><div class="${contrastClass[contrast]}">${bionic}</div></body></html>`
      ],
      { type: "text/html" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bionic-reading.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFullscreen = () => {
    setIsFullscreen((fs) => !fs);
    setTimeout(() => {
      if (!document.fullscreenElement && mainRef.current && isFullscreen === false) {
        mainRef.current.requestFullscreen();
      } else if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }, 10);
  };

  const handleCopyHTML = () => {
    navigator.clipboard.writeText(bionic);
    alert("HTML copied!");
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(text);
    alert("Markdown copied!");
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

    <div className="max-w-4xl mx-auto mt-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <span className="text-3xl sm:text-4xl text-indigo-400">
            <FaBookReader />
          </span>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            Bionic&nbsp;Reading&nbsp;Converter
          </h1>
        </div>
        <div className="flex flex-col w-full sm:flex-row sm:justify-end gap-2">
          <button
            onClick={() => setShareOpen(true)}
            className="flex items-center justify-center md:w-auto px-3 py-2 text-sm rounded-xl border border-indigo-500 bg-indigo-50 text-indigo-600 mb-2 md:mb-0 cursor-pointer"
          >
            <FiShare2 className="mr-2" size={18} />
            Share
          </button>
          <button
            className="flex items-center justify-center gap-2 w-full md:w-auto px-3 py-2 text-sm rounded-xl border  border-indigo-500 bg-indigo-50 text-indigo-600 cursor-pointer hover:bg-indigo-100 transition"
            onClick={() => setOpen(true)}
          >
            <FiAlertCircle className="text-indigo-600 text-base" />
            Report Bug
          </button>
          <button
            onClick={onFavoriteToggle}
            className={`px-3 py-2 rounded-xl border text-sm cursor-pointer ${isFavorite
              ? "bg-indigo-100 border-indigo-600 text-indigo-700"
              : "bg-indigo-50 border-indigo-500 text-indigo-600"
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

      {/* File Import */}
      <div
        onClick={() => fileInputRef.current.click()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center text-gray-500 mb-4 cursor-pointer hover:bg-gray-100 transition"
      >
        <span className="text-xl sm:text-2xl">&#8682;</span>
        <div className="text-sm sm:text-base">Import text from PDF or EPUB (Max 5MB)</div>
        <input
          type="file"
          accept=".pdf,.epub,application/pdf,application/epub+zip"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        {fileError && <div className="text-red-500 mt-2 text-xs sm:text-sm">{fileError}</div>}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1">Fixation Level</label>
          <select
            value={fixation}
            onChange={(e) => setFixation(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-2 py-1 outline-none text-sm"
          >
            {fixationLevels.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1">Contrast</label>
          <select
            value={contrast}
            onChange={(e) => setContrast(e.target.value)}
            className="w-full border border-gray-300 rounded px-2 py-1 outline-none text-sm"
          >
            {contrastLevels.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div
          className={`border border-gray-300 rounded px-2 py-1 min-h-[2.5rem] text-xs sm:text-base ${contrastClass[contrast]}`}
          dangerouslySetInnerHTML={{
            __html: bionic || "<span class='text-gray-400'>Output will appear here</span>",
          }}
        />
      </div>

      {/* Text Areas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1">Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-28 sm:h-32 border border-gray-300 rounded px-2 py-1 resize-none outline-none text-sm"
            placeholder="Type or paste your text here..."
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm text-gray-500 mb-1">Bionic Reading Mode</label>
          <div
            className={`w-full h-28 sm:h-32 border border-gray-300 rounded px-2 py-1 overflow-y-auto text-sm ${contrastClass[contrast]}`}
            dangerouslySetInnerHTML={{
              __html: bionic || "<span class='text-gray-400'>Output will appear here</span>",
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
        <button
          onClick={handleReset}
          className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] px-5 py-2 rounded-xl w-full sm:w-auto cursor-pointer"
        >
          Reset
        </button>
        <div className="flex gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={handleConvert}
            disabled={!text}
            className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] px-5 py-2 rounded-xl w-full sm:w-auto cursor-pointer"
          >
            Convert
          </button>
          <div ref={exportRef} className="relative">
            <button
              onClick={() => setExportOpen(!exportOpen)}
              className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] px-5 py-2 rounded-xl flex items-center w-full sm:w-auto cursor-pointer"
            >
              Export <MdKeyboardArrowDown />
            </button>
            {exportOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button onClick={handleExport} className="w-full px-4 py-2 hover:bg-gray-100">
                  Download HTML
                </button>
                <button onClick={handleCopyHTML} className="w-full px-4 py-2 hover:bg-gray-100">
                  Copy HTML
                </button>
                <button onClick={handleCopyMarkdown} className="w-full px-4 py-2 hover:bg-gray-100">
                  Copy Markdown
                </button>
              </div>
            )}
          </div>
          <button
            onClick={handleFullscreen}
            className="bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] px-5 py-2 rounded-xl w-full sm:w-auto cursor-pointer"
          >
            {isFullscreen ? "Exit Full Screen" : "Full Screen"}
          </button>
        </div>
      </div>

      {/* Share Popup */}
      {shareOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center px-2">
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
              <p className="text-sm mb-1 text-gray-500">You are currently sharing:</p>
              <h2 className="text-xl font-semibold mb-5 text-gray-600">
                {activeTab === "tool" ? "Google Fonts Pair Finder" : "10015 Tools"}
              </h2>
              <div className="flex justify-center mb-6">
                <MdShare className="text-indigo-500 text-7xl" />
              </div>
              <div className="flex justify-center gap-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaCopy].map((Icon, i) => (
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
        <div className="fixed inset-0 bg-black/30 z-40 flex justify-center items-center px-2">
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

      <Comment />

      <style>{`
          .bionic-low b { font-weight: 500; color: #666; }
          .bionic-medium b { font-weight: 700; color: #222; }
          .bionic-high b { font-weight: 900; color: #000; }
        `}</style>
    </div>
    // </div>
  );
}

export default BionicReadingConverter;
