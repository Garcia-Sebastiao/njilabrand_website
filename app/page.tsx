import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero-section";
import { OurServices } from "./components/our-services/our-services";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full z-10 relative bg-secondary">
        <Hero />
        <About />
      </div>
      <div className="w-full mt-44">
        <OurServices />
      </div>
    </div>
  );
}
