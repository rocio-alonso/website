import Image from "next/image";
import Hero from "@/app/components/Hero/Hero";
import "@/app/globals.css";

import styles from "@/app/page.module.css";
import About from "@/app/components/About/About";
import Card from "@/app/components/Card/Card";
import Exposiciones from "./components/Exposiciones/Exposiciones";
import TallerComponent from "./components/TallerComponent/TallerComponent";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Exposiciones />
      <TallerComponent />
    </main>
  );
}
