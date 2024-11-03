import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AchievementSection from "./components/AchievementSection";
import OurServices from "./components/OurServices";
import LiveEvents from "./components/LiveEvents";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="scroll-container h-screen">
      <Navbar />
      <HeroSection />
      <AchievementSection />
      <OurServices />
      <LiveEvents/>
      <Footer />
    </div>
  );
}
