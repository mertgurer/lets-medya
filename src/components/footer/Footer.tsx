import React, { useContext } from "react";
import "../../styles/footer.css";

import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import FooterIcon from "./FooterIcon";
import { DataContext } from "../../App";

export const Footer = () => {
  const { isMobile } = useContext(DataContext);

  const openMail = () => {
    const subject = "";
    const recipient = "info@letsmedya.com";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="footer-container">
      <div className="footer-left">
        <div className="footer-box">
          <div className="footer-icon-box">
            <MdLocationPin color="white" size={isMobile ? 16 : 25} />
          </div>
          <p className="footer-text">
            <p>Sahrayıcedit Mah. Mengi Sok. Fyi Plaza</p>
            <p>No: 26, Kat: 2, Ofis No: 828 Kadıköy/İstanbul</p>
          </p>
        </div>
        <div className="footer-box-big">
          <div className="footer-box">
            <div className="footer-icon-box">
              <MdPhone color="white" size={isMobile ? 14 : 18} />
            </div>
            <p className="footer-text">0216 912 10 88</p>
          </div>
          <button className="footer-box button" onClick={() => openMail()}>
            <div className="footer-icon-box">
              <MdEmail color="white" size={isMobile ? 14 : 18} />
            </div>
            <p className="footer-text">info@letsmedya.com</p>
          </button>
        </div>
      </div>
      <div className="footer-right">
        <FooterIcon
          logo={FaInstagram}
          size={isMobile ? 24 : 28}
          url={"https://www.instagram.com/lets.medya/"}
        />
        <FooterIcon
          logo={FaLinkedinIn}
          size={isMobile ? 20 : 24}
          url={"https://www.linkedin.com/company/96047657/admin/feed/posts/"}
        />
      </div>
    </section>
  );
};

export default Footer;
