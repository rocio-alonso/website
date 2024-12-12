import React from "react";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/sobre-mi/page.module.css";

import Premios from "@/app/components/Premios/Premios";

const page = () => {
  return (
    <main>
      <div className={styles.hero}>
        <div className={`z-50 paddingSection w-full text-white`}>
          <h2 className="text-6xl thin">Sobre mi</h2>
        </div>
      </div>
      <section className="paddingSection w-full flex">
        <div className={`${styles.imageAbout} w-1/4`}>
          <Image
            src="/images/about.jpg"
            alt="about me"
            width={500}
            height={500}
          />
        </div>

        <div className={`w-3/4 ${styles.textAbout}`}>
          <p className="m-bottom subtitle">
            Mi pasión por el arte nace del deseo de encontrar belleza en lo
            cotidiano. Cada obra es una exploración de lo que puede surgir
            cuando nos tomamos el tiempo para mirar más allá de lo superficial.
            Creo que el arte tiene el poder de transformar nuestra percepción
            del mundo y de nosotros mismos.
          </p>

          <p className="m-bottom subtitle">
            Mi enfoque artístico se basa en la capacidad de transformar
            materiales triviales en estructuras visualmente atractivas y
            complejas, revelando su potencial estético y emotivo. Desde una edad
            temprana, me he dedicado a explorar el arte, comenzando con la
            escultura y expandiendo mi pasión al dibujo y la pintura.
          </p>
        </div>
      </section>

      <section className="paddingBody">

      </section>
    </main>
  );
};

export default page;
