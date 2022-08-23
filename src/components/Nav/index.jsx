import React from "react";

import { GiJellyBeans } from "react-icons/gi";
import { BsFillUmbrellaFill } from "react-icons/bs";
import { BsFillHandbagFill } from "react-icons/bs";
import { GiSchoolBag } from "react-icons/gi";
import { RiArrowDownSLine } from "react-icons/ri";

import { Logo } from "../Logo";
import "./nav.scss";
// ------------------------------------------------------------------------------

export const Nav = () => {
  return (
    <nav>
      <section>
        <Logo />
      </section>
      <section className="categories">
        <div className="categories-puff">
          <span>
            <GiJellyBeans />
          </span>
          <p>PUFI PUFF</p>
        </div>
        <div className="categories-rain">
          <span>
            <BsFillUmbrellaFill />
          </span>
          <p>PUFI RAIN</p>
        </div>
        <div className="categories-cart">
          <span>
            <BsFillHandbagFill />
          </span>
          <p>PUFI CART</p>
        </div>
        <div className="categories-nap">
          <span>
            <GiSchoolBag />
          </span>
          <p>PUFI NAP</p>
        </div>
      </section>
      <section className="login">
        <div className="login-account">
          <p>MI CUENTA</p>
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="login-cart">
          <p>MI COMPRA</p>
        </div>
      </section>
    </nav>
  );
};
