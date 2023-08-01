import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/services/Services";
import Experiences from "./components/experiences/Experiences";
import ContactUs from "./components/ContactUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Experiences />
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
