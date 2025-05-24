import React, { useContext, useState, useRef, useEffect } from "react";
import html2canvas from 'html2canvas';
import { RiCodeBlock } from "react-icons/ri";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { MdOutlineContentPaste, MdShare } from "react-icons/md";
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
import Comment from "../Text tools/Comment";
import { FiAlertCircle } from 'react-icons/fi';
import { FiShare2 } from "react-icons/fi";
import { FavoritesContext } from "../../Context/FavoriteContext";

const LANGUAGES = [
    { label: '1C', value: '1c' },
    { label: 'ABNF', value: 'abnf' },
    { label: 'Access logs', value: 'accesslog' },
    { label: 'Ada', value: 'ada' },
    { label: 'Arduino (C++ w/Arduino libs)', value: 'arduino' },
];

const THEMES = [
    { label: 'Android Studio - Dark', value: 'androidstudio' },
    { label: 'A11y - Dark', value: 'a11y-dark' },
    { label: 'A11y - Light', value: 'a11y-light' },
    { label: 'Agate - Dark', value: 'agate' },
    { label: 'An Old Hope - Dark', value: 'an-old-hope' },
    { label: 'Arduino - Light', value: 'arduino-light' },
];

const WATERMARK_TYPES = [
    'Twitter Handle',
    'Avatar + Text',
    'Text Only',
];

const LAYOUTS = ['Wide', 'Compact', 'Square'];

const BG_TYPES = [
    'Gradient',
    'Solid Color',
    'Image (Ready-to-use)',
    'Image (Upload)',
    'No Background',
];



