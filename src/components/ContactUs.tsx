import React, { useEffect, useRef, useState } from "react";
import "../styles/contactus.css";

import emailjs from "@emailjs/browser";

import contact from "../assets/image/iletisim.jpg";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [buttonText, setButtonText] = useState("Gönder");

  useEffect(() => {
    const skillFields = document.querySelectorAll(".contactus-image");
    skillFields.forEach((el) => observer.observe(el));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add("showen");
      } else {
        el.target.classList.remove("showen");
      }
    });
  });

  const handleSend = (e: React.FormEvent) => {
    const emailRegex = /\S+@\S+\.\S+/;
    e.preventDefault();

    const nameInput = (e.currentTarget as HTMLFormElement)[
      "user_name"
    ] as HTMLInputElement;
    const emailInput = (e.currentTarget as HTMLFormElement)[
      "user_email"
    ] as HTMLInputElement;
    const messageInput = (e.currentTarget as HTMLFormElement)[
      "user_message"
    ] as HTMLInputElement;

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert("Lütfen bütün alanları doldurunuz.");
      return;
    }

    if (!emailRegex.test(emailInput.value)) {
      alert("Lütfen geçerli bir E-Mail giriniz");
      return;
    }

    if (messageInput.value.length < 10) {
      alert("Mesajınız en az 10 karakter içermelidir");
      return;
    }

    setButtonText("Gönderiliyor...");

    if (form.current) {
      emailjs
        .sendForm(
          "service_qu18p79",
          "template_w605134",
          form.current,
          "JzUNGp4EWrniAzZkq"
        )
        .then(
          (result) => {
            alert(
              "Mesajınız başarıyla bize ulaştı. En kısa sürede geri dönüş yapacağız."
            );
            form.current?.reset();

            setTimeout(() => {
              setButtonText("Gönder");
            }, 3000);
          },
          (error) => {
            alert(
              "Mesajınız gönderilirken bir hata oluştu lütfen sonra tekrar deneyiniz. Telefon numaramız veya mail adreimizden bizimle iletişim geçebilirsiniz."
            );

            setTimeout(() => {
              setButtonText("Gönder");
            }, 3000);
          }
        );
    }
  };

  return (
    <section className="contactus-container" id="contactus">
      <p className="aboutus-header">Aklınızda Soru Mu Var?</p>
      <div className="aboutus-seperator" />
      <div className="contactus-mail">
        <div className="contactus-image-box">
          <img src={contact} alt="" className="contactus-image" />
        </div>
        <form ref={form} onSubmit={handleSend} className="contactus-form">
          <input
            type="text"
            name="user_name"
            placeholder="Ad Soyad"
            className="contactus-input-field"
          />
          <input
            type="email"
            name="user_email"
            placeholder="E-mail"
            className="contactus-input-field"
          />
          <input
            type="text"
            name="user_company"
            placeholder="Firma (Opsiyonel)"
            className="contactus-input-field"
          />
          <textarea
            name="user_message"
            className="contactus-input-field"
            placeholder="Mesaj"
            style={{ resize: "none", height: "10em" }}
          />
          <input
            type="submit"
            value={buttonText}
            className="contactus-form-button"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
