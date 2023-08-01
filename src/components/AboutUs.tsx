import React from "react";
import "../styles/aboutus.css";

export const AboutUs = () => {
  return (
    <section className="aboutus-container" id="aboutus">
      <div className="aboutus-box aboutus">
        <p className="aboutus-header">Hakkımızda</p>
        <div className="aboutus-seperator" />
        <div className="aboutus-aboutus-text-box">
          <p className="aboutus-aboutus-text">
            Medya Planlama ve Satın alma sektöründe çözüm ortağınız olan Lets
            Medya’ ya hoş geldiniz.
          </p>
          <p className="aboutus-aboutus-text">
            Reklam sektöründeki 10 yılı aşkın tecrübemizle, markalarımıza farklı
            çözüm ve bakış açısı kazandıran medya planlama ve satın alma
            ajansıyız.
          </p>

          <p className="aboutus-aboutus-text">
            Sloganı “Haydi Reklam Verelim” olan Lets Medya, tecrübeli kadrosu
            ile medya planlama stratejisi, şeffaf fiyatlama yaklaşımı ve detaylı
            raporlamalar ile farkını ortaya koymaktadır.
          </p>
          <p className="aboutus-aboutus-text">
            Hizmet verdiği markaları büyüterek büyüyen Lets Medya; hızlı,
            verimli ve iyi bir hizmet sunarak markalarına alternatif çözümler
            üretmektir.
          </p>
          <p className="aboutus-aboutus-text">
            Güçlü ve sürekli ilişkilere inanıyoruz. Sadece bir medya planlama
            ajansı değil, markalarımızın güvenilir bir partneri olmayı
            hedefliyoruz.
          </p>
        </div>
      </div>
      <div className="aboutus-box vision">
        <p className="aboutus-header">Vizyonumuz</p>
        <div className="aboutus-seperator" />
        <div className="aboutus-aboutus-text-box">
          <p className="aboutus-aboutus-text">
            Markaların Medya Planlama ve Satınalma sektöründe tercih edeceği bir
            ajans olmayı hedefliyoruz.
          </p>
        </div>
      </div>
      <div className="aboutus-box mission">
        <p className="aboutus-header">Misyonumuz</p>
        <div className="aboutus-seperator" />
        <div className="aboutus-aboutus-text-box">
          <p className="aboutus-aboutus-text">
            Firmalarımızın ihtiyaç ve beklentilerine göre şeffaf, güvenilir ve
            fark yaratan çözümler sunmak için varız.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
