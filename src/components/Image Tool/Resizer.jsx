import { useRef, useState } from "react";
import Resizer from "react-image-file-resizer";
import { LuDownload, LuRefreshCw } from "react-icons/lu";
import { RiShare2Fill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
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


export default function ImageResizer() {
    const [imageSrc, setImageSrc] = useState(null);
    const [pngDataUrl, setPngDataUrl] = useState(null);
    const [width, setWidth] = useState(806);
    const [height, setHeight] = useState(743);
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef();
    const [open, setOpen] = useState(false);
      const [bugDescription, setBugDescription] = useState("");
      const [shareOpen, setShareOpen] = useState(false);
      const [activeTab, setActiveTab] = useState("tool");
      const [isFavorite, setIsFavorite] = useState(false);
    
      const onFavoriteToggle = () => setIsFavorite(!isFavorite);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (
            file.type === "image/png" ||
            file.type === "image/jpeg" ||
            file.type === "image/jpg"
        ) {
            setFileName(file.name.replace(/\.[^/.]+$/, ""));
            const reader = new FileReader();
            reader.onload = (ev) => {
                setImageSrc(ev.target.result);
                const img = new window.Image();
                img.onload = () => {
                    setWidth(img.width);
                    setHeight(img.height);
                };
                img.src = ev.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            setImageSrc(null);
            setFileName("");
            alert("Only PNG or JPG files are supported.");
        }
    };

    const handleResize = () => {
        if (imageSrc) {
            fetch(imageSrc)
                .then(res => res.blob())
                .then(blob => {
                    Resizer.imageFileResizer(
                        blob,
                        width,
                        height,
                        "PNG",
                        100,
                        0,
                        (uri) => {
                            setPngDataUrl(uri);
                        },
                        "base64"
                    );
                });
        }
    };

    // --- UPDATED DOWNLOAD HANDLER ---
    const handleDownload = () => {
        if (!pngDataUrl) return;
        // Ensure pngDataUrl is a valid data URL
        let dataUrl = pngDataUrl;
        // If only base64, add prefix
        if (!pngDataUrl.startsWith("data:image")) {
            dataUrl = `data:image/png;base64,${pngDataUrl}`;
        }
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = fileName ? `${fileName}_resized.png` : "resized-image.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleReset = () => {
        setImageSrc(null);
        setPngDataUrl(null);
        setFileName("");
        setWidth(806);
        setHeight(743);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="container mx-auto max-w-4xl bg-gray-50 flex flex-col p-4 mt-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex items-center gap-2">
                    <svg width="28" height="28" fill="none" stroke="#6366f1" strokeWidth="2">
                        <rect x="4" y="4" width="20" height="20" rx="4" />
                        <path d="M9 9h10v10H9z" stroke="#6366f1" fill="none" />
                    </svg>
                    <span className="text-2xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
                        Image&nbsp;Resizer
                    </span>
                </div>
               <div className="flex flex-col w-full md:flex-row md:justify-center md:items-center md:gap-4 lg:justify-end lg:gap-2">
                         <button
                           onClick={() => setShareOpen(true)}
                           className="px-3 py-2 border border-indigo-600 bg-indigo-50 text-indigo-600 rounded-xl text-sm mb-2 md:mb-0 cursor-pointer"
                         >
                           Share
                         </button>
                         <button
                           onClick={() => setOpen(true)}
                           className="px-3 py-2 border border-indigo-600 bg-indigo-50 text-indigo-600 rounded-xl text-sm cursor-pointer"
                         >
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
            {/* Upload */}
            {!imageSrc && (
                <div className="border-2 border-dashed border-indigo-200 rounded-lg h-40 flex flex-col items-center justify-center mb-8">
                    <label
                        className="cursor-pointer flex flex-col items-center text-indigo-400"
                        htmlFor="file-input"
                    >
                        <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2">
                            <path d="M12 16v6h8v-6h5l-9-9-9 9h5z"></path>
                            <path d="M20 21v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2"></path>
                        </svg>
                        <span>
                            Drag your image here, or click to <span className="font-semibold">browse</span>
                        </span>
                        <input
                            id="file-input"
                            type="file"
                            accept="image/png,image/jpeg"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </label>
                </div>
            )}

            {/* Preview & Controls */}
            <div className="flex flex-col gap-6">
                {/* Image Preview Card */}
                {imageSrc && (
                    <div className="bg-white rounded-xl border border-gray-300 flex flex-col items-center py-8 px-4 w-full">
                        <img
                            src={imageSrc}
                            alt="preview"
                            className="rounded-lg object-contain border border-gray-300 max-w-full h-auto"
                            style={{
                                width: width > 0 ? width : 'auto',
                                height: height > 0 ? height : 'auto',
                                maxWidth: "100%",
                                maxHeight: "320px"
                            }}
                        />
                        <div className="mt-4 text-center">
                            <div className="font-medium text-gray-800">{fileName || "Image"}</div>
                            <div className="text-xs text-gray-400 mt-1">
                                Size: {width} × {height}
                            </div>
                        </div>
                    </div>
                )}

                {/* Controls Section */}
                {imageSrc && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl border border-gray-300">
                        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                            {/* Width Input */}
                            <div>
                                <label className="block text-xs text-gray-500 mb-1" htmlFor="width">Width</label>
                                <input
                                    id="width"
                                    type="number"
                                    min={1}
                                    value={width}
                                    onChange={e => setWidth(Number(e.target.value))}
                                    className="w-[100px] px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring font-semibold"
                                    placeholder="Width"
                                />
                            </div>
                            {/* Height Input */}
                            <div>
                                <label className="block text-xs text-gray-500 mb-1" htmlFor="height">Height</label>
                                <input
                                    id="height"
                                    type="number"
                                    min={1}
                                    value={height}
                                    onChange={e => setHeight(Number(e.target.value))}
                                    className="w-[100px] px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring font-semibold"
                                    placeholder="Height"
                                />
                            </div>
                            {/* Resize Button */}
                            <button
                                onClick={handleResize}
                                className="cursor-pointer bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] px-6 py-2 font-semibold rounded-full shadow-none"
                            >
                                Resize
                            </button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                            <button
                                onClick={handleReset}
                                className="cursor-pointer bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-semibold flex items-center gap-2 px-6 py-2 rounded-full w-full sm:w-auto"
                            >
                                <LuRefreshCw className="text-lg" />
                                Reset
                            </button>
                            <button
                                onClick={handleDownload}
                                disabled={!pngDataUrl}
                                className="cursor-pointer bg-gradient-to-r from-[#B8D0FF] to-[#E8D0FF] text-[#14143B] font-semibold flex items-center gap-2 px-6 py-2 rounded-full w-full sm:w-auto disabled:opacity-50"
                            >
                                <LuDownload className="text-lg" />
                                Download
                            </button>
                        </div>
                    </div>
                )}

                {/* Resized Image Preview */}
                {pngDataUrl && (
                    <div className="flex flex-col items-center mt-4">
                        <img
                            src={pngDataUrl.startsWith("data:image") ? pngDataUrl : `data:image/png;base64,${pngDataUrl}`}
                            alt="Resized"
                            className="rounded-lg border max-w-full h-auto object-contain"
                            style={{ maxHeight: 200 }}
                        />
                        <div className="text-xs text-gray-400 mt-2">Resized Image Preview</div>
                    </div>
                )}
            </div>
        </div>
    );
}
