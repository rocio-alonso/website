import React from "react";
import Card from "../components/Card/Card";
import styles from "@/app/obras/page.module.css";
import { getAllProductsDB } from "@/app/actions";

const PageData = async () => {
  const response = await getAllProductsDB();
  let dataObras;

  response.products.map((data, index) => {
    if (data._id === "6759a9766ea67bd4f392801e") {
      dataObras = data.obras;
    }
  });
  return (
    <div>
      <div className={styles.hero}>
        <div className={`z-50 paddingSection w-full text-white`}>
          <h2 className="text-6xl thin">Mis obras</h2>
        </div>
      </div>
      <section className="paddingSection">
        {dataObras.map((dataItem, index) => (
          <div key={index}>
            <h2 className="title flex m-bottom">
              {dataItem.titulo}{" "}
              <p className="subtitle ml-2">({dataItem.ano})</p>
            </h2>
            <div className="m-bottom flex flex-wrap justify-between">
              <Card dataObra={dataItem} isObra={true} />
              <Card dataObra={dataItem} isObra={true} />
              <Card dataObra={dataItem} isObra={true} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PageData;
