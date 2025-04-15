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
              <h2 className={`title mb-20 title-section title-big text-center`} translate="no">
                Academia Mozzafiato
              </h2>
              <p className="subtitle m-bottom text">
                Somos un espacio de arte especializado en dibujo y pintura,
                ubicado en el corazón del barrio de Vila de Gràcia, Barcelona. En
                nuestras clases, podrás desarrollar tus habilidades artísticas
                con un enfoque personalizado y técnicas adaptadas a cada nivel.
              </p>

              <p className="subtitle m-bottom text">
                Buscamos que cada alumno explore su creatividad, se divierta y
                aprenda en un ambiente relajado y profesional. Ya seas
                principiante o avanzado, nuestro objetivo es inspirarte a
                expresar tu visión a través del arte.
              </p>

              <p className="subtitle m-bottom text">
                Puedes comenzar las clases en cualquier momento del año y,
                además, ¡la matrícula es gratuita! Haz que tus ideas cobren
                vida. ¡Reserva tu plaza y empieza a crear en la Academia de Arte Mozzafiato!
              </p>
              <Link className={`${styles.tallerButton} button`} href="/academia">
                Conoce la Academia
              </Link>
            </div>
          </section>
        </div>
      </section>
    </AnimateEntrance>
  );
};

export default TallerComponent;
