"use client";
import React, { useState, useEffect } from "react";
import styles from "@/app/academia/page.module.css";
import stylesModal from "@/app/components/ModalTaller/ModalTaller.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import AnimateEntrance from "../AnimateEntrance/AnimateEntrance";
import { IoCloseOutline } from "react-icons/io5";

const ModalTaller = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showModal) {
    return (
      <section className="paddingBody w-full">
        <div
          className={`paddingSection justify-between flex ${styles.divModalChild}`}
        >
          <div>
            <h2 className={`title flex m-bottom`}>
              Tarifas <p className={`ml-1 subtitle`}>(Matrícula gratis)</p>
            </h2>
            <div className="flex flex-row gap-12">
              <div className={stylesModal.arancelBox}>
                <h3 className={`flex subtitle`}>1 Clase semanal</h3>
                <p className={`${styles.price}`}>€80/mes</p>
              </div>

              {/*<div className={stylesModal.arancelBox}>
                <h3 className={`flex subtitle`}>2 Clases semanales</h3>
                <p className={`${styles.price}`}>€140/mes</p>
              </div>*/}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <p className={`subtitle ${stylesModal.textContact}`}>
              Reserva tu plaza
            </p>
            <a
              className={`button gap-1 button-wpp ${stylesModal.textContactButton}`}
              target="blank_"
              href="https://api.whatsapp.com/send/?phone=34677374970&text=Hola!%20Quisiera%20recibir%20más%20información"
            >
              <AiOutlineWhatsApp className={styles.price} />
              Contactar
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className={`${styles.divModal}`}>
      <AnimateEntrance>
        <div className="absolute right-0 p-6">
          <p
            className="size-6 button cursor-pointer subtitle thin"
            onClick={() => setShowModal(false)}
            translate="no"
          >
            X
          </p>
        </div>
        <div
          className={`paddingSection justify-between flex ${styles.divModalChild} ${stylesModal.divModalChild}`}
        >
          <div>
            <h2 className={`title flex m-bottom`}>
              Tarifas <p className={`ml-1 subtitle`}>(Matrícula gratis)</p>
            </h2>
            <div className="flex flex-row gap-12">
              <div className={stylesModal.arancelBox}>
                <h3 className={`flex subtitle`}>1 Clase semanal</h3>
                <p className={`${styles.price}`}>€80/mes</p>
              </div>
              {/*<div className={stylesModal.arancelBox}>
                <h3 className={`flex subtitle`}>2 Clases semanales</h3>
                <p className={`${styles.price}`}>€140/mes</p>
              </div>*/}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <p className={`subtitle ${stylesModal.textContact}`}>
              Reserva tu plaza
            </p>
            <a
              className={`button gap-1 button-wpp ${stylesModal.textContactButton}`}
              target="blank_"
              href="https://api.whatsapp.com/send/?phone=34677374970&text=Hola!%20Quisiera%20recibir%20más%20información"
            >
              <AiOutlineWhatsApp className={styles.price} />
              Contactar
            </a>
          </div>
        </div>
      </AnimateEntrance>
    </div>
  );
};

export default ModalTaller;
