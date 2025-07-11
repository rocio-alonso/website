import Link from "next/link";
import styles from "@/app/academia/page.module.css";
import Grid from "../components/TallerComponent/Grid";

import { CiClock1 } from "react-icons/ci";
import { PiBookBookmarkThin } from "react-icons/pi";
import { PiUsers } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import ModalTaller from "../components/ModalTaller/ModalTaller";
import MaterialesDetails from "../components/MaterialesDetails/MaterialesDetails";

export const metadata = {
  title: "Academia de Arte Mozzafiato",
  description:
    "Ofrecemos un espacio creativo único en el corazón de Vila de Gràcia , frente al Mercat de la Llibertat, donde cada alumno puede explorar y desarrollar su propio estilo artístico.",
};

const page = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`${styles.heroText} paddingSection text-white`}>
          <h2 className="text-6xl thin title">Nuestro espacio</h2>
          <p className={`w-1/2 font-thin m-bottom text-justify`}>
            Acompañamos tu camino artístico para que explores y desarrolles tu
            estilo propio, disfrutando de la experimentación en cada proyecto.
          </p>
          <Link className="button" href={"/academia/#mainSection"}>
            Conoce más
          </Link>
        </div>
      </section>

      <div
        className={`paddingSection ${styles.divTallerDetails} ${styles.divTallerDetailsCenter} mt-10`}
      >
        <h2 className={`subtitle mb-20 title-big text-center`} translate="no">
          Academia de Arte Mozzafiato
        </h2>
        <p
          className={`subtitle text-justify ${styles.paragraphSpacing} w-2/3 mb-10`}
        >
          Ofrecemos un espacio creativo único en el corazón de Vila de Gràcia ,
          frente al Mercat de la Llibertat, donde cada alumno puede explorar y
          desarrollar su propio estilo artístico. A través de clases
          personalizadas, acompañamos a los estudiantes en su proceso de
          aprendizaje, enfocándonos tanto en la técnica como en la expresión
          personal. Guiamos a artistas de todos los niveles, proporcionándoles
          las herramientas necesarias para dominar el dibujo y la pintura
          mientras potencian su creatividad y originalidad.
        </p>

        <p
          className={`subtitle text-justify ${styles.paragraphSpacing} w-2/3 mb-10`}
        >
          Nuestra metodología se basa en una enseñanza individualizada, con
          grupos reducidos para garantizar un enfoque cercano y personalizado.
          Los alumnos tienen la libertad de explorar diversas técnicas y
          materiales, desde la composición y el valor tonal hasta la armonía, la
          forma y la perspectiva. A lo largo de cada clase, trabajan en
          proyectos propios, recibiendo acompañamiento constante para asegurar
          su progreso y crecimiento artístico.
        </p>

        <p
          className={`subtitle text-justify ${styles.paragraphSpacing} w-2/3 mb-10`}
        >
          En Mozzafiato, cada trazo cuenta. Buscamos que cada persona,
          independientemente de su nivel, desarrolle autonomía en sus decisiones
          creativas, cultivando su propio sello artístico en un ambiente
          motivador y enriquecedor.
        </p>
      </div>

      <section className="paddingBody flex flex-wrap mt-5">
        <div className={`${styles.divTallerDetails} w-1/3`}>
          <h2
            className={`subtitle mb-20 title-big text-center subtitle ${styles.titleTallerResponsive}`}
          >
            Modalidad
          </h2>

          <div className={`${styles.modalidadesDiv} w-fit`}>
            <div className={`flex subtitle ${styles.modalidadDiv}`}>
              <CiClock1 className={`${styles.icon}`} />
              <p>Clase semanal de 2 Horas</p>
            </div>

            <div className={`flex subtitle ${styles.modalidadDiv}`}>
              <PiBookBookmarkThin className={styles.icon} />
              <p>No es necesario conocimiento previo</p>
            </div>

            <div className={`flex subtitle ${styles.modalidadDiv}`}>
              <CiUser className={`${styles.icon}`} />
              <p>Jóvenes y adultos</p>
            </div>

            <div className={`flex subtitle ${styles.modalidadDiv}`}>
              <PiUsers className={styles.icon} />
              <p>Plazas limitadas</p>
            </div>
          </div>
        </div>

        <div className={`${styles.divTallerDetails} w-1/3`} id="mainSection">
          <h2
            className={`subtitle mb-20 title-big text-center ${styles.titleTallerResponsive}`}
          >
            Recupero de clases
          </h2>
          <p
            className={`subtitle w-4/5 text-justify ${styles.paragraphSpacing}`}
          >
            Si no puedes asistir a una clase, te pedimos que nos avises con al
            menos 48 horas de antelación. De esta manera, podremos reprogramar
            tu clase para otro horario disponible dentro del mismo mes.
          </p>
        </div>

        <div
          className={`${styles.divTallerDetails} flex flex-wrap justify-center flex-col w-1/3`}
        >
          <h2
            className={`subtitle mb-20 title-big text-center ${styles.titleTallerResponsive}`}
          >
            Horarios
          </h2>
          <div className={`${styles.horariosDiv} gap pl-4`}>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 mb-7">
              <div className={`flex ${styles.modalidadDiv}`}>
                <CiClock1 className={`${styles.icon}`} />
                <p>Martes</p>
              </div>

              <div className="gap flex">
                <div className={`flex ${styles.modalidadDiv}`}>
                  <p className="subtitle">17 - 19h</p>
                </div>
              </div>

              <div></div>

              <div className="gap flex">
                <div className={`flex ${styles.modalidadDiv}`}>
                  <p className="subtitle">19 - 21h</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-2 mb-7">
              <div className={`flex ${styles.modalidadDiv}`}>
                <CiClock1 className={`${styles.icon}`} />
                <p>Miércoles</p>
              </div>

              {/*<div className="gap flex">
                <div className={`flex ${styles.modalidadDiv}`}>
                  <p className="subtitle">9.30 - 11.30h</p>
                </div>
              </div>

              <div></div>*/}

              <div className="gap flex">
                <div className={`flex ${styles.modalidadDiv}`}>
                  <p className="subtitle">17 - 19h</p>
                </div>
              </div>

              <div></div>

              <div className="gap flex">
                <div className={`flex ${styles.modalidadDiv}`}>
                  <p className="subtitle">19 - 21h</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <div className={`flex ${styles.modalidadDiv}`}>
                <CiClock1 className={`${styles.icon}`} />
                <p>Jueves</p>
              </div>

              <div className="gap flex">
                <div className={`flex ${styles.modalidadDiv}`}>
                  <p className="subtitle">17 - 19h</p>
                </div>
              </div>

              <div></div>

              <div className="gap flex">
                <div className={`flex ${styles.modalidadDiv}`}>
                  <p className="subtitle">19 - 21h</p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>

      <section
        className={`mt-10 paddingBody flex ${styles.sectionTallerDetails}`}
      >
        <div className={`w-1/2 ${styles.divTallerDetails}`}>
          <h2 className={`subtitle mb-20 title-big text-center`}>
            Explora materiales y técnicas
          </h2>
          <p
            className={`subtitle m-bottom w-4/5 text-justify ${styles.paragraphSpacing}`}
          >
            Tendrás la oportunidad de conocer una amplia variedad de materiales
            y descubrir sus usos y posibilidades. Además, podrás experimentar
            con técnicas mixtas, collage y mucho más.
          </p>

          <p
            className={`subtitle m-bottom w-4/5 text-justify ${styles.paragraphSpacing}`}
          >
            Cada alumno trabaja con el material y la técnica que prefiera,
            profundizando en sus intereses para desarrollar no solo sus
            habilidades técnicas y el oficio de las artes visuales, sino también
            su creatividad, originalidad y estilo personal como artista.
          </p>
        </div>

        <div
          className={`w-1/2 flex justify-center items-center ${styles.divTallerDetails}`}
        >
          <MaterialesDetails />
        </div>
      </section>

      {/*<div className="flex w-full justify-center mt-20 mb-40">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.8274738297127!2d2.151265210942847!3d41.399552971178615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a350b8cffecb%3A0xfc08ae92f112be46!2sAcademia%20de%20Arte%20Mozzafiato!5e0!3m2!1ses!2sar!4v1745502537072!5m2!1ses!2sar"
            width="600"
            height="450"
            style={{border:0}}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>*/}

      <section className="paddingBody mt-10">
        <Grid />
      </section>

      <ModalTaller />
    </main>
  );
};

export default page;
