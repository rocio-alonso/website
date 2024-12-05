"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

import styles from "@/app/components/Header/Header.module.css";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu visibility

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollPosition / windowHeight) * 100;
    setScrollProgress(scrolled);

    if (scrollPosition > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollProgress]);

  return (
    <section>
      <section
        className={`${styles.header} ${
          isScrolled ? styles.scrolled : ""
        } paddingSection`}
      >
        <IoIosMenu className={`${styles.menuIcon} ${menuOpen ? styles.blackMenu : ""}`} onClick={toggleMenu} />

        <Link href="/" className="flex items-center">
          {isScrolled || menuOpen ? (
            <Image
              src="/logoBlack.svg"
              height={100}
              width={100}
              alt="Rocio Alonso Logo"
              className={styles.headerImg}
            />
          ) : (
            <Image
              src="/logoWhite.svg"
              height={100}
              width={100}
              alt="Rocio Alonso Logo"
              className={styles.headerImg}
            />
          )}
        </Link>
        {!menuOpen && (
        <div className={styles.headerDiv}>
          <ul className="flex thin">
            <li className={styles.buttonHeader}>
              <Link className="subtitle bold" href={"/"}>
                Inicio
              </Link>
            </li>
            <li className={styles.buttonHeader}>
              <Link className="subtitle" href={""}>
                Mis obras
              </Link>
            </li>
            <li className={styles.buttonHeader}>
              <Link className="subtitle" href={""}>
                Sobre mi
              </Link>
            </li>
            <li className={styles.buttonHeader}>
              <Link className="subtitle" href={"/taller"}>
                Taller Mozzafiato
              </Link>
            </li>
            <li className={styles.buttonHeader}>
              <Link className="subtitle" href={""}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
        
      </section>
      {menuOpen && (
        <div className={styles.headerDivResponsive}>
          <ul className="thin">
            <li className={styles.buttonHeader}>
              <Link className="subtitle bold" href={"/"}>
                Inicio
              </Link>
            </li>
            <li className={styles.buttonHeader}>
              <Link className="subtitle" href={""}>
                Mis obras
              </Link>
            </li>
            <li className={styles.buttonHeader}>
              <Link className="subtitle" href={""}>
                Sobre mi
              </Link>
            </li>
            <li className={styles.buttonHeader}>
              <Link className="subtitle" href={"/taller"}>
                Taller Mozzafiato
              </Link>
            </li>
            <li className={styles.buttonHeader}>
              <Link className="subtitle" href={""}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Header;
