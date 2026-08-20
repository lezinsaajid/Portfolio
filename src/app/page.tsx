import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Capabilities from "@/components/capabilities";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Products />
      <Capabilities />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
