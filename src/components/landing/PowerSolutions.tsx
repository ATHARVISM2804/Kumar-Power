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
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const PSCard = ({ title, desc, specs, img }: { title: string; desc: string; specs: string[]; img: string }) => (
  <article className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
    <div className="w-full h-48  p-2 flex items-center justify-center overflow-hidden">
      <img
        src={img}
        alt={title}
        className="object-contain w-full translate-y-1 h-full"
        style={{ background: "white" }}
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{desc}</p>
      <div className="space-y-2 mb-6">
        {specs.map((spec) => (
          <div key={spec} className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-5 w-5">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span className="text-sm">{spec}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
          <div className="flex items-center gap-2">
            Explore More <ArrowRight className="h-4 w-4" />
          </div>
        </Button>
      </div>
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
  const [activeCategory, setActiveCategory] = useState<string>("Generators");

  // Categories for the navigation tabs
  const categories = [
    "Generators",
    
    "Electrical Panels",
    "Servo Stabilizers",
    "Transformers"
  ];
  
  // Category-specific product data
  const categoryProducts = {
    Generators: [
      {
        title: "Kirloskar CPCB4+ Diesel Genset",
        desc: "Advanced diesel generators with CPCB4+ compliance, offering superior fuel efficiency and eco-friendly operations.",
        specs: ["2 kVA - 1000 kVA Range", "CPCB4+ Compliant", "3 Phase Output"],
        img: diesel
      },
      {
        title: "Gas Generators",
        desc: "Eco-friendly natural gas and LPG generators with lower emissions and operational costs for sustainable power generation.",
        specs: ["15 kVA - 500 kVA", "Low Emissions", "Quiet Operation"],
        img: gas
      },
      {
        title: "Portable Generators",
        desc: "Compact and mobile power solutions for construction sites, events, and emergency backup with easy transport features.",
        specs: ["2 kVA - 15 kVA", "Lightweight Design"],
        img: portable
      },
      {
        title: "Uninterruptible Power Supply (UPS)",
        desc: "Protection against power outages with instant backup power and surge protection for critical equipment and data centers.",
        specs: ["1 kVA - 500 kVA Range", "Online Double Conversion", "Battery Backup"],
        img: ups
      }
    ],
    Inverters: [
      {
        title: "Home Inverters",
        desc: "Reliable power backup solutions for residential use with quick switchover and battery management.",
        specs: ["600VA - 3500VA", "Pure Sine Wave", "LCD Display"],
        img: ups
      },
      {
        title: "Solar Inverters",
        desc: "Harness solar energy with efficient conversion and battery charging capabilities for sustainable power.",
        specs: ["1kW - 100kW", "MPPT Technology", "Grid-tie Option"],
        img: portable
      }
    ],
    "Variable Frequency Drives (VFDs)": [
      {
        title: "AC Drives",
        desc: "Precise motor control solutions for industrial applications, offering energy savings and process optimization.",
        specs: ["0.25kW - 800kW", "Vector Control", "IP54 Protection"],
        img: gas
      },
      {
        title: "HVAC Drives",
        desc: "Specialized VFDs for HVAC applications with building automation integration capabilities.",
        specs: ["Fan & Pump Control", "BMS Compatible", "Energy Monitoring"],
        img: diesel
      }
    ],
    "Electrical Panels": [
      {
        title: "Power Control Centers",
        desc: "Centralized electrical distribution systems for industrial facilities with comprehensive protection features.",
        specs: ["Up to 6300A", "Short Circuit Protection", "Type 2 Coordination"],
        img: diesel
      },
      {
        title: "AMF Panels",
        desc: "Automatic Mains Failure panels for seamless power transfer between utility and generator supply.",
        specs: ["Auto/Manual Operation", "Engine Protection", "Programmable Logic"],
        img: gas
      }
    ],
    "Servo Stabilizers": [
      {
        title: "Industrial Voltage Stabilizers",
        desc: "High-precision voltage regulation systems for sensitive equipment and production lines.",
        specs: ["5kVA - 5000kVA", "±1% Output Accuracy", "Digital Control"],
        img: portable
      },
      {
        title: "Oil Cooled Stabilizers",
        desc: "Heavy-duty stabilizers for harsh environments with superior thermal management.",
        specs: ["Three Phase", "IGBT Technology", "Overload Protection"],
        img: ups
      }
    ],
    Transformers: [
      {
        title: "Distribution Transformers",
        desc: "Reliable power distribution transformers for commercial and industrial applications.",
        specs: ["10kVA - 5000kVA", "Oil/Dry Type", "ONAN/ONAF Cooling"],
        img: diesel
      },
      {
        title: "Isolation Transformers",
        desc: "Protection against electrical noise and interference for sensitive electronic equipment.",
        specs: ["Galvanic Isolation", "Copper Windings", "K-Factor Rated"],
        img: gas
      }
    ]
  };

  // Get the filter options based on active category
  const getFilterOptionsForCategory = (category: string) => {
    switch(category) {
      case 'Generators':
        return {
          powerRange: ["0-50 kVA", "51-200 kVA", "201-500 kVA", "501+ kVA"],
          application: ["Industrial", "Commercial", "Residential", "Construction", "Events"],
          fuelType: ["Diesel", "Natural Gas", "Bi-Fuel", "LPG", "Petrol"],
          certification: ["CPCB4+", "ISO 9001", "CE Certified", "UL Listed"]
        };
      case 'Inverters':
        return {
          powerRange: ["Below 1kVA", "1-3kVA", "3-10kVA", "Above 10kVA"],
          application: ["Home", "Commercial", "Solar", "Industrial"],
          type: ["Pure Sine Wave", "Modified Sine Wave", "Solar Hybrid"],
          features: ["LCD Display", "Mobile App", "Battery Management", "IoT Enabled"]
        };
      case 'Variable Frequency Drives (VFDs)':

        return {
          powerRange: ["Below 5kW", "5-50kW", "50-200kW", "Above 200kW"],
          application: ["HVAC", "Manufacturing", "Conveyors", "Pumps"],
          controlType: ["V/F Control", "Sensorless Vector", "Closed Loop"],
          protection: ["IP20", "IP54", "IP66", "UL Type 1"]
        };
      case 'Electrical Panels':
        return {
          currentRating: ["Up to 100A", "100-630A", "630-2000A", "Above 2000A"],
          application: ["Power Distribution", "Motor Control", "Synchronization"],
          features: ["Automatic Changeover", "APFC", "Energy Metering"],
          certification: ["IEC 61439", "UL Listed", "CE Certified"]
        };
      case 'Servo Stabilizers':
        return {
          powerRange: ["Single Phase", "Three Phase", "High Voltage"],
          application: ["Industrial", "Medical", "IT Equipment", "HVAC"],
          features: ["Digital Display", "Auto Bypass", "Remote Monitoring"],
          technology: ["IGBT Based", "Relay Based", "Microprocessor Control"]
        };
      case 'Transformers':
        return {
          powerRange: ["10-100kVA", "100-500kVA", "500-2000kVA", "Above 2000kVA"],
          type: ["Oil Filled", "Dry Type", "Cast Resin", "Isolation"],
          cooling: ["ONAN", "ONAF", "OFAF", "OFWF"],
          application: ["Distribution", "Power", "Industrial"]
        };
      default:
        return {
          powerRange: ["0-50 kVA", "51-200 kVA", "201-500 kVA", "501+ kVA"],
          application: ["Industrial", "Commercial", "Residential", "Construction", "Events"],
          fuelType: ["Diesel", "Natural Gas", "Bi-Fuel", "LPG", "Petrol"],
          certification: ["CPCB4+", "ISO 9001", "CE Certified", "UL Listed"]
        };
    }
  };

  const activeFilters = getFilterOptionsForCategory(activeCategory);

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

    // GSAP animation - slower speed
    gsap.fromTo(
      logoRef.current,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 20, // Slower animation (was 15)
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
      {/* Hero Image Section moved to the top */}
      <div className="w-full flex justify-center items-center py-0">
        <img
          src={allProductsImg}
          alt="All Products"
          className="w-full h-[180px] sm:h-[250px] md:h-[250px] object-cover rounded-none"
          style={{ maxWidth: "100vw" }}
        />
      </div>
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 md:px-0 py-3">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="mx-2 text-gray-400">›</span>
            <Link to="/products" className="text-gray-500 hover:text-blue-600">Products</Link>
          </div>
        </div>
      </div>
      
      {/* Section Title */}
      <div className="container mx-auto px-4 md:px-0 py-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Power Solutions</h1>
        <div className="w-16 h-1 bg-blue-600 rounded mb-6"></div>
      </div>
      
      {/* Category Navigation */}
      <div className="bg-gray-50 border-b mb-6">
        <div className="container mx-auto px-4 md:px-0 overflow-x-auto">
          <div className="flex space-x-6 py-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap py-2 px-1 border-b-2 transition-colors ${
                  activeCategory === category 
                    ? "border-blue-600 text-blue-600 font-medium" 
                    : "border-transparent text-gray-600 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Rest of the content */}
      <div className="container mx-auto grid md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0">
        {/* Left: Content */}
        <div className="md:col-span-3">
          <div className="grid md:grid-cols-2 gap-6">
            {categoryProducts[activeCategory as keyof typeof categoryProducts].map((product, idx) => (
              <PSCard
                key={`${activeCategory}-${idx}`}
                title={product.title}
                desc={product.desc}
                specs={product.specs}
                img={product.img}
              />
            ))}
          </div>
          
          {/* Empty state if no products for a category */}
          {categoryProducts[activeCategory as keyof typeof categoryProducts].length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No products available</h3>
              <p className="text-gray-500">We're currently updating our {activeCategory} catalog.</p>
            </div>
          )}
        </div>
        
        {/* Right: Filter */}
        <div className="bg-white mt-10 p-6 rounded-lg shadow-sm border h-fit">
          <h3 className="font-semibold text-lg mb-6">Filter {activeCategory}</h3>
          
          {Object.entries(activeFilters).map(([filterName, options]) => (
            <FilterSection
              key={`${activeCategory}-${filterName}`}
              title={filterName.charAt(0).toUpperCase() + filterName.slice(1).replace(/([A-Z])/g, ' $1')}
              options={options as string[]}
            />
          ))}

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
      
      {/* Power in Action Section */}
      <div className="container mx-auto mt-16 mb-12 px-4 md:px-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Power in Action
        </h2>
        <div className="mx-auto w-24 h-1 bg-black mt-2"></div>
      </div>
    </section>
  );
};

export default PowerSolutions;