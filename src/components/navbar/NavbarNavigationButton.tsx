import React from "react";

interface props {
  index: number;
  title: string;
  hoverIndex: number;
  setHoverIndex: (index: number) => void;
  destination: string;
}

export const NavbarNavigationButton = (props: props) => {
  return (
    <button
      className={`navbar-navigation-button ${
        props.hoverIndex !== -1 && props.hoverIndex !== props.index
          ? "blur"
          : ""
      }`}
      onMouseEnter={() => props.setHoverIndex(props.index)}
      onMouseLeave={() => props.setHoverIndex(-1)}
      onClick={() => {
        const targetSection = document.getElementById(props.destination);
        if (targetSection) {
          const targetOffset = targetSection.getBoundingClientRect().top;
          const bodyRect = document.body.getBoundingClientRect();
          const targetPosition = targetOffset - bodyRect.top;
          window.scroll({
            top: targetPosition - 90,
            behavior: "smooth",
          });
        }
      }}
    >
      {props.title}
    </button>
  );
};

export default NavbarNavigationButton;
