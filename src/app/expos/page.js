import React from "react";
import { getAllProductsDB } from "@/app/actions";
import styles from "@/app/obras/page.module.css";
import styles2 from "@/app/expos/page.module.css";
import ExposData from "@/app/components/Exposiciones/ExposData";

export const metadata = {
  title: "Exposiciones",
  description:
    "Exposiciones individuales y colectivas de Rocío Alonso, artista visual en Barcelona.",
  alternates: { canonical: "/expos" },
};

const page = async () => {
  const response = await getAllProductsDB();
  const data = response.products[3].exposiciones;
  return (
    <main>
      <h1 className="sr-only">Exposiciones de Rocío Alonso</h1>
      <div className={`${styles2.heroText}`}>
      </div>

      <ExposData data={data} />
    </main>
  );
};

export default page;