import HeroSection from "./src/components/HeroSection";
import NavBar from "./src/components/NavBar";
import AboutSection from "./src/components/AboutSection";
import ProjectSection from "./src/components/ProjectSecetion";
import EmailSection from "./src/components/EmailSection";
export default function HomePage() {
  return (
    <main>
<div className="px-5">
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      </div>
    </main>
  );
}
 