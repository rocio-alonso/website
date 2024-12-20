import "@/app/globals.css";
import Hero from "@/app/components/Hero/Hero";

import About from "@/app/components/About/About";
import Exposiciones from "./components/Exposiciones/Exposiciones";
import TallerComponent from "./components/TallerComponent/TallerComponent";
import HeroSlider2 from "./components/HeroSlider2/HeroSlider2";

export default function Home() {
  return (
    <main>
      <HeroSlider2 />
      <About />
      <Exposiciones />
      <TallerComponent />
    </main>
  );
}
