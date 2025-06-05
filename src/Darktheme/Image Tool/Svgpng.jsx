import React, { useRef, useState,useContext,useEffect } from "react";
import { SiConvertio } from "react-icons/si";
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
import { FavoritesContext } from "../../Context/FavoriteContext";


const svgStringToPng = async (svgText, width = 500, height = 500) => {
  return new Promise((resolve) => {
    const img = new window.Image();
    const svg = new Blob([svgText], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svg);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/png"));
    };
    img.src = url;
  });
};

export default function SvgToPngTool({id="SVG to PNG Converter"}) {
      const { updateFavorites } = useContext(FavoritesContext);
  const [imageSrc, setImageSrc] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [pngDataUrl, setPngDataUrl] = useState(null);
  const fileInputRef = useRef();
  const [isFavorite, setIsFavorite] = useState(false);
    const [activeTab, setActiveTab] = useState("tool");
    const [shareOpen, setShareOpen] = useState(false);
    const [bugDescription, setBugDescription] = useState("");
    const [open, setOpen] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setPngDataUrl(null);
    if (!file) return;

    if (file.type === "image/svg+xml") {
      setFileType("svg");
      const reader = new FileReader();
      reader.onload = (ev) => setImageSrc(ev.target.result);
      reader.readAsText(file);
    } else if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/jpg"
    ) {
      setFileType("img");
      const reader = new FileReader();
      reader.onload = (ev) => setImageSrc(ev.target.result);
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
      setFileType(null);
      alert("Only SVG, PNG, or JPG files are supported.");
    }
  };

  const handleConvert = async () => {
    if (fileType === "svg" && imageSrc) {
      const pngUrl = await svgStringToPng(imageSrc, 500, 500);
      setPngDataUrl(pngUrl);
    }
  };

  const handleDownload = () => {
    if (!pngDataUrl) return;
    const link = document.createElement("a");
    link.href = pngDataUrl;
    link.download = "converted.png";
    link.click();
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
    <div className=" bg-[#16283E]">
   <div className="max-w-4xl mx-auto p-3">
             {/* Header */}
             <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
                 <div className="flex items-center gap-3 mb-2 sm:mb-0">
                     <span className="text-4xl text-indigo-400 mt-8">
                         <SiConvertio />
                     </span>
                     <span className="text-2xl font-bold text-white md:text-lg lg:text-2xl sm:text-lg mt-8">
                         SVG&nbsp;to&nbsp;PNG&nbsp;Converter
                     </span>
                 </div>
                 <div className="flex flex-col w-full md:flex-row md:justify-center md:items-center md:gap-4 md:mt-5 lg:justify-end lg:gap-2 mt-8">
                     <button
                         onClick={() => setShareOpen(true)}
                         className="flex items-center justify-center md:w-auto px-3 py-2 text-sm rounded-xl border mb-2 md:mb-0 cursor-pointer text-white bg-[#273D58] "
                     >
                         <FiShare2 className="mr-2" size={18} />
                         Share
                     </button>
                     <button
                         className="flex items-center justify-center gap-2 w-full md:w-auto px-3 py-2 text-sm rounded-xl border text-white bg-[#273D58] ransition"
                         onClick={() => setOpen(true)}
                     >
                         <FiAlertCircle className="text-white   text-base" />
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
          
      {/* Main Card */}
      <div className="max-w-5xl mx-auto rounded-xl shadow-md p-4 md:p-6">
        {/* Upload Box */}
        {!imageSrc && (
          <div className="border-2 border-dashed border-white  rounded-lg h-40 flex flex-col items-center justify-center mb-6 text-center">
            <label htmlFor="file-input" className="cursor-pointer flex flex-col items-center text-gray-500">
              <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2">
                <path d="M12 16v6h8v-6h5l-9-9-9 9h5z" />
                <path d="M20 21v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2" />
              </svg>
              <span>
                Drag your image here, or click to <span className="font-semibold">browse</span>
              </span>
              <input
                id="file-input"
                type="file"
                accept=".svg,image/png,image/jpeg"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </label>
          </div>
        )}

        {/* Preview Area */}
        <div className="w-full border border-white rounded-lg flex items-center justify-center mb-6 p-4 h-64 overflow-auto">
          {!imageSrc ? (
            <div className="flex flex-col items-center text-gray-400 text-center">
              <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2">
                <rect x="8" y="8" width="20" height="20" rx="2" />
                <path d="M16 16h.01" />
                <path d="M12 20h8" />
              </svg>
              <span>Upload a photo before applying conversion</span>
            </div>
          ) : fileType === "svg" ? (
            <div
              className="max-h-60 w-full overflow-auto"
              dangerouslySetInnerHTML={{ __html: imageSrc }}
            />
          ) : (
            <img
              src={imageSrc}
              alt="preview"
              className="max-h-60 max-w-full rounded-lg object-contain"
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {fileType === "svg" && (
            <button
              onClick={handleConvert}
              className={`bg-gradient-to-r from-indigo-300 to-purple-200 text-[#14143B] flex-1 py-2 rounded-lg font-semibold ${
                imageSrc ? "" : "cursor-not-allowed opacity-50"
              }`}
              disabled={!imageSrc}
            >
              Convert SVG to PNG
            </button>
          )}
          <button
            onClick={() => {
              setImageSrc(null);
              setPngDataUrl(null);
              setFileType(null);
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
            className="bg-[#273D58] text-white px-5 py-2 rounded-xl shadow-md cursor-pointer"
          >
            Reset
          </button>
          <button
            onClick={handleDownload}
            className={`bg-[#273D58] text-white px-5 py-2 rounded-xl shadow-md cursor-pointer" ${
              pngDataUrl ? "" : "cursor-not-allowed opacity-50"
            }`}
            disabled={!pngDataUrl}
          >
            Download
          </button>
        </div>

        {/* Converted PNG Preview */}
        {pngDataUrl && (
          <div className="mt-6 text-center">
            <img
              src={pngDataUrl}
              alt="Converted PNG"
              className="mx-auto rounded-lg max-w-full"
              style={{ maxHeight: 200 }}
            />
            <p className="text-xs text-gray-400 mt-2">Converted PNG Preview</p>
          </div>
        )}
      </div>
    </div>
    </div>
      <Comment/>
      </>
  );
}
