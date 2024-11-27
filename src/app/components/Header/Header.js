import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

import styles from "@/app/components/Header/Header.module.css";

const Header = () => {
  return (
    <section className={`${styles.header} paddingSection`}>
      <Link href="/" className="flex items-center">
        <Image
          src="/logoBlack.svg"
          height={100}
          width={100}
          alt="Rocio Alonso Logo"
          className={styles.headerImg}
        />
      </Link>
      <div className="text-white">
        <ul className="flex thin">
          <li className={styles.buttonHeader}>
            <Link href={""} className="bold">Inicio</Link>
          </li>
          <li className={styles.buttonHeader}>
            <Link href={""}>Mis obras</Link>
          </li>
          <li className={styles.buttonHeader}>
            <Link href={""}>Sobre mi</Link>
          </li>
          <li className={styles.buttonHeader}>
            <Link href={""}>Taller Mozzafiato</Link>
          </li>
          <li className={styles.buttonHeader}>
            <Link href={""}>Contacto</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
