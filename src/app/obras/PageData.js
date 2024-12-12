import React from "react";
import Card from "../components/Card/Card";
import { getAllProductsDB } from "@/app/actions";
import Obras from "./Obras";

const PageData = async () => {
  const response = await getAllProductsDB();
  const dataObras = response.products[3].obras;

  return (
    <Obras data={dataObras}/>
  );
};

export default PageData;
