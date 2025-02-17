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
              <div
                className={`flex items-center m-bottom gap-4 ${styles.titleDiv}`}
              >
                <h2 className="title flex">
                  {dataItem.titulo}{" "}
                  <p className="subtitle ml-2">({dataItem.ano})</p>
                </h2>
              </div>

              {dataItem.titulo === "Horror Vacui" && (
                <div>
                  <p className="m-bottom subtitle">
                    Mi última serie refleja la esencia más profunda de la
                    sociedad contemporánea: la compulsión inherente de la
                    condición humana a llenar el vacío que persiste en nuestra
                    búsqueda existencial.
                  </p>
                  <p className="m-bottom subtitle">
                    Colmamos nuestras vidas de actividades y objetos banales,
                    sin embargo, el vacío no es algo que podamos superar por
                    completo; es, más bien, una condición humana universal que
                    debemos aceptar. En nuestra frenética búsqueda de placer,
                    olvidamos que la verdadera transformación llega al reconocer
                    y confrontar ese vacío. Al aceptar nuestra vulnerabilidad,
                    descubrimos que la auténtica riqueza reside en lo simple.
                  </p>

                  <p className="subtitle mb-10">
                    Los objetos que utilizo en mis obras son fragmentos de la
                    vida cotidiana, piezas que componen nuestra historia y nos
                    definen, pero que nunca logran llenar ese hueco infinito.
                    Los espacios en blanco del lienzo, por el contrario, actúan
                    como espejos de esa insatisfacción inexorable. Si logramos
                    cumplir el deseo, el disfrute es siempre efímero; si no lo
                    alcanzamos, la frustración se apodera de nosotros. Horror
                    Vacui os invita a un viaje introspectivo, a cuestionaros
                    sobre vuestros propios vacíos. El objetivo de esta serie es
                    que el espectador se sienta confrontado, reflexivo,
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
