import React from "react";
import "./newsletter.scss";

export const Newsletter = () => {
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
      <h2>SUSCRIBETE</h2>
      <p>y enterate de todas las novedades</p>
      <input />
    </section>
  );
};
