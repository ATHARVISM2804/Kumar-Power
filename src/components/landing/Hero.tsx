import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  // Show overlay only after scrolling a little
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowOverlay(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative bg-black lg:bg-white">
      <div className="relative h-[58vh] md:h-[78vh] lg:h-[95vh] overflow-hidden rounded-xl z-1 border shadow-[var(--shadow-glow)]">
        {/* Background video - full width, no controls */}
        <div className="absolute left-0 lg:top-0 translate-x-[-5%] translate-y-[-5%] inset-0 w-[110vw] h-[150vh] lg:h-[110vh] pointer-events-none z-0 top-[-45vh]  sm:block">
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
        {/* Content above video - show on scroll for all devices */}
        {showOverlay && (
          <div className="absolute top-20 lg:top-80 left-0 h-[45vh] inset-0 w-full flex items-center justify-center z-20">
            <div className="backdrop-blur-xl  border border-white/30 rounded-2xl p-8 md:p-12 shadow-2xl w-full max-w-xs md:max-w-lg lg:max-w-2xl flex flex-col items-center space-y-8 mx-4">
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight drop-shadow-lg">
                Unleashing Power
                <br />Solutions.
                <br />Built for the Nation.
              </h1>
              <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 w-full">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-white/30 text-center">
                  Kirloskar Certified
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-white/30 text-center">
                  ISO 9001:2015
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-white/30 text-center">
                  500+ Enterprise Clients
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-white/30 text-center">
                  30+ Years of Excellence
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

//  <div className="absolute left-0 top-0 w-screen h-screen flex items-center justify-center z-20 sm:hidden">
//           <div className="container mx-auto px-4 flex flex-col items-center">
//             <div
//               className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-4 shadow-2xl w-full max-w-4xl flex flex-col items-center space-y-4"
//               style={{
//                 boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//                 background:
//                   "linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 100%)",
//                 border: "1.5px solid rgba(255,255,255,0.25)",
//               }}
//             >
//               {/* Mobile version - stacked text */}
//               <div className="absolute w-screen h-screen flex flex-col items-center justify-center space-y-0.5 bg-black">
//                 <p className="text-xs text-white/90 font-medium">Kirloskar Certified</p>
//                 <p className="text-xs text-white/90 font-medium">ISO 9001:2015</p>
//                 <p className="text-xs text-white/90 font-medium">500+ Enterprise Clients</p>
//                 <p className="text-xs text-white/90 font-medium">30+ Years of Excellence</p>
//               </div>
//             </div>
//           </div>
//         </div>