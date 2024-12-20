import React from "react";
import { getAllProductsDB } from "@/app/actions";
import cardStyles from "@/app/components/Card/Card.module.css";
import styles from "@/app/sobre-mi/page.module.css";
import { GoLocation } from "react-icons/go";
import PremiosData from "@/app/components/Premios/PremiosData";

const Premios = async () => {
  const response = await getAllProductsDB();
  const data = response.products[0].premios;
  return (<PremiosData data={data}/>);
};

export default Premios;