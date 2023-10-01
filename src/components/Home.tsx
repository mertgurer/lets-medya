import React, { useContext, useEffect, useState } from "react";
import "../styles/home.css";
import { DataContext } from "../App";
import home from "../assets/image/home.jpg";

export const Home = () => {
  const { isMobile } = useContext(DataContext);
  const [hide, setHide] = useState(false);

  /*useEffect(() => {
    const parallaxItem = document.querySelector(
      ".home-image-box"
    ) as HTMLElement;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      parallaxItem.style.transform = `translateY(-${scrollPosition * 0.3}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); */

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setHide(true);
      } else if (window.scrollY <= 1000) {
        setHide(false);
      }
    };

    /* === event listeners added  and removed === */
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <section className="home-container" id="home">
      {!hide && (
        <div className="home-image-box">
          <img className="home-image" src={home} alt="" />
        </div>
      )}
      <div className="home-text-zone">
        <div className="home-text-box">
          {isMobile ? (
            <p className="home-text-header">
              YENİ NESİL MEDYA PLANLAMA VE SATIN ALMA AJANSI
            </p>
          ) : (
            <>
              <p className="home-text-header">YENİ NESİL</p>
              <p className="home-text-header">MEDYA PLANLAMA</p>
              <p className="home-text-header"> VE SATIN ALMA AJANSI</p>
            </>
          )}
          {isMobile && <div className="aboutus-seperator" />}
          {isMobile ? (
            <p className="home-text-body">
              Deneyimli ekibimizle reklam dünyasının trendlerini takip eden,
              yeniliklerini analiz eden ve en doğru stratejileri sunan bir medya
              planlama ajansıyız.
            </p>
          ) : (
            <>
              <p className="home-text-body">
                Deneyimli ekibimizle reklam dünyasının trendlerini takip eden,
              </p>
              <p className="home-text-body">
                yeniliklerini analiz eden ve en doğru stratejileri
              </p>
              <p className="home-text-body">
                sunan bir medya planlama ajansıyız.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
