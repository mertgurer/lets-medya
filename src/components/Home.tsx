import React, { useContext } from "react";
import "../styles/home.css";
import { DataContext } from "../App";

export const Home = () => {
  const { isMobile } = useContext(DataContext);

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

  return (
    <section className="home-container" id="home">
      <div className="home-image-box">
        <img
          className="home-image"
          src={process.env.PUBLIC_URL + "home.jpg"}
          alt=""
        />
      </div>
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
