import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import trust1 from "@/assets/trust1.png"
import trust2 from "@/assets/trust2.png"
import trust3 from "@/assets/trust3.png"
import trust4 from "@/assets/trust4.png"
import trust5 from "@/assets/trust5.png"

const Hero = () => {
  // Show overlay after scrolling more than 180px and keep it visible
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Check if it's a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      // If user has scrolled past threshold, show overlay permanently
      if (window.scrollY > 180) {
        setShowOverlay(true);
        // Once we've shown the overlay, we can remove the scroll listener
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    
    // Initial checks
    checkMobile();
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section id="home" className="relative bg-black lg:bg-white">
      <div className="relative h-[58vh] md:h-[78vh] lg:h-[95vh] overflow-hidden rounded-xl z-1 border shadow-[var(--shadow-glow)]">
        {/* Background video with improved configuration to hide controls */}
        <div className="absolute left-0 lg:top-0 inset-0 w-full h-full md:w-[110vw] md:h-[150vh] lg:h-[110vh] pointer-events-none z-0 md:top-[-45vh] md:translate-x-[-5%] md:translate-y-[-5%]">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Enhanced YouTube embed with better scaling to preserve content while hiding UI */}
            <iframe
              src="https://www.youtube.com/embed/FZGwh-hlDH4?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=FZGwh-hlDH4&modestbranding=1&fs=0&disablekb=1&iv_load_policy=3&playsinline=1&enablejsapi=1"
              allow="autoplay; encrypted-media"
              className="absolute inset-0 w-[105%] md:w-[105%] lg:w-[105%] h-[110%] md:h-[110%] lg:h-[110%] translate-x-[-2.5%] md:translate-x-[-2.5%] lg:translate-x-[-2.5%] translate-y-[-5%] md:translate-y-[-5%] lg:translate-y-[-5%]"
              style={{ 
                objectFit: "cover", 
                opacity: videoLoaded ? 1 : 0,
                transition: "opacity 0.5s ease-in-out"
              }}
              onLoad={() => setVideoLoaded(true)}
              frameBorder="0"
            />
            
            {/* Strategic overlays to specifically target YouTube UI elements */}
            <div className="absolute top-0 left-0 w-full h-[40px] bg-black z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-[55px] bg-black z-10"></div>
            <div className="absolute top-[40px] right-0 w-[100px] h-[40px] bg-black z-10"></div>
          </div>
        </div>
        
        {/* Reduced overlay opacity for mobile to maintain video visibility */}
        <div className={`absolute inset-0 ${isMobile ? 'bg-black/40' : 'bg-black/10'} z-5`}></div>
        
        {/* Semi-transparent base overlay to ensure text readability on video (shows with scroll) */}
        {showOverlay && (
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-10"></div>
        )}
        
        {/* Main Content Overlay */}
        {showOverlay && (
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center z-20 p-4">
            <div className="backdrop-blur-xl border border-white/30 rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl w-full max-w-[90%] sm:max-w-xs md:max-w-lg lg:max-w-2xl flex flex-col items-center space-y-4 md:space-y-8">
              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight drop-shadow-lg">
                Unleashing Power
                <br />
                Solutions.
                <br />Built for the Nation.
              </h1>
              <p className="text-white/90 text-center text-sm sm:text-base md:text-lg font-medium">
                <span className="hidden md:inline">Kirloskar Certified | ISO 9001:2015 | 500+ Enterprise Clients | 30+ Years of Uninterrupted Excellence</span>
                <span className="md:hidden">
                  Kirloskar Certified<br />
                  ISO 9001:2015<br />
                  500+ Enterprise Clients<br />
                  30+ Years of Excellence
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-2">
                <Button onClick={
                () => {
                  window.location.href = "/products";
                }
} className="bg-[#2D6FBA] hover:bg-[#22548e] text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg w-full sm:w-auto text-sm md:text-base">
                  Explore Power Solutions&nbsp;{" "}
                  <span className="ml-1 md:ml-2">→</span>
                </Button>
                <Button
                  variant="outline"
                  className="border border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg w-full sm:w-auto flex items-center justify-center backdrop-blur text-sm md:text-base"
                >
                  Download Profile&nbsp;
                  <Download size={16} className="ml-1 md:ml-2" />
                </Button>
              </div>
              
              {/* Trusted By Logos - with sliding animation */}
              <div className="mt-3 md:mt-6 flex flex-col items-center w-full">
                <span className="text-white text-sm md:text-base font-semibold mb-1 md:mb-2 tracking-wide">
                  TRUSTED BY
                </span>
                <div className="w-full overflow-hidden relative">
                  <div className="flex animate-marquee space-x-4 whitespace-nowrap">
                    <img
                      src={trust1}
                      alt="Tech Innovators"
                      className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow"
                    />
                    <img
                      src={trust2}
                      alt="EcoPower Solutions"
                      className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow"
                    />
                    <img
                      src={trust3}
                      alt="ManufacturePro"
                      className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow"
                    />
                    <img
                      src={trust4}
                      alt="LogiTrans"
                      className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow"
                    />
                    <img
                      src={trust5}
                      alt="BuildMaster"
                      className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow"
                    />
                    
                    {/* Duplicate set of logos for continuous animation */}
                    <img
                      src={trust1}
                      alt="Tech Innovators"
                      className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow"
                    />
                    <img
                      src={trust2}
                      alt="EcoPower Solutions"
                      className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow"
                    />
                    <img
                      src={trust3}
                      alt="ManufacturePro"
                      className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow"
                    />
                    <img
                      src={trust4}
                      alt="LogiTrans"
                      className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow"
                    />
                    <img
                      src={trust5}
                      alt="BuildMaster"
                      className="h-8 sm:h-10 md:h-14 w-auto object-contain bg-white rounded shadow"
                    />
                  </div>
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