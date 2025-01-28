"use client";

import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { BsFullscreen } from "react-icons/bs";
import styles from "@/app/obras/page.module.css";
import Image from "next/image";
import AnimateEntrance from "../AnimateEntrance/AnimateEntrance";

const Obras = () => {
  const [data, setDataObras] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  console.log(selectedItem);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState();

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/getProducts");
        const data2 = await response.json();
        setDataObras(data2.response.products[4].obras);
      } catch (error) {
        console.error("An error occurred while fetching files.", error);
      }
    };

    fetchFiles();
  }, []);

  const handleFullscreen = (dataobras) => {
    setSelectedItem(dataobras);
    setTotalPages(dataobras.length);
  };

  const closeFullscreen = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <section className={`paddingSection ${styles.obrasMain}`}>
        {data.map((dataItem, index) => (
          <AnimateEntrance key={index}>
            <div>
              <div className={`flex items-center m-bottom gap-4 ${styles.titleDiv}`}>
                <h2 className="title flex">
                  {dataItem.titulo}{" "}
                  <p className="subtitle ml-2">({dataItem.ano})</p>
                </h2>
                <BsFullscreen
                  className="cursor-pointer"
                  onClick={() => handleFullscreen(dataItem.obras)}
                />
              </div>

              {dataItem.titulo === "Horror Vacui" && (
                <div>
                  <p className="m-bottom subtitle">
                    Horror Vacui refleja la esencia más profunda de la sociedad
                    contemporánea: la compulsión inherente de la condición
                    humana a llenar ese vacío que persiste en nuestra búsqueda
                    existencial. Así, nos empeñamos en alcanzar objetivos
                    materiales, emocionales o profesionales, intentando colmar
                    nuestras vidas de intensas actividades y objetos banales.
                    Sin embargo, el vacío no es algo que podamos superar por
                    completo; es, más bien, una condición humana universal que
                    debemos aceptar. Nos lanzamos frenéticamente hacia una
                    búsqueda constante de placer, ignorando que la verdadera
                    transformación solo ocurre al hacernos conscientes de este
                    vacío y confrontarlo. Es en ese proceso de reconocimiento de
                    nuestra propia vulnerabilidad y la fragilidad de nuestra
                    existencia donde se nos revela lo verdaderamente esencial,
                    donde reside la auténtica riqueza —en lo simple, en aquello
                    que tantas veces pasamos por alto.
                  </p>
                  <p className="m-bottom subtitle">
                    Si logramos cumplir el deseo, el disfrute es siempre
                    efímero; si no lo alcanzamos, la frustración se apodera de
                    nosotros.Horror Vacui os invita a un viaje introspectivo, a
                    cuestionaros sobre vuestros propios vacíos y a reconocer lo
                    que realmente importa en vuestra existencia.Los objetos que
                    utilizo en mis obras — llaves, botones, telas, monedas,
                    diarios, juguetes de la infancia — son fragmentos de la vida
                    cotidiana, piezas que componen nuestra historia, que nos
                    definen, pero que nunca logran llenar ese hueco infinito.
                    Por el contrario, los espacios en blanco del lienzo actúan
                    como espejos de esa insatisfacción inexorable. Esta
                    interacción constante entre lo representado y lo ausente;
                    esa tensión entre lo que se muestra y lo que falta, busca
                    invitaros tácitamente a llenarlos de algo propio, reflejando
                    la misma compulsión por llenar el vacío interior que intento
                    poner en evidencia. Horror Vacui pretende iluminar aquello
                    que no solemos ver: nuestra propia vulnerabilidad, ese vacío
                    inherente que nos define. El objetivo artístico de esta
                    serie es que el espectador se sienta confrontado, reflexivo,
                    inquieto, pero también liberado al aceptar que el vacío no
                    es un mal a combatir, sino una condición de la vida que, al
                    reconocerlo, nos acerca a la esencia de la existencia.
                  </p>
                </div>
              )}

              <div className="m-bottom flex flex-wrap justify-between">
                {dataItem.obras?.map((obraData, index) => (
                  <Card dataObra={obraData} isObra={true} key={index} />
                ))}
              </div>
            </div>
          </AnimateEntrance>
        ))}
      </section>

      {selectedItem && (
        <div className={`${styles.fullscreenOverlay}`}>
          <div
            className={`${styles.fullscreenContent}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex m-bottom justify-end">
              <button className={``} onClick={closeFullscreen}>
                X
              </button>
            </div>

            <Image
              src={`/images/obras${selectedItem[currentPage].img}`}
              alt="Exterior view of Asociación Dante Alighieri"
              width={500}
              height={500}
              className={`m-bottom saturate-100 ${styles.obraImgFull}`}
            />

            <h2>{selectedItem[currentPage].titulo}</h2>
            <section className="carrousellHandler flex items-center mt-4">
              <button
                className="button"
                onClick={handlePrevious}
                disabled={currentPage === 0}
              >
                &#60;
              </button>
              <div className="dots flex align-middle mx-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`dot ${currentPage === idx ? "selected" : ""}`}
                  ></div>
                ))}
              </div>
              <button
                className="button"
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
              >
                &#62;
              </button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Obras;