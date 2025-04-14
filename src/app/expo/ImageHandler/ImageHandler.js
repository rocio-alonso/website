"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/app/expo/page.module.css";

const ImageHandler = (data) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataFetched = data.data;

  useEffect(() => {
    const fetchImages = async () => {
      let imagesByFolder = [];
      try {
        setLoading(true);

        const res = await fetch(`/api/getImages?folder_name=${dataFetched}`);
        const imageResponses = await res.json();

        console.log(imageResponses);
        setImages(imageResponses);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [dataFetched]);

  return (
    <div className={`gap-10 ${styles.imgDiv}`}>
      {images.map((img, index) => (
        <Image src={img} alt="material" width={200} height={200} key={index} className="saturate-100"/>
      ))}
    </div>
  );
};

export default ImageHandler;
