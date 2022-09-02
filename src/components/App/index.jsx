import React from "react";

import { Header } from "@components/Header";
import { Main } from "../Main";
import { Footer } from "../Footer";
import "./app.scss";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
