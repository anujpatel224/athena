import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
<<<<<<< Updated upstream
import AchievementSection from "./components/AchievementSection";

=======
import ContactUs from "./components/ContactUs";
import Testimonial from "./components/Testimonial";
import Brands from "./components/Brands";
>>>>>>> Stashed changes
export default function Home() {
  return (
    <div className="w-screen ">
      <Navbar/>
<<<<<<< Updated upstream
      <HeroSection/>
      <AchievementSection/>
      <Footer/>
    </>
=======
      <HeroSection />
      <Testimonial/>
      <Brands />
      <ContactUs />
      <Footer />
    </div>
>>>>>>> Stashed changes
  );
}
