import { ArrowRight } from "lucide-react";
import diesel from "@/assets/ps1.png";
import gas from "@/assets/ps2.png";
import portable from "@/assets/ps3.png";
import ups from "@/assets/ps4.png";
import { Button } from "@/components/ui/button";
import allProductsImg from "@/assets/ALL PRODUCTS.png";
import trust from "@/assets/Seasons (1).png";
import trust1 from "@/assets/SIS (1).png";
import trust2 from "@/assets/Vistara 1 (1).png";
import trust3 from "@/assets/GMR (1).png";
import trust4 from "@/assets/Honeywell 1 (1).png";
import trust5 from "@/assets/Kashyapi (2).png";
import trust6 from "@/assets/Caritas (1).png";
import trust7 from "@/assets/CEC (1).png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const PSCard = ({ title, desc, specs, img }: { title: string; desc: string; specs: string[]; img: string }) => (
  <article className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
    <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
      <img
        src={img}
        alt={title}
        className="object-contain w-full h-full"
        style={{ background: "white" }}
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{desc}</p>
      <div className="space-y-2 mb-6">
        {specs.map((spec) => (
          <div key={spec} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-sm">{spec}</span>
          </div>
        ))}
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
        Explore More <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </article>
);

const FilterSection = ({ title, options }: { title: string; options: string[] }) => (
  <div className="mb-6">
    <h4 className="text-gray-900 font-medium mb-3">{title}</h4>
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-600 text-sm">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

const PowerSolutions = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current || !logoContainerRef.current) return;
    
    // Ensure the container has proper height
    const firstLogo = logoRef.current.children[0] as HTMLElement;
    if (firstLogo) {
      logoContainerRef.current.style.height = `${firstLogo.offsetHeight}px`;
    }

    // Clone logos for seamless scrolling
    const originalLogos = logoRef.current.children;
    const totalWidth = Array.from(originalLogos).reduce(
      (acc, logo) => acc + (logo as HTMLElement).offsetWidth + 32, // add gap
      0
    );
    
    // Set initial position for the logos
    logoRef.current.style.width = `${totalWidth * 2}px`;

    // Clone logos and append them to create the illusion of infinite scrolling
    Array.from(originalLogos).forEach((logo) => {
      const clone = logo.cloneNode(true);
      logoRef.current?.appendChild(clone);
    });

    // GSAP animation - increased speed
    gsap.fromTo(
      logoRef.current,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 15, // Faster animation (was 30)
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          // Reset position to create seamless loop
          gsap.set(logoRef.current, { x: 0 });
        }
      }
    );

    return () => {
      gsap.killTweensOf(logoRef.current);
    };
  }, []);

  return (
    <section id="solutions" className="py-0">
      {/* Hero Image Section - responsive height */}
      <div className="w-full flex justify-center items-center py-0">
        <img
          src={allProductsImg}
          alt="All Products"
          className="w-full h-[180px] sm:h-[250px] md:h-[250px] object-cover rounded-none"
          style={{ maxWidth: "100vw" }}
        />
      </div>
      <div className="container mx-auto grid md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0">
        {/* Left: Content */}
        <div className="md:col-span-3">
          <div className="mb-4 md:mb-8 mt-4 md:mt-0">
            <h2 className="text-2xl md:text-4xl font-bold flex items-end flex-wrap gap-2 mt-10">
              <span className="relative">
                Power
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-600 rounded" />
              </span>
              <span>Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <PSCard
              title="Kirloskar CPCB4+ Diesel Genset"
              desc="Advanced diesel generators with CPCB4+ compliance, offering superior fuel efficiency and eco-friendly operations."
              specs={["2 kVA - 1000 kVA Range", "CPCB4+ Compliant", "3 Phase Output"]}
              img={diesel}
            />
            <PSCard
              title="Gas Generators"
              desc="Eco-friendly natural gas and LPG generators with lower emissions and operational costs for sustainable power generation."
              specs={["15 kVA - 500 kVA", "Low Emissions", "Quiet Operation"]}
              img={gas}
            />
            <PSCard
              title="Portable Generators"
              desc="Compact and mobile power solutions for construction sites, events, and emergency backup with easy transport features."
              specs={["2 kVA - 15 kVA", "Lightweight Design"]}
              img={portable}
            />
            <PSCard
              title="Uninterruptible Power Supply (UPS)"
              desc="Protection against power outages with instant backup power and surge protection for critical equipment and data centers."
              specs={["1 kVA - 500 kVA Range", "Online Double Conversion", "Battery Backup"]}
              img={ups}
            />
          </div>
        </div>
        {/* Right: Filter */}
        <div className="bg-white mt-10 p-6 rounded-lg shadow-sm border h-fit">
          <h3 className="font-semibold text-lg mb-6">Filter Products</h3>
          
          <FilterSection
            title="Power Range"
            options={["0-50 kVA", "51-200 kVA", "201-500 kVA", "501+ kVA"]}
          />
          
          <FilterSection
            title="Application"
            options={["Industrial", "Commercial", "Residential", "Construction","Events"]}
          />
          
          <FilterSection
            title="Fuel Type"
            options={["Diesel", "Natural Gas", "Bi-Fuel", "LPG","Petrol"]}
          />
          <FilterSection
            title="Certification"
            options={["CPCB4+", "ISO 9001", "Bi-Fuel", "CE Certified","UL Listed"]}
          />

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Apply Filters
          </Button>
        </div>
      </div>
      {/* Trusted By Section - fix container height for mobile */}
      <div className="container mx-auto mt-10 md:mt-20 mb-10 px-4 md:px-0">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold">
            Trusted Across India's Largest Enterprises
          </h3>
        </div>
        <div ref={logoContainerRef} className="overflow-hidden relative h-20">
          <div 
            ref={logoRef} 
            className="flex items-center gap-24 absolute top-0 left-0"
          >
            <img src={trust} alt="Honeywell" className="h-20 w-auto" />
            <img src={trust1} alt="Caritas" className="h-20 w-auto" />
            <img src={trust2} alt="India" className="h-20 w-auto" />
            <img src={trust3} alt="Kashyapi" className="h-20 w-auto" />
            <img src={trust4} alt="Continental" className="h-20 w-auto" />
            <img src={trust5} alt="STS" className="h-20 w-auto" />
            <img src={trust6} alt="GMP" className="h-20 w-auto" />
            <img src={trust7} alt="GMP" className="h-20 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerSolutions;