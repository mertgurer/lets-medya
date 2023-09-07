import React, { useContext, useEffect, useState } from "react";
import "../../styles/navbar.css";

import NavbarNavigationButton from "./NavbarNavigationButton";
import { FaBars, FaTimes } from "react-icons/fa";
import { DataContext } from "../../App";

export const Navbar = () => {
  const { isMobile } = useContext(DataContext);
  const [hoveredButton, setHoveredButton] = useState<number>(-1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggervalue = isMobile ? 10 : 100;

      if (window.scrollY > triggervalue) {
        setIsScrolled(true);
      } else if (window.scrollY <= triggervalue) {
        setIsScrolled(false);
      }
    };

    /* === event listeners added  and removed === */
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div
        className="navbar-logo-button"
        onClick={() => window.location.reload()}
      >
        <img
          className="navbar-logo"
          src={process.env.PUBLIC_URL + "logo.jpg"}
          alt=""
        />
      </div>
      <div className={`navbar-navigation ${isOpen ? "active" : ""}`}>
        <NavbarNavigationButton
          index={0}
          title={"Ana Sayfa"}
          hoverIndex={hoveredButton}
          setHoverIndex={setHoveredButton}
          destination={"home"}
        />
        <NavbarNavigationButton
          index={1}
          title={"Hakkımızda"}
          hoverIndex={hoveredButton}
          setHoverIndex={setHoveredButton}
          destination={"aboutus"}
        />
        <NavbarNavigationButton
          index={2}
          title={"Hizmetlerimiz"}
          hoverIndex={hoveredButton}
          setHoverIndex={setHoveredButton}
          destination={"services"}
        />
        <NavbarNavigationButton
          index={3}
          title={"Tecrübelerimiz"}
          hoverIndex={hoveredButton}
          setHoverIndex={setHoveredButton}
          destination={"experiences"}
        />
        <NavbarNavigationButton
          index={4}
          title={"Bize Ulaşın"}
          hoverIndex={hoveredButton}
          setHoverIndex={setHoveredButton}
          destination={"contactus"}
        />
      </div>
      <button
        className="menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>
    </div>
  );
};

export default Navbar;
