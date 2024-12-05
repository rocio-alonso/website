import React from "react";
import "@/app/globals.css";
import Card from "@/app/components/Card/Card";
import styles from "@/app/page.module.css";
import { getAllProductsDB } from "@/app/actions";

const Exposiciones = async () => {
  return (
    <section className="paddingBody">
      <h2 className="title m-bottom">
        Exposiciones en las que participé
      </h2>

      <div className={`cardsExpo flex flex-wrap w-full justify-between ${styles.divExpo}`}>
        <Card />
        <Card />
        <Card />
      </div>

      <section className="carrousellHandler flex items-center">
        <button className="button">&#60;</button>
        <div className="dots flex align-middle">
          <div className="dot selected"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <button className="button">&#62;</button>
      </section>
    </section>
  );
};

export default Exposiciones;
