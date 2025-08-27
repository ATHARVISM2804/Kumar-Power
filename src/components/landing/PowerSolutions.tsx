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
import { motion, AnimatePresence } from "framer-motion";

const PSCard = ({ title, desc, specs, img }: { title: string; desc: string; specs: string[]; img: string }) => (
  <motion.article 
    className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    whileHover={{ 
      scale: 1.02, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
    }}
  >
    <div className="w-full h-48 p-2 flex items-center justify-center overflow-hidden">
      <motion.img
        src={img}
        alt={title}
        className="object-contain w-full translate-y-1 h-full"
        style={{ background: "white" }}
        whileHover={{ scale: 1.07, rotate: 0.5 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <motion.h3 
        className="text-xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-muted-foreground text-sm mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {desc}
      </motion.p>
      <div className="space-y-2 mb-6">
        {specs.map((spec, index) => (
          <motion.div 
            key={spec} 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <motion.span 
              className="inline-flex items-center justify-center rounded-full bg-blue-100 h-5 w-5"
              whileHover={{ scale: 1.2, backgroundColor: "#bfdbfe" }}
            >
              <motion.span 
                className="h-2 w-2 rounded-full bg-blue-600" 
                whileHover={{ scale: 1.3 }}
              />
            </motion.span>
            <span className="text-sm">{spec}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-auto">
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md overflow-hidden">
            <div className="flex items-center gap-2">
              Explore More 
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 0.6 
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </div>
          </Button>
        </motion.div>
      </div>
    </div>
  </motion.article>
);

const FilterSection = ({ title, options }: { title: string; options: string[] }) => (
  <motion.div 
    className="mb-6"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h4 className="text-gray-900 font-medium mb-3">{title}</h4>
    <div className="space-y-2">
      {options.map((option, index) => (
        <motion.label 
          key={option} 
          className="flex items-center gap-2 cursor-pointer"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.2 }}
          whileHover={{ x: 2, color: "#3b82f6" }}
        >
          <motion.input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
          <span className="text-gray-600 text-sm">{option}</span>
        </motion.label>
      ))}
    </div>
  </motion.div>
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
      <motion.div 
        className="w-full flex justify-center items-center py-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={allProductsImg}
          alt="All Products"
          className="w-full h-[180px] sm:h-[250px] md:h-[250px] object-cover rounded-none"
          style={{ maxWidth: "100vw" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>
      
      {/* Breadcrumb Navigation */}
      <motion.div 
        className="bg-gray-50 border-b"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div className="container mx-auto px-4 md:px-0 py-3">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="mx-2 text-gray-400">›</span>
            <Link to="/products" className="text-gray-500 hover:text-blue-600">Products</Link>
          </div>
        </div>
      </motion.div>
      
      {/* Section Title */}
      <motion.div 
        className="container mx-auto px-4 md:px-0 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.h1 
          className="text-3xl font-bold text-gray-900 mb-1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Power Solutions
        </motion.h1>
        <motion.div 
          className="w-16 h-1 bg-blue-600 rounded mb-6"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        ></motion.div>
      </motion.div>
      
      {/* Category Navigation */}
      <div className="bg-gray-50 border-b mb-6">
        <div className="container mx-auto px-4 md:px-0 overflow-x-auto">
          <div className="flex space-x-6 py-3 min-w-max">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap py-2 px-1 border-b-2 transition-colors ${
                  activeCategory === category 
                    ? "border-blue-600 text-blue-600 font-medium" 
                    : "border-transparent text-gray-600 hover:text-blue-600"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Rest of the content */}
      <div className="container mx-auto grid md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-0">
        {/* Left: Content */}
        <motion.div 
          className="md:col-span-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {categoryProducts[activeCategory as keyof typeof categoryProducts].map((product, idx) => (
                <PSCard
                  key={`${activeCategory}-${idx}`}
                  title={product.title}
                  desc={product.desc}
                  specs={product.specs}
                  img={product.img}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Empty state if no products for a category */}
          {categoryProducts[activeCategory as keyof typeof categoryProducts].length === 0 && (
            <motion.div 
              className="flex flex-col items-center justify-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 text-gray-300 mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </motion.svg>
              <motion.h3 
                className="text-xl font-medium text-gray-900 mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                No products available
              </motion.h3>
              <motion.p 
                className="text-gray-500"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                We're currently updating our {activeCategory} catalog.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
        
        {/* Right: Filter */}
        <motion.div 
          className="bg-white mt-10 p-6 rounded-lg shadow-sm border h-fit"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.h3 
            className="font-semibold text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Filter {activeCategory}
          </motion.h3>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {Object.entries(activeFilters).map(([filterName, options], index) => (
                <FilterSection
                  key={`${activeCategory}-${filterName}`}
                  title={filterName.charAt(0).toUpperCase() + filterName.slice(1).replace(/([A-Z])/g, ' $1')}
                  options={options as string[]}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Apply Filters
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Trusted By Section */}
      <motion.div 
        className="container mx-auto mt-10 md:mt-20 mb-10 px-4 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Trusted Across India's Largest Enterprises
          </h3>
        </motion.div>
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
      </motion.div>
      
      {/* Power in Action Section */}
      <motion.div 
        className="container mx-auto mt-16 mb-12 px-4 md:px-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          Power in Action
        </motion.h2>
        <motion.div 
          className="mx-auto w-24 h-1 bg-black mt-2"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default PowerSolutions;