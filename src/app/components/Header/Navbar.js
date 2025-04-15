"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "@/app/globals.css";
import styles from "@/app/components/Header/Header.module.css";

const Navbar = ({ responsive, onClick }) => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        responsive ? styles.headerDivResponsive : styles.headerDiv
      }`}
    >
      <ul className={`${responsive ? "" : "flex"}`}>
        {[
          { href: "/", label: "Inicio" },
          { href: "/obras", label: "Mis obras" },
          { href: "/sobre-mi", label: "Sobre mi" },
          { href: "/academia", label: "Academia Mozzafiato" },
          { href: "/contacto", label: "Contacto" },
        ].map((link) => (
          <li
            key={link.href}
            className={`${styles.buttonHeader} ${
              pathname === link.href ? styles.activeLink : ""
            }`}
            onClick={onClick}
          >
            <Link
              className="subtitle"
              href={link.href}
              {...(link.label === "Academia Mozzafiato"
                ? { translate: "no" }
                : {})}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
