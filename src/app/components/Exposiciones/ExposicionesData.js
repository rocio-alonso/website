"use client";
import React, { useState, useEffect } from "react";
import Card from "@/app/components/Card/Card";
import styles from "@/app/page.module.css";
import AnimateEntrance from "@/app/components/AnimateEntrance/AnimateEntrance";
import Link from "next/link";

const ExposicionesData = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsPerPage = isMobile ? 1 : 3;

  // Limit to 5 items if on mobile
  const mobileData = isMobile ? data.slice(0, 10) : data;
  const totalPages = Math.ceil(mobileData.length / cardsPerPage);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

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
          {mobileData.slice(startIndex, endIndex).map((dataItem, index) => (
            <Card key={startIndex + index} data={dataItem} />
          ))}
        </div>
      </AnimateEntrance>

      <section className="paddingBody carrousellHandler flex items-center mt-4">
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

      <div className="w-full flex justify-center">
        <Link href='/expos' className="button mt-2">Ver más</Link>
      </div>
    </div>
  );
};

export default ExposicionesData;
