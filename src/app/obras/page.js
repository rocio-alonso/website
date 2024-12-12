import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import styles from "@/app/obras/page.module.css";
import { getAllProductsDB } from "@/app/actions";
import Card from "@/app/components/Card/Card";

const page = async () => {
  const response = await getAllProductsDB();
  const dataObras = response.products[3].obras;
  return (
    <main>
      <div className={styles.hero}>
        <div className={`z-50 paddingSection w-full text-white`}>
          <h2 className="text-6xl thin">Mis obras</h2>
        </div>
      </div>
      <section className="paddingSection">
        {dataObras.map((dataItem, index) => (
          <div key={index}>
            <h2 className="title flex m-bottom">
              {dataItem.titulo} <p className="subtitle ml-2">({dataItem.ano})</p>
            </h2>
            <div className="m-bottom flex flex-wrap justify-between">
              <Card dataObra={dataItem} isObra={true} />
              <Card dataObra={dataItem} isObra={true} />
              <Card dataObra={dataItem} isObra={true} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;
