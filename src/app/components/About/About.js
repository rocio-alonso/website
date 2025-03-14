"use client";

import Link from "next/link";

import React, { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import AboutStyles from "@/app/components/About/About.module.css";
import Image from "next/image";

import AnimateEntrance from "@/app/components/AnimateEntrance/AnimateEntrance";

const About = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AnimateEntrance>
      <section
        className={`${styles.aboutMe} ${AboutStyles.aboutMe} paddingSection`}
      >
        <div className={`${styles.aboutMeVideo} ${AboutStyles.aboutMeVideo}`}>
            <video
              width="600"
              height="400"
              autoPlay
              muted
              loop
              controls={false}
            >
              <source
                src={`https://res.cloudinary.com/drweoynzr/video/upload/f_auto:video,q_auto/v1/videos/bhud79lqornioj4q6yr9`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
        </div>

        <div className={`${styles.aboutMeText} ${AboutStyles.aboutMetext} text`}>
          <p className="ultralight text">
            Mi pasión por el <b>arte</b> nace del deseo de encontrar belleza en
            lo cotidiano. Cada <b>obra</b> es una exploración de lo que puede
            surgir cuando nos tomamos el tiempo para mirar{" "}
            <b>más allá de lo superficial</b>.
          </p>
          <p className="ultralight text">
            Mi <b>enfoque artístico</b> se basa en la capacidad de transformar{" "}
            <b>materiales triviales</b> en estructuras visualmente atractivas y
            complejas, revelando su potencial estético y emotivo.
          </p>
          <p className="ultralight text">
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
      </section>
    </AnimateEntrance>
  );
};

export default About;
