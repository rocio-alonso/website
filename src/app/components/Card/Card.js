"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/components/Card/Card.module.css";

const Card = ({ data, isObra, dataObra }) => {
  return (
    <section className={`${styles.cardSection}`}>
      <div
        className={`${styles.card} ${
          isObra && dataObra.titulo === "Encierro del Troglodita"
            ? styles.fullCard
            : ""
        } ${isObra && styles.cardObra} ${isObra && "m-bottom"} `}
      >
        {!isObra && (
          <div className={styles.cardImage}>
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
            <h2 className={`title text-center`}>{data.lugar}</h2>
            <p
              className={`${styles.lugarData} text-center subtitle thin m-bottom`}
            >
              {data.ubicacion}
            </p>

            <div
              className={`${styles.divData} flex text-center text-xs thin justify-center`}
            >
              <p className="subtitle thin text-xs tracking-widest">{data.ano}</p>
            </div>
          </div>
        ) : (
          <div
            className={`flex items-center justify-between text-lg ${styles.cardText}`}
          >
            <div>
              <Link
                className="title"
                href={{
                  pathname: "./fullScreen",
                  query: {
                    img: `${dataObra.img}`,
                    title: `${dataObra.titulo}`,
                    medidas: `${dataObra.medidas} `,
                  },
                }}
              >
                {dataObra.titulo}
              </Link>

              <p className={`${styles.dataMedidas} subtitle text-sm thin m-bottom mt-5`}>
                {dataObra.medidas}
              </p>
              {dataObra.stock !== "1" ? (
                <p className="subtitle thin text-center" translate="no">SOLD</p>
              ) : (
                <Link className="button" href="mailto:rocioalonsoart@gmail.com">
                  Consultar
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
