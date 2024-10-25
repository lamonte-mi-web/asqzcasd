import CTA from "./HeroItems/CTA";
import HeroSection from "./HeroItems/HeroSection";
import HeroTitle from "./HeroItems/HeroTitle";

export default function Hero() {
  return (
    <>
      <div className="font-poppins">
        <HeroTitle />
        <CTA />
        <HeroSection />
      </div>
    </>
  );
}
