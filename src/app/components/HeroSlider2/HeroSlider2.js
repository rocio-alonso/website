"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";
import AnimateSlider from "../AnimateEntrance/AnimateSlider";

const HeroSlider2 = () => {
  const desktopImages = useMemo(
    () => [
      "/images/imagenes/esta-si-3.JPG",
      "/images/imagenes/esta-si.JPG",
      "/images/imagenes/esta-si-2.JPG",
    ],
    []
  );

  const mobileImages = useMemo(
    () => [
      "/images/imagenes/responsive-bg/hero-responsive-bg-3.JPG",
      "/images/imagenes/responsive-bg/hero-responsive-bg-1.JPG",
      "/images/imagenes/responsive-bg/hero-responsive-bg-2.JPG",
    ],
    []
  );

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const changeImage = () => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setOpacity(1);
      }, 1000);
    };

    const interval = setInterval(changeImage, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full h-full">
      <div className={styles.heroSection1}>
        <AnimateSlider key={images[currentIndex]}>
          <div className="w-full h-screen overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt="Hero Slider"
              width={800}
              height={800}
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                opacity: opacity,
                transition: "opacity 1s ease-in-out",
              }}
            />
          </div>
        </AnimateSlider>
        <div className={`${styles.heroText} paddingSection`}>
          <h2 className="title" translate="no">
            Horror Vacui{" "}
          </h2>
          <p className="subtitle ultralight thin mb-5">
            La belleza de lo ausente
          </p>
          <div className="flex mt-1">
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
      </div>
    </section>
  );
};

export default HeroSlider2;
