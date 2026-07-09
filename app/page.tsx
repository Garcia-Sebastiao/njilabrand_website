import { About } from "./components/about/about";
import { Banner } from "./components/banner/banner";
import { Hero } from "./components/hero/hero-section";
import { OurProjects } from "./components/our-projects/our-projects";
import { OurServices } from "./components/our-services/our-services";
import { OurTeam } from "./components/our-team/our-team";
import { Testimonials } from "./components/testimonials/testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full z-10 relative bg-secondary">
        <Hero />
        <About />
      </div>
      <div className="w-full flex flex-col gap-y-44 mt-44">
        <OurServices />
        <OurProjects />
        <OurTeam />
        <Banner />
        <Testimonials />
      </div>
    </div>
  );
}
