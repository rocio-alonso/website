"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/components/Card/Card.module.css";
import { GoLocation } from "react-icons/go";

const Card = ({ data, isObra, dataObra }) => {
  console.log(dataObra);
  return (
    <div className={`${styles.card} ${isObra && dataObra.titulo === "Encierro del Troglodita" ? styles.fullCard : ''} ${isObra && styles.cardObra} ${isObra && "m-bottom"} `}>
      {!isObra && (
        <div className={styles.cardImage}>
          <Image
            src={data.img ? `/images/expo/${data.img}` : "/images/expo/default.jpg"}
            alt="exposition Image"
            width={500}
            height={500}
          />
        </div>
      )}

      {isObra && (
        <Image
          src={`/images/obras${dataObra.img}`}
          alt="exposition Image"
          width={500}
          height={500}
        />
      )}

      {!isObra ? (
        <div className={`${styles.cardText} text-center`}>
          <p className="subtitle thin text-sm m-bottom">{data.ano}</p>
          <h2 className="title text-center">{data.lugar}</h2>

          <div className={`${styles.divData} flex text-center justify-center`}>
            <p className={`${styles.dataBox} subtitle thin text-center`}>
              <em className="text-center">
                {data.ubicacion}
              </em>
            </p>
          </div>
        </div>
      ) : (
        <div className={`flex items-center justify-between ${styles.cardText}`}>
          <div>
            <h2 className="title">{dataObra.titulo}</h2>
            <p className="subtitle thin m-bottom">{dataObra.medidas}</p>
            {dataObra.stock !== "1" && (
              <p className="subtitle thin text-center">SOLD OUT</p>
            )}
          </div>

          {dataObra.stock === "1" && (
            <Link className="button" href="mailto:rocioalonsoart@gmail.com">
              Consultar
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
