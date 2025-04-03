"use client";

// import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Career from "@/src/components/Career";
import Academic from "@/src/components/Academic";
import Contact from "@/src/components/Contact";
import FlyFabi from "@/src/components/FlyFabi";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Career/>
      <Academic/>
      <Contact/>
      <FlyFabi/>
      <Footer/>
    </main>
  );
}
