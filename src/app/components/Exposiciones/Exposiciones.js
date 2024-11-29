import React from "react";
import "@/app/globals.css";
import Card from "@/app/components/Card/Card";
import styles from "@/app/page.module.css";

const Exposiciones = () => {
  return (
    <section className={`paddingSection ${styles.expoSubtitle}`}>
      <h2 className={`subtitle ${styles.expoSubtitle2}`}>
        Exposiciones en las que participé
      </h2>

      <div className="cardsExpo flex w-full justify-between">
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
