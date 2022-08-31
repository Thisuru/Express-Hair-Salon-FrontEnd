import Services from "../../components/Services";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";

export const Home = () => {

  return (
    <div>
      <HeroSection />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;