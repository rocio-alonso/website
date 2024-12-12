/*import React from "react";
import { getAllProductsDB } from "@/app/actions";
import cardStyles from "@/app/components/Card/Card.module.css";
import styles from "@/app/sobre-mi/page.module.css";
import { GoLocation } from "react-icons/go";

const Premios = async () => {
  const response = await getAllProductsDB();
  const data = response.products[0].premios;
  return (
    <div className="flex">
      {data.map((dataItem, index) => (
        <div key={index} className={`m-bottom ${styles.cardPremio}`}>
          <h2 className="title flex">{dataItem.evento}</h2>

          <div
            className={`flex w-full ${cardStyles.divData} ${cardStyles.dataBox}`}
          >
            <p className={`subtitle`}>{dataItem.ano}</p>/
            <p className={`flex subtitle ${cardStyles.dataLocation}`}>
              Obra: {dataItem.obra}
            </p>
            /
            <p className={`flex subtitle ${cardStyles.dataLocation}`}>
              <GoLocation />
              {dataItem.ubicacion}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Premios;
*/