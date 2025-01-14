import "@/app/globals.css";
import React from "react";
import Card from "@/app/components/Card/Card";
import styles from "@/app/page.module.css";
import AnimateEntrance from "../AnimateEntrance/AnimateEntrance";

const ExposData = ({ data }) => {
  console.log(data);
  return (
    <AnimateEntrance>
      <section className="paddingSection flex flex-wrap justify-between gap-10">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </section>
    </AnimateEntrance>
  );
};

export default ExposData;
