import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import trust1 from "@/assets/trust1.png"
import trust2 from "@/assets/trust2.png"
import trust3 from "@/assets/trust3.png"
import trust4 from "@/assets/trust4.png"
import trust5 from "@/assets/trust5.png"
const Hero = () => {
  // Show overlay only after scrolling more than 100px
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowOverlay(window.scrollY > 180);
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
        {showOverlay && (
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center z-20">
            <div className="backdrop-blur-xl border border-white/30 rounded-2xl p-8 md:p-12 shadow-2xl w-full max-w-xs md:max-w-lg lg:max-w-2xl flex flex-col items-center space-y-8 mx-4">
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight drop-shadow-lg">
                Unleashing Power
                <br />
                Solutions.
                <br />Built for the Nation.
              </h1>
              <p className="text-white/90 text-center text-base md:text-lg font-medium">
                Kirloskar Certified | ISO 9001:2015 | 500+ Enterprise Clients | 30+
                Years of Uninterrupted Excellence
              </p>
              <div className="flex flex-col md:flex-row gap-4 w-full justify-center mt-2">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg w-full md:w-auto">
                  Explore Power Solutions&nbsp;{" "}
                  <span className="ml-2">→</span>
                </Button>
                <Button
                  variant="outline"
                  className="border border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white font-semibold px-6 py-3 rounded-lg shadow-lg w-full md:w-auto flex items-center backdrop-blur"
                >
                  Download Company Profile&nbsp;
                  <Download size={18} className="ml-2" />
                </Button>
              </div>
              {/* Trusted By Logos - moved inside the box and reduced size */}
              <div className="mt-6 flex flex-col items-center w-full">
                <span className="text-white text-base font-semibold mb-2 tracking-wide">
                  TRUSTED BY
                </span>
                <div className="flex flex-row flex-wrap justify-center gap-4 w-full max-w-2xl">
                  <img
                    src={trust1}
                    alt="Tech Innovators"
                    className="h-14 w-auto object-contain bg-white rounded shadow"
                  />
                  <img
                    src={trust2}
                    alt="EcoPower Solutions"
                    className="h-14 w-auto object-contain bg-white rounded shadow"
                  />
                  <img
                    src={trust3}
                    alt="ManufacturePro"
                    className="h-14 w-auto object-contain bg-white rounded shadow"
                  />
                  <img
                    src={trust4}
                    alt="LogiTrans"
                    className="h-14 w-auto object-contain bg-white rounded shadow"
                  />
                  <img
                    src={trust5}
                    alt="BuildMaster"
                    className="h-14 w-auto object-contain bg-white rounded shadow"
                  />
                </div>
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