import "@/app/globals.css";

import About from "@/app/components/About/About";
import Exposiciones from "./components/Exposiciones/Exposiciones";
import TallerComponent from "./components/TallerComponent/TallerComponent";
import HeroSlider2 from "./components/HeroSlider2/HeroSlider2";

export const metadata = {
  description: "Artista viviendo en Barcelona",
};

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
