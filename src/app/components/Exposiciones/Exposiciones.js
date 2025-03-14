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
        <h2 className="title mt-10 mb-20 title-section text-center title-big">Exposiciones</h2>
        <ExposicionesData data={data} />
      </section>
    </AnimateEntrance>
  );
};

export default Exposiciones;
