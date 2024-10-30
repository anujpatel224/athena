import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AchievementSection from "./components/AchievementSection";
import OurServices from "./components/OurServices";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AchievementSection/>
      <OurServices/>
      <Footer/>
    </>
  );
}
