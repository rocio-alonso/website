"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

const Grid = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <div className={styles.parent}>
        <div>
          <Image
            src={"/images/grid-mozzafiato/image-4.jpeg"}
            alt={`Property image`}
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src={"/images/grid-mozzafiato/image-7.jpg"}
            alt={`Property image`}
            width={500}
            height={500}
          />
        </div>
        <div className="row-span-2">
          <Image
            src={"/images/grid-mozzafiato/reel-4.gif"}
            alt={`Property image`}
            width={500}
            height={500}
          />
        </div>
        <div className="col-start-2 row-start-2">
          <Image
            src={"/images/grid-mozzafiato/image-5.jpeg"}
            alt={`Property image`}
            width={500}
            height={500}
          />
        </div>
        <div className="row-span-2 col-start-1 row-start-2">
        <Image
            src={"/images/grid-mozzafiato/reel-2.gif"}
            alt={`Property image`}
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2 col-start-2 row-start-3">
          <Image
            src={"/images/grid-mozzafiato/image-6.jpg"}
            alt={`Property image`}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
