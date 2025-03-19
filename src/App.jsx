import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NewArrival from "./components/NewArrival";
import Login from "./components/Login";
import Multi from "./components/Multi";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Single from "./components/Single";

function App() {
  return (
    <>
    
    <Router>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/NewArrival" element={<NewArrival/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Multi" element={<Multi/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Single" element={<Single/>} />
          
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App;



