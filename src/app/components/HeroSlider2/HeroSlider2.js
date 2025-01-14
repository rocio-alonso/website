"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";
import AnimateSlider from "../AnimateEntrance/AnimateSlider";

const HeroSlider2 = () => {
  const images = useMemo(() => [
    "/images/imagenes/esta-si-3.JPG",
    "/images/imagenes/esta-si.JPG",
    "/images/imagenes/esta-si-2.JPG"
  ], []);

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const changeImageInterval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setOpacity(1);
      }, 1000);
    }, 10000);

    return () => clearInterval(changeImageInterval);
  }, [currentImage, images]);

  return (
    <section className="w-full h-full">
      <div className={styles.heroSection1}>
        <AnimateSlider key={currentImage}>
          <div
            style={{
              height: "100vh",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src={currentImage}
              alt="Hero Slider"
              width={1920}
              height={1080}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: opacity,
                transition: "opacity 1s ease-in-out",
              }}
            />
          </div>
        </AnimateSlider>
      </div>

      <div className={`${styles.heroText} paddingSection`}>
        <h2 className="text-6xl thin text-white">
          Horror Vacui: <p className="subtitle">La belleza de lo ausente</p>
        </h2>
        <div className="flex">
          <Link className={`button ${styles.buttonHeader}`} href={"/obras"}>
            Conoce mi obra
          </Link>
          <Link
            className={`button secondary ${styles.buttonHeader2}`}
            href={"/sobre-mi"}
          >
            Sobre mi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider2;
