import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Getfeatured from "./components/Getfeatured";
import Submit from "./components/Submit";
import Productfinder from "./components/Productfinder";
import Productfinder1 from "./components/Productfinder1";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Caseconveter from "./components/Text tools/Caseconveter";
import LoremIpsumGenerator from "./components/Text tools/LoremIpsum";
import Layout from "./components/Layout";
import CaseConverter from "./components/Text tools/Caseconveter";
import LetterCounter from "./components/Text tools/LetterCounter";
import Handwriting from "./components/Text tools/Handwriting";
import BionicReading from "./components/Text tools/BionicReading";
import Whitespace from "./components/Text tools/Whitespace";
import Googlefont from "./components/Text tools/Googlefont";
import Randomizer from "./components/Miscellaneous Tools/Randomizer";
import QRcode from "./components/Miscellaneous Tools/QRcode";
import StrongRandom from "./components/Miscellaneous Tools/StrongRandom";
import Barcode from "./components/Miscellaneous Tools/Barcode";
import AIColor from "./components/Colour Tool/AIColor";
import HEX from "./components/Colour Tool/HEX";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RGBA from "./components/Colour Tool/RGBA";
import ColorMixer from "./components/Colour Tool/ColorMixer";
import Resizer from "./components/Image Tool/Resizer";
import Svgpng from "./components/Image Tool/Svgpng";
import ColorShades from "./components/Colour Tool/ColorShades";
import CodetoImage from "./components/Coding Tool/CodetoImage";
import Slug from "./components/Coding Tool/Slug";
import Shadow from "./components/Coding Tool/Shadow";
import BaseEncoderDecoder from "./components/Coding Tool/BaseEncoderDecoder";
import HTMLEncoderDecoder from "./components/Coding Tool/HTMLEncoderDecoder";
import URLEncoderDcoder from "./components/Coding Tool/URLEncoderDcoder";
import HTMLMinifier from "./components/Coding Tool/HTMLMinifier";
import CSSMinifier from "./components/Coding Tool/CSSMinifier";
import JavaScriptMinifier from "./components/Coding Tool/JavaScriptMinifier";
import Hf from "./components/Coding Tool/Hf";
import Cs from "./components/Coding Tool/Cs";
import Javaf from "./components/Coding Tool/Javaf";
import MD5 from "./components/Coding Tool/MD5";
import SHA1 from "./components/Coding Tool/SHA1";
import InstagramFilters from "./components/Social Media Tools/InstagramFilters";
import InstagramPostGenerator from "./components/Social Media Tools/InstagramPostGenerator";
import TweetGenerator from "./components/Social Media Tools/TweetGenerator";
import Photocensor from "./components/Image Tool/Photocensor";
import ImageCropper from "./components/Image Tool/ImageCropper";
import AverageColor from "./components/Image Tool/AverageColor";
import ImageColorPicker from "./components/Image Tool/ImageColorPicker";
import SVGpattern from "./components/Image Tool/SVGpattern";
import BlobGenerator from "./components/Image Tool/BlobGenerator";
import Opengraphmetagenerator from "./components/Social Media Tools/Opengraphmetagenerator";
import Vimeothumbnailgrabber from "./components/Social Media Tools/Vimeothumbnailgrabber";
import Youtubethumbnailgrabber from "./components/Social Media Tools/Youtubethumbnailgrabber";
import Twitteradrevenuegenerator from "./components/Social Media Tools/Twitteradrevenuegenerator";
import Cssclippathgenerator from "./components/CSS Tool/Cssclippathgenerator";
import Cssloader from "./components/CSS Tool/Cssloader";
import CSSbackgroundpattern from "./components/CSS Tool/CSSbackgroundpattern";
import Csscubic from "./components/CSS Tool/Csscubic";
import Cssglassmorphism from "./components/CSS Tool/Cssglassmorphism";
import Csstextglitch from "./components/CSS Tool/Csstextglitch";
import Cssgradientgenerator from "./components/CSS Tool/Cssgradientgenerator";
import CSStrianglegenerator from "./components/CSS Tool/CSStrianglegenerator";
import Cssboxshadowgenerator from "./components/CSS Tool/Cssboxshadowgenerator";
import Borderradiusgenerator from "./components/CSS Tool/Borderradiusgenerator";
import ImageColorExtractor from "./components/Image Tool/ImageColorExtractor";
import { FavoritesProvider } from "./Context/FavoriteContext";
import About from "./components/About";
import Home from "./components/Home";
import Texttool from "./Pages/Text tool Grid/Texttool";
import Imagetool from "./Pages/Image tool Grid/Imagetool";
import CSStool from "./Pages/CSS tool Grid/CSStool";
import Codingtool from "./Pages/Coding tool Grid/Codingtool";
import Colortool from "./Pages/Color tool Grid/Colortool";
import Socialmediatool from "./Pages/Socialmedia tool Grid/Socialmediatool";
import Miscellaneoustool from "./Pages/Miscellaneous tool Grid/Miscellaneoustool";
import Imagefilter from "./components/Image Tool/Imagefilter";
import ImageCaptionGenerator from "./components/Image Tool/ImageCaptionGenerator";
import ScrollToTop from "./components/ScrollToTop";
// Dark Theme Imports
import DarkHf from "./Darktheme/Coding Tool/Hf";
import DarkCs from "./Darktheme/Coding Tool/Cs";
import DarkJavaf from "./Darktheme/Coding Tool/Javaf";
import DarkMD5 from "./Darktheme/Coding Tool/MD5";
import DarkSHA1 from "./Darktheme/Coding Tool/SHA1";
import DarkSlug from "./Darktheme/Coding Tool/Slug";
import DarkShadow from "./Darktheme/Coding Tool/Shadow";
// import DarkCodetoImage from "./Darktheme/Coding Tool/CodetoImage";
// import DarkBaseEncoderDecoder from "./Darktheme/Coding Tool/BaseEncoderDecoder";
// import DarkCSSMinifier from "./Darktheme/Coding Tool/CSSMinifier";
import DarkHTMLEncoderDecoder from "./Darktheme/Coding Tool/HTMLEncoderDecoder";
import DarkURLEncoderDcoder from "./Darktheme/Coding Tool/URLEncoderDcoder";
import DarkHTMLMinifier from "./Darktheme/Coding Tool/HTMLMinifier";
import DarkAIColor from "./Darktheme/Colour Tool/AIColor";
import DarkHEX from "./Darktheme/Colour Tool/HEX";
import DarkRGBA from "./Darktheme/Colour Tool/RGBA";
import DarkColorMixer from "./Darktheme/Colour Tool/ColorMixer";
import DarkColorShades from "./Darktheme/Colour Tool/ColorShades";
import DarkInstagramFilters from "./Darktheme/Social Media Tools/InstagramFilters";
import DarkInstagramPostGenerator from "./Darktheme/Social Media Tools/InstagramPostGenerator";
import DarkTweetGenerator from "./Darktheme/Social Media Tools/TweetGenerator";
import DarkOpengraphmetagenerator from "./Darktheme/Social Media Tools/Opengraphmetagenerator";
import DarkVimeothumbnailgrabber from "./Darktheme/Social Media Tools/Vimeothumbnailgrabber";
import DarkYoutubethumbnailgrabber from "./Darktheme/Social Media Tools/Youtubethumbnailgrabber";
import DarkTwitteradrevenuegenerator from "./Darktheme/Social Media Tools/Twitteradrevenuegenerator";
import DarkStrongRandom from "./Darktheme/Miscellaneous Tools/StrongRandom";
import DarkRandomizer from "./Darktheme/Miscellaneous Tools/Randomizer";
import DarkQRcode from "./Darktheme/Miscellaneous Tools/QRcode";
import DarkBarcode from "./Darktheme/Miscellaneous Tools/Barcode";
import DarkPhotocensor from "./Darktheme/Image Tool/Photocensor";
import DarkResizer from "./Darktheme/Image Tool/Resizer";
import DarkSvgpng from "./Darktheme/Image Tool/Svgpng";
import DarkImageCropper from "./Darktheme/Image Tool/ImageCropper";
import DarkAverageColor from "./Darktheme/Image Tool/AverageColor";
import DarkImageColorPicker from "./Darktheme/Image Tool/ImageColorPicker";
import DarkSVGpattern from "./Darktheme/Image Tool/SVGpattern";
import DarkBlobGenerator from "./Darktheme/Image Tool/BlobGenerator";
import DarkImagefilter from "./Darktheme/Image Tool/Imagefilter";
import DarkImageCaptionGenerator from "./Darktheme/Image Tool/ImageCaptionGenerator";
import DarkImageColorExtractor from "./Darktheme/Image Tool/ImageColorExtractor";
import DarkCaseConverter from "./Darktheme/Text tools/Caseconveter";
import DarkLoremIpsumGenerator from "./Darktheme/Text tools/LoremIpsum";
import DarkLetterCounter from "./Darktheme/Text tools/LetterCounter";
import DarkHandwriting from "./Darktheme/Text tools/Handwriting";
import DarkBionicReading from "./Darktheme/Text tools/BionicReading";
import DarkWhitespace from "./Darktheme/Text tools/Whitespace";
import DarkGooglefont from "./Darktheme/Text tools/Googlefont";

