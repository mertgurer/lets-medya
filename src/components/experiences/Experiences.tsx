import React, { useContext, useState } from "react";
import "../../styles/experiences.css";
import ExperienceBox from "./ExperienceBox";

import tamer_tanca from "../../assets/image/experiences/Tamer_Tanca.svg.png";
import aldo from "../../assets/image/experiences/aldo.png";
import kiralabunu from "../../assets/image/experiences/Kiralabunu.png";
import purest from "../../assets/image/experiences/the Purest.png";
import golden_rose from "../../assets/image/experiences/Goldenrose.png";
import celenes from "../../assets/image/experiences/celenes_by_sweden.png";
import ege_seramik from "../../assets/image/experiences/Ege_Seramik_logo.png";
import tabilac from "../../assets/image/experiences/tab-logo-orjinal.png";
import alchemlife from "../../assets/image/experiences/alchemlife-1.png";
import mamajoo from "../../assets/image/experiences/Mamajoo Logo-01.png";
import playland from "../../assets/image/experiences/playland logo.png";
import babybjorn from "../../assets/image/experiences/babybjörn.png";
import british_side from "../../assets/image/experiences/Britishside.png";
import arikan from "../../assets/image/experiences/arıkan.png";
import edm from "../../assets/image/experiences/edm_logo.png";
import feast from "../../assets/image/experiences/feast.png";
import papa_johns from "../../assets/image/experiences/papajohns.png";
import serez from "../../assets/image/experiences/serez-gurme-dondurma.png";

import { DataContext } from "../../App";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export const Experiences = () => {
  const { isMobile } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="experience-container" id="experiences">
      <p className="aboutus-header">Sektör Tecrübelerimiz</p>
      <div className="aboutus-seperator" />
      <div className="experience-grid-container">
        {isMobile && (
          <button
            className="service-grid-button prev"
            onClick={() => {
              if (currentIndex !== 0) setCurrentIndex(currentIndex - 1);
            }}
          >
            <MdArrowBackIosNew size={40} color="black" />
          </button>
        )}
        <div className="experience-company-zone">
          {experienceData.map((item, index) => (
            <ExperienceBox
              key={index}
              index={index}
              currentIndex={currentIndex}
              image={item.image}
            />
          ))}
        </div>
        {isMobile && (
          <button
            className="service-grid-button next"
            onClick={() => {
              if (currentIndex !== experienceData.length - 1)
                setCurrentIndex(currentIndex + 1);
            }}
          >
            <MdArrowForwardIos size={40} color="black" />
          </button>
        )}
      </div>
    </section>
  );
};

const experienceData = [
  { image: tamer_tanca },
  { image: aldo },
  { image: kiralabunu },
  { image: purest },
  { image: golden_rose },
  { image: celenes },
  { image: ege_seramik },
  { image: tabilac },
  { image: alchemlife },
  { image: mamajoo },
  { image: playland },
  { image: babybjorn },
  { image: british_side },
  { image: arikan },
  { image: edm },
  { image: feast },
  { image: papa_johns },
  { image: serez },
];

export default Experiences;
