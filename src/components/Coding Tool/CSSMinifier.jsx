import React, { useState } from "react";

// Simple HTML minifier function
function minifyHTML(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "") // Remove comments
    .replace(/\n/g, "")              // Remove line breaks
    .replace(/\s{2,}/g, " ")         // Collapse multiple spaces
    .replace(/>\s+</g, "><")         // Remove spaces between tags
    .trim();
}

export default function HtmlMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // Minify on button click
  const handleMinify = () => {
    setOutput(minifyHTML(input));
    setIsCopied(false);
  };

  // Reset input/output
  const handleReset = () => {
    setInput("");
    setOutput("");
    setIsCopied(false);
  };

  // Copy output to clipboard
  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch {
      setIsCopied(false);
      alert("Copy failed. Please try again.");
    }
  };

  // Download minified HTML as file
  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "minified.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#fafbff] py-8 px-2">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <span className="bg-[#e7eafe] text-[#5b63e6] px-2 py-1 rounded-md font-bold text-xl">🪄</span>
        <h1 className="text-2xl font-semibold text-[#22223b]">HTML Minifier</h1>
        <div className="flex-1" />
        <button className="border px-3 py-1 rounded-xl text-[#5b63e6] border-[#e7eafe] bg-white mr-2">Share</button>
        <button className="border px-3 py-1 rounded-xl text-[#5b63e6] border-[#e7eafe] bg-white mr-2">Add to Favs</button>
        <button className="border px-3 py-1 rounded-xl text-[#5b63e6] border-[#e7eafe] bg-white">Report Bug</button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-4">
        {/* Input Area */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 min-h-[220px] flex flex-col">
          <label className="text-gray-400 text-sm mb-2">
            Raw HTML Code
          </label>
          <textarea
            className="flex-1 resize-none outline-none bg-transparent text-gray-700 text-base"
            placeholder="Paste your HTML code here"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center">
          <span className="text-gray-400 text-2xl">&raquo;</span>
        </div>
        {/* Output Area */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 min-h-[220px] flex flex-col">
          <label className="text-gray-400 text-sm mb-2">
            Minified HTML Code
          </label>
          <textarea
            className="flex-1 resize-none outline-none bg-transparent text-gray-700 text-base"
            placeholder="Minified HTML will appear here"
            value={output}
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
        <button
          className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-100 transition flex items-center gap-2"
          onClick={handleReset}
        >
          <span className="text-lg">&#8634;</span> Reset
        </button>
        <button
          className="px-8 py-2 bg-[#5b63e6] text-white rounded-lg font-semibold shadow hover:bg-[#4346b1] transition"
          onClick={handleMinify}
        >
          Minify &rarr;
        </button>
        <button
          className="px-6 py-2 bg-white border border-gray-200 rounded-lg flex items-center gap-2 text-[#5b63e6] hover:bg-[#e7eafe] transition"
          onClick={handleDownload}
          disabled={!output}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="#5b63e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="4" y="18" width="16" height="2" rx="1" fill="#5b63e6" opacity="0.2"/>
          </svg>
          Download
        </button>
        <button
          className={`px-6 py-2 bg-white border border-gray-200 rounded-lg flex items-center gap-2 transition ${
            isCopied
              ? "text-green-600 bg-green-50 border-green-200"
              : "text-[#5b63e6] hover:bg-[#e7eafe]"
          }`}
          onClick={handleCopy}
          disabled={!output}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <rect
              x="7"
              y="7"
              width="10"
              height="10"
              rx="2"
              stroke="#5b63e6"
              strokeWidth="2"
            />
            <rect
              x="3"
              y="3"
              width="10"
              height="10"
              rx="2"
              stroke="#5b63e6"
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
