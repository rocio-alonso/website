import React from "react";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/components/Card/Card.module.css";
import { GoLocation } from "react-icons/go";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={"/images/expo-1.jpg"}
          alt={`Property image`}
          width={500}
          height={500}
        />
      </div>
      
      <div className={styles.cardText}>
        <h2 className="subtitle">Asociación Dante Alighieri</h2>

        <div className={`flex w-full ${styles.divData}`}>
          <p className={`${styles.dataBox} subtitle`}>2018</p>/
          <p className={`${styles.dataBox} subtitle`}>Individual</p>/
          <p className={`flex subtitle ${styles.dataLocation}`}>
            <GoLocation />
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
