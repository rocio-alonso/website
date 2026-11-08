import React from "react";
import "@/app/globals.css";
import styles from "@/app/obras/page.module.css";
import Obras from "@/app/components/Obras/Obras";

export const metadata = {
  title: "Obras",
  description:
    "Galería de obras de Rocío Alonso: pintura, dibujo y técnicas mixtas de una artista visual afincada en Barcelona.",
  alternates: { canonical: "/obras" },
};

const page = async () => {
  return (
    <main>
      <h1 className="sr-only">Obras de Rocío Alonso</h1>
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
