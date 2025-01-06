import React from "react";
import Navbar from "../Header/Navbar";
import styles from "@/app/components/Footer/Footer.module.css";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer
      className={`w-full paddingSection flex justify-between ${styles.footerSection}`}
    >
      <div className="">
        <Link href="/" className={`${styles.imgLogo}`}>
          <Image
            src="/logoBlack.svg"
            height={200}
            width={200}
            alt="Rocio Alonso Logo"
            className={`${styles.headerImg}`}
          />
        </Link>

        <a
          href="https://www.instagram.com/rocioalonsoarte/"
          target="_blank"
          className={`flex gap align-center ${styles.imgLogo} mt-4`}
        >
          <PiInstagramLogoLight className="text-xl" />
          <p className="subtitle">rocioalonsoarte</p>
        </a>

        <a
          href="https://www.instagram.com/tallermozzafiato/"
          target="_blank"
          className={`flex gap align-center ${styles.imgLogo} mt-4`}
        >
          <PiInstagramLogoLight className="text-xl" />
          <p className="subtitle">tallermozzafiato</p>
        </a>
      </div>

      <div className={`${styles.navbarFooter} text-center`}>
        <Navbar responsive={false} />
      </div>

      <div className="text-end justify-right">
        <p className="title m-bottom">Taller Mozzafiato</p>
        <p className="subtitle">Martes y Jueves</p>
        <p className="subtitle m-bottom">De 17hs a 19hs y de 19hs a 21hs</p>

        <div className="subtitle flex float-right">
          <CiLocationOn className="text-xl mb-1" />
          <p>El Guinardó, Barcelona</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
