import React from "react";
import { Nav } from "../Nav";
import "./header.scss";

export const Header = () => {
  return (
    <header>
      <section className="carrousel">
        <picture>
          <img src="https://media.istockphoto.com/photos/young-adult-man-listening-to-music-in-his-bedroom-with-his-dog-picture-id1182703008?k=20&m=1182703008&s=612x612&w=0&h=05dfdPOVoildk4g671m60jLD529CeQoHstzbIkeHzi4=" />
        </picture>
      </section>
      <section className="info">
        <Nav />
        <h1>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL</h1>
        <div className="info-button">SHOP</div>
      </section>
    </header>
  );
};
