import React from "react";
import { getAllProductsDB } from "@/app/actions";
import styles from "@/app/obras/page.module.css";
import ExposData from "@/app/components/Exposiciones/ExposData";

const page = async () => {
  const response = await getAllProductsDB();
  const data = response.products[4].exposiciones;
  return (
    <main>
      <div className={styles.hero}>
        <h2 className="title z-10 text-white">Exposiciones</h2>
      </div>

      <ExposData data={data} />
    </main>
  );
};

export default page;
