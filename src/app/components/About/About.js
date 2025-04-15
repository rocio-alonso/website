"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import AboutStyles from "@/app/components/About/About.module.css";
import Image from "next/image";
import AnimateEntrance from "@/app/components/AnimateEntrance/AnimateEntrance";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <AnimateEntrance>
      <section
        className={`${styles.aboutMe} ${AboutStyles.aboutMe} paddingSection`}
      >
        <div
          className={`${styles.aboutMeVideo} ${AboutStyles.aboutMeVideo}`}
          style={{ position: "relative" }}
        >
          {loading && (
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "18px",
                zIndex: 10,
              }}
            >
              <div className="flex absolute z-50 w-full h-full items-center justify-center">
                <Image
                  src={`/images/about.jpg`}
                  alt="exposition Image"
                  width={500}
                  height={500}
                  className="w-auto h-full flex absolute"
                />

                <Image
                  src={`/loading.gif`}
                  alt="exposition Image"
                  width={100}
                  height={100}
                  className="flex absolute"
                  unoptimized
                />
              </div>
            </div>
          )}

          <video
            width="600"
            height="400"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => {
              console.log("✅ Video cargado");
              setLoading(false);
            }}
            onCanPlay={() => {
              console.log("✅ Video listo para reproducirse");
              setLoading(false);
            }}
            onError={() => {
              console.error("❌ Error al cargar el video");
              setLoading(false);
            }}
          >
            <source src="/images/reels/reel-1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <div
          className={`${styles.aboutMeText} ${AboutStyles.aboutMetext} text`}
        >
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
            Argentina) donde estudié la
            <b> Licenciatura en Artes Visuales</b> con orientación en{" "}
            <b>Pintura</b> y <b>Dibujo</b>.
          </p>
          <Link className="button" href={"/sobre-mi"}>
            Sobre mí
          </Link>
        </div>
      </section>
    </AnimateEntrance>
  );
};

export default About;
