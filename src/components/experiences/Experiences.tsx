import React from "react";
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

export const Experiences = () => {
  return (
    <section className="experience-container" id="experiences">
      <p className="aboutus-header">Sektör Tecrübelerimiz</p>
      <div className="aboutus-seperator" />
      <div className="experience-company-zone">
        <ExperienceBox image={abs} />
        <ExperienceBox image={alkapida_logo} />
        <ExperienceBox image={beta} />
        <ExperienceBox image={concorde} />
        <ExperienceBox image={evofone} />
        <ExperienceBox image={feast} />
        <ExperienceBox image={foneria} />
        <ExperienceBox image={golden} />
        <ExperienceBox image={guralporselenlogo} />
        <ExperienceBox image={igs} />
        <ExperienceBox image={ledoria} />
        <ExperienceBox image={tudem} />
        <ExperienceBox image={Mamajoo} />
        <ExperienceBox image={mann} />
        <ExperienceBox image={monster} />
        <ExperienceBox image={papajohns} />
        <ExperienceBox image={pinesmart} />
        <ExperienceBox image={prozinc} />
        <ExperienceBox image={remington_logo} />
        <ExperienceBox image={sasu} />
        <ExperienceBox image={serez} />
        <ExperienceBox image={pompa} />
        <ExperienceBox image={zingat_white_sm} />
      </div>
    </section>
  );
};

export default Experiences;
