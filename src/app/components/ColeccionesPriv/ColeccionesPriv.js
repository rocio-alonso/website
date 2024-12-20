import React from "react";
import { getAllProductsDB } from "@/app/actions";
import ColeccionesPrivData from "@/app/components/ColeccionesPriv/ColeccionesPrivData";

const ColeccionesPriv = async () => {
  const response = await getAllProductsDB();
  const data = response.products[1].colecciones_privadas;
  return (<ColeccionesPrivData data={data} />);
};

export default ColeccionesPriv;