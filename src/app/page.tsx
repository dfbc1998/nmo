// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Methodology } from "@/components/sections/Methodology";
import { ClientsCarousel } from "@/components/sections/ClientsCarousel";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Methodology />
      <ClientsCarousel />
      <About />
      <Contact />
    </>
  );
}