export default function CodeToImageConverter({ id = "Code to Image Generator" }) {
    const { updateFavorites } = useContext(FavoritesContext);
    const [position, setPosition] = useState('Bottom Right');
    const [layout, setLayout] = useState('Wide');
    const [language, setLanguage] = useState(LANGUAGES[0].value);
    const [theme, setTheme] = useState(THEMES[0].value);
    const [filename, setFilename] = useState('code-image.png');
    const [code, setCode] = useState('// Write your code here');
    const [showWatermark, setShowWatermark] = useState(true);
    const [watermarkType, setWatermarkType] = useState(WATERMARK_TYPES[0]);
    const [watermarkText, setWatermarkText] = useState('johndoe');
    const [watermarkColor, setWatermarkColor] = useState('#ffffff');
    const [bgType, setBgType] = useState(BG_TYPES[0]);
    const [bgColor, setBgColor] = useState('#23272f');
    const [bgGradient, setBgGradient] = useState('linear-gradient(135deg, #23272f 0%, #3b4252 100%)');
    const [avatar, setAvatar] = useState(null);
    const codeRef = useRef(null);

    // Dynamic class/style helpers
    const getPositionClasses = () => {
        const map = {
            'Top Left': 'top-3 left-3',
            'Top Right': 'top-3 right-3',
            'Bottom Left': 'bottom-3 left-3',
            'Bottom Right': 'bottom-3 right-3',
        };
        return map[position] || 'bottom-3 right-3';
    };

    const getLayoutClasses = () => {
        if (layout === 'Compact') return 'max-w-[300px]';
        if (layout === 'Square') return 'w-[400px] h-[400px]';
        return 'min-w-[380px] max-w-[440px]'; // Wide
    };

    const getBgStyle = () => {
        switch (bgType) {
            case 'Gradient':
                return { background: bgGradient };
            case 'Solid Color':
                return { background: bgColor };
            case 'No Background':
                return { background: 'none' };
            default:
                return { background: bgGradient };
        }
    };

    const handleExport = async () => {
        if (codeRef.current) {
            const canvas = await html2canvas(codeRef.current, { backgroundColor: null });
            const link = document.createElement('a');
            link.download = filename || 'code-image.png';
            link.href = canvas.toDataURL();
            link.click();
        }
    };

    // Avatar upload handler
    const handleAvatarUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => setAvatar(ev.target.result);
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const [open, setOpen] = useState(false);
    const [bugDescription, setBugDescription] = useState("");
    const [shareOpen, setShareOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("tool");
    const [isFavorite, setIsFavorite] = useState(false);


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
            {/* Header */}
            <div className="max-w-4xl mx-auto mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        <span className="text-4xl text-indigo-400">
                            <RiCodeBlock />
                        </span>
                        <h1 className="text-2xl font-bold text-gray-900 md:text-sm lg:text-2xl sm:text-lg">
                            Code&nbsp;to&nbsp;Image&nbsp;Converter
                        </h1>
                    </div>
                    <div className="flex flex-col w-full md:flex-row md:justify-center md:items-center md:gap-4 lg:justify-end lg:gap-2">
                        <button
                            onClick={() => setShareOpen(true)}
                            className="flex items-center justify-center md:w-auto px-3 py-2 text-sm rounded-xl border border-indigo-500 bg-indigo-50 text-indigo-600 mb-2 md:mb-0 cursor-pointer"
                        >
                            <FiShare2 className="mr-2" size={18} />
                            Share
                        </button>
                        <button
                            className="flex items-center justify-center gap-2 w-full md:w-auto px-3 py-2 text-sm rounded-xl border border-indigo-500 bg-indigo-50 text-indigo-600 cursor-pointer hover:bg-indigo-100 transition"
                            onClick={() => setOpen(true)}
                        >
                            <FiAlertCircle className="text-indigo-600 text-base" />
                            Report Bug
                        </button>
                        <button
                            onClick={onFavoriteToggle}
                            className={`px-3 py-2 rounded-xl border text-sm mt-2 md:mt-0 ml-0 cursor-pointer ${isFavorite
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


                {/* Top Controls */}
                <div className="w-full max-w-5xl flex gap-3 items-center mb-4">
                    <select
                        className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                    >
                        {LANGUAGES.map(lang => (
                            <option key={lang.value} value={lang.value}>{lang.label}</option>
                        ))}
                    </select>
                    <select
                        className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-700 flex items-center"
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                    >
                        {THEMES.map(t => (
                            <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                    </select>
                    <input
                        className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
                        placeholder="File Name"
                        value={filename}
                        onChange={e => setFilename(e.target.value)}
                    />
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 flex items-center gap-1">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                            <rect width="24" height="24" rx="6" fill="#e5e7eb" />
                            <path d="M12 8v8m0 0l-4-4m4 4l4-4" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Settings
                    </button>
                </div>

                {/* Code Preview Area */}
                <div className="w-full max-w-5xl bg-white rounded-xl border border-gray-200 min-h-[400px] flex flex-col items-center justify-center relative mb-4">
                    <div
                        className={`mx-auto my-16 rounded-lg shadow-lg px-6 py-5 flex items-center relative ${getLayoutClasses()}`}
                        ref={codeRef}
                        style={getBgStyle()}
                    >
                        {/* Mac window dots */}
                        <div className="absolute left-4 top-3 flex gap-1.5">
                            <span className="w-2.5 h-2.5 bg-red-400 rounded-full inline-block"></span>
                            <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full inline-block"></span>
                            <span className="w-2.5 h-2.5 bg-green-400 rounded-full inline-block"></span>
                        </div>
                        <div className="flex flex-col w-full">
                            <textarea
                                className="w-full bg-transparent font-mono text-lg text-[#a3be8c] resize-none outline-none border-none"
                                value={code}
                                onChange={e => setCode(e.target.value)}
                                rows={8}
                                style={{ color: '#a3be8c', background: 'transparent' }}
                            />
                            <SyntaxHighlighter
                                language={language}
                                style={themes[theme] || themes['androidstudio']}
                                customStyle={{ background: 'none', margin: 0, padding: 0, fontSize: 16 }}
                            >
                                {code}
                            </SyntaxHighlighter>
                        </div>
                        {/* Watermark */}
                        {showWatermark && (
                            <div className={`absolute flex items-center gap-1 ${getPositionClasses()}`}>
                                {watermarkType !== 'Text Only' && avatar && (
                                    <img src={avatar} alt="avatar" className="w-6 h-6 rounded-full" />
                                )}
                                <span className="font-bold ml-1" style={{ color: watermarkColor }}>{watermarkText}</span>
                            </div>
                        )}
                    </div>
                    {/* Watermark toggle */}
                    <div className="absolute left-8 bottom-8 flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={showWatermark}
                            onChange={() => setShowWatermark(v => !v)}
                            className="form-checkbox text-blue-600 accent-indigo-600"
                        />
                        <span className="text-gray-700 text-sm">Add Your Watermark</span>
                    </div>
                    {/* Layout Options */}
                    <div className="absolute right-8 bottom-8 flex items-center gap-4 text-gray-500 text-sm">
                        {LAYOUTS.map(opt => (
                            <label key={opt} className="flex items-center gap-1 cursor-pointer">
                                <input
                                    type="radio"
                                    name="layout"
                                    className="form-radio accent-indigo-600"
                                    checked={layout === opt}
                                    onChange={() => setLayout(opt)}
                                />
                                {opt}
                            </label>
                        ))}
                        {/* Fullscreen Preview (optional, not implemented) */}
                    </div>
                </div>

                {/* Watermark & Background Settings */}
                <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl p-6 mb-4 flex flex-col gap-4">
                    <div className="flex gap-4 flex-wrap">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Position</label>
                            <select
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={position}
                                onChange={e => setPosition(e.target.value)}
                            >
                                <option value="Top Left">Top Left</option>
                                <option value="Top Right">Top Right</option>
                                <option value="Bottom Left">Bottom Left</option>
                                <option value="Bottom Right">Bottom Right</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Watermark Type</label>
                            <select
                                className="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
                                value={watermarkType}
                                onChange={e => setWatermarkType(e.target.value)}
                            >
                                {WATERMARK_TYPES.map(type => (
                                    <option key={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Avatar</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="px-3 py-1 border border-gray-200 rounded-lg text-gray-400 bg-gray-100 text-sm"
                                onChange={handleAvatarUpload}
                                disabled={watermarkType === 'Text Only'}
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Username/URL</label>
                            <input
                                className="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
                                value={watermarkText}
                                onChange={e => setWatermarkText(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Font Color</label>
                            <input
                                type="color"
                                value={watermarkColor}
                                className="w-8 h-8 rounded border border-gray-200"
                                onChange={e => setWatermarkColor(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Background Type</label>
                        <select
                            className="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
                            value={bgType}
                            onChange={e => setBgType(e.target.value)}
                        >
                            {BG_TYPES.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        {bgType === 'Solid Color' && (
                            <input
                                type="color"
                                value={bgColor}
                                className="ml-2 w-8 h-8 rounded border border-gray-200"
                                onChange={e => setBgColor(e.target.value)}
                            />
                        )}
                        {bgType === 'Gradient' && (
                            <input
                                type="text"
                                value={bgGradient}
                                className="ml-2 px-2 py-1 rounded border border-gray-200 text-sm"
                                onChange={e => setBgGradient(e.target.value)}
                                placeholder="CSS gradient"
                            />
                        )}
                    </div>
                </div>

                {/* Export Button */}
                <button
                    onClick={handleExport}
                    className="w-full max-w-5xl mt-1 px-8 py-3 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition"
                >
                    Export Image
                </button>
                <Comment />
            </div>
        </>
    );
}
