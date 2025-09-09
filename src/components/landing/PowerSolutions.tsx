import { ArrowRight, X } from "lucide-react";
import diesel from "@/assets/ps1.png";
import gas from "@/assets/ps2.png";
import portable from "@/assets/ps3.png";
import ups from "@/assets/ps4.png";
import { Button } from "@/components/ui/button";
import allProductsImg from "@/assets/ALL PRODUCTS.png";
import trust from "@/assets/Seasons (1).png";
import trust1 from "@/assets/SIS (1).png";
import trust2 from "@/assets/Vistara 1 (1).png";
import trust3 from "@/assets/Clients page/GMR Infra.jpg";
import trust4 from "@/assets/Honeywell 1 (1).png";
import trust5 from "@/assets/Kashyapi (2).png";
import trust6 from "@/assets/Caritas (1).png";
import trust7 from "@/assets/CEC (1).png";
import ace from "@/assets/Clients page/AceConstruction.jpg";
import claroin from "@/assets/Clients page/Clarion.png";
import Comed from "@/assets/Clients page/Comed.png";
import Dps from "@/assets/Clients page/DPS.jpg";
import GEPL from "@/assets/Clients page/GEPL.jpg";
import addidas from "@/assets/Clients page/Adidas.jpg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

// Modal for product info
const ProductModal = ({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: { title: string; desc: string; specs: string[]; img: string } | null;
}) => {
  if (!open || !product) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-lg"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ type: "spring", damping: 22, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-contain rounded mb-4 bg-gray-100"
            />
            <p className="text-base text-gray-800 mb-2">{product.desc}</p>
            <div className="mt-4">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                {product.specs.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
                <li>Certified for reliability and safety</li>
                <li>Suitable for industrial, commercial, and backup use</li>
                <li>Contact us for detailed specifications and pricing</li>
                <li>Warranty and after-sales support available</li>
              </ul>
            </div>
            
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const PSCard = ({ title, desc, specs, img, onExplore }: { title: string; desc: string; specs: string[]; img: string; onExplore: () => void }) => (
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
    {/* Increased image container height and image height */}
    <div className="w-full h-64 p-2 flex items-center justify-center overflow-hidden">
      <motion.img
        src={img}
        alt={title}
        className="object-contain w-full h-60 translate-y-1"
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
              className="inline-flex items-center justify-center rounded-full bg-[#D6E8FA] h-5 w-5"
              whileHover={{ scale: 1.2, backgroundColor: "#bfdbfe" }}
            >
              <motion.span 
                className="h-2 w-2 rounded-full bg-[#2D6FBA]" 
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
          <Button className="bg-[#2D6FBA] hover:bg-[#22548e] text-white rounded-md overflow-hidden" onClick={onExplore}>
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
          whileHover={{ x: 2, color: "#2D6FBA" }}
        >
          <motion.input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-[#2D6FBA] focus:ring-[#2D6FBA]"
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
  const [activeCategory, setActiveCategory] = useState<string>("Optiprime Generators");
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<{ title: string; desc: string; specs: string[]; img: string } | null>(null);

  // Categories for the navigation tabs
  const categories = [
    "Optiprime Generators",
    "Gas Generators", 
    "Portable Generators",
    "CPCB4+ Diesel Generator",
    "Electrical Panels",
    "Servo Stabilizers",
    "Transformers",
  ];
  
  // Category-specific product data
  const categoryProducts = {
    "Optiprime Generators": [
      {
        title: "Kirloskar Optiprime Generator",
        desc: "Advanced diesel generators with CPCB4+ compliance, offering superior fuel efficiency and eco-friendly operations.",
        specs: [
          "125 kva - 6600 kva",
          "CPCB4+ Compliant",
          "3 Phase Output",
          "Fuel: Diesel",
          "Application: Industrial, Commercial",
          "Certification: ISO 9001, CE Certified, UL Listed"
        ],
        img: diesel
      }
    ],
    "Gas Generators": [
      {
        title: "Gas Generators",
        desc: "Eco-friendly natural gas and LPG generators with lower emissions and operational costs for sustainable power generation.",
        specs: [
          "15 kVA - 500 kVA",
          "Low Emissions",
          "Quiet Operation",
          "Fuel: Natural Gas, LPG",
          "Application: Industrial, Commercial, Residential",
          "Certification: CPCB4+, ISO 9001"
        ],
        img: gas
      }
    ],
    "Portable Generators": [
      {
        title: "Portable Generators",
        desc: "Compact and mobile power solutions for construction sites, events, and emergency backup with easy transport features.",
        specs: [
          "2 kVA - 15 kVA",
          "Lightweight Design",
          "Fuel: Petrol, Diesel",
          "Application: Construction, Events, Residential",
          "Certification: CE Certified"
        ],
        img: portable
      }
    ],
    "CPCB4+ Diesel Generator": [
      {
        title: "CPCB4+ Diesel Generator",
        desc: "Environment-compliant diesel generators meeting CPCB4+ emission norms with advanced pollution control technology.",
        specs: [
          "125 kva - 6600 kva",
          "CPCB4+ Emission Compliance",
          "Advanced Pollution Control",
          "Fuel: Diesel",
          "Application: Industrial, Commercial",
          "Certification: CPCB4+, ISO 9001"
        ],
        img: ups
      }
    ],
    Inverters: [
      {
        title: "Home Inverters",
        desc: "Reliable power backup solutions for residential use with quick switchover and battery management.",
        specs: [
          "600VA - 3500VA",
          "Pure Sine Wave",
          "LCD Display",
          "Application: Home",
          "Type: Pure Sine Wave",
          "Features: Battery Management, LCD Display"
        ],
        img: ups
      },
      {
        title: "Solar Inverters",
        desc: "Harness solar energy with efficient conversion and battery charging capabilities for sustainable power.",
        specs: [
          "1kW - 100kW",
          "MPPT Technology",
          "Grid-tie Option",
          "Application: Solar, Commercial",
          "Type: Solar Hybrid",
          "Features: MPPT, Mobile App"
        ],
        img: portable
      }
    ],
    "Variable Frequency Drives (VFDs)": [
      {
        title: "AC Drives",
        desc: "Precise motor control solutions for industrial applications, offering energy savings and process optimization.",
        specs: [
          "0.25kW - 800kW",
          "Vector Control",
          "IP54 Protection",
          "Application: Manufacturing, Conveyors",
          "Control Type: Vector Control",
          "Protection: IP54"
        ],
        img: gas
      },
      {
        title: "HVAC Drives",
        desc: "Specialized VFDs for HVAC applications with building automation integration capabilities.",
        specs: [
          "Fan & Pump Control",
          "BMS Compatible",
          "Energy Monitoring",
          "Application: HVAC, Pumps",
          "Control Type: Closed Loop",
          "Protection: IP20"
        ],
        img: diesel
      }
    ],
    "Electrical Panels": [
      {
        title: "Power Control Centers",
        desc: "Centralized electrical distribution systems for industrial facilities with comprehensive protection features.",
        specs: [
          "Up to 6300A",
          "Short Circuit Protection",
          "Type 2 Coordination",
          "Current Rating: Above 2000A",
          "Application: Power Distribution, Motor Control",
          "Certification: IEC 61439, UL Listed"
        ],
        img: diesel
      },
      {
        title: "AMF Panels",
        desc: "Automatic Mains Failure panels for seamless power transfer between utility and generator supply.",
        specs: [
          "Auto/Manual Operation",
          "Engine Protection",
          "Programmable Logic",
          "Current Rating: 100-630A",
          "Application: Synchronization",
          "Certification: CE Certified"
        ],
        img: gas
      }
    ],
    "Servo Stabilizers": [
      {
        title: "Industrial Voltage Stabilizers",
        desc: "High-precision voltage regulation systems for sensitive equipment and production lines.",
        specs: [
          "5kVA - 5000kVA",
          "±1% Output Accuracy",
          "Digital Control",
          "Power Range: High Voltage",
          "Application: Industrial, IT Equipment",
          "Features: Digital Display, Remote Monitoring"
        ],
        img: portable
      },
      {
        title: "Oil Cooled Stabilizers",
        desc: "Heavy-duty stabilizers for harsh environments with superior thermal management.",
        specs: [
          "Three Phase",
          "IGBT Technology",
          "Overload Protection",
          "Power Range: Three Phase",
          "Application: Medical, HVAC",
          "Technology: IGBT Based"
        ],
        img: ups
      }
    ],
    Transformers: [
      {
        title: "Distribution Transformers",
        desc: "Reliable power distribution transformers for commercial and industrial applications.",
        specs: [
          "10kVA - 5000kVA",
          "Oil/Dry Type",
          "ONAN/ONAF Cooling",
          "Type: Oil Filled",
          "Cooling: ONAN",
          "Application: Distribution, Power"
        ],
        img: diesel
      },
      {
        title: "Isolation Transformers",
        desc: "Protection against electrical noise and interference for sensitive electronic equipment.",
        specs: [
          "Galvanic Isolation",
          "Copper Windings",
          "K-Factor Rated",
          "Type: Isolation",
          "Cooling: OFWF",
          "Application: Industrial"
        ],
        img: gas
      }
    ]
  };

  // Get the filter options based on active category
  const getFilterOptionsForCategory = (category: string) => {
    switch(category) {
      case 'Optiprime Generators':
      case 'Gas Generators':
      case 'Portable Generators':
      case 'CPCB4+ Diesel Generator':
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

  // Helper: check if product matches selected filters
  const productMatchesFilters = (product: any, filters: { [key: string]: string[] }) => {
    // For each filter group, at least one selected value must match a spec
    return Object.entries(filters).every(([filterName, selectedValues]) => {
      if (!selectedValues.length) return true;
      return selectedValues.some(val =>
        product.specs.some(spec => spec.toLowerCase().includes(val.toLowerCase()))
      );
    });
  };

  // Handle filter checkbox change
  const handleFilterChange = (filterName: string, option: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const prevOptions = prev[filterName] || [];
      let newOptions;
      if (checked) {
        newOptions = [...prevOptions, option];
      } else {
        newOptions = prevOptions.filter(o => o !== option);
      }
      return { ...prev, [filterName]: newOptions };
    });
  };

  // Apply filters button handler
  const applyFilters = () => {
    const products = categoryProducts[activeCategory as keyof typeof categoryProducts];
    if (!products) return setFilteredProducts([]);
    if (Object.values(selectedFilters).every(arr => arr.length === 0)) {
      setFilteredProducts([]);
      return;
    }
    const filtered = products.filter(product => productMatchesFilters(product, selectedFilters));
    setFilteredProducts(filtered);
  };

  // Reset filters button handler
  const resetFilters = () => {
    setSelectedFilters({});
    setFilteredProducts([]);
  };

  // Reset filters and filtered products when category changes
  useEffect(() => {
    setSelectedFilters({});
    setFilteredProducts([]);
  }, [activeCategory]);

  // Scrollable logo marquee effect
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

  // Handler for Explore More button
  const handleExplore = (product: { title: string; desc: string; specs: string[]; img: string }) => {
    setModalProduct(product);
    setModalOpen(true);
  };

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
            <Link to="/" className="text-gray-500 hover:text-[#2D6FBA]">Home</Link>
            <span className="mx-2 text-gray-400">›</span>
            <Link to="/products" className="text-gray-500 hover:text-[#2D6FBA]">Products</Link>
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
          className="w-16 h-1 rounded mb-6"
          style={{ background: "#2D6FBA" }}
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
                    ? "border-[#2D6FBA] text-[#2D6FBA] font-medium" 
                    : "border-transparent text-gray-600 hover:text-[#2D6FBA]"
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
              {(filteredProducts.length > 0
                ? filteredProducts
                : categoryProducts[activeCategory as keyof typeof categoryProducts]
              ).map((product, idx) => (
                <PSCard
                  key={`${activeCategory}-${idx}`}
                  title={product.title}
                  desc={product.desc}
                  specs={product.specs}
                  img={product.img}
                  onExplore={() => handleExplore(product)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Empty state if no products for a category or filter */}
          {(filteredProducts.length === 0 &&
            categoryProducts[activeCategory as keyof typeof categoryProducts].length === 0) && (
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
          {(filteredProducts.length === 0 &&
            Object.values(selectedFilters).flat().length > 0) && (
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
                No products match the selected filters
              </motion.h3>
              <motion.p 
                className="text-gray-500"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                Try adjusting your filter criteria.
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
              {Object.entries(getFilterOptionsForCategory(activeCategory)).map(([filterName, options], index) => (
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={`${activeCategory}-${filterName}`}
                >
                  <h4 className="text-gray-900 font-medium mb-3">
                    {filterName.charAt(0).toUpperCase() + filterName.slice(1).replace(/([A-Z])/g, ' $1')}
                  </h4>
                  <div className="space-y-2">
                    {options.map((option, idx) => (
                      <motion.label 
                        key={option}
                        className="flex items-center gap-2 cursor-pointer"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx, duration: 0.2 }}
                        whileHover={{ x: 2, color: "#2D6FBA" }}
                      >
                        <motion.input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#2D6FBA] focus:ring-[#2D6FBA]"
                          checked={selectedFilters[filterName]?.includes(option) || false}
                          onChange={e => handleFilterChange(filterName, option, e.target.checked)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                        />
                        <span className="text-gray-600 text-sm">{option}</span>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.3 }}
            className="flex gap-2"
          >
            <Button className="w-full bg-[#2D6FBA] hover:bg-[#22548e] text-white" onClick={applyFilters}>
              Apply Filters
            </Button>
            <Button className="w-full bg-gray-200 hover:bg-gray-300 text-black" onClick={resetFilters}>
              Reset Filters
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
          <h3 className="text-4xl md:text-5xl font-semibold">
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
            <img src={ace} alt="GMP" className="h-20 w-auto" />
            <img src={claroin} alt="GMP" className="h-20 w-auto" />
            <img src={addidas} alt="GMP" className="h-20 w-auto" />
            <img src={GEPL} alt="GMP" className="h-20 w-auto" />
            <img src={Dps} alt="GMP" className="h-20 w-auto" />
            <img src={Comed} alt="GMP" className="h-20 w-auto" />
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

      {/* Product info modal */}
      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={modalProduct}
      />
    </section>
  );
};

export default PowerSolutions;