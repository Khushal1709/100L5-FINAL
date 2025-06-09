import { useRef, useState,useContext,useEffect} from "react";
import { MdOutlineImageSearch } from "react-icons/md";
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
import { FavoritesContext } from "../../Context/FavoriteContext";
import Comment from "../Text tools/Comment";

const ImageCaptionGenerator = ({id="Image Caption"}) => {
  const { updateFavorites } = useContext(FavoritesContext);
    const [open, setOpen] = useState(false);
    const [bugDescription, setBugDescription] = useState("");
    const [shareOpen, setShareOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("tool");
    const [isFavorite, setIsFavorite] = useState(false);
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);

    // Handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 2 * 1024 * 1024) { // 2MB max
            setImage(URL.createObjectURL(file));
        } else {
            alert("File must be JPG, PNG, or WEBP and less than 2MB.");
        }
    };

    // Trigger file input when clicking the area or 'browse'
    const handleUploadClick = () => {
        fileInputRef.current.click();
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
        <div className="max-w-4xl mx-auto p-3">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <span className="text-3xl sm:text-4xl text-indigo-400 mt-4">
                        <MdOutlineImageSearch />
                    </span>
                    <span className="text-xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg mt-4">
                        Image&nbsp;Caption&nbsp;Generator
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
                        className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ml-0 cursor-pointer  ${isFavorite
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
            {/* Upload Box */}
            <div className="mx-auto max-w-4xl">
                <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 bg-white text-center cursor-pointer"
                    onClick={handleUploadClick}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    <p className="text-gray-500">
                        Drag your image or click to <span className="font-semibold text-blue-600 underline">browse</span>
                        <br />
                        <span className="text-xs">(JPG, PNG or WEBP, Max 2MB)</span>
                    </p>
                </div>

                {/* Image Preview & Caption Placeholder */}
                <div className="border border-gray-200 rounded-lg bg-gray-100 flex flex-col items-center justify-center h-48 mb-6">
                    {image ? (
                        <img src={image} alt="Preview" className="max-h-44 object-contain" />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full w-full">
                            <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect width="20" height="16" x="2" y="4" rx="2" fill="#E5E7EB" />
                                <path d="M8 14l3-3 4 4" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-gray-400">Upload an image to see the caption</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Caption Options */}
            <div className="mx-auto max-w-4xl flex flex-col gap-3 ">
                <div className="flex items-center ">
                    <input
                        className="flex-1 border border-gray-300 rounded px-3 py-2 mr-2 bg-white outline-none"
                        value="Basic Image Caption"
                        readOnly
                    />
                    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm outline-none">Copy</button>
                </div>
                <div className="flex items-center">
                    <input
                        className="flex-1 border border-gray-300 rounded px-3 py-2 mr-2 bg-white outline-none"
                        value="AI-powered Image Caption Alt. #1"
                        readOnly
                    />
                    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm outline-none">Copy</button>
                </div>
                <div className="flex items-center">
                    <input
                        className="flex-1 border border-gray-300 rounded px-3 py-2 mr-2 bg-white outline-none"
                        value="AI-powered Image Caption Alt. #2"
                        readOnly
                    />
                    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm outline-none">Copy</button>
                </div>
                <div className="flex items-center">
                    <input
                        className="flex-1 border border-gray-300 rounded px-3 py-2 mr-2 bg-white outline-none"
                        value="AI-powered Image Caption Alt. #3"
                        readOnly
                    />
                    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm outline-none">Copy</button>
                </div>
            </div>

        </div>
        <Comment/>
        </>
    );
};

export default ImageCaptionGenerator;

