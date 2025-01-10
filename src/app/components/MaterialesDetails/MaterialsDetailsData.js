"use client";

import React, { useState } from "react";
import CardDetail from "@/app/components/MaterialesDetails/CardDetail";
import styles from "@/app/components/MaterialesDetails/MaterialesDetails.module.css";
import AnimateEntrance from "../AnimateEntrance/AnimateEntrance";
import "@/app/globals.css";

const MaterialsDetailsData = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={`flex align-center justify-center flex-col paddingSection`}>
      <AnimateEntrance key={currentPage}>
        <div className={`flex align-center justify-center gap-4 ${styles.sectionDetail}`}>
          {currentData.map((item, index) => (
            <CardDetail data={item} key={index} />
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

export default MaterialsDetailsData;
