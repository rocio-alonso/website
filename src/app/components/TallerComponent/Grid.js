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
            src={"/images/academia/gallery/photo-01.jpg"}
            alt={`Property image`}
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src={"/images/academia/gallery/photo-02.jpg"}
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
              setLoading(false);
            }}
            onCanPlay={() => {
              setLoading(false);
            }}
            onError={() => {
              console.error("❌ Error al cargar el video");
              setLoading(false);
            }}
          >
            <source src="/videos/academia/gallery-01.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div className="col-start-2 row-start-2">
          <Image
            src={"/images/academia/gallery/photo-03.jpg"}
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
              setLoading(false);
            }}
            onCanPlay={() => {
              setLoading(false);
            }}
            onError={() => {
              console.error("❌ Error al cargar el video");
              setLoading(false);
            }}
          >
            <source src="/videos/academia/gallery-02.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div className="col-span-2 col-start-2 row-start-3">
          <Image
            src={"/images/academia/gallery/photo-04.jpg"}
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
