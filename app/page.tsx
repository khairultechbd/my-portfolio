import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrainingSlideshow from "./components/TrainingSlideshow";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
// BlogSection is temporarily disabled — re-enable once real posts replace the
// "Coming Soon" placeholders (see CV/Portfolio_Improvement_Plan.md, item #9).
// import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrainingSlideshow />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
