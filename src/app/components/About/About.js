import React from "react";
import Link from "next/link";
import { getAllProductsDB } from "@/app/actions";

import "@/app/globals.css";
import styles from "@/app/page.module.css";
import AboutStyles from "@/app/components/About/About.module.css";

import AnimateEntrance from "@/app/components/AnimateEntrance/AnimateEntrance";

const About = async () => {
  return (
    <AnimateEntrance>
      <section
        className={`${styles.aboutMe} ${AboutStyles.aboutMe} paddingSection`}
      >
        <div className={`${styles.aboutMeVideo} ${AboutStyles.aboutMeVideo}`}>
          <video
            width="250"
            height="100"
            controls
            preload="none"
            autoPlay
            loop
            muted
          >
            <source src="/images/reels/reel-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={`${styles.aboutMeText} ${AboutStyles.aboutMetext}`}>
          <p className="ultralight">
            Mi pasión por el <b>arte</b> nace del deseo de encontrar belleza en lo
            cotidiano. Cada <b>obra</b> es una exploración de lo que puede surgir
            cuando nos tomamos el tiempo para mirar <b>más allá de lo superficial</b>.
          </p>
          <p className="ultralight">
            Mi <b>enfoque artístico</b> se basa en la capacidad de transformar{" "}
            <b>materiales triviales</b> en estructuras visualmente atractivas y
            complejas, revelando su potencial estético y emotivo.
          </p>
          <p className="ultralight">
            Mi trayectoria ha sido enriquecida por mentorías con reconocidos
            artistas como Ernesto Allí, Héctor Destefanis y Norberto Iera, y me
            he formado en la <b>Universidad Nacional de las Artes </b>(UNA,
            Argentina) donde estudié la <b>Licenciatura en Artes Visuales</b>{" "}
            con orientación en <b>Pintura</b> y <b>Dibujo</b>.
          </p>
          <Link className="button" href={"/sobre-mi"}>
            Sobre mi
          </Link>
        </div>

        <div className={`${styles.aboutMeVideo} ${AboutStyles.aboutMeVideo}`}>
          <video
            width="250"
            height="240"
            controls
            preload="none"
            autoPlay
            loop
            muted
          >
            <source src="/images/reels/reel-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </AnimateEntrance>
  );
};

export default About;
