
import About from "@/app/components/About/About";
import Exposiciones from "./components/Exposiciones/Exposiciones";
import TallerComponent from "./components/TallerComponent/TallerComponent";
import HeroSlider2 from "./components/HeroSlider2/HeroSlider2";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Rocío Alonso, artista visual en Barcelona</h1>
      <HeroSlider2 />
      <About />
      <Exposiciones />
      <TallerComponent />
    </main>
  );
}
