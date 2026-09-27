import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { AISolutions } from "@/components/sections/AISolutions";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { About } from "@/components/sections/About";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <SelectedWork />
      <AISolutions />
      <Industries />
      <Process />
      <WhyUs />
      <About />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}