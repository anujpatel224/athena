import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SliderSection from "./components/SliderSection";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <SliderSection/>
      <HeroSection/>
      <Footer/>
    </>
  );
}
