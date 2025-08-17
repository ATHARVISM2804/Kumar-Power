import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setShowContent(true);
      }
    };

    // Initial check in case page is loaded with scroll position
    if (window.scrollY > 5) {
      setShowContent(true);
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative">
      <div className="relative h-[68vh] md:h-[78vh] lg:h-[95vh] overflow-hidden rounded-xl border shadow-[var(--shadow-glow)]">
        {/* Background video - full width, no controls */}
         <div className="absolute left-0 top-0 translate-x-[-5%] translate-y-[-5%] inset-0 w-[110vw] h-[110vh] pointer-events-none z-0">
          <iframe
            src="https://www.youtube.com/embed/FZGwh-hlDH4?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=FZGwh-hlDH4&modestbranding=1&fs=0&disablekb=1"
            // frameBorder="0"
            allow="autoplay; encrypted-media"
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Overlay for readability */}
        <div className={`absolute inset-0 bg-black/40 z-10 transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`} />
        {/* Content above video */}
        <div className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4 md:px-10 flex flex-col items-center">
            <div
              className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-4 md:p-12 shadow-2xl w-full max-w-4xl flex flex-col items-center space-y-4 md:space-y-8"
              style={{
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 100%)",
                border: "1.5px solid rgba(255,255,255,0.25)",
              }}
            >
              <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight text-center">
                Unleashing Power
                <br />
                Solutions.
                <br />
                Built for the Nation.
              </h1>
              
              {/* Mobile version - stacked text */}
              <div className="flex flex-col items-center space-y-0.5 sm:hidden">
                <p className="text-xs text-white/90 font-medium">Kirloskar Certified</p>
                <p className="text-xs text-white/90 font-medium">ISO 9001:2015</p>
                <p className="text-xs text-white/90 font-medium">500+ Enterprise Clients</p>
                <p className="text-xs text-white/90 font-medium">30+ Years of Excellence</p>
              </div>
              
              {/* Medium screens - two lines */}
              <div className="hidden sm:flex md:hidden flex-col items-center">
                <p className="text-sm text-white/90 font-medium">Kirloskar Certified | ISO 9001:2015</p>
                <p className="text-sm text-white/90 font-medium">500+ Enterprise Clients | 30+ Years of Excellence</p>
              </div>
              
              {/* Large screens - single line */}
              <p className="hidden md:block text-lg text-white/90 font-medium text-center">
                Kirloskar Certified | ISO 9001:2015 | 500+ Enterprise Clients | 30+ Years of Uninterrupted Excellence
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full">
                <Button
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  size="lg"
                  asChild
                >
                  <a href="#contact" aria-label="Explore Power Solutions">
                    Explore Power Solutions
                  </a>
                </Button>
                <Button
                  className="w-full sm:w-auto bg-transparent border border-white text-white font-semibold hover:bg-white/10"
                  size="lg"
                  asChild
                >
                  <a
                    href="#cta"
                    aria-label="Download Company Profile"
                    className="flex items-center gap-2 justify-center"
                  >
                    <Download className="w-4 h-4" />
                    Download Company Profile
                  </a>
                </Button>
              </div>
              {/* Trusted by logos and label - inside card */}
              <div className="mt-6 flex flex-col items-center w-full px-2">
                <span className="text-white/90 font-semibold tracking-wide mb-2 text-xs md:text-base">
                  TRUSTED BY
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-x-8 md:gap-y-4">
                  <img
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018139/Screenshot_2025-08-12_223045_zmtwsc.png"
                    alt="Trusted 1"
                    className="h-12 w-auto bg-white/80 rounded shadow"
                  />
                  <img
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018138/Screenshot_2025-08-12_223107_gtytur.png"
                    alt="Trusted 2"
                    className="h-12 w-auto bg-white/80 rounded shadow"
                  />
                  <img
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018138/Screenshot_2025-08-12_223123_pqjvbo.png"
                    alt="Trusted 3"
                    className="h-12 w-auto bg-white/80 rounded shadow"
                  />
                  <img
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018139/Screenshot_2025-08-12_223139_wq8vha.png"
                    alt="Trusted 4"
                    className="h-12 w-auto bg-white/80 rounded shadow"
                  />
                  <img
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018139/Screenshot_2025-08-12_223157_gp87k6.png"
                    alt="Trusted 5"
                    className="h-12 w-auto bg-white/80 rounded shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Instructions overlay that fades out when content appears */}
        {!showContent && (
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <p className="text-white text-xl md:text-2xl font-medium opacity-80 animate-pulse">
             
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
      
