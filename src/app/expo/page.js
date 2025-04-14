import React from "react";
import { getAllProductsDB } from "@/app/actions";
import styles from "@/app/expo/page.module.css";
import styles2 from "@/app/components/Card/Card.module.css";

import ImageHandler from "./ImageHandler/ImageHandler";

const page = async () => {
  const response = await getAllProductsDB();
  const data = response.products[3].exposiciones;
  return (
    <main>
      <div className={styles.hero}>
        <div className={`z-50 w-full text-white flex justify-center`}></div>
      </div>

      <div className="paddingSection">
      <h2 className={`subtitle mt-10 text-3xl text-center`}>Exposiciones</h2>
        {data.map((expo, index) => (
          <div key={index} className={`${styles2.cardText} mt-20`} id={expo.serverFolder}>
            <div className="paddingSection">
              <h2 className={`subtitle text-center`}>{expo.lugar}</h2>
              <p className={`${styles2.lugarData} text-center subtitle thin m-bottom`}>{expo.ubicacion}, {expo.ano}</p>
            </div>

            <div className="flex justify-center flex-row paddingSection">
                <ImageHandler data={expo.serverFolder}/>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
