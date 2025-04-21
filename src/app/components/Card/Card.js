"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/components/Card/Card.module.css";

const Card = ({ data, isObra, dataObra }) => {
  const dataObraString = String(dataObra?.medidas);
  const dataObraMedidas = dataObraString.split(",");

  const [serverFolder, setServerFolder] = useState({});

  return (
    <section
      className={`${styles.cardSection} ${
        isObra && dataObra.titulo === "Dante" ? styles.danteDiv : ""
      }
      
      ${isObra && dataObra.titulo === "El acusado" ? styles.danteDiv : ""}`}
    >
      <div
        className={`${styles.card} ${
          isObra && dataObra.titulo === "Encierro del Troglodita"
            ? styles.fullCard
            : ""
        } 
        ${isObra && styles.cardObra} ${isObra && "m-bottom"} `}
      >
        {!isObra && (
          <div className={styles.cardImage}>
            <Link href={`./expo/${data.serverFolder}`}>
              <Image
                src={
                  data.img
                    ? `/images/expo/${data.img}`
                    : "/images/expo/default.jpg"
                }
                alt="exposition Image"
                width={500}
                height={500}
              />
            </Link>
          </div>
        )}

        {isObra && (
          <div className={styles.obraCardImg}>
            <Link
              href={{
                pathname: "./fullScreen",
                query: {
                  img: `${dataObra.img}`,
                  title: `${dataObra.titulo}`,
                  medidas: `${dataObra.medidas} `,
                },
              }}
            >
              <Image
                src={`/images/obras${dataObra.img}`}
                alt="exposition Image"
                width={500}
                height={500}
                className={styles.obraImg}
              />
            </Link>
          </div>
        )}

        {!isObra ? (
          <div className={`${styles.cardText} text-center`}>
            <Link href={`./expo/${data.serverFolder}`}>
              <h2 className={`subtitle text-center`}>{data.lugar}</h2>
              <p
                className={`${styles.lugarData} text-center subtitle thin m-bottom`}
              >
                {data.ubicacion}
              </p>

              <div
                className={`${styles.divData} flex text-center text-xs thin justify-center`}
              >
                <p className="subtitle thin text-xs tracking-widest">
                  {data.ano}
                </p>
              </div>
            </Link>
          </div>
        ) : (
          <div
            className={`flex items-center justify-between text-lg ${styles.cardText}`}
          >
            <div>
              <Link
                className="title thin"
                href={{
                  pathname: "./fullScreen",
                  query: {
                    img: `${dataObra.img}`,
                    title: `${dataObra.titulo}`,
                    medidas: `${dataObra.medidas} `,
                  },
                }}
                translate="no"
              >
                {dataObra.titulo}
              </Link>

              <p className={`${styles.dataMedidas} subtitle text-sm thin mt-2`}>
                {dataObraMedidas[0]}
              </p>

              <p
                className={`${styles.dataMedidas} subtitle text-sm thin m-bottom mt-1`}
              >
                {dataObraMedidas[1]}
              </p>
              {dataObra.stock !== "1" ? (
                <p className="subtitle thin text-center text-sm" translate="no">
                  SOLD
                </p>
              ) : (
                <Link
                  className={`${styles.consultarObras} m-auto thin flex w-full justify-center text-sm items-center subtitle`}
                  href="mailto:rocioalonsoart@gmail.com"
                >
                  CONSULTAR
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Card;
