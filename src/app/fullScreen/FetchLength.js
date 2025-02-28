"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import FetchQuery from "./FetchQuery";

import { IoChevronBackOutline } from "react-icons/io5";
import styles from "@/app/fullScreen/page.module.css";

import Image from "next/image";
import Link from "next/link";

const FetchLengthClient = (data) => {
  const searchParams = useSearchParams();
  const img = searchParams.get("img");
  const titulo = searchParams.get("title");
  const medidas = searchParams.get("medidas");

  const match = img.match(/\/([^/]+)\/(\d+)\./);

  const folderName = match ? match[1] : null;
  let number = match ? parseInt(match[2], 10) : null;

  const formattedTitle = folderName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [coleccion, setColeccion] = useState(null);
  const [numberIndex, setNumberIndex] = useState(number - 1);
  const [titleColeccion, setTitleColeccion] = useState(formattedTitle);

  const handlePrevious = () => {
    setNumberIndex((prevIndex) => Math.max(prevIndex - 1, 0));

    data.data.map((obra) => {
      if (obra.titulo === titleColeccion) {
        setColeccion(obra.obras[numberIndex]);
      }
    });
    console.log(numberIndex);
  };

  const handleNext = () => {
    data.data.map((obra) => {
      if (obra.titulo === titleColeccion) {
        setNumberIndex((prevIndex) =>
          Math.max(prevIndex + 1, obra.obras.length - 1)
        );
        setColeccion(obra.obras[numberIndex]);
      }
    });

    console.log(coleccion);
    console.log(numberIndex);
  };

  useEffect(() => {
    data.data.map((obra) => {
      if(titleColeccion === "Baile De Las Almas"){
        setTitleColeccion("El baile de las almas")
      }
      if (obra.titulo === titleColeccion) {
        setColeccion(obra.obras);
      }
    });
    console.log(coleccion);
    console.log(data.data[numberIndex]);
    console.log(numberIndex);
    console.log(titleColeccion);
  }, [data, number, titleColeccion, coleccion, numberIndex]);

  return (
    <FetchQuery data={coleccion} number={numberIndex} formattedTitle={titleColeccion} />
  );
};

const FetchLength = ({ data }) => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <FetchLengthClient data={data} />
    </Suspense>
  );
};


export default FetchLength;
