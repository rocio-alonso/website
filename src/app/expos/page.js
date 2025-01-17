import React from "react";
import { getAllProductsDB } from "@/app/actions";
import styles from "@/app/obras/page.module.css";
import styles2 from "@/app/expos/page.module.css";
import ExposData from "@/app/components/Exposiciones/ExposData";

const page = async () => {
  const response = await getAllProductsDB();
  const data = response.products[3].exposiciones;
  return (
    <main>
      <div className={`${styles.hero} ${styles2.heroText}`}>
        <h2 className="text-5xl thin z-10 text-white paddingSection">Exposiciones</h2>
      </div>

      <ExposData data={data} />
    </main>
  );
};

export default page;