import DarkCssclippathgenerator from "./Darktheme/CSS Tool/Cssclippathgenerator";
import DarkCssloader from "./Darktheme/CSS Tool/Cssloader";
import DarkCSSbackgroundpattern from "./Darktheme/CSS Tool/CSSbackgroundpattern";
import DarkCsscubic from "./Darktheme/CSS Tool/Csscubic";
import DarkCssglassmorphism from "./Darktheme/CSS Tool/Cssglassmorphism";
import DarkCsstextglitch from "./Darktheme/CSS Tool/Csstextglitch";
import DarkCssgradientgenerator from "./Darktheme/CSS Tool/Cssgradientgenerator";
import DarkCSStrianglegenerator from "./Darktheme/CSS Tool/CSStrianglegenerator";
import DarkCssboxshadowgenerator from "./Darktheme/CSS Tool/Cssboxshadowgenerator";
import DarkBorderradiusgenerator from "./Darktheme/CSS Tool/Borderradiusgenerator";

import DarkAbout from "../src/Darktheme/About";
import DarkContact from "../src/Darktheme/Contact";
import DarkSubmit from "../src/Darktheme/Submit";
import DarkProductfinder from "../src/Darktheme/Productfinder";
import DarkProductfinder1 from "../src/Darktheme/Productfinder1";
import DarkGetfeatured from "../src/Darktheme/Getfeatured";
import DarkLayout from "./Darktheme/DarkLayout";
import DarkHome from "./Darktheme/Home";
import DarkTexttool from "../src/Darktheme/Pages/Text tool Grid/Texttool"
function App() {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleStorageChange = () => {
      const newMode = localStorage.getItem("theme") || "light";
      setMode(newMode);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const observer = setInterval(() => {
      const newMode = localStorage.getItem("theme") || "light";
      if (newMode !== mode) {
        setMode(newMode);
      }
    }, 500); 
    return () => clearInterval(observer);
  }, [mode]);

  console.log(mode, "mode");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, mode]);

  return (
    <>
      <FavoritesProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Home route WITHOUT layout */}
            <Route path="/" element={mode === "light" ?<Home /> : <DarkHome /> } />

            {/* All other routes WITH sidebar/footer layout */}
            <Route element={mode === "light" ?<Layout /> : <DarkLayout />}>
              <Route path="/caseconverter" element={mode === "light" ?<CaseConverter />: <DarkCaseConverter />} />
              <Route path="/lorem" element={mode === "light" ?<LoremIpsumGenerator />:<DarkLoremIpsumGenerator /> } />
              <Route path="/letter" element={mode === "light" ?<LetterCounter />:<DarkLetterCounter /> } />
              <Route path="/Text" element={mode === "light" ?<Handwriting />:<DarkHandwriting /> } />
              <Route path="/BionicReading" element={mode === "light" ?<BionicReading />:<DarkBionicReading /> } />
              <Route path="/Whitespace" element={mode === "light" ?<Whitespace />: <DarkWhitespace />} />
              <Route path="/Googlefont" element={mode === "light" ?<Googlefont />: <DarkGooglefont />} />
