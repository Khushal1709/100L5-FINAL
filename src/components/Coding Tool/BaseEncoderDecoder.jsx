import React, { useState } from "react";

export default function Base64EncoderDecoder() {
  const [tab, setTab] = useState("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  
  // Encode function
  const handleEncode = () => {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
    } catch {
      setOutput("Invalid input for Base64 encoding.");
    }
  };

  // Reset function
  const handleReset = () => {
    setInput("");
    setOutput("");
  };

  // Copy function
  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] px-2 py-6 flex flex-col items-center font-sans">
      {/* Header */}
      <div className="w-full max-w-5xl flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center border border-blue-200">
            <span className="text-xs font-bold text-blue-600">base<br />64</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">Base64 Encoder/Decoder</span>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 text-sm">Share</button>
          <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 text-sm">Add to Favs</button>
          <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 text-sm">Report Bug</button>
        </div>
      </div>

      {/* Spacer/Info Box */}
      <div className="w-full max-w-3xl h-16 bg-blue-100/20 rounded-xl mb-6" />

      {/* Tab Switch */}
      <div className="w-full max-w-2xl flex justify-center mb-6">
        <div className="inline-flex rounded-lg bg-[#f3f4f8] p-1">
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium transition ${
              tab === "encode"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-500 hover:bg-blue-100"
            }`}
            onClick={() => setTab("encode")}
          >
            Encoder
          </button>
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium transition ${
              tab === "decode"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-500 hover:bg-blue-100"
            }`}
            onClick={() => setTab("decode")}
          >
            Decoder
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 mb-4">
        {/* Input Area */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 min-h-[220px] flex flex-col">
          <label className="text-gray-400 text-sm mb-2">Text</label>
          <textarea
            className="flex-1 resize-none outline-none bg-transparent text-gray-700 text-base"
            placeholder="Enter text here"
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
          <label className="text-gray-400 text-sm mb-2">Base64</label>
          <textarea
            className="flex-1 resize-none outline-none bg-transparent text-gray-700 text-base"
            placeholder="Base64 output"
            value={output}
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
        <button
          className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-100 transition"
          onClick={handleReset}
        >
          &#8634; Reset
        </button>
        <button
          className="px-8 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          onClick={handleEncode}
        >
          Encode &nbsp;&rarr;
        </button>
        <button
          className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-blue-600 flex items-center gap-2 hover:bg-blue-50 transition"
          onClick={handleCopy}
          disabled={!output}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <rect x="7" y="7" width="10" height="10" rx="2" stroke="#2563eb" strokeWidth="2"/>
            <rect x="3" y="3" width="10" height="10" rx="2" stroke="#2563eb" strokeWidth="2" opacity="0.4"/>
          </svg>
          Copy
        </button>
      </div>
    </div>
  );
}
