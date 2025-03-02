"use client";

import React, { useState, useEffect } from "react";
import styles from "@/app/fullScreen/page.module.css";
import "@/app/globals.css";

import { IoChevronBackOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";

const FetchQuery = ({ data, number, formattedTitle }) => {
  const [index, setIndex] = useState(number || 0);
  const [coleccion, setColeccion] = useState(null);
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    if (
      Array.isArray(data) &&
      data.length > 0 &&
      index >= 0 &&
      index < data.length
    ) {
      setColeccion(data[index]);
    }
  }, [data, index]);

  useEffect(() => {
    const checkViewportSize = () => {
      if (window.innerWidth <= 800) {
        setIsSmallViewport(true);
      } else {
        setIsSmallViewport(false);
      }
    };

    checkViewportSize();
    window.addEventListener("resize", checkViewportSize);
    return () => {
      window.removeEventListener("resize", checkViewportSize);
    };
  }, []);

  console.log(isSmallViewport);

  const handlePrevious = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className={` ${styles.fetchQuery} paddingSection`}>
      {!isSmallViewport && (
        <div className={` ${styles.fetchQuery} paddingSection`}>
          <div className={`${styles.divText} flex flex-col justify-start`}>
            <Link
              href={"/obras"}
              className="subtitle thin text-base flex items-center mb-10"
            >
              <IoChevronBackOutline className="thin" />
              Volver
            </Link>

            <div>
              {coleccion && (
                <>
                  <p
                    className={`${styles.titleColeccion} subtitle thin text-xs mb-3`}
                  >
                    {formattedTitle}
                  </p>
                  <p className="title text-3xl mb-3">{coleccion.titulo}</p>
                  <p className="subtitle thin text-xl m-bottom">
                    {coleccion.medidas}
                  </p>
                </>
              )}

              <div
                className={`${styles.buttonHandlerDiv} flex items-center gap-10 m-bottom justify-center`}
              >
                <Link
                  className={`${styles.buttonConsultar} button`}
                  href="mailto:rocioalonsoart@gmail.com"
                >
                  Consultar
                </Link>

                <section className="gap-10 carrousellHandler flex items-center justify-center mt-4 text-center">
                  <button
                    className="button"
                    onClick={handlePrevious}
                    disabled={index === 0}
                  >
                    &#60;
                  </button>
                  {data !== null && (
                    <p className={`${styles.buttonHandler} subtitle thin`}>
                      {index + 1} / {data.length}
                    </p>
                  )}
                  <button className="button" onClick={handleNext}>
                    &#62;
                  </button>
                </section>
              </div>
            </div>
          </div>

          {coleccion && (
            <div className={styles.imageDiv}>
              <Image
                src={`/images/obras${coleccion.img}`}
                alt="exposition Image"
                width={500}
                height={500}
              />
            </div>
          )}
        </div>
      )}

      {isSmallViewport && (
        <div>
          <Link
            href={"/obras"}
            className="subtitle thin text-base flex items-center mb-10"
          >
            <IoChevronBackOutline className="thin" />
            Volver
          </Link>

          {coleccion && (
            <div className={styles.imageDiv}>
              <Image
                src={`/images/obras${coleccion.img}`}
                alt="exposition Image"
                width={500}
                height={500}
              />
            </div>
          )}

          <div>
            {coleccion && (
              <>
                <p
                  className={`${styles.titleColeccion} subtitle thin text-xs mb-3`}
                >
                  {formattedTitle}
                </p>
                <p className="title text-3xl mb-3">{coleccion.titulo}</p>
                <p className="subtitle thin text-xl m-bottom">
                  {coleccion.medidas}
                </p>
              </>
            )}

            <div
              className={`${styles.buttonHandlerDiv} flex items-center gap-10 m-bottom justify-center`}
            >
              <Link
                className={`${styles.buttonConsultar} button`}
                href="mailto:rocioalonsoart@gmail.com"
              >
                Consultar
              </Link>

              <section className="gap-10 carrousellHandler flex items-center justify-center mt-4 text-center">
                <button
                  className="button"
                  onClick={handlePrevious}
                  disabled={index === 0}
                >
                  &#60;
                </button>
                {data !== null && (
                  <p className={`${styles.buttonHandler} subtitle thin`}>
                    {index + 1} / {data.length}
                  </p>
                )}
                <button className="button" onClick={handleNext}>
                  &#62;
                </button>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchQuery;
