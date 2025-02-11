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
      <div className={`${styles2.heroText}`}>
      </div>

      <ExposData data={data} />
    </main>
  );
};

export default page;