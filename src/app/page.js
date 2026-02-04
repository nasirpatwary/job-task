import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import PopularPreview from "@/components/sections/PopularPreview";
import Testimonials from "@/components/sections/Testimonials";

const Home = () => {
  return <div className="space-y-10">
    <Hero />
    <Features />
    <HowItWorks />
    <PopularPreview />
    <FAQ />
    <Testimonials />
    <Contact />
  </div>;
};

export default Home;
