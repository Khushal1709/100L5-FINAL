import { useRef, useState, useCallback } from "react";
import Cropper from "react-easy-crop";

const censorTypes = [
  { value: "pixelate", label: "Pixelate" },
  { value: "blur", label: "Blur" },
  { value: "blackbar", label: "Black Bar" },
];

function getCroppedImg(image, crop, censorType, pixelSize) {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  if (censorType === "pixelate") {
    const { x, y, width, height } = crop;
    for (let py = y; py < y + height; py += pixelSize) {
      for (let px = x; px < x + width; px += pixelSize) {
        const w = Math.min(pixelSize, x + width - px);
        const h = Math.min(pixelSize, y + height - py);
        const imgData = ctx.getImageData(px, py, w, h).data;
        let r = 0, g = 0, b = 0, a = 0, count = 0;
        for (let i = 0; i < imgData.length; i += 4) {
          r += imgData[i];
          g += imgData[i + 1];
          b += imgData[i + 2];
          a += imgData[i + 3];
          count++;
        }
        r = r / count;
        g = g / count;
        b = b / count;
        a = a / count;
        ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
        ctx.fillRect(px, py, w, h);
      }
    }
  } else if (censorType === "blur") {
    const { x, y, width, height } = crop;
    // Create a temporary canvas for the cropped area
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext("2d");
    // Draw the cropped area onto the temp canvas
    tempCtx.drawImage(
      image,
      x * scaleX, y * scaleY, width * scaleX, height * scaleY, // Source rect (scaled)
      0, 0, width, height // Destination rect
    );
    // Apply blur filter and redraw
    tempCtx.filter = `blur(${pixelSize}px)`;
    tempCtx.drawImage(tempCanvas, 0, 0, width, height, 0, 0, width, height);
    // Draw the blurred area back to the main canvas
    ctx.drawImage(tempCanvas, x, y);
  } else if (censorType === "blackbar") {
    const { x, y, width, height } = crop;
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, width, height);
  }

  return canvas.toDataURL("image/jpeg");
}

export default function PhotoCensor() {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [censorType, setCensorType] = useState("pixelate");
  const [pixelSize, setPixelSize] = useState(10);
  const [censoredImg, setCensoredImg] = useState(null);
  const imgRef = useRef(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result);
    reader.readAsDataURL(file);
  };

  const handleCensor = async () => {
    if (!croppedAreaPixels || !imgRef.current) return;
    const img = imgRef.current;
    const crop = {
      x: Math.round(croppedAreaPixels.x),
      y: Math.round(croppedAreaPixels.y),
      width: Math.round(croppedAreaPixels.width),
      height: Math.round(croppedAreaPixels.height),
    };
    const out = getCroppedImg(img, crop, censorType, pixelSize);
    setCensoredImg(out);
  };

  const handleReset = () => {
    setCensoredImg(null);
    setImageSrc(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
  };

  const handleDownload = () => {
    if (!censoredImg) return;
    const link = document.createElement("a");
    link.href = censoredImg;
    link.download = "censored.jpg";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span role="img" aria-label="censor">🖼️</span> Photo Censor
        </h1>
        {!imageSrc && (
          <div className="border-2 border-dashed border-indigo-200 rounded-lg h-40 flex flex-col items-center justify-center mb-6">
            <label className="cursor-pointer flex flex-col items-center text-indigo-400">
              <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2">
                <path d="M12 16v6h8v-6h5l-9-9-9 9h5z"></path>
                <path d="M20 21v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2"></path>
              </svg>
              <span>Drag your image here, or click to <span className="font-semibold">browse</span></span>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>
        )}

        {imageSrc && !censoredImg && (
          <div className="relative w-full h-96 bg-gray-100 mb-6">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="rect"
              showGrid={false}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <img
              ref={imgRef}
              src={imageSrc}
              alt="to censor"
              className="hidden"
              onLoad={e => { imgRef.current = e.target; }}
            />
          </div>
        )}

        {censoredImg && (
          <div className="flex flex-col items-center mb-6">
            <img src={censoredImg} alt="censored" className="rounded-lg max-w-full" style={{ maxHeight: 350 }} />
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Censor Type</label>
            <select
              className="border rounded px-2 py-1"
              value={censorType}
              onChange={e => setCensorType(e.target.value)}
            >
              {censorTypes.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Pixel Size: {pixelSize}px</label>
            <input
              type="range"
              min={5}
              max={30}
              value={pixelSize}
              onChange={e => setPixelSize(Number(e.target.value))}
              className="w-32"
              disabled={censorType !== "pixelate" && censorType !== "blur"}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className={`flex-1 py-2 rounded-lg font-semibold ${imageSrc && croppedAreaPixels && !censoredImg ? "bg-indigo-500 text-white" : "bg-indigo-200 text-indigo-400 cursor-not-allowed"}`}
            onClick={handleCensor}
            disabled={!imageSrc || !croppedAreaPixels || censoredImg}
          >
            Censor
          </button>
          <button
            className="flex-1 py-2 rounded-lg border border-gray-300 font-semibold text-gray-600 bg-white"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className={`flex-1 py-2 rounded-lg font-semibold ${censoredImg ? "bg-indigo-500 text-white" : "bg-indigo-200 text-indigo-400 cursor-not-allowed"}`}
            onClick={handleDownload}
            disabled={!censoredImg}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
