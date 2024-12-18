import Link from "next/link";
import React from "react";
import "@/app/globals.css";
import styles from "@/app/page.module.css";

const Hero = async () => {
  return (
    <section className={styles.heroSection1}>
      <div className={`${styles.heroText} paddingSection`}>
        <h2 className="text-6xl thin text-white">
          En lo esencial reside la auténtica riqueza
        </h2>
        <div className="flex">
          <Link className={`button ${styles.buttonHeader}`} href={"/obras"}>
            Conoce mi obra
          </Link>
          <Link
            className={`button secondary ${styles.buttonHeader2}`}
            href={"/sobre-mi"}
          >
            Sobre mi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
