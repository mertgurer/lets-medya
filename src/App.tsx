import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/services/Services";
import Experiences from "./components/experiences/Experiences";
import ContactUs from "./components/ContactUs";
import Footer from "./components/footer/Footer";

interface DataContextTemplate {
  isMobile: boolean;
}

export const DataContext = createContext<DataContextTemplate>({
  isMobile: false,
});

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 1023);
  };

  useEffect(() => {
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <DataContext.Provider value={{ isMobile }}>
      <Router>
        <Navbar />
        <Home />
        <AboutUs />
        <Services />
        <Experiences />
        <ContactUs />
        <Footer />
      </Router>
    </DataContext.Provider>
  );
}

export default App;
