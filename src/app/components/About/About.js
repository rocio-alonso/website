import React from "react";
import Link from "next/link";
import {getAllProductsDB} from '@/app/actions'

import "@/app/globals.css";
import styles from "@/app/page.module.css";

const About = async () => {
 
  return (
    <section className={`${styles.aboutMe} paddingSection`}>
      <div className={styles.aboutMeVideo}>
        <video width="250" height="100" controls preload="none" autoPlay loop muted>
          <source src="/images/reels/reel-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.aboutMeText}>
        <p className="ultralight">
          Mi <b>enfoque artístico</b> se basa en la capacidad de transformar <b>materiales
          triviales</b> en estructuras visualmente atractivas y complejas, revelando
          su potencial estético y emotivo.
        </p>
        <p className="ultralight">
          Desde una edad temprana, me he dedicado a explorar el arte, comenzando
          con la <b>escultura</b> y expandiendo mi pasión al <b>dibujo</b> y la <b>pintura</b>.
        </p>
        <p className="ultralight">
          En mi <b>proceso creativo</b>, empleo técnicas mixtas con el objetivo de
          crear un espacio de contemplación y autoexploración, alejándome de la
          superficialidad para abrazar lo esencial en cada composición.
        </p>
        <Link className="button" href={""}>Sobre mi</Link>
      </div>

      <div className={styles.aboutMeVideo}>
        <video width="250" height="240" controls preload="none" autoPlay loop muted>
          <source src="/images/reels/reel-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default About;
