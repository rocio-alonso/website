"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/app/expo/[id]/page.module.css";
import ImageLayout from "@/app/expo/ImageHandler/ImageLayout";

const ImageHandler = (data) => {
  const [images, setImages] = useState([]);
  const [expo, setExpo] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataFetched = data.data;

  useEffect(() => {
    const fetchImages = async () => {
      let imagesByFolder = [];
      try {
        setLoading(true);

        const res = await fetch(`/api/getImages?folder_name=${dataFetched}`);
        const imageResponses = await res.json();
        setImages(imageResponses);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [dataFetched]);

  useEffect(() => {
    const fetchExpos = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/getProducts`);
        const exposResponses = await res.json();
        const expos = exposResponses.response.products[3].exposiciones;

        expos.map((expoSingle) => {
          if (dataFetched === expoSingle.serverFolder) {
            console.log(expoSingle);
            console.log(dataFetched);
            setExpo(expoSingle);
          }
        });
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpos();
  }, [dataFetched]);

  return (
    <div className={`gap-10 ${styles.expoFullScreen}`}>
      <div className={`${styles.expoFullScreen}`}>
        <ImageLayout data={images} title={expo}/>
      </div>
    </div>
  );
};

export default ImageHandler;
