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
      <div className="flex w-full justify-between">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Exposiciones;
