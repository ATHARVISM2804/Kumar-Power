import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
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
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Content above video */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-6 md:px-10 flex flex-col items-center">
            <div
              className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 md:p-12 shadow-2xl max-w-4xl w-full flex flex-col items-center space-y-8"
              style={{
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 100%)",
                border: "1.5px solid rgba(255,255,255,0.25)",
              }}
            >
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight text-center">
                Unleashing Power
                <br />
                Solutions.
                <br />
                Built for the Nation.
              </h1>
              <p className="text-sm md:text-lg text-white/90 font-medium whitespace-nowrap overflow-auto">
                Kirloskar Certified | ISO 9001:2015 | 500+ Enterprise Clients |
                30+ Years of Uninterrupted Excellence
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
              <div className="mt-6 flex flex-col items-center w-full">
                <span className="text-white/90 font-semibold tracking-wide mb-2 text-sm md:text-base">
                  TRUSTED BY
                </span>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
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
      </div>
    </section>
  );
};

export default Hero;
