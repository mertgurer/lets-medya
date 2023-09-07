import React, { useContext, useState } from "react";
import "../../styles/experiences.css";
import ExperienceBox from "./ExperienceBox";

import abs from "../../assets/image/experiences/abs alçı.png";
import alkapida_logo from "../../assets/image/experiences/alkapida_logo.png";
import beta from "../../assets/image/experiences/beta-yeni-logo-beyaz-min-1024x356.png";
import concorde from "../../assets/image/experiences/concorde hotel.png";
import evofone from "../../assets/image/experiences/evofone.png";
import feast from "../../assets/image/experiences/feast.png";
import foneria from "../../assets/image/experiences/Foneria.png";
import golden from "../../assets/image/experiences/golden rose.png";
import guralporselenlogo from "../../assets/image/experiences/guralporselenlogo.png";
import igs from "../../assets/image/experiences/igs-logo.png";
import ledoria from "../../assets/image/experiences/Ledoria.png";
import tudem from "../../assets/image/experiences/logo-tudem-yayin-grubu.png";
import Mamajoo from "../../assets/image/experiences/Mamajoo.png";
import mann from "../../assets/image/experiences/mann-filter.png";
import monster from "../../assets/image/experiences/Monster Notebook.png";
import papajohns from "../../assets/image/experiences/papajohns.png";
import pinesmart from "../../assets/image/experiences/pinesmart.png";
import prozinc from "../../assets/image/experiences/prozinc.png";
import remington_logo from "../../assets/image/experiences/remington_logo.png";
import sasu from "../../assets/image/experiences/sasu-logo-yaldiz.png";
import serez from "../../assets/image/experiences/serez-gurme-dondurma.png";
import pompa from "../../assets/image/experiences/standart pompa.png";
import zingat_white_sm from "../../assets/image/experiences/zingat_white_sm.png";
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
              if (currentIndex !== 0) setCurrentIndex(currentIndex - 2);
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
                setCurrentIndex(currentIndex + 2);
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
  { image: abs },
  { image: alkapida_logo },
  { image: beta },
  { image: concorde },
  { image: evofone },
  { image: feast },
  { image: foneria },
  { image: golden },
  { image: guralporselenlogo },
  { image: igs },
  { image: ledoria },
  { image: tudem },
  { image: Mamajoo },
  { image: mann },
  { image: monster },
  { image: papajohns },
  { image: pinesmart },
  { image: prozinc },
  { image: remington_logo },
  { image: sasu },
  { image: serez },
  { image: pompa },
  { image: zingat_white_sm },
];

export default Experiences;
