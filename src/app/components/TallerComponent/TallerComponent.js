import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Grid from "@/app/components/TallerComponent/Grid";

import AnimateEntrance from "../AnimateEntrance/AnimateEntrance";

const TallerComponent = () => {
  return (
    <AnimateEntrance>
      <section>
        <div className="paddingBody">
          <section className={`flex ${styles.containerTaller}`}>
            <div className={`w-2/4 ${styles.gridTaller}`}>
              <Grid />
            </div>
            <div className={`${styles.tallerText} w-2/4`}>
              <h2 className={`title m-bottom`}>Taller Mozzafiato</h2>
              <p className="subtitle m-bottom">
                A partir de 2021 dicto clases junto con alumnos de diversos
                niveles artísticos cuya principal misión radica en el hecho de
                compartir y desarrollar el arte de manera colectiva.
              </p>

              <p className="subtitle m-bottom">
                Actualmente me encuentro en Barcelona dando clases grupales, te
                invito a conocer más sobre el taller y a sumarte a este
                proyecto.
              </p>
              <Link className="button" href="/taller">
                Conoce el taller
              </Link>
            </div>
          </section>
        </div>
      </section>
    </AnimateEntrance>
  );
};

export default TallerComponent;
