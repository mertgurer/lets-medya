import React, { useState } from "react";
import "../../styles/services.css";

import ServiceBox from "./ServiceBox";
import medya from "../../assets/image/services/medya.jpg";
import tv from "../../assets/image/services/tv.jpg";
import radyo from "../../assets/image/services/radyo.jpg";
import acikhava from "../../assets/image/services/acikhava.jpg";
import sinema from "../../assets/image/services/sinema.jpg";
import dijital from "../../assets/image/services/dijital.jpg";

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <section className="services-container" id="services">
      <p className="aboutus-header">Hizmet Alanlarımız</p>
      <div className="aboutus-seperator" />
      <div className="services-grid">
        {serviceItems.map((item, index) => (
          <ServiceBox
            key={index}
            header={item.header}
            body={item.body}
            image={item.image}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </div>
    </section>
  );
};

const serviceItems = [
  {
    header: "Medya Planlama",
    body: "Doğru Mecra, Doğru Hedef Kitle, Doğru Bütçe",
    image: medya,
  },
  {
    header: "Televizyon Reklamları",
    body: "Geniş Hedef Kitle, Hızlı Yayılım, Yüksek Marka Bilinirliliği",
    image: tv,
  },
  {
    header: "Radyo Reklamları",
    body: "Geniş Hedef Kitle, Yüksek Frekans, Detaylı Tanıtım",
    image: radyo,
  },
  {
    header: "Açık Hava Reklamları",
    body: "Bölgesel Erişim, Marka Değerlendirme, Yüksek Görünürlük",
    image: acikhava,
  },
  {
    header: "Sinema Reklamları",
    body: "Bölgesel Erişim, Lokasyon Seçimi, Marka Değerlendirme, Yüksek İkna",
    image: sinema,
  },
  {
    header: "Dijital / Sosyal Medya",
    body: "Geniş Hedef Kitlesi, Hızlı Yayılım, Yüksek Marka Bilinirliliği",
    image: dijital,
  },
];

export default Services;
