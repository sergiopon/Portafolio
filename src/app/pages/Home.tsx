import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";
import { Skills } from "../components/sections/skills";
import { Projects } from "../components/sections/projects";
import { Contact } from "../components/sections/contact";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
