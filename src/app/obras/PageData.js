"use client";

import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Obras from "./Obras";

const PageData = () => {
  const [dataObras, setDataObras] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/getProducts");
        const data = await response.json();
        setDataObras(data.response.products[3].obras);
      } catch (error) {
        console.error("An error occurred while fetching files.", error);
      }
    };

    fetchFiles();
  }, []);

  return <Obras data={dataObras} />;
};

export default PageData;
