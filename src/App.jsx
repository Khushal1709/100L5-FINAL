import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Getfeatured from "./components/Getfeatured";
import Submit from "./components/Submit";
import Productfinder from "./components/Productfinder";
import Productfinder1 from "./components/Productfinder1";
import Login from "./components/Login";
import Signup from "./components/Signup"
import Caseconveter from "./components/Text tools/Caseconveter";
import Sidebar from "./components/Sidebar"
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

function App() {
  return (
    <>
      <Router>
         <Navbar/>
        <Routes>
          <Route path="/Getfeatured" element={<Getfeatured />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Submit" element={<Submit />} />
          <Route path="/Productfinder" element={<Productfinder />} />
          <Route path="/Productfinder1" element={<Productfinder1 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
            <Route path="/lorem" element={<LoremIpsumGenerator />} />
            <Route path="/caseconverter" element={<CaseConverter />} />
            <Route path="/letter" element={<LetterCounter />} />
            <Route path="/Text" element={<Handwriting />} />
            <Route path="/BionicReading" element={<BionicReading />} />
            <Route path="/Whitespace" element={<Whitespace />} />
            <Route path="/Googlefont" element={<Googlefont />} />
            <Route path="/Randomizer" element={<Randomizer />} />
            <Route path="/QRcode" element={<QRcode />} />
            <Route path="/StrongRandom" element={<StrongRandom />} />
            <Route path="/Barcode" element={<Barcode />} />
            <Route path="/AIColor" element={<AIColor />} />
            <Route path="/HEX" element={<HEX/>} />
            <Route path="/RGBA" element={<RGBA/>} />
            <Route path="/ColorMixer" element={<ColorMixer/>} />
            <Route path="/Resizer" element={<Resizer/>} />
            <Route path="/Svgpng" element={<Svgpng/>} />
            <Route path="/ColorShades" element={<ColorShades/>} />
            <Route path="/CodetoImage" element={<CodetoImage/>} />  
            <Route path="/Slug" element={<Slug/>} />       
            <Route path="/Shadow" element={<Shadow/>} />      
            <Route path="/BaseEncoderDecoder" element={<BaseEncoderDecoder/>} />      
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}
export default App;



