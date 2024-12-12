import React from "react";
import Card from "@/app/components/Card/Card";
import styles from "@/app/obras/page.module.css";

const PageData = ({data}) => {
  return (
    <div>
      <section className="paddingSection">
        {data.map((dataItem, index) => (
          <div key={index}>
            <h2 className="title flex m-bottom">
              {dataItem.titulo}{" "}
              <p className="subtitle ml-2">({dataItem.ano})</p>
            </h2>
            <div className="m-bottom flex flex-wrap justify-between">
              <Card dataObra={dataItem} isObra={true} />
              <Card dataObra={dataItem} isObra={true} />
              <Card dataObra={dataItem} isObra={true} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PageData;