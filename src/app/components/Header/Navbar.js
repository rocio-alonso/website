import React from "react";
import Link from "next/link";

import "@/app/globals.css";
import styles from "@/app/components/Header/Header.module.css";

import AnimateEntrance from "@/app/components/AnimateEntrance/AnimateEntrance";

const Navbar = ({ responsive, onClick }) => {
  return (
      <div
        className={`${
          responsive ? styles.headerDivResponsive : styles.headerDiv
        }`}
      >
        <ul className={`${responsive ? "" : "flex"} thin`}>
          <li className={styles.buttonHeader} onClick={onClick}>
            <Link className="subtitle bold" href={"/"}>
              Inicio
            </Link>
          </li>
          <li className={styles.buttonHeader} onClick={onClick}>
            <Link className="subtitle" href={"/obras"}>
              Mis obras
            </Link>
          </li>
          <li className={styles.buttonHeader} onClick={onClick}>
            <Link className="subtitle" href={"/sobre-mi"}>
              Sobre mi
            </Link>
          </li>
          <li className={styles.buttonHeader} onClick={onClick}>
            <Link className="subtitle" href={"/taller"}>
              Taller Mozzafiato
            </Link>
          </li>
          <li className={styles.buttonHeader} onClick={onClick}>
            <Link className="subtitle" href={""}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default Navbar;
