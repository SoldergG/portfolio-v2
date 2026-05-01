import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Particles from "@/components/Particles";
import SceneWrapper from "@/components/SceneWrapper";

export default function Home() {
  return (
    <main>
      <SceneWrapper />
      <Cursor />
      <Particles />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
