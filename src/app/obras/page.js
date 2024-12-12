import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import { getAllProductsDB } from "@/app/actions";
import Card from "@/app/components/Card/Card";
import PageData from "@/app/obras/PageData"

const page = async () => {
  const response = await getAllProductsDB();
  return (
    <main>
      <PageData data={response}/>
    </main>
  );
};

export default page;
