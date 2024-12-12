import React from "react";
import "@/app/globals.css";
import Exposiciones from "../components/Exposiciones/Exposiciones";
import styles from "@/app/obras/page.module.css";
import Obras from "@/app/components/Obras/Obras"

const page = async () => {
  return (
    <main>
      <div className={styles.hero}>
        <div className={`z-50 paddingSection w-full text-white`}>
          <h2 className="text-6xl thin">Mis obras</h2>
        </div>
      </div>
      <Obras />
    </main>
  );
};

export default page;
