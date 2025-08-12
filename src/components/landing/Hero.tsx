import heroImage from "@/assets/hero-power-plant.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="relative h-[68vh] md:h-[78vh] overflow-hidden rounded-xl border shadow-[var(--shadow-glow)]">
        <img src={heroImage} alt="Industrial power plant at night" className="absolute inset-0 w-full h-full object-cover" loading="eager"/>
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 md:px-10 text-center space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-foreground drop-shadow-sm">
              Unleashing Power Solutions. Built for the Nation.
            </h1>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-primary-foreground/85">
              Kirloskar Certified | ISO 9001:2015 | Enterprise Clients | 30+ Years of Uninterrupted Excellence
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact" aria-label="Enquire Power Solutions">Enquire Power Solutions</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#cta" aria-label="Download Company Profile">Download Company Profile</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs md:text-sm text-primary-foreground/80">
              <span className="px-2 py-1 rounded-md bg-background/70">Kirloskar Certified</span>
              <span className="px-2 py-1 rounded-md bg-background/70">ISO 9001:2015</span>
              <span className="px-2 py-1 rounded-md bg-background/70">Enterprise Clients</span>
              <span className="px-2 py-1 rounded-md bg-background/70">30+ Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;