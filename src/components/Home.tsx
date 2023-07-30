import React, { useEffect } from "react";
import "../styles/home.css";

import home from "../assets/image/home.jpg";

export const Home = () => {
  useEffect(() => {
    const parallaxItem = document.querySelector(
      ".home-image-box"
    ) as HTMLElement;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      parallaxItem.style.transform = `translateY(-${scrollPosition * 0.37}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="home-container" id="home">
      <div className="home-image-box">
        <img className="home-image" src={home} alt="" />
      </div>
      <div className="home-text-zone">
        <div className="home-text-box">
          <p className="home-text-header">YENİ NESİL</p>
          <p className="home-text-header">MEDYA PLANLAMA</p>
          <p className="home-text-header"> VE SATIN ALMA AJANSI</p>
          <p className="home-text-body">
            Deneyimli ekibimizle reklam dünyasının trendlerini takip eden,
          </p>
          <p className="home-text-body">
            yeniliklerini analiz eden ve en doğru stratejileri
          </p>
          <p className="home-text-body">sunan bir medya planlama ajansıyız.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;