import React from "react";
import { getAllProductsDB } from "@/app/actions";

import MaterialsDetailsData from "@/app/components/MaterialesDetails/MaterialsDetailsData";

const MaterialesDetails = async () => {
  const response = await getAllProductsDB();
  const data = response.products[4].materiales;
  return (
    <MaterialsDetailsData data={data}/>
  );
};

export default MaterialesDetails;
