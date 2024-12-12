import React from "react";
import Link from "next/link";
import Hero from "@/app/components/Hero/Hero";
import styles from "@/app/taller/page.module.css";
import Grid from "../components/TallerComponent/Grid";

import { CiClock1 } from "react-icons/ci";
import { PiBookBookmarkThin } from "react-icons/pi";
import { PiUsers } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

const page = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`${styles.heroText} paddingSection text-white`}>
          <h2 className="text-6xl thin">Nuestro espacio</h2>
          <p className={`w-1/3 font-thin m-bottom`}>
            Nuestras clases personalizadas están diseñadas para ofrecerte el
            conocimiento y la orientación que necesitas para ganar autonomía en
            tus decisiones creativas.
          </p>
          <p className="w-1/3 font-thin">
            Te acompañamos en cada paso para que explores y desarrolles una
            visión artística propia, disfrutando del proceso creativo y de
            experimentar en cada proyecto
          </p>
        </div>
      </section>

      <section className="paddingSection flex flex-wrap">
        <div className={`${styles.divTallerDetails} w-1/3`}>
          <h2 className={`title m-bottom`}>Recuperación de clases</h2>
          <p className="m-bottom font-thin w-3/5">
            Si no puedes asistir a una clase, te pedimos que nos avises con al
            menos 48 horas de antelación. De esta manera, podremos reprogramar
            tu clase para otro horario disponible dentro del mismo mes.
          </p>
        </div>

        <div className={`${styles.divTallerDetails} w-1/3`}>
          <h2 className={`title m-bottom`}>Modalidad del taller</h2>
          <div className={`${styles.modalidadesDiv} flex font-thin`}>
            <div className={`flex ${styles.modalidadDiv}`}>
              <CiClock1 className={`${styles.icon}`} />
              <p>2 Horas</p>
            </div>

            <div className={`flex ${styles.modalidadDiv}`}>
              <PiBookBookmarkThin className={styles.icon} />
              <p>No es necesario conocimiento previo</p>
            </div>

            <div className={`flex ${styles.modalidadDiv}`}>
              <CiUser className={`${styles.icon} font-thin`} />
              <p>Jóvenes y adultos</p>
            </div>

            <div className={`flex ${styles.modalidadDiv}`}>
              <PiUsers className={styles.icon} />
              <p>Grupos de hasta 4 personas</p>
            </div>
          </div>
        </div>

        <div className={`${styles.divTallerDetails} w-1/3`}>
          <h2 className={`title m-bottom`}>Horarios</h2>
          <div className={`${styles.horariosDiv} gap`}>
            <div className={`flex m-bottom gap`}>
              <div className={`flex ${styles.modalidadDiv}`}>
                <p>Martes</p>
              </div>
              <div className="gap">
                <div className={`flex ${styles.modalidadDiv}`}>
                  <CiClock1 className={`${styles.icon}`} />
                  <p className="font-thin">17hs - 19hs</p>
                </div>

                <div className={`flex ${styles.modalidadDiv}`}>
                  <CiClock1 className={`${styles.icon}`} />
                  <p className="font-thin">19hs - 21hs</p>
                </div>
              </div>
            </div>
            <div className={`flex gap`}>
              <div className={`flex ${styles.modalidadDiv}`}>
                <p>Jueves</p>
              </div>
              <div className="gap">
                <div className={`flex ${styles.modalidadDiv}`}>
                  <CiClock1 className={`${styles.icon}`} />
                  <p className="font-thin">17hs - 19hs</p>
                </div>

                <div className={`flex ${styles.modalidadDiv}`}>
                  <CiClock1 className={`${styles.icon}`} />
                  <p className="font-thin">19hs - 21hs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="paddingBody">
        <h2 className={`title m-bottom`}>Galería</h2>
        <Grid />
      </section>

      <section className="paddingBody flex">
        <div className={`w-1/2 ${styles.divTallerDetails}`}>
          <h2 className={`title m-bottom`}>Técnicas que puedes usar</h2>
          <p className="m-bottom font-thin w-4/5">
            Tendrás la oportunidad de conocer una amplia variedad de materiales
            y descubrir sus usos y posibilidades. Además, podrás experimentar
            con técnicas mixtas, collage, monotipia y mucho más.
          </p>

          <p className="m-bottom font-thin w-4/5">
            Cada alumno trabaja con el material y la técnica que prefiera,
            profundizando en sus intereses para desarrollar no solo sus
            habilidades técnicas y el oficio de las artes visuales, sino también
            su creatividad, originalidad y estilo personal como artista.
          </p>

          <div></div>
        </div>
      </section>
    </main>
  );
};

export default page;
