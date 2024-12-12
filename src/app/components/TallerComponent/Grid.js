import React from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

const Grid = () => {
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
          <video
            width="250"
            height="100"
            controls
            preload="none"
            autoPlay
            loop
            muted
          >
            <source src="/images/grid-mozzafiato/reel-4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
          <video
            width="250"
            height="100"
            controls
            preload="none"
            autoPlay
            loop
            muted
          >
            <source src="/images/grid-mozzafiato/reel-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
