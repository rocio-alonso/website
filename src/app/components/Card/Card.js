"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/components/Card/Card.module.css";
import { GoLocation } from "react-icons/go";

const Card = ({ data, isObra, dataObra }) => {
  return (
    <div className={styles.card}>
      {!isObra && (
        <div className={styles.cardImage}>
          <Image
            src={data.img ? `/images/expo/${data.img}` : "/images/expo-1.jpg"}
            alt="exposition Image"
            width={500}
            height={500}
          />
        </div>
      )}

      {isObra && (
        <div className={styles.cardImage}>
          <Image
            src="/images/expo-1.jpg"
            alt="exposition Image"
            width={500}
            height={500}
          />
        </div>
      )}

      {!isObra ? (
        <div className={styles.cardText}>
          <h2 className="subtitle w-4/5">{data.lugar}</h2>

          <div className={`flex w-full ${styles.divData}`}>
            <p className={`${styles.dataBox} subtitle`}>{data.ano}</p>/
            <p className={`flex subtitle ${styles.dataLocation}`}>
              <GoLocation />
              {data.ubicacion}
            </p>
          </div>
        </div>
      ) : (
        <div className={`${styles.cardText}`}>
          <h2 className="subtitle w-4/5">{dataObra.titulo}</h2>
        </div>
      )}
    </div>
  );
};

export default Card;
