import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AchievementSection from "./components/AchievementSection";
import OurServices from "./components/OurServices";
import LiveEvents from "./components/LiveEvents";
import Testimonial from "./components/Testimonial";
import Brands from "./components/Brands";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="scroll-container h-screen w-screen">
      <Navbar />
      <HeroSection />
      <AchievementSection />
      <OurServices />
      <LiveEvents/>
      <Testimonial/>
      <Brands />
      <ContactUs />
      <Footer />
    </div>
  );
}
