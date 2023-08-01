import React, { useState } from "react";

interface props {
  header: string;
  body: string;
  image: string;
}

export const ServiceBox = (props: props) => {
  const [hover, setHover] = useState(false);

  const handleMouseMove = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      id={props.header}
      className="services-grid-item"
      style={{
        transform: `${hover ? "scale(1.1)" : ""}`,
        zIndex: `${hover ? "5" : ""}`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="services-grid-item-top-part">
        <div className="servives-grid-item-image-box">
          <img src={props.image} alt="" className="services-grid-item-image" />
        </div>
        <p className="services-grid-item-header">{props.header}</p>
        <div className="aboutus-seperator" />
      </div>
      <p className="services-grid-item-body">{props.body}</p>
    </div>
  );
};

export default ServiceBox;
