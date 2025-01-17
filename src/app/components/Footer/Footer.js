import React from "react";
import Navbar from "../Header/Navbar";
import styles from "@/app/components/Footer/Footer.module.css";
import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className={`w-full paddingSection flex justify-between ${styles.footerSection}`}
    >
      <div className="">
        <Link href="/" className={`${styles.imgLogo}`}>
          <Image
            src="/logoBlack.svg"
            height={100}
            width={100}
            alt="Rocio Alonso Logo"
            className={`${styles.headerImg}`}
          />
        </Link>

        <a
          href="https://www.instagram.com/rocioalonsoarte/"
          target="_blank"
          className={`flex gap align-center button ${styles.imgLogo} mt-4`}
        >
          <PiInstagramLogoLight className="text-xl" />
          <p className="subtitle">rocioalonsoarte</p>
        </a>

        <a
          href="https://www.instagram.com/tallermozzafiato/"
          target="_blank"
          className={`flex gap align-center button ${styles.imgLogo} mt-4`}
        >
          <PiInstagramLogoLight className="text-xl" />
          <p className="subtitle">tallermozzafiato</p>
        </a>

        <a
          href="mailto:rocioalonsoart@gmail.com"
          target="_blank"
          className={`flex gap align-center button ${styles.imgLogo} mt-4`}
        >
          <CiMail className="text-xl" />
          <p className="subtitle">rocioalonsoart@gmail.com</p>
        </a>
      </div>

      <div className={`${styles.navbarFooter} text-center`}>
        <Navbar responsive={false} />
      </div>

      <div className="text-end justify-right">
        <p className="title m-bottom">Taller Mozzafiato</p>
        <p className="subtitle">Martes y Jueves</p>
        <p className="subtitle m-bottom">De 17hs a 19hs y de 19hs a 21hs</p>

        <div className="subtitle flex flex-col float-right justify-end">
          <a
            href="https://api.whatsapp.com/send/?phone=34677374970&text=Hola!%20Me%20quisiera%20recibir%20más%20información"
            target="_blank"
            className={`gap align-center button m-bottom`}
          >
            <FiPhone />
            <p className="subtitle">+34 677 37 49 70</p>
          </a>

          <div className="flex float-right">
            <CiLocationOn className="text-xl mb-1" />
            <p>El Guinardó, Barcelona</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
