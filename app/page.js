import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AchievementSection from "./components/AchievementSection";
import Testimonial from "./components/Testimonial";
import Brands from "./components/Brands";
import ContactUs from "./components/ContactUs";


export default function Home() {
  return (
    <div className="w-screen ">
      <Navbar/>
      <HeroSection/>
      <AchievementSection/>
      <Footer/>
      <HeroSection />
      <Testimonial/>
      <Brands />
      <ContactUs />
      <Footer />
    </div>
  );
}
