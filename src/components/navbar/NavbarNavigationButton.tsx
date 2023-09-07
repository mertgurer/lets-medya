import React, { useContext } from "react";
import { DataContext } from "../../App";

interface props {
  index: number;
  title: string;
  hoverIndex: number;
  setHoverIndex: (index: number) => void;
  destination: string;
  setIsOpen: (value: boolean) => void;
}

export const NavbarNavigationButton = (props: props) => {
  const { isMobile } = useContext(DataContext);

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
            top: targetPosition - (isMobile ? 70 : 84),
            behavior: "smooth",
          });

          if (isMobile) props.setIsOpen(false);
        }
      }}
    >
      {props.title}
    </button>
  );
};

export default NavbarNavigationButton;
