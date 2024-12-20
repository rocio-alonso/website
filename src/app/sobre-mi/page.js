import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import styles from "@/app/sobre-mi/page.module.css";
import stylesHeader from "@/app/components/Header/Header.module.css";

import Exposiciones from "@/app/components/Exposiciones/Exposiciones";
import Bio from "@/app/sobre-mi/components/Bio/Bio";
import AnimateEntrance from "../components/AnimateEntrance/AnimateEntrance";
import Premios from  "@/app/components/Premios/Premios"
import ColeccionesPriv from "../components/ColeccionesPriv/ColeccionesPriv";

const page = () => {
  return (
    <main>
      <div className={styles.hero}>
        <div className={`z-50 w-full text-white flex justify-center`}>
          <h2 className="text-6xl thin">Sobre mi</h2>
        </div>

        <div className={`flex z-50 text-white gap bottom-0 absolute paddingSection ${styles.navbarBottom}`}>
          <AnimateEntrance>
            <ul className="flex">
              <li className={stylesHeader.buttonHeader}>
                <Link
                  className="subtitle bold"
                  href={"/sobre-mi/#aboutSection"}
                >
                  Biografía
                </Link>
              </li>
              /
              <li className={stylesHeader.buttonHeader}>
                <Link className="subtitle bold" href={"/sobre-mi/#expoSection"}>
                  Exposiciones
                </Link>
              </li>
              /
              <li className={stylesHeader.buttonHeader}>
                <Link className="subtitle bold" href={"/sobre-mi/#premiosSection"}>
                  Reconocimientos
                </Link>
              </li>
              /
              <li className={stylesHeader.buttonHeader}>
                <Link className="subtitle bold" href={"/sobre-mi/#coleccionesSection"}>
                  Colecciones privadas
                </Link>
              </li>
            </ul>
          </AnimateEntrance>
        </div>
      </div>

      <div id="aboutSection">
        <Bio />
      </div>

      <div id="expoSection">
        <Exposiciones />
      </div>

      <section id="premiosSection" className="paddingBody">
        <Premios />
      </section>

      <section id="coleccionesSection" className="paddingBody">
        <ColeccionesPriv />
      </section>
    </main>
  );
};

export default page;
