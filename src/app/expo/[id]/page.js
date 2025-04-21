import React from "react";
import styles from "@/app/expo/[id]/page.module.css";
import ImageHandler from "@/app/expo/ImageHandler/ImageHandler";

const page = async ({ params }) => {
  const { id } = await params;

  return (
    <main>
      <div className={`${styles.hero}`}>
        <div className={`z-50 w-full text-white flex justify-center`}></div>
      </div>
      <div className={`${styles.heroSection1}`}>
        <div className={`${styles.expoFullScreen}`}>
          <ImageHandler data={id} />
        </div>
      </div>
    </main>
  );
};

export default page;
