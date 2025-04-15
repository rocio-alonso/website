import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import styles from "@/app/taller/page.module.css";
import stylesModal from "@/app/components/ModalTaller/ModalTaller.module.css";

const DivModalTaller = () => {
  return (
    <div
      className={`paddingSection justify-between flex w-full ${styles.divModalChild}`}
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
          <div className={stylesModal.arancelBox}>
            <h3 className={`flex subtitle`}>2 Clases semanales</h3>
            <p className={`${styles.price}`}>€140/mes</p>
          </div>
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
  );
};

export default DivModalTaller;
