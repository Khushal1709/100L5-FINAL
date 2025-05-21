import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

export default function CodeToImageConverter() {
    const [position, setPosition] = useState('Bottom Right');
    const [layout, setLayout] = useState('Wide');
    const codeRef = useRef(null);

    const handleExport = async () => {
        if (codeRef.current) {
            const canvas = await html2canvas(codeRef.current);
            const link = document.createElement('a');
            link.download = 'code-image.png';
            link.href = canvas.toDataURL();
            link.click();
        }
    };

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

    return (
        <div className="min-h-screen bg-[#f8f9fb] px-4 py-6 flex flex-col items-center font-sans">
            {/* Header */}
            <div className="w-full max-w-5xl flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                        <rect width="24" height="24" rx="6" fill="#6366F1" />
                        <path d="M7 10.5L12 15.5L17 10.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xl font-semibold text-gray-800">Code to Image Converter</span>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 text-sm">Share</button>
                    <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 text-sm">Add to Favs</button>
                    <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 text-sm">Report Bug</button>
                </div>
            </div>

            {/* Top Controls */}
            <div className="w-full max-w-5xl flex gap-3 items-center mb-4">
                <select className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-700">
                    <option>1C</option>
                    <option>ABNF</option>
                    <option>Access logs</option>
                    <option>Ada</option>
                    <option>Arduino (C++ w/Arduino libs)</option>
                </select>
                <select className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-700 flex items-center">
                    <option>Android Studio - Dark</option>
                    <option>A11y - Dark</option>
                    <option>A11y - Light</option>
                    <option>Agate - Dark</option>
                    <option>An Old Hope - Dark</option>
                    <option>Arduino - Light</option>
                </select>
                <input
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
                    placeholder="File Name"
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
                    className={`mx-auto my-16 bg-[#23272f] rounded-lg shadow-lg px-6 py-5 flex items-center relative ${getLayoutClasses()}`}
                    ref={codeRef}
                >
                    {/* Mac window dots */}
                    <div className="absolute left-4 top-3 flex gap-1.5">
                        <span className="w-2.5 h-2.5 bg-red-400 rounded-full inline-block"></span>
                        <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full inline-block"></span>
                        <span className="w-2.5 h-2.5 bg-green-400 rounded-full inline-block"></span>
                    </div>
                    <span className="text-gray-400 mr-4 select-none">1</span>
                    <span className="font-mono text-lg text-[#a3be8c]">gujgv jhvjhv hgvhv</span>

                    {/* Watermark */}
                    <div className={`absolute flex items-center gap-1 ${getPositionClasses()}`}>
                        <svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.63 0-4.77 2.13-4.77 4.77 0 .37.04.73.12 1.08A12.94 12.94 0 013 1.64a4.77 4.77 0 001.48 6.36A4.41 4.41 0 012.8 7.1v.06c0 2.3 1.64 4.21 3.81 4.65a4.52 4.52 0 01-2.16.08 4.77 4.77 0 004.45 3.31A9.05 9.05 0 012 19.54a12.81 12.81 0 006.95 2.04c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" />
                        </svg>
                        <span className="font-bold text-white ml-1">johndoe</span>
                    </div>
                </div>

                {/* Watermark toggle */}
                <div className="absolute left-8 bottom-8 flex items-center gap-2">
                    <input type="checkbox" checked readOnly className="form-checkbox text-blue-600 accent-indigo-600" />
                    <span className="text-gray-700 text-sm">Add Your Watermark</span>
                </div>

                {/* Layout Options */}
                <div className="absolute right-8 bottom-8 flex items-center gap-4 text-gray-500 text-sm">
                    {['Wide', 'Compact', 'Square'].map((opt) => (
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
                    <span className="ml-4 flex items-center gap-1 cursor-pointer hover:text-indigo-600">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                            <rect width="24" height="24" rx="6" fill="#e5e7eb" />
                            <path d="M8 8h8v8H8z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Fullscreen Preview
                    </span>
                </div>
            </div>

            {/* Watermark Settings */}
            <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl p-6 mb-4 flex flex-col gap-4">
                <div className="flex gap-4 flex-wrap">
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Position</label>
                        <select
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        >
                            <option value="Top Left">Top Left</option>
                            <option value="Top Right">Top Right</option>
                            <option value="Bottom Left">Bottom Left</option>
                            <option value="Bottom Right">Bottom Right</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Watermark Type</label>
                        <select className="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700">
                            <option>Twitter Handle</option>
                            <option>Avatar + Text</option>
                            <option>Text Only</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Avatar</label>
                        <button className="px-3 py-1 border border-gray-200 rounded-lg text-gray-400 bg-gray-100 text-sm cursor-not-allowed">Upload</button>
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Username/URL</label>
                        <input
                            className="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700"
                            value="johndoe"
                            readOnly
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Font Color</label>
                        <input
                            type="color"
                            value="#ffffff"
                            className="w-8 h-8 rounded border border-gray-200"
                            readOnly
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs text-gray-500 mb-1">Background Type</label>
                    <select className="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-700">
                        <option value="Gradient">Gradient</option>
                        <option value="Solid Color">Solid Color</option>
                        <option value="Image (Ready-to-use)">Image (Ready-to-use)</option>
                        <option value="Image (Upload)">Image (Upload)</option>
                        <option value="No Background">No Background</option>
                    </select>
                </div>
            </div>

            {/* Export Button */}
            <button
                onClick={handleExport}
                className="w-full max-w-5xl mt-1 px-8 py-3 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition"
            >
                Export Image
            </button>
        </div>
    );
}
