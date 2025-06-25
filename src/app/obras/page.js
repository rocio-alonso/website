import React from "react";
import "@/app/globals.css";
import styles from "@/app/obras/page.module.css";
import Obras from "@/app/components/Obras/Obras";

export const metadata = {
  title: "Mis obras",
  description:
    "Te invito a conocer mis obras",
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
