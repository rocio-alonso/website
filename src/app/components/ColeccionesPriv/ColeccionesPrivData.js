"use client";
import React, { useState } from "react";
import cardStyles from "@/app/components/Card/Card.module.css";
import stylesAbout from "@/app/sobre-mi/page.module.css";

import styles from "@/app/page.module.css";
import AnimateEntrance from "@/app/components/AnimateEntrance/AnimateEntrance";

const ColeccionesPrivData = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(data.length / cardsPerPage);

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

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  return (
    <div className={`cardsExpo flex flex-col w-full ${styles.divExpo}`}>
      <h2 className="title m-bottom">Colecciones privadas</h2>
      <AnimateEntrance key={currentPage}>
      <div className={`flex flex-wrap justify-between ${styles.divCards}`}>
        {data.slice(startIndex, endIndex).map((dataItem, index) => (
          <div key={index} className={`m-bottom ${stylesAbout.cardPremio}`}>
            {dataItem.nombre && (
              <h2 className="title flex">{dataItem.nombre}</h2>
            )}

            <div
              className={`flex w-full ${cardStyles.divData} ${cardStyles.dataBox}`}
            >
              {dataItem.detalle && <p className={`subtitle`}>{dataItem.detalle}</p>}
            </div>
          </div>
        ))}
      </div>
      </AnimateEntrance>
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
  );
};

export default ColeccionesPrivData;
