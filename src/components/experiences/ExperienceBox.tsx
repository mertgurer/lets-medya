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
      style={{
        backgroundColor:
          props.index < 3
            ? "#ee765b"
            : props.index < 6
            ? "#ea7ba6"
            : props.index < 9
            ? "#f5ae56"
            : props.index < 12
            ? "#c6e0d3"
            : props.index < 15
            ? "#dfb696"
            : "#40a49a",
      }}
      className={`experience-company-box ${
        props.currentIndex === props.index
          ? "active"
          : props.currentIndex + 1 === props.index
          ? "next"
          : props.currentIndex - 1 === props.index
          ? "prev"
          : ""
      }`}
    >
      <img src={props.image} alt="" className="experience-company-box-image" />
    </div>
  );
};

export default ExperienceBox;
