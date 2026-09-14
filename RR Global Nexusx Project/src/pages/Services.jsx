import ServicesHero from "../components/services/ServicesHero";
import ServicesIntro from "../components/services/ServicesIntro";
import LegalServices from "../components/services/LegalServices";
import CyberSecurity from "../components/services/CyberSecurity";
import WhyChooseUs from "../components/services/WhyChooseUs";
import ServicesCTA from "../components/services/ServicesCTA";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <LegalServices />
      <CyberSecurity />
      <WhyChooseUs />
      <ServicesCTA />
    </>
  );
}