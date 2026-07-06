import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Commitment } from "../components/Commitment";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Commitment />
      <Contact />
    </>
  );
}
