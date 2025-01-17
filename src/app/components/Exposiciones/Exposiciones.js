import "@/app/globals.css";
import Card from "@/app/components/Card/Card";
import styles from "@/app/page.module.css";
import { getAllProductsDB } from "@/app/actions";

import AnimateEntrance from "@/app/components/AnimateEntrance/AnimateEntrance";
import ExposicionesData from "@/app/components/Exposiciones/ExposicionesData";

const Exposiciones = async () => {
  const response = await getAllProductsDB();
  const data = response.products[3].exposiciones;
  return (
    <AnimateEntrance>
      <section className="paddingBody">
        <h2 className="title m-bottom">Exposiciones en las que participé</h2>
        <ExposicionesData data={data} />
      </section>
    </AnimateEntrance>
  );
};

export default Exposiciones;
