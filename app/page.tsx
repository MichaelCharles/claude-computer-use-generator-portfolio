import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
