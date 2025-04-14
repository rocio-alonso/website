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
          <video
            width="600"
            height="400"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => {
              console.log("✅ Video cargado");
              setLoading(false);
            }}
            onCanPlay={() => {
              console.log("✅ Video listo para reproducirse");
              setLoading(false);
            }}
            onError={() => {
              console.error("❌ Error al cargar el video");
              setLoading(false);
            }}
          >
            <source src="/images/grid-mozzafiato/reel-4.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
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
            width="600"
            height="400"
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => {
              console.log("✅ Video cargado");
              setLoading(false);
            }}
            onCanPlay={() => {
              console.log("✅ Video listo para reproducirse");
              setLoading(false);
            }}
            onError={() => {
              console.error("❌ Error al cargar el video");
              setLoading(false);
            }}
          >
            <source src="/images/grid-mozzafiato/reel-2.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
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