: 
              <Route path="/StrongRandom" element={mode === "light" ?<StrongRandom /> : <DarkStrongRandom />} />
              <Route path="/Randomizer" element={mode === "light" ?<Randomizer /> : <DarkRandomizer /> }  />
              <Route path="/QRcode" element={mode === "light" ?<QRcode /> : <DarkQRcode /> } />
              <Route path="/Barcode" element={mode === "light" ?<Barcode /> : <DarkBarcode /> } />
              
              <Route path="/AIColor" element={mode === "light" ? <AIColor /> : <DarkAIColor />} />
              <Route path="/HEX" element={mode === "light" ? <HEX /> : <DarkHEX /> } />
              <Route path="/RGBA" element={mode === "light" ? <RGBA /> : <DarkRGBA />} />
              <Route path="/ColorMixer" element={mode === "light" ? <ColorMixer /> : <DarkColorMixer />} />
              <Route path="/ColorShades" element={mode === "light" ? <ColorShades /> :  <DarkColorShades />} />
              {/* <Route path="/CodetoImage" element={mode === "light"  ?<CodetoImage /> : <DarkCodetoImage />} /> */}
              {/* <Route
                path="/BaseEncoderDecoder"
                element={mode === "light"  ? <BaseEncoderDecoder /> : <DarkBaseEncoderDecoder />}
                /> */}
              {/* <Route path="/CSSMinifier" element={mode === "light" ? <CSSMinifier /> : <DarkCSSMinifier /> } /> */}
              <Route path="/Slug" element={mode === "light"  ? <Slug /> : <DarkSlug />} />
              <Route path="/Shadow" element={mode === "light"  ? <Shadow /> : <DarkShadow />} />
              <Route
                path="/HTMLEncoderDecoder"
                element={mode === "light" ? <HTMLEncoderDecoder /> : <DarkHTMLEncoderDecoder />}
              />
              <Route path="/URLEncoderDcoder" element={mode === "light" ? <URLEncoderDcoder /> : <DarkURLEncoderDcoder />} />
              <Route path="/HTMLMinifier"element={mode === "light" ? <HTMLMinifier /> : <DarkHTMLMinifier /> } />
              <Route
                path="/JavaScriptMinifier"
                element={mode === "light" ? <JavaScriptMinifier /> :  <JavaScriptMinifier /> }
              />
              <Route
                path="/Hf"
                element={mode === "light" ? <Hf /> : <DarkHf />}
              />{" "}
              <Route path="/Cs" element={mode === "light"  ? <Cs /> :<DarkCs />} />
              <Route path="/Javaf" element= {mode === "light"  ? <Javaf /> : <DarkJavaf />} />
              <Route path="/MD5" element={mode === "light"  ?<MD5 /> : <DarkMD5 />} />
              <Route path="/SHA1" element={mode === "light"  ?<SHA1 /> : <DarkSHA1 />} />
              <Route path="/InstagramFilters" element={mode === "light" ?<InstagramFilters /> : <DarkInstagramFilters />} />
              <Route
                path="/InstagramPostGenerator"
                element={mode === "light" ?<InstagramPostGenerator /> : <DarkInstagramPostGenerator /> }
              />
              <Route path="/TweetGenerator" element={mode === "light" ?<TweetGenerator /> : <DarkTweetGenerator /> } />
              <Route
                path="/Opengraphmetagenerator"
                element={mode === "light" ?<Opengraphmetagenerator /> : <DarkOpengraphmetagenerator /> }
              />
              <Route
                path="/Vimeothumbnailgrabber"
                element={mode === "light" ?<Vimeothumbnailgrabber /> : <DarkVimeothumbnailgrabber /> }
              />
              <Route
                path="/Youtubethumbnailgrabber"
                element={mode === "light" ?<Youtubethumbnailgrabber /> : <DarkYoutubethumbnailgrabber />}
              />
              <Route
                path="/Twitteradrevenuegenerator"
                element={mode === "light" ?<Twitteradrevenuegenerator /> : <DarkTwitteradrevenuegenerator />}
              />
              <Route path="/Photocensor" element={mode === "light" ?<Photocensor />: <DarkPhotocensor /> } />
                <Route path="/Resizer" element={mode === "light" ?<Resizer />: <DarkResizer /> } />
                <Route path="/Svgpng" element={mode === "light" ?<Svgpng />: <DarkSvgpng /> } />
              <Route path="/ImageCropper" element={mode === "light" ?<ImageCropper />: <DarkImageCropper /> } />
              <Route path="/AverageColor" element={mode === "light" ?<AverageColor />:<DarkAverageColor /> } />
              <Route path="/ImageColorPicker" element={mode === "light" ?<ImageColorPicker /> : <DarkImageColorPicker /> } />
              <Route path="/SVGpattern" element={mode === "light" ?<SVGpattern />: <DarkSVGpattern /> } />
              <Route path="/Imagefilter" element={mode === "light" ?<Imagefilter />: <DarkImagefilter /> } />
              <Route path="/BlobGenerator" element={mode === "light" ?<BlobGenerator />: <DarkBlobGenerator /> } />
              <Route
                path="/ImageCaptionGenerator"
                element={mode === "light" ? <ImageCaptionGenerator /> : <DarkImageCaptionGenerator />}
              />
            </Route>
              <Route
                path="/Cssclippathgenerator"
                element={mode === "light" ?<Cssclippathgenerator />:<DarkCssclippathgenerator />}
              />
              <Route path="/Cssloader" element={mode === "light" ?<Cssloader /> : <DarkCssloader /> } />
              <Route
                path="/CSSbackgroundpattern"
                element={mode === "light" ?<CSSbackgroundpattern /> : <DarkCSSbackgroundpattern />}
              />
              <Route path="/Csscubic" element={mode === "light" ?<Csscubic /> : <DarkCsscubic />} />
              <Route path="/Cssglassmorphism"  element={mode === "light" ?<Cssglassmorphism />: <DarkCssglassmorphism />} />
              <Route path="/Csstextglitch"  element={mode === "light" ?<Csstextglitch />: <DarkCsstextglitch />} />
              <Route
                path="/Cssgradientgenerator"
                element={mode === "light" ?<Cssgradientgenerator /> : <DarkCssgradientgenerator />}
              />
              <Route
                path="/CSStrianglegenerator"
                element={mode === "light" ?<CSStrianglegenerator /> : <DarkCSStrianglegenerator />}
              />
              <Route
                path="/Cssboxshadowgenerator"
                element={mode === "light" ?<Cssboxshadowgenerator />: <DarkCssboxshadowgenerator />}
              />
              <Route
                path="/Borderradiusgenerator"
                element={mode === "light" ?<Borderradiusgenerator />: <DarkBorderradiusgenerator />}
              />
              <Route
                path="/ImageColorExtractor"
                element={mode === "light" ?<ImageColorExtractor />: <DarkImageColorExtractor />}
              />
            <Route path="/Getfeatured" element={mode === "light" ?<Getfeatured />: <DarkGetfeatured />} />
            <Route path="/Contact" element={mode === "light" ? <Contact/> : <DarkContact/>} />
            <Route path="/Submit" element={mode === "light" ?<Submit /> :<DarkSubmit /> } />
            <Route path="/Productfinder" element={mode === "light" ?<Productfinder /> : <DarkProductfinder />} />
            <Route path="/Productfinder1" element={mode === "light" ?<Productfinder1 /> : <DarkProductfinder1 /> } />
            <Route path="/About" element={mode === "light" ? <About />: <DarkAbout />} />
            <Route path="/Texttool"element={mode === "light" ?  <Texttool /> :  <DarkTexttool/>} />
            <Route path="/Imagetool" element={<Imagetool />} />
            <Route path="/CSStool" element={<CSStool />} />
            <Route path="/Codingtool" element={<Codingtool />} />
            <Route path="/Colortool" element={<Colortool />} />
            <Route path="/Socialmediatool" element={<Socialmediatool />} />
            <Route path="/Miscellaneoustool" element={<Miscellaneoustool />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </>
  );
}
export default App;
