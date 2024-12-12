"use client";
import Card from "@/app/components/Card/Card";
import React, { useState } from "react";
import styles from "@/app/page.module.css";
import AnimateEntrance from "@/app/components/AnimateEntrance/AnimateEntrance";

const ExposicionesData = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0); // Tracks the current page (group of 3 cards)
  const cardsPerPage = 3; // Number of cards per step
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
      <AnimateEntrance key={currentPage}>
        <div className={`flex flex-wrap justify-between ${styles.divCards}`}>
          {data.slice(startIndex, endIndex).map((dataItem, index) => (
            <Card key={startIndex + index} data={dataItem} />
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

export default ExposicionesData;
