"use client";

import React, { useEffect, useState } from "react";
import PageData from "./PageData";
import Card from "../Card/Card";
import { BsFullscreen } from "react-icons/bs";
import styles from "@/app/obras/page.module.css";
import Image from "next/image";
import AnimateEntrance from "../AnimateEntrance/AnimateEntrance";

const Obras = () => {
  const [data, setDataObras] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

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
        setDataObras(data2.response.products[3].obras);
      } catch (error) {
        console.error("An error occurred while fetching files.", error);
      }
    };

    fetchFiles();
  }, []);

  const handleFullscreen = (dataItem) => {
    setSelectedItem(dataItem);
    setTotalPages(data.length);
  };

  const closeFullscreen = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <section className="paddingSection">
        {data.map((dataItem, index) => (
          <AnimateEntrance key={index}>
          <div>
            <div className={`flex items-center m-bottom ${styles.titleDiv}`}>
              <h2 className="title flex">
                {dataItem.titulo}{" "}
                <p className="subtitle ml-2">({dataItem.ano})</p>
              </h2>
              <BsFullscreen
                className="cursor-pointer"
                onClick={() => handleFullscreen(dataItem)}
              />
            </div>
            <div className="m-bottom flex flex-wrap justify-between">
              <Card dataObra={dataItem} isObra={true} />
              <Card dataObra={dataItem} isObra={true} />
              <Card dataObra={dataItem} isObra={true} />
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
              src="/images/expo-1.jpg"
              alt="Exterior view of Asociación Dante Alighieri"
              width={500}
              height={500}
              className="m-bottom saturate-100"
            />
            <h2>
              {selectedItem.titulo} ({selectedItem.ano})
            </h2>
            <p>{selectedItem.description}</p>
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
