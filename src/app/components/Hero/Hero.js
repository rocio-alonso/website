import Link from "next/link";
import React from "react";
import "@/app/globals.css";
import styles from "@/app/page.module.css";

const Hero = () => {
  const images = [1, 2, 3];

  return (
    <>
      <section
        className={`relative ${styles.heroSection1}`}
      ></section>
      <div className={`${styles.heroText} paddingSection`}>
        <h2 className="text-6xl thin text-white">
          Horror Vacui: <p className="subtitle">La belleza de lo ausente</p>
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
    </>
  );
};

export default Hero;
