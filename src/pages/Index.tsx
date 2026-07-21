import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import Menu from "@/components/Menu";
import Benefits from "@/components/Benefits";
import CateringPackages from "@/components/CateringPackages";
import MoreAboutUs from "@/components/MoreAboutUs";
import FAQ from "@/components/FAQ";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <WhyChoose />
        <SectionDivider />
        <Menu />
        <SectionDivider />
        <Benefits />
        <SectionDivider />
        <CateringPackages />
        <SectionDivider />
        <QuoteForm />
        <SectionDivider />
        <MoreAboutUs />
        <SectionDivider />
        <FAQ />
        <SectionDivider variant="dark" />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
