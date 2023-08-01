import React from "react";
import "../../styles/experiences.css";

import back from "../../assets/image/gradient.png";

import ExperienceBox from "./ExperienceBox";
import sasu from "../../assets/image/experiences/sasu-logo-yaldiz.png";
import serez from "../../assets/image/experiences/serez-gurme-dondurma.png";
import pnomaksan from "../../assets/image/experiences/pnomaksan-logo.png";
import monster from "../../assets/image/experiences/Monster Notebook.png";
import mann from "../../assets/image/experiences/mann-filter.png";
import abs from "../../assets/image/experiences/abs alçı.png";
import pinesmart from "../../assets/image/experiences/pinesmart.png";
import papajohns from "../../assets/image/experiences/papajohns.png";
import guralporselenlogo from "../../assets/image/experiences/guralporselenlogo.png";
import Mamajoo from "../../assets/image/experiences/Mamajoo.png";
import golden from "../../assets/image/experiences/golden rose.png";
import alkapida_logo from "../../assets/image/experiences/alkapida_logo.png";
import beta from "../../assets/image/experiences/beta-yeni-logo-beyaz-min-1024x356.png";
import remington_logo from "../../assets/image/experiences/remington_logo.png";
import zingat_white_sm from "../../assets/image/experiences/zingat_white_sm.png";
import tudem from "../../assets/image/experiences/logo-tudem-yayin-grubu.png";
import prozinc from "../../assets/image/experiences/prozinc.png";
import concorde from "../../assets/image/experiences/concorde hotel.png";
import ppompainesmart from "../../assets/image/experiences/standart pompa.png";
import igs from "../../assets/image/experiences/igs-logo.png";
import feast from "../../assets/image/experiences/feast.png";
import evofone from "../../assets/image/experiences/evofone.png";

export const Experiences = () => {
  return (
    <section className="experience-container" id="experiences">
      <p className="aboutus-header">Sektör Tecrübelerimiz</p>
      <div className="aboutus-seperator" />
      <div className="experience-company-zone">
        <ExperienceBox image={sasu} />
        <ExperienceBox image={serez} />
        <ExperienceBox image={pnomaksan} />
        <ExperienceBox image={monster} />
        <ExperienceBox image={mann} />
        <ExperienceBox image={abs} />
        <ExperienceBox image={pinesmart} />
        <ExperienceBox image={papajohns} />
        <ExperienceBox image={guralporselenlogo} />
        <ExperienceBox image={Mamajoo} />
        <ExperienceBox image={golden} />
        <ExperienceBox image={alkapida_logo} />
        <ExperienceBox image={beta} />
        <ExperienceBox image={remington_logo} />
        <ExperienceBox image={zingat_white_sm} />
        <ExperienceBox image={tudem} />
        <ExperienceBox image={prozinc} />
        <ExperienceBox image={concorde} />
        <ExperienceBox image={ppompainesmart} />
        <ExperienceBox image={igs} />
        <ExperienceBox image={feast} />
        <ExperienceBox image={evofone} />
      </div>
    </section>
  );
};

export default Experiences;
