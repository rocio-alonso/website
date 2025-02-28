import React from "react";
import styles from "@/app/fullScreen/page.module.css";
import FetchLength from "./FetchLength";

import { getAllProductsDB } from "@/app/actions";

const page = async () => {
  const response = await getAllProductsDB();
  const data = response.products[4].obras;
  return (
    <main>
      <div className={`${styles.hero}`}>
        <div className={`z-50 w-full text-white flex justify-center`}></div>
      </div>
      <div className={`${styles.heroSection1}`}>
        <FetchLength data={data} />
      </div>
    </main>
  );
};

export default page;
