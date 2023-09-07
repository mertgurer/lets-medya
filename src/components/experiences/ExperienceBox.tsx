import React from "react";
import "../../styles/experiences.css";

interface props {
  index: number;
  currentIndex: number;
  image: string;
}

export const ExperienceBox = (props: props) => {
  return (
    <div
      className={`experience-company-box ${
        props.currentIndex === props.index
          ? "active"
          : props.currentIndex + 1 === props.index
          ? "active"
          : props.currentIndex + 2 === props.index
          ? "next"
          : props.currentIndex + 3 === props.index
          ? "nextnext"
          : props.currentIndex - 1 === props.index
          ? "prev"
          : props.currentIndex - 2 === props.index
          ? "prevprev"
          : ""
      }`}
    >
      <img src={props.image} alt="" className="experience-company-box-image" />
    </div>
  );
};

export default ExperienceBox;
