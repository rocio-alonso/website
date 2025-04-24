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
        className={`flex gap-20 paddingSection ${stylesForm.heroSection1}`}
      >
        <div className={`${stylesForm.imgContact}`}>
          <Image
            src={"/images/imagenes/contact.jpg"}
            alt={`Property image`}
            width={500}
            height={500}
          />
        </div>

        <div className={`${stylesForm.contactText}`}>
          <div className="text-start justify-right">
            <div className="subtitle flex flex-col float-left justify-start">
              <p className="title mb-2 bolder1">Teléfono</p>
              <a
                href="https://api.whatsapp.com/send/?phone=34677374970&text=Hola!%20Quisiera%20recibir%20más%20información"
                target="_blank"
                className={`gap align-center flex items-center`}
              >
                <FiPhone />
                <p className="subtitle">+34 677 37 49 70</p>
              </a>
              
              <p className="title mb-2 mt-5 bolder1">Redes</p>

              <a
                href="https://www.instagram.com/rocioalonsoarte/"
                target="_blank"
                className={`flex gap items-center ${styles.imgLogo}`}
              >
                <PiInstagramLogoLight className="text-xl" />
                <p className="subtitle">rocioalonsoarte</p>
              </a>

              <a
                href="https://www.instagram.com/academiamozzafiato/"
                target="_blank"
                className={`gap flex items-center ${styles.imgLogo} mt-5`}
              >
                <PiInstagramLogoLight className="text-xl" />
                <p className="subtitle">academiamozzafiato</p>
              </a>

              <p className="title mb-2 mt-5 bolder1">Mail</p>

              <a
                href="mailto:rocioalonsoart@gmail.com"
                target="_blank"
                className={`gap flex items-center m-bottom ${styles.imgLogo}`}
              >
                <CiMail className="text-xl" />
                <p className="subtitle">rocioalonsoart@gmail.com</p>
              </a>

              <p className="title mb-2 mt-5 bolder1">Ubicación</p>

              <div className="flex float-left">
                <CiLocationOn className="text-xl mb-1" />
                <p>Vila de Gràcia, Barcelona</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`${stylesForm.contactForm} z-50 text-black flex flex-col gap-2 w-1/4`}
        >
          <label htmlFor="name" className="subtitle bolder1">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="h-8 p-3 text-black"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email" className="subtitle bolder1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="h-8 p-3 text-black"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="subtitle bolder1">
            Mensaje
          </label>
          <textarea id="message" name="message" className="p-3 text-black" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            className={`${stylesForm.formButton} `}
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
