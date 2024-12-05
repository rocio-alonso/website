import React from "react";
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";

const TallerComponent = () => {
  return (
    <section>
      <div className="paddingBody">
        <section className="flex">
          <div className={`${styles.parent} w-2/4`}>
            <div className={`${styles.div1}`}>
              <Image
                src={"/images/grid-mozzafiato/image-4.jpeg"}
                alt={`Property image`}
                width={500}
                height={500}
              />
            </div>
            <div className={`${styles.div2}`}>
              <Image
                src={"/images/grid-mozzafiato/image-7.jpg"}
                alt={`Property image`}
                width={500}
                height={500}
              />
            </div>
            <div className={`${styles.div3}`}>
              <video
                width="250"
                height="100"
                controls
                preload="none"
                autoPlay
                loop
                muted
              >
                <source
                  src="/images/grid-mozzafiato/reel-4.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`${styles.div4}`}>
              <Image
                src={"/images/grid-mozzafiato/image-5.jpeg"}
                alt={`Property image`}
                width={500}
                height={500}
              />
            </div>
            <div className={`${styles.div5}`}>
              <video
                width="250"
                height="100"
                controls
                preload="none"
                autoPlay
                loop
                muted
              >
                <source
                  src="/images/grid-mozzafiato/reel-2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`${styles.div6}`}>
              <Image
                src={"/images/grid-mozzafiato/image-6.jpg"}
                alt={`Property image`}
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className={`${styles.tallerText} w-2/4`}>
            <h2 className={`title m-bottom`}>Taller Mozzafiato</h2>
            <p className="subtitle m-bottom">
              A partir de 2021 dicto clases junto con alumnos de diversos
              niveles artísticos cuya principal misión radica en el hecho de
              compartir y desarrollar el arte de manera colectiva.
            </p>

            <p className="subtitle m-bottom">
              Actualmente me encuentro en Barcelona dando clases grupales, te
              invito a conocer más sobre el taller y a sumarte a este proyecto.
            </p>
            <Link className="button" href="/taller">
              Conoce el taller
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TallerComponent;
