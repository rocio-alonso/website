import React from "react";
import "@/app/globals.css";
import styles from "@/app/obras/page.module.css";
import Obras from "@/app/components/Obras/Obras";

export const metadata = {
  title: "Mis obras",
  description:
    "Ofrecemos un espacio creativo único en el corazón de Vila de Gràcia , frente al Mercat de la Llibertat, donde cada alumno puede explorar y desarrollar su propio estilo artístico.",
};

const page = async () => {
  return (
    <main>
      <div className={styles.hero}>
        <div
          className={`z-50 paddingSection w-full h-full flex justify-center items-center text-black`}
        >
        </div>
      </div>

      <Obras />
    </main>
  );
};

export default page;
