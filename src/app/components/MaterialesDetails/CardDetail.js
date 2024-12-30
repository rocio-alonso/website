import React from "react";
import Image from "next/image";

import styles from "@/app/components/MaterialesDetails/MaterialesDetails.module.css";

const CardDetail = ({ data }) => {
  console.log(data);
  return (
    <div className={`flex flex-col text-center w-24 ${styles.cardDetail}`}>
      <Image
        src={`/images/materiales/${data}.png`}
        alt="material"
        width={200}
        height={200}
      />
      <p className="subtitle">{data}</p>
    </div>
  );
};

export default CardDetail;
