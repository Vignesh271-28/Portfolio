import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Popup from "./Components/Contact/Popup";


function App(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>    
    </div>
  )
}

export default App;