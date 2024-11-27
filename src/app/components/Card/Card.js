import React from "react";
import Image from "next/image";
import "@/app/globals.css";
import styles from "@/app/components/Card/Card.module.css";
import { IoLocationOutline } from "react-icons/io5";

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
      <h2>Asociación Dante Alighieri</h2>
      
      <div className={`flex ${styles.divData}`}>
        <p className={styles.dataBox}>2018</p>
        <p className={styles.dataBox}>Individual</p>
      </div>

      <p className="flex">
        <IoLocationOutline />
        Buenos Aires, Argentina
      </p>
    </div>
  );
};

export default Card;
