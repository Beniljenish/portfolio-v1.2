import { Navbar } from "@/app/components/Navbar";
import { AnimatedBackground } from "@/app/components/AnimatedBackground";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}