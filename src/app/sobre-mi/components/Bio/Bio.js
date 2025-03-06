import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import styles from "@/app/sobre-mi/page.module.css";
import stylesHeader from "@/app/components/Header/Header.module.css";
import AnimateEntrance from "@/app/components/AnimateEntrance/AnimateEntrance";

const Bio = () => {
  return (
    <AnimateEntrance>
      <section className="paddingSection w-full flex">
        <div className={`${styles.imageAbout} w-1/4 mt-10`}>
          <Image
            src="/images/imagenes/sobre-mi-img.JPG"
            alt="about me"
            width={500}
            height={500}
            className="mb-20"
          />
        </div>

        <div className={`w-3/4 ${styles.textAbout}`}>
          <div>
            <div className={styles.textBio}>
              <h2 className="title text-2xl mb-10 mt-20">Biografía</h2>
              <div className={`flex w-full justify-center`}>
                <Link
                  className="subtitle bold underline"
                  href={"/cv.pdf"}
                  download="cv"
                  target="blank"
                >
                  Descargar CV
                </Link>
              </div>
              <p className="subtitle mt-20">Buenos Aires, 1992</p>

              <p className="m-bottom subtitle mt-20">
                Comencé mi recorrido artístico a la temprana edad de 4 años,
                explorando inicialmente la escultura y, posteriormente, el
                dibujo y la pintura. Mi formación se ha visto enriquecida por
                mentorías con reconocidos artistas como Ernesto Allí, Héctor
                Destefanis y Norberto Iera. Estudié la Licenciatura en Artes
                Visuales con orientación en Pintura y Dibujo en la Universidad
                Nacional de las Artes (UNA) en Argentina. Además, soy Abogada
                graduada en la Universidad de Derecho de Buenos Aires (UBA)
              </p>
              <p className="subtitle">
                En el ámbito educativo, he sido docente de Lenguaje Visual,
                Pintura e Historia del Arte en la Universidad Nacional de las
                Artes. También he impartido clases de Dibujo, Pintura y
                desarrollo de la producción artística en el Centro Integral de
                Artes Di María en Buenos Aires. He fundado “Alma Arte
                Argentino”, un movimiento artístico que promueve la
                despersonalización del autor. Como fundadora de Taller
                Mozzafiato, un atelier dedicado al dibujo y la pintura, he
                guiado a más de 100 alumnos en su desarrollo artístico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paddingBody w-full flex">
        <div className={`w-3/4 ${styles.textAbout}`}>
          <div>
            <div className={styles.textBio}>
              <AnimateEntrance>
                <h2 className="title text-2xl mb-20 mt-10">Actualidad</h2>
                <p className="subtitle mt-20">Barcelona, 2024</p>
                <p className="m-bottom subtitle mt-20">
                  Me he radicado en Barcelona, donde estoy trabajando en mi
                  última serie titulada Horror Vacui, que explora la fascinación
                  y el vacío inherente en nuestra constante búsqueda de llenar
                  espacios, tanto físicos como existenciales.
                </p>
                <p className="m-bottom subtitle">
                  Mi enfoque artístico se centra en la transformación de objetos
                  triviales en composiciones armónicas y visualmente atractivas.
                  Encuentro inspiración en la capacidad de los objetos
                  cotidianos para revelar su potencial estético y emotivo. El
                  contraste entre la cantidad significativa de material que
                  utilizo y los espacios vacíos es una constante en mi obra.
                  Cada objeto que coloco sobre el lienzo tiene un peso
                  simbólico, representando esos fragmentos de la vida cotidiana
                  que llenan nuestra existencia, pero que, al mismo tiempo, no
                  logran satisfacer nuestras búsquedas más profundas.
                </p>

                <p className="subtitle">
                  Mi trabajo busca revelar el vacío inherente a la fragilidad de
                  nuestra existencia y la compulsión humana por llenarlo. Creo
                  que en lo esencial es donde reside la verdadera riqueza,
                  destacando la importancia de lo simple, a menudo olvidado en
                  la vorágine de la sociedad contemporánea. Os invito a tomar
                  una pausa, embarcaros en un viaje introspectivo, y reflexionar
                  sobre vuestros propios vacíos, deseos y conexiones con el
                  mundo que os rodea, descubriendo lo esencial en cada
                  experiencia.
                </p>

                <div className={`flex w-full justify-center`}>
                  <Link className="subtitle bold button" href={"/obras"}>
                    Descubre Horror Vacui
                  </Link>
                </div>
              </AnimateEntrance>
            </div>
          </div>
        </div>

        <div className={`${styles.imageAbout} w-1/4`}>
          <video
            width="250"
            height="100"
            controls
            preload="none"
            autoPlay
            loop
            muted
            className="w-full"
          >
            <source src="/images/reels/reel-3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </AnimateEntrance>
  );
};

export default Bio;
