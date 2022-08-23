import React from "react";
import { LogoBlack } from "../Logo/LogoBlack";
import { BiShieldQuarter } from "react-icons/bi";
import { FcDataProtection } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <section className="footer-top">
        <div>
          <LogoBlack />
        </div>
        <div className="footer-top__categories">
          <ul>
            <li>PUFI RAIN</li>
            <li>PUFI PUFF</li>
            <li>PUFI CART</li>
            <li>PUFI NAP</li>
          </ul>
        </div>
        <div className="footer-top__help">
          <ul>
            <li>CONTACTO</li>
            <li>AYUDA</li>
            <li>CÓMO COMPRAR</li>
            <li>TÉRMINOS & CONDICIONES</li>
          </ul>
        </div>
        <div className="footer-top__security">
          <p>COMPRA 100% SEGURA</p>
          <div className="footer-top__security-icons">
            <span>
              <FcDataProtection />
            </span>
            <span>
              <BiShieldQuarter />
            </span>
            <p>COMPRÁ CON LA GARANTIA DE PUFF</p>
          </div>
        </div>
        <div className="footer-top__social">
          <p>SEGUINOS EN</p>
          <span>
            <FaFacebookF />
          </span>
          <span>
            <AiOutlineTwitter />
          </span>
          <span>
            <AiOutlineInstagram />
          </span>
        </div>
      </section>
      <section className="footer-botton">
        <div>
          <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
          <img src="http://www.ecommerceday.co/2018/wp-content/uploads/2017/08/Brandlive-1.png" />
        </div>
      </section>
    </footer>
  );
};
