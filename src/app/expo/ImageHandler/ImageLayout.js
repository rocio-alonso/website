"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import styles from "@/app/fullScreen/page.module.css";
import "@/app/globals.css";

import { IoChevronBackOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";

const ImageLayout = ({ data, number = 0, title }) => {
  const router = useRouter();

  const [index, setIndex] = useState(number || 0);
  const [coleccion, setColeccion] = useState(null);
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  console.log(data);

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
      if (window.innerWidth <= 1100) {
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
          <div
            className={`w-auto flex-col justify-start text-start fixed z-20`}
          >
            <button
              onClick={() => router.back()}
              className="subtitle thin text-base flex items-center mb-10 w-fit"
            >
              <IoChevronBackOutline className="thin" />
              Volver
            </button>

            {coleccion && (
              <>
                <p
                  className={`${styles.titleColeccion} w-fit subtitle thin text-xs mb-3`}
                ></p>
                <p className="title text-3xl mb-3 w-1/2">{title.lugar}</p>
                <p className="subtitle thin text-xl m-bottom w-fit">
                  {title.ano}
                </p>
              </>
            )}

            <div
              className={`${styles.buttonHandlerDiv} w-fit items-center gap-10 m-bottom`}
            >
              <section className="gap-10 flex items-center mt-4 text-center w-auto">
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

          {coleccion && (
            <div
              className={`${styles.imageDiv} absolute right-0 paddingSection`}
            >
              <Image
                src={data[index]}
                alt="exposition Image"
                width={500}
                height={500}
                priority
                className="z-10"
              />
            </div>
          )}
        </div>
      )}

      {isSmallViewport && (
        <div>
          <button
            onClick={() => router.back()}
            className="subtitle thin text-base flex items-center mb-10 w-fit"
          >
            <IoChevronBackOutline className="thin" />
            Volver
          </button>

          {coleccion && (
            <div className={styles.imageDiv}>
              <Image
                src={data[index]}
                alt="exposition Image"
                width={500}
                height={500}
              />
            </div>
          )}

          <div>
            {coleccion && (
              <>
                <p className="title text-3xl mb-3">{title.lugar}</p>
                <p className="subtitle thin text-xl m-bottom">{title.ano}</p>
              </>
            )}

            <div
              className={`${styles.buttonHandlerDiv} flex items-center gap-10 m-bottom justify-center`}
            >
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

export default ImageLayout;
