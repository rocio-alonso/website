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
        <a
          href="https://www.instagram.com/rocioalonsoarte/"
          target="_blank"
          className={`flex gap align-center ${styles.imgLogo}`}
        >
          <PiInstagramLogoLight className="text-xl" />
          <p className="subtitle">rocioalonsoarte</p>
        </a>

        <a
          href="https://www.instagram.com/academiamozzafiato/"
          target="_blank"
          className={`flex gap align-center  ${styles.imgLogo} mt-4`}
        >
          <PiInstagramLogoLight className="text-xl" />
          <p className="subtitle">academiamozzafiato</p>
        </a>

        <a
          href="mailto:rocioalonsoart@gmail.com"
          target="_blank"
          className={`flex gap align-center  ${styles.imgLogo} mt-4`}
        >
          <CiMail className="text-xl" />
          <p className="subtitle">rocioalonsoart@gmail.com</p>
        </a>
      </div>

      <div className={`${styles.navbarFooter} text-center`}>
        <Navbar responsive={false} />
      </div>

      <div className={`${styles.navbarFooter2}`}>
        <p className="title m-bottom">Academia de Arte Mozzafiato</p>
        <p className="subtitle">Martes, Miércoles y Jueves</p>
        <p className="subtitle m-bottom">17 a 19  | 19 a 21h</p>

        {/*<<p className="subtitle">Miércoles</p>
        <p className="subtitle m-bottom">9.30 a 11.30h</p>*/}

        <div className="subtitle flex flex-col float-right justify-end">
          <a
            href="https://api.whatsapp.com/send/?phone=34677374970&text=Hola!%20Quisiera%20recibir%20más%20información"
            target="_blank"
            className={`flex gap items-center m-bottom ${styles.navbarFooter2}`}
          >
            <FiPhone />
            <p className="subtitle">+34 677 37 49 70</p>
          </a>

          <div className="flex float-right">
            <CiLocationOn className="text-xl mb-1" />
            <p>Vila de Gràcia, Barcelona</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
