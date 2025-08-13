import HeroSection from "./src/components/home/HeroSection";
import NavBar from "./src/components/common/NavBar";
import AboutSection from "./src/components/home/AboutSection";
import ProjectSection from "./src/components/home/ProjectSecetion";
import EmailSection from "./src/components/home/EmailSection";
import FooterSection from "./src/components/common/FooterSection";
export default function HomePage() {
  return (
    <main>
<div className="px-5">
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
      <FooterSection/>
      </div>
    </main>
  );
}
 