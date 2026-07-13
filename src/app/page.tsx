import Hero from "@/components/hero";
import About from "@/components/about";
import Capabilities from "@/components/capabilities";
import Products from "@/components/products";
import Experience from "@/components/experience";
import Leadership from "@/components/leadership";
import Certifications from "@/components/certifications";
import Stacks from "@/components/stacks";
import Resume from "@/components/resume";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Capabilities />
      <Products />
      <Experience />
      <Leadership />
      <Certifications />
      <Stacks />
      <Resume />
      <Contact />
    </main>
  );
}
