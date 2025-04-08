import { HeroSection } from "./components/page/home/hero-section";
import { HighLightedProjects } from "./components/page/home/highlighted-projects";
import { KnownTechs } from "./components/page/home/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighLightedProjects />
      
    </>
  )
}
