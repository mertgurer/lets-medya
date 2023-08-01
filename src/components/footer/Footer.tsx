import React from "react";
import "../../styles/footer.css";

import { MdLocationPin, MdPhone, MdEmail } from "react-icons/md";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import FooterIcon from "./FooterIcon";

export const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-left">
        <div className="footer-box">
          <div className="footer-icon-box">
            <MdLocationPin color="white" size={25} />
          </div>
          <p className="footer-text">
            İçerenköy Mah. Prof. Dr. Ali Nihat Tarlan cad. Süleyman Başkan İş
            Merkezi No:84 Kat:8 Ataşehir – İstanbul
          </p>
        </div>
        <div className="footer-box-big">
          <div className="footer-box">
            <div className="footer-icon-box">
              <MdPhone color="white" size={18} />
            </div>
            <p className="footer-text">0216 912 10 88</p>
          </div>
          <div className="footer-box">
            <div className="footer-icon-box">
              <MdEmail color="white" size={18} />
            </div>
            <p className="footer-text">info@letsmedya.com</p>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <FooterIcon
          logo={FaInstagram}
          size={28}
          url={"https://www.instagram.com/lets.medya/"}
        />
        <FooterIcon
          logo={FaLinkedinIn}
          size={24}
          url={"https://www.linkedin.com/company/96047657/admin/feed/posts/"}
        />
        <FooterIcon
          logo={FaFacebookF}
          size={24}
          url={"https://www.facebook.com/LETSMEDYA"}
        />
        <FooterIcon
          logo={FaTwitter}
          size={24}
          url={"https://twitter.com/letsmedya"}
        />
        <FooterIcon logo={FaYoutube} size={24} url={"https://youtube.com/"} />
      </div>
    </section>
  );
};

export default Footer;
