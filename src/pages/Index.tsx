import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

import About from "@/components/landing/About";
import GeneratorRange from "@/components/landing/GeneratorRange";
import PowerSolutions from "@/components/landing/PowerSolutions";
import UseCases from "@/components/landing/UseCases";
import Gallery from "@/components/landing/Gallery";
import Testimonials from "@/components/landing/Testimonials";
import BlogSection from "@/components/landing/BlogSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
      
        <About />
        <GeneratorRange />
        <CTASection />
        <PowerSolutions />
        
        <UseCases />
        <Gallery />
        <Testimonials />
        <BlogSection />
        
      <Footer />
      </main>
    </div>
  );
};

export default Index;
