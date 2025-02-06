import React from "react";
import "@/app/globals.css";
import styles from "@/app/obras/page.module.css";
import Obras from "@/app/components/Obras/Obras";

const page = async () => {
  return (
    <main>
      <div className={styles.hero}>
        <div
          className={`z-50 paddingSection w-full h-full flex justify-center items-center text-black`}
        >
          <h2 className="text-7xl thin text-white">Mis obras</h2>
        </div>
      </div>

      <Obras />
    </main>
  );
};

export default page;
