import React from "react";
import "../../styles/experiences.css";

interface props {
  image: string;
}

export const ExperienceBox = (props: props) => {
  return (
    <div className="experience-company-box">
      <img src={props.image} alt="" className="experience-company-box-image" />
    </div>
  );
};

export default ExperienceBox;
