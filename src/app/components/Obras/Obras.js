"use client";

import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "@/app/obras/page.module.css";

const Obras = () => {
  const [data, setDataObras] = useState([]);

  const [fullScreenData, setFullScreenData] = useState(null);

  const handleFullScreen = (dataFullScreen) => {
    setFullScreenData(dataFullScreen);
    console.log(fullScreenData);
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

  return (
    <div>
      <section className={`paddingSection ${styles.obrasMain}`}>
        {data.map((dataItem, index) => (
          <div key={index}>
            <div
              className={`flex items-center m-bottom gap-4 ${styles.titleDiv}`}
            >
              <h2 className="title flex title-section">
                {dataItem.titulo}{" "}
                <p className="subtitle ml-2">({dataItem.ano})</p>
              </h2>
            </div>

            {dataItem.titulo === "Horror Vacui" && (
              <div className="">
                <p className="mb-8 subtitle">
                  Mi última serie refleja la esencia más profunda de la sociedad
                  contemporánea: la compulsión inherente de la condición humana
                  a llenar el vacío que persiste en nuestra búsqueda
                  existencial.
                </p>
                <p className="mb-8 subtitle">
                  Colmamos nuestras vidas de actividades y objetos banales, sin
                  embargo, el vacío no es algo que podamos superar por completo;
                  es, más bien, una condición humana universal que debemos
                  aceptar. En nuestra frenética búsqueda de placer, olvidamos
                  que la verdadera transformación llega al reconocer y
                  confrontar ese vacío. Al aceptar nuestra vulnerabilidad,
                  descubrimos que la auténtica riqueza reside en lo simple.
                </p>

                <p className="subtitle mb-10">
                  Los objetos que utilizo en mis obras son fragmentos de la vida
                  cotidiana, piezas que componen nuestra historia y nos definen,
                  pero que nunca logran llenar ese hueco infinito. Los espacios
                  en blanco del lienzo, por el contrario, actúan como espejos de
                  esa insatisfacción inexorable. Si logramos cumplir el deseo,
                  el disfrute es siempre efímero; si no lo alcanzamos, la
                  frustración se apodera de nosotros. Horror Vacui os invita a
                  un viaje introspectivo, a cuestionaros sobre vuestros propios
                  vacíos. El objetivo de esta serie es que el espectador se
                  sienta confrontado, reflexivo, inquieto, pero también liberado
                  al aceptar que el vacío no es un mal a combatir, sino una
                  condición de la vida que, al reconocerlo, nos acerca a la
                  esencia de la existencia.
                </p>
              </div>
            )}

            <div className="m-bottom flex flex-wrap justify-between">
              {dataItem.obras?.map((obraData, index) => (
                <Card
                  dataObra={obraData}
                  isObra={true}
                  key={index}
                  onClick={() => {handleFullScreen(obraData)}}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Obras;
