import AboutSection from "./AboutSection/AboutSection";
import ContactSection from "./ContactSection/ContactSection";
import CreationStepsSection from "./CreationStepsSection/CreationStepsSection";
import LandingPage from "./LandingPage";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import SliderSection from "./SliderSection/SliderSection";

const MainPage = () => {
  return (
    <>
      <LandingPage />

      <AboutSection />

      <ServicesSection />

      <CreationStepsSection />

      <SliderSection />

      <ReviewsSection />

      <ContactSection />
    </>
  );
};

export default MainPage;
