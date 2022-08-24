import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { sendEmailService } from "../../services/sendEmail";
import "./newsletter.scss";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState("");

  function validateEmail() {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      setEmailValidation("");
      return true;
    } else {
      setEmailValidation("El email es incorrecto.");
      return false;
    }
  }

  function sendEmail(e) {
    e.preventDefault();
    const isValidEmail = validateEmail();
    if (isValidEmail) {
      sendEmailService(email);
    }
  }

  return (
    <section className="newsletter">
      <div className="newsletter-social">
        <h3>INSTAGRAM</h3>
        <h2>#ESPUFI</h2>
        <div className="newsletter-social__images">
          <picture>
            <img src="https://images.pexels.com/photos/7631731/pexels-photo-7631731.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          </picture>
          <picture>
            <img src="https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </picture>
          <picture>
            <img src="https://images.pexels.com/photos/7319324/pexels-photo-7319324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </picture>
          <picture>
            <img src="https://images.pexels.com/photos/788587/pexels-photo-788587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </picture>
          <picture>
            <img src="https://images.pexels.com/photos/751099/pexels-photo-751099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </picture>
          <picture>
            <img src="https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          </picture>
        </div>
      </div>
      <h3>NEWSLETTER</h3>
      <h2>SUSCRIBITE</h2>
      <p>y enterate de todas las novedades</p>
      <section className="newsletter-input">
        <div className="newsletter-input__container">
          <form
            name="form"
            id="formEmail"
            onSubmit={sendEmail}
            action="https://formspree.io/f/mnqrnpjg"
          >
            <input
              type="text"
              name="email"
              placeholder="Ingresa tu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">
              <IoIosArrowRoundForward />
            </button>
          </form>
        </div>
        <span>{emailValidation}</span>
      </section>
    </section>
  );
};
