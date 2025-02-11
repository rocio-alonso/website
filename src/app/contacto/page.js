"use client";

import React from "react";
import styles from "@/app/page.module.css";
import stylesForm from "@/app/contacto/page.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

import Image from "next/image";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mvggvvwa");

  return (
    <main>
      <div className={stylesForm.hero}>
        <div className={`z-50 w-full text-white flex justify-center`}></div>
      </div>
      <div
        className={`w-screen flex gap-20 paddingSection ${stylesForm.heroSection1}`}
      >
        <div className={`w-1/4 ${stylesForm.responsiveSection}`}>
          <Image
            src={"/images/imagenes/contact.jpg"}
            alt={`Property image`}
            width={500}
            height={500}
          />
        </div>

        <div className={`${stylesForm.responsiveSection}`}>
          <div className="text-start justify-right">
            <p className="title m-bottom">Contacto</p>

            <div className="subtitle flex flex-col float-left justify-start">
              <a
                href="https://api.whatsapp.com/send/?phone=34677374970&text=Hola!%20Me%20quisiera%20recibir%20más%20información"
                target="_blank"
                className={`gap align-center button`}
              >
                <FiPhone />
                <p className="subtitle">+34 677 37 49 70</p>
              </a>

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
                className={`flex gap align-center button m-bottom ${styles.imgLogo} mt-4`}
              >
                <CiMail className="text-xl" />
                <p className="subtitle">rocioalonsoart@gmail.com</p>
              </a>

              <div className="flex float-left">
                <CiLocationOn className="text-xl mb-1" />
                <p>El Guinardó, Barcelona</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`${stylesForm.contactForm} z-50 text-black flex flex-col gap-2 w-1/4`}
        >
          <label htmlFor="name" className="subtitle">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="h-8 p-3 text-black"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* Campo de Email */}
          <label htmlFor="email" className="subtitle">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="h-8 p-3 text-black"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Campo de Mensaje */}
          <label htmlFor="message" className="subtitle">
            Mensaje
          </label>
          <textarea id="message" name="message" className="p-3 text-black" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          {/* Botón de Enviar */}
          <button
            className={`${stylesForm.formButton} button`}
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Enviando..." : "Enviar"}
          </button>

          {state.succeeded && (
            <div className={`w-full h-full`}>
              <p className="z-50 text-white gap-2 text-2xl">
                Gracias por contactarte!
              </p>
              <p className="z-50 text-white gap-2 text-2xl subtitle">
                En breve tu consulta o propuesta será respuesta
              </p>
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
