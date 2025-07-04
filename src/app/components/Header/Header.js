"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

import Navbar from "./Navbar";

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <section
        className={`${styles.header} subtitle ${
          isScrolled ? styles.scrolled : ""
        } paddingSection`}
      >
        <IoIosMenu
          className={`${styles.menuIcon} ${menuOpen ? styles.blackMenu : ""}`}
          onClick={toggleMenu}
        />

        <Link href="/" className={`flex items-center ${styles.imgLogo}`}>
          {isScrolled || menuOpen ? (
            <Image
              src="/logoBlack.svg"
              height={100}
              width={100}
              alt="Rocio Alonso Logo"
              className={`${styles.headerImg}`}
              priority
            />
          ) : (
            <Image
              src="/logoWhite.svg"
              height={100}
              width={100}
              alt="Rocio Alonso Logo"
              className={`${styles.headerImg}`}
              priority
            />
          )}
        </Link>
        {menuOpen ? (
          <Navbar responsive={true} onClick={closeMenu} />
        ) : (
          <Navbar responsive={false} />
        )}
      </section>
    </section>
  );
};

export default Header;
