"use client";

import React from "react";
import styles from "@/app/page.module.css";
import stylesForm from "@/app/contacto/page.module.css";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mvggvvwa");

  return (
    <div className={`w-full h-full ${styles.heroSection1}`}>
      <form
        onSubmit={handleSubmit}
        className={`${stylesForm.contactForm} z-50 text-white flex flex-col gap-2 w-2/4`}
      >
        {/* Campo de Nombre */}

        <h2 className="title m-bottom">Contacto</h2>

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
  );
};

export default ContactPage;
