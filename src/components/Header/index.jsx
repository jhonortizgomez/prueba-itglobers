import React from "react";
import { Nav } from "../Nav";
import "./header.scss";

export const Header = () => {
  return (
    <header>
      <div
        id="carouselExampleIndicators"
        className="carousel slide contenedor"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <picture className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <picture className="carousel-item">
            <img
              src="https://images.pexels.com/photos/451589/pexels-photo-451589.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="d-block w-100"
              alt="..."
            />
          </picture>
          <picture className="carousel-item">
            <img
              src="https://images.pexels.com/photos/378271/pexels-photo-378271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
            />
          </picture>
        </div>
      </div>
      <section className="info">
        <Nav />
        <h1>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL</h1>
        <div className="info-button">SHOP</div>
      </section>
    </header>
  );
};
