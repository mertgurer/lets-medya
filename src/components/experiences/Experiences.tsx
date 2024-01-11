//import React, { useContext, useState } from "react";
import "../../styles/experiences.css";
//import ExperienceBox from "./ExperienceBox";

import ExperienceGrid from "../../assets/image/experience grid.png";
//import { DataContext } from "../../App";
//import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export const Experiences = () => {
    //const { isMobile } = useContext(DataContext);
    //const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="experience-container" id="experiences">
            <p className="aboutus-header">Referanslarımız</p>
            <div className="aboutus-seperator" />
            <div className="experience-grid-container">
                {/* {isMobile && (
                    <button
                        className="service-grid-button prev"
                        onClick={() => {
                            if (currentIndex !== 0)
                                setCurrentIndex(currentIndex - 2);
                        }}
                    >
                        <MdArrowBackIosNew size={40} color="black" />
                    </button>
                )} */}
                <div className="experience-company-zone">
                    <div className="experience-company-grid-box">
                        <img
                            className="company-zone-gird-image"
                            src={ExperienceGrid}
                            alt=""
                        />
                    </div>
                </div>
                {/* {isMobile && (
                    <button
                        className="service-grid-button next"
                        onClick={() => {
                            if (currentIndex !== experienceData.length - 1)
                                setCurrentIndex(currentIndex + 2);
                        }}
                    >
                        <MdArrowForwardIos size={40} color="black" />
                    </button>
                )} */}
            </div>
        </section>
    );
};

export default Experiences;
