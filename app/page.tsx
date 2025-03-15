import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Academic from "@/components/Academic";
import Contact from "@/components/Contact";
import FlyFabi from "@/components/FlyFabi";
import Footer from "@/components/Footer";
import ReactGA from 'react-ga4';

export default function Home() {
  ReactGA.initialize('G-NZ986EVFCS');

  return (
    <div>
      <Navbar />
      <Hero />
      <Career/>
      <Academic/>
      <Contact/>
      <FlyFabi/>
      <Footer/>
    </div>
  );
}
