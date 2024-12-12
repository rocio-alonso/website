import React from "react";
import "@/app/globals.css";
import styles from "@/app/obras/page.module.css";

const page = async () => {
  return (
    <main>
      <div className={styles.hero}>
        <div className={`z-50 paddingSection w-full text-white`}>
          <h2 className="text-6xl thin">Mis obras</h2>
        </div>
      </div>
    </main>
  );
};

export default page;
