import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </>
  );
}
