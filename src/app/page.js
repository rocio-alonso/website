import "@/app/globals.css";
import Hero from "@/app/components/Hero/Hero";

import About from "@/app/components/About/About";
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
