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

import logo from "./assets/image/logo.jpg";
import home from "./assets/image/home.jpg";

interface DataContextTemplate {
  isMobile: boolean;
}

export const DataContext = createContext<DataContextTemplate>({
  isMobile: false,
});

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [loadingIcon, setLoadingIcon] = useState(false);
  const [isReady, setIsReady] = useState(false);

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
        {isReady ? (
          <>
            <div className="loading-frame faint">
              <div className="loading-logo-box">
                <img src={logo} alt="" className="loading-logo-icon" />
              </div>
              <div className="loading" />
            </div>
            <Navbar />
            <Home />
            <AboutUs />
            <Services />
            <Experiences />
            <ContactUs />
            <Footer />
          </>
        ) : (
          loadingIcon && (
            <div className="loading-frame">
              <div className="loading-logo-box">
                <img src={logo} alt="" className="loading-logo-icon" />
              </div>
              <div className="loading" />
            </div>
          )
        )}
        <ImagePreloader
          imageUrl={logo}
          onImageLoad={() => {
            setLoadingIcon(true);
            setTimeout(() => {
              setIsReady(true);
            }, 2000);
          }}
        />
        <ImagePreloader imageUrl={home} onImageLoad={() => {}} />
      </Router>
    </DataContext.Provider>
  );
}

interface ImagePreloaderProps {
  imageUrl: string;
  onImageLoad: () => void;
}

function ImagePreloader({ imageUrl, onImageLoad }: ImagePreloaderProps) {
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      onImageLoad();
    };
  }, [imageUrl, onImageLoad]);

  return null;
}

export default App;
