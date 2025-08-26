import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { ChevronRight, Filter, SlidersHorizontal, X, CheckCircle2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("diesel");
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [powerRange, setPowerRange] = useState<string>("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showKirloskarDropdown, setShowKirloskarDropdown] = useState(true);

  // State for product specs modal
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] = useState<any>(null);

  // Define product categories
  const categories = [
    { id: "kirloskar", name: "Kirloskar Generators", hasDropdown: true }, 
    { id: "electrical", name: "Electrical Panels" },
    { id: "servo", name: "Servo Stabilizers" },
    { id: "transformers", name: "Transformers" },
  ];

  // Subcategories for Kirloskar Generators
  const kirloskarSubcategories = [
    { id: "diesel", name: "Diesel Generators" },
    { id: "gas", name: "Gas Generators" },
    { id: "portable", name: "Portable Generators" },
  ];
  
  // Define generator products based on the images
  const dieselGenerators = [
    {
      id: "7_5-20kva",
      name: "7.5 kVA - 20 kVA Diesel Generators",
      image: "/src/assets/Range1.png",
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 178,
      rating: 4.7,
      range: "7.5 - 20 kVA",
      category: "diesel"
    },
    {
      id: "25-62_5kva",
      name: "25 kVA - 62.5 kVA Diesel Generators",
      image: "/src/assets/Range2.png",
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 153,
      rating: 4.8,
      range: "25 - 62.5 kVA",
      category: "diesel"
    },
    {
      id: "62_5-160kva",
      name: "62.5 kVA - 160 kVA Diesel Generators",
      image: "/src/assets/Range3.png",
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 132,
      rating: 4.9,
      range: "62.5 - 160 kVA",
      category: "diesel"
    },
    {
      id: "200-250kva",
      name: "200 kVA - 250 kVA Diesel Generators",
      image: "/src/assets/Range4.png",
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 118,
      rating: 4.8,
      range: "200 - 250 kVA",
      category: "diesel"
    },
    {
      id: "320-750kva",
      name: "320 kVA - 750 kVA Diesel Generators",
      image: "/src/assets/Range5.png",
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 96,
      rating: 4.9,
      range: "320 - 750 kVA",
      category: "diesel"
    },
    {
      id: "750-1500kva",
      name: "750 kVA - 1500 kVA Diesel Generators",
      image: "/src/assets/Range6.png",
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 86,
      rating: 4.9,
      range: "750 - 1500 kVA",
      category: "diesel"
    },
  ];

  // Define gas generators
  const gasGenerators = [
    {
      id: "10-25kva-gas",
      name: "10 kVA - 25 kVA Gas Generators",
      image: "/src/assets/Range2.png",
      fuelType: "Natural Gas/CNG",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Single/Three Phase",
      ratingCount: 145,
      rating: 4.6,
      range: "10 - 25 kVA",
      category: "gas"
    },
    {
      id: "30-62kva-gas",
      name: "30 kVA - 62 kVA Gas Generators",
      image: "/src/assets/Range3.png",
      fuelType: "Natural Gas/CNG",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 124,
      rating: 4.7,
      range: "30 - 62 kVA",
      category: "gas"
    },
    {
      id: "75-125kva-gas",
      name: "75 kVA - 125 kVA Gas Generators",
      image: "/src/assets/Range4.png",
      fuelType: "Natural Gas/CNG",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 98,
      rating: 4.8,
      range: "75 - 125 kVA",
      category: "gas"
    }
  ];

  // Define portable generators
  const portableGenerators = [
    {
      id: "1-3kva-portable",
      name: "1 kVA - 3 kVA Portable Generators",
      image: "/src/assets/Range1.png",
      fuelType: "Gasoline",
      cpcbNorm: "CPCB-IV+",
      cooling: "Air",
      phase: "Single Phase",
      ratingCount: 210,
      rating: 4.5,
      range: "1 - 3 kVA",
      category: "portable"
    },
    {
      id: "3-5kva-portable",
      name: "3 kVA - 5 kVA Portable Generators",
      image: "/src/assets/Range1.png",
      fuelType: "Gasoline/Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Air",
      phase: "Single Phase",
      ratingCount: 185,
      rating: 4.6,
      range: "3 - 5 kVA",
      category: "portable"
    }
  ];

  // Define electrical panels
  const electricalPanels = [
    {
      id: "auto-transfer",
      name: "Automatic Transfer Switch Panels",
      image: "/src/assets/Range2.png",
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Fan/Natural",
      phase: "Three Phase",
      ratingCount: 112,
      rating: 4.7,
      range: "Various",
      category: "electrical"
    },
    {
      id: "distribution-panels",
      name: "Power Distribution Panels",
      image: "/src/assets/Range3.png",
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Fan/Natural",
      phase: "Three Phase",
      ratingCount: 98,
      rating: 4.6,
      range: "Various",
      category: "electrical"
    }
  ];

  // Define servo stabilizers
  const servoStabilizers = [
    {
      id: "single-phase-servo",
      name: "Single Phase Servo Stabilizers",
      image: "/src/assets/Range4.png",
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Air/Oil",
      phase: "Single Phase",
      ratingCount: 134,
      rating: 4.5,
      range: "5-100 kVA",
      category: "servo"
    },
    {
      id: "three-phase-servo",
      name: "Three Phase Servo Stabilizers",
      image: "/src/assets/Range5.png",
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Air/Oil",
      phase: "Three Phase",
      ratingCount: 122,
      rating: 4.7,
      range: "15-500 kVA",
      category: "servo"
    }
  ];

  // Define transformers
  const transformers = [
    {
      id: "distribution-transformer",
      name: "Distribution Transformers",
      image: "/src/assets/Range6.png",
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Oil/Dry",
      phase: "Three Phase",
      ratingCount: 88,
      rating: 4.8,
      range: "100-2500 kVA",
      category: "transformers"
    },
    {
      id: "power-transformer",
      name: "Power Transformers",
      image: "/src/assets/Range5.png",
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Oil",
      phase: "Three Phase",
      ratingCount: 76,
      rating: 4.9,
      range: "1-10 MVA",
      category: "transformers"
    }
  ];

  // Combine all products
  const allProducts = [
    ...dieselGenerators,
    ...gasGenerators,
    ...portableGenerators,
    ...electricalPanels,
    ...servoStabilizers,
    ...transformers
  ];

  // Filter products based on selected category
  const getDisplayProducts = () => {
    // Filter by power range if applicable
    const filterByPowerRange = (products) => {
      if (powerRange === 'all') return products;
      
      return products.filter(product => {
        if (powerRange === 'small') {
          return product.range.includes('5') || product.range.includes('10') || 
                 product.range.includes('15') || product.range.includes('20') || 
                 product.range.includes('25') || (parseInt(product.range) < 50);
        } else if (powerRange === 'medium') {
          return product.range.includes('50') || product.range.includes('60') || 
                 product.range.includes('75') || product.range.includes('100') || 
                 product.range.includes('125') || product.range.includes('160') || 
                 product.range.includes('200') || (parseInt(product.range) <= 250);
        } else if (powerRange === 'large') {
          return product.range.includes('250') || product.range.includes('300') || 
                 product.range.includes('320') || product.range.includes('500') || 
                 product.range.includes('750') || product.range.includes('1000') ||
                 product.range.includes('1500') || (parseInt(product.range) > 250);
        }
        return true;
      });
    };

    // Sort products based on sort option
    const sortProducts = (products) => {
      if (sortBy === 'rating') {
        return [...products].sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'popularity') {
        return [...products].sort((a, b) => b.ratingCount - a.ratingCount);
      }
      // Add other sorting options like price if needed
      return products;
    };

    // First filter by category
    let filteredProducts;
    switch (selectedCategory) {
      case 'diesel':
        filteredProducts = dieselGenerators;
        break;
      case 'gas':
        filteredProducts = gasGenerators;
        break;
      case 'portable':
        filteredProducts = portableGenerators;
        break;
      case 'electrical':
        filteredProducts = electricalPanels;
        break;
      case 'servo':
        filteredProducts = servoStabilizers;
        break;
      case 'transformers':
        filteredProducts = transformers;
        break;
      default:
        filteredProducts = dieselGenerators;
    }

    // Then apply power range filter
    filteredProducts = filterByPowerRange(filteredProducts);
    
    // Finally sort the products
    return sortProducts(filteredProducts);
  };

  // Get the display products based on filters
  const displayProducts = getDisplayProducts();

  // Get the current category display name
  const getCurrentCategoryDisplayName = () => {
    if (kirloskarSubcategories.some(sub => sub.id === selectedCategory)) {
      const subcat = kirloskarSubcategories.find(sub => sub.id === selectedCategory);
      return subcat ? subcat.name : "Products";
    } else {
      const cat = categories.find(cat => cat.id === selectedCategory);
      return cat ? cat.name : "Products";
    }
  };

  // SEO metadata
  const seoData = {
    title: "Power Equipment Products | Kumar Power",
    description: "Browse our full range of Kirloskar-certified diesel generators, electrical panels, transformers and more power solutions for all your industrial needs.",
    url: "https://kumarpower.com/products",
    imageUrl: "https://kumarpower.com/images/products-header.jpg",
  };

  // Handler for category selection
  const handleCategorySelection = (categoryId: string) => {
    setSelectedCategory(categoryId);
    
    // If it's a main category with subcategories, show the dropdown
    if (categoryId === 'kirloskar') {
      setShowKirloskarDropdown(true);
      setSelectedCategory('diesel'); // Default to diesel when kirloskar is selected
    } else {
      // For subcategories and other main categories, just set the selected category
      setShowKirloskarDropdown(categoryId === 'kirloskar');
    }
  };

  // Function to open the specs modal
  const openSpecsModal = (product) => {
    setSelectedProductForSpecs(product);
    setShowSpecsModal(true);
  };

  // Additional specifications data (would be part of product data in a real app)
  const getDetailedSpecs = (product) => {
    // This is sample data - in a real app, this would be structured data stored with each product
    const powerRangeMap = {
      diesel: {
        engineSpecs: {
          manufacturer: "Kirloskar Oil Engines Ltd.",
          model: `KDG ${product.range.split(' ')[0]}`,
          cylinders: product.range.includes("20") ? "4" : product.range.includes("62.5") ? "6" : "6",
          displacement: product.range.includes("20") ? "2.8L" : product.range.includes("62.5") ? "3.8L" : "6.7L",
          aspiration: product.range.includes("750") ? "Turbocharged with Aftercooler" : "Turbocharged",
          compressionRatio: "16.5:1",
          oilCapacity: product.range.includes("20") ? "8.5L" : product.range.includes("62.5") ? "13L" : "18L",
          coolantCapacity: product.range.includes("20") ? "12L" : product.range.includes("62.5") ? "18L" : "24L",
        },
        alternatorSpecs: {
          manufacturer: "Kirloskar Electric Company",
          model: `KEC ${product.range.split(' ')[0]}`,
          insulation: "Class H",
          bearings: "Single Bearing",
          excitationSystem: "Brushless",
          voltageRegulation: "±1%",
          waveformDistortion: "Less than 3%",
          telephoneInterference: "THF < 2%",
        },
        controlPanel: {
          controller: "DeepSea DSE7320",
          parameters: "Voltage, Current, Frequency, Engine RPM, Oil Pressure, Water Temperature",
          protection: "High Water Temperature, Low Oil Pressure, Over/Under Speed, Over/Under Voltage, Overload",
          indicators: "Mains Available, Generator Available, Mains On Load, Generator On Load",
          communications: "RS232, RS485 MODBUS RTU",
        }
      },
      gas: {
        engineSpecs: {
          manufacturer: "Kirloskar Gas Engines Ltd.",
          model: `KGE ${product.range.split(' ')[0]}`,
          cylinders: product.range.includes("25") ? "4" : "6",
          displacement: product.range.includes("25") ? "3.2L" : "6.5L",
          aspiration: "Naturally Aspirated",
          compressionRatio: "10.5:1",
          oilCapacity: product.range.includes("25") ? "9L" : "15L",
          coolantCapacity: product.range.includes("25") ? "12L" : "20L",
          gasType: "Natural Gas / CNG / LPG",
        },
        alternatorSpecs: {
          manufacturer: "Kirloskar Electric Company",
          model: `KEC-G ${product.range.split(' ')[0]}`,
          insulation: "Class H",
          bearings: "Single Bearing",
          excitationSystem: "Brushless",
          voltageRegulation: "±1%",
          waveformDistortion: "Less than 3%",
          telephoneInterference: "THF < 2%",
        },
        controlPanel: {
          controller: "DeepSea DSE8610",
          parameters: "Voltage, Current, Frequency, Engine RPM, Gas Pressure, Water Temperature",
          protection: "High Water Temperature, Low Gas Pressure, Over/Under Speed, Over/Under Voltage, Overload",
          indicators: "Mains Available, Generator Available, Mains On Load, Generator On Load",
          communications: "RS232, RS485 MODBUS RTU",
        }
      },
      portable: {
        engineSpecs: {
          manufacturer: "Kirloskar Portable Generators",
          model: `KPG ${product.range.split(' ')[0]}`,
          cylinders: "1",
          displacement: product.range.includes("3") ? "0.4L" : "0.6L",
          aspiration: "Naturally Aspirated",
          compressionRatio: "8.5:1",
          oilCapacity: product.range.includes("3") ? "1.1L" : "1.3L",
          fuelType: product.fuelType,
          fuelCapacity: product.range.includes("3") ? "12L" : "18L",
        },
        alternatorSpecs: {
          manufacturer: "Kirloskar Electric Company",
          model: `KEC-P ${product.range.split(' ')[0]}`,
          insulation: "Class F",
          bearings: "Single Bearing",
          excitationSystem: "Brushed",
          voltageRegulation: "±3%",
          waveformDistortion: "Less than 5%",
          telephoneInterference: "THF < 3%",
        },
        controlPanel: {
          controller: "Analog",
          parameters: "Voltage, Frequency",
          protection: "Overload Protection",
          outlets: "2x 230V AC, 1x 12V DC (optional)",
          indicators: "Power On, Low Oil Alert",
        }
      },
      electrical: {
        specifications: {
          manufacturer: "Kirloskar Electric Products",
          enclosure: "CRCA Sheet Steel",
          protection: "IP54",
          finish: "Powder Coated",
          color: "RAL7032",
          busbars: "Aluminum/Copper",
          rating: "As per system requirement",
          switchgear: "ABB/Schneider/L&T/Siemens",
        },
        features: {
          autoTransfer: "Available",
          synchronization: "Available",
          metering: "Digital/Analog",
          indicators: "LED Type",
          cooling: "Forced Air",
          ventilation: "Louvered Doors",
        },
      },
      servo: {
        specifications: {
          manufacturer: "Kirloskar Servo Controls",
          inputVoltage: "170V-260V (1Φ) / 340V-460V (3Φ)",
          outputVoltage: "230V±1% (1Φ) / 400V±1% (3Φ)",
          correction: "Up to 50V/sec",
          coolingSystem: product.cooling,
          protectionClass: "IP21",
          controlType: "Microprocessor Based",
          efficiency: ">95%",
        },
        features: {
          overloadCapacity: "200% for 60 sec",
          indicators: "Input Voltage, Output Voltage, On, Off",
          protection: "Over/Under Voltage, Overload, Short Circuit",
          bypass: "Manual/Automatic",
          remoteControl: "Optional",
          soundLevel: "<45dB",
        },
      },
      transformers: {
        specifications: {
          manufacturer: "Kirloskar Transformers",
          type: product.id.includes("distribution") ? "Distribution" : "Power",
          cooling: product.cooling,
          insulation: "Class A",
          tappings: "±5% in steps of 2.5%",
          vectorGroup: "Dyn11",
          temperature: "40°C ambient",
          impedance: "4.5% - 5%",
        },
        features: {
          lowLoss: "CRGO Core",
          windingMaterial: "Copper",
          termination: "Cable Box/Bus Duct",
          protection: "Buchholz Relay, WTI, OTI",
          conservator: "Provided",
          silicaGel: "Provided",
          oilLevel: "Provided",
        },
      },
    };
    
    // Select the right specs based on product category
    if (product.category === 'diesel') return powerRangeMap.diesel;
    if (product.category === 'gas') return powerRangeMap.gas;
    if (product.category === 'portable') return powerRangeMap.portable;
    if (product.category === 'electrical') return powerRangeMap.electrical;
    if (product.category === 'servo') return powerRangeMap.servo;
    if (product.category === 'transformers') return powerRangeMap.transformers;
    
    // Default to diesel if not found
    return powerRangeMap.diesel;
  };
  
  // Function to render specifications in the modal
  const renderSpecifications = (specs, product) => {
    if (product.category === 'diesel' || product.category === 'gas' || product.category === 'portable') {
      return (
        <Tabs defaultValue="engine" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="engine">Engine</TabsTrigger>
            <TabsTrigger value="alternator">Alternator</TabsTrigger>
            <TabsTrigger value="control">Control Panel</TabsTrigger>
          </TabsList>
          <TabsContent value="engine" className="pt-4">
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(specs.engineSpecs).map(([key, value]) => (
                <div key={key} className="border-b border-gray-100 pb-2">
                  <p className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-base font-semibold">{value as React.ReactNode}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="alternator" className="pt-4">
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(specs.alternatorSpecs).map(([key, value]) => (
                <div key={key} className="border-b border-gray-100 pb-2">
                  <p className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-base font-semibold">{value as React.ReactNode}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="control" className="pt-4">
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(specs.controlPanel).map(([key, value]) => (
                <div key={key} className="border-b border-gray-100 pb-2">
                  <p className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-base font-semibold">{value as React.ReactNode}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      );
    } else {
      return (
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="pt-4">
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(specs.specifications).map(([key, value]) => (
                <div key={key} className="border-b border-gray-100 pb-2">
                  <p className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-base font-semibold">{value as React.ReactNode}</p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="features" className="pt-4">
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(specs.features).map(([key, value]) => (
                <div key={key} className="border-b border-gray-100 pb-2">
                  <p className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-base font-semibold">{value as React.ReactNode}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      );
    }
  };

  return (
    <>
      <SEOJsonLD
        title={seoData.title}
        description={seoData.description}
        url={seoData.url}
        imageUrl={seoData.imageUrl}
      />
      <Header />
      
      <main className="bg-black min-h-screen">
        {/* Hero Banner */}
        <div className="relative bg-black text-white h-[450px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/src/assets/FRAME.png')",
              filter: "brightness(0.5)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-24 flex flex-col gap-4 h-full justify-center">
            <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
              Powering Progress, One Generator at a Time
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Explore our full range of Kirloskar-certified diesel generators, trusted across India's most demanding industries.
            </p>
            <div className="flex gap-4 mt-4">
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Download Product Catalogue
              </Button>
            </div>
          </div>
        </div>

        {/* Product Selection Area */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Filter and Sort Controls */}
          <div className="flex justify-between items-center mb-6 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-300">Sort by:</span>
              <select
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm text-white"
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-300">Power Range:</span>
              <select
                id="power-range"
                value={powerRange}
                onChange={(e) => setPowerRange(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm text-white"
              >
                <option value="all">All Ranges</option>
                <option value="small">Small (5-50 kVA)</option>
                <option value="medium">Medium (50-250 kVA)</option>
                <option value="large">Large (250+ kVA)</option>
              </select>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 border-gray-700 text-gray-300 bg-gray-800 hover:bg-gray-700"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <Filter className="w-4 h-4" /> 
              <span>More Filters</span>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Sidebar */}
            <div className={`md:w-64 bg-gray-900 rounded-md shadow-md p-4 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
              <h2 className="text-base font-semibold mb-4 text-white">Product Categories</h2>
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category.id}>
                    {category.hasDropdown ? (
                      <>
                        <button
                          className={`w-full text-left px-2 py-2 rounded-sm transition text-sm flex items-center justify-between ${
                            selectedCategory === 'diesel' || selectedCategory === 'gas' || selectedCategory === 'portable'
                              ? 'bg-blue-900 text-blue-200 font-medium'
                              : 'hover:bg-gray-800 text-gray-300'
                          }`}
                          onClick={() => handleCategorySelection(category.id)}
                        >
                          <span>{category.name}</span>
                          <ChevronRight className={`ml-2 w-4 h-4 transition-transform ${showKirloskarDropdown ? 'rotate-90' : ''}`} />
                        </button>
                        {showKirloskarDropdown && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {kirloskarSubcategories.map((subcat) => (
                              <li key={subcat.id}>
                                <button
                                  className={`w-full text-left px-2 py-2 rounded-sm transition text-sm ${
                                    selectedCategory === subcat.id
                                      ? 'bg-blue-900 text-blue-200 font-medium'
                                      : 'hover:bg-gray-800 text-gray-300'
                                  }`}
                                  onClick={() => setSelectedCategory(subcat.id)}
                                >
                                  {subcat.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <button
                        className={`w-full text-left px-2 py-2 rounded-sm transition text-sm ${
                          selectedCategory === category.id
                            ? 'bg-blue-900 text-blue-200 font-medium'
                            : 'hover:bg-gray-800 text-gray-300'
                        }`}
                        onClick={() => handleCategorySelection(category.id)}
                      >
                        {category.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-sm font-semibold mb-3 text-gray-200">Certifications</h3>
                <div className="space-y-2">
                  {['ISO 9001', 'CPCB-IV+', 'CE', 'BIS'].map((cert) => (
                    <div key={cert} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`cert-${cert}`}
                        className="mr-2"
                      />
                      <label htmlFor={`cert-${cert}`} className="text-xs text-gray-300">{cert}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-white">{getCurrentCategoryDisplayName()}</h2>
                <p className="text-gray-400 mt-1 text-sm">
                  {selectedCategory === 'diesel' && 'Kirloskar\'s range of diesel generators are designed for maximum performance and reliability. Our generators meet the latest CPCB norms and are built for Indian conditions.'}
                  {selectedCategory === 'gas' && 'Eco-friendly and efficient, our gas generators provide clean power with lower emissions and reduced operating costs.'}
                  {selectedCategory === 'portable' && 'Compact and versatile generators perfect for homes, small businesses, construction sites, and outdoor events.'}
                  {selectedCategory === 'electrical' && 'High-quality electrical panels for power distribution, control, and protection of your electrical systems.'}
                  {selectedCategory === 'servo' && 'Reliable servo stabilizers to protect your equipment from voltage fluctuations and ensure consistent power supply.'}
                  {selectedCategory === 'transformers' && 'Durable and efficient transformers designed for various industrial and commercial applications.'}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {displayProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-750">
                    <div>
                      <div className="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden h-48">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm text-white">{product.name}</h3>
                        
                        <div className="mt-2 text-xs text-gray-300">
                          <div className="flex justify-between items-center">
                            <span>Fuel Type: {product.fuelType}</span>
                            <span>CPCB Norm: {product.cpcbNorm}</span>
                          </div>
                          <div className="flex justify-between items-center mt-1">
                            <span>Cooling: {product.cooling}</span>
                            <span>Phase: {product.phase}</span>
                          </div>
                        </div>
                        
                        <div className="mt-2 flex items-center">
                          <span className="text-yellow-400 text-xs">★</span>
                          <span className="text-xs ml-1 text-gray-300">{product.rating}</span>
                          <span className="text-xs ml-1 text-gray-500">({product.ratingCount})</span>
                        </div>
                        
                        <div className="mt-3 flex gap-1 justify-between">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-7 text-xs flex items-center gap-1 py-0 px-2 border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600"
                            onClick={() => openSpecsModal(product)}
                          >
                            View Specs <ChevronRight className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-7 text-xs flex items-center gap-1 py-0 px-2 border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <path d="M3 9h18" />
                            </svg>
                            Brochure
                          </Button>
                          <Button variant="default" size="sm" className="h-7 text-xs py-0 px-4 bg-blue-600 hover:bg-blue-700 text-white">
                            Get Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Not Sure What Fits Section */}
              <div className="mt-10 bg-gray-800 p-4 rounded-md border border-gray-700">
                <h3 className="font-medium text-base mb-1 text-white">Not sure what fits?</h3>
                <p className="text-xs text-gray-400 mb-3">
                  Use our 3-step Generator Selector to find the perfect power solution for your needs.
                </p>
                <Button variant="default" size="sm" className="text-xs px-4 py-1 h-7 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1">
                  Start Selector <ChevronRight className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Kumar Power Info */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 border-t border-gray-700 pt-3">
            <div>
              <span className="font-medium">Kumar Power:</span> India's Most Trusted Kirloskar-Certified Generator Brand!
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs h-7 p-0 text-gray-400 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download All Catalogs
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs h-7 p-0 text-gray-400 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Talk to Power Expert
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs h-7 p-0 text-gray-400 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Request Quote
              </Button>
            </div>
          </div>
        </div>
        
        {/* Why Choose Kirloskar Generators Section */}
        <section className="bg-[#E5E7EB] text-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">Why Choose Kirloskar Generators?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Unmatched Reliability */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Unmatched Reliability</h3>
                <p className="text-sm text-gray-600">Engineered for 24/7 operation with redundant systems and fail-safe mechanisms.</p>
              </div>

              {/* Fuel Efficiency */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13z"/>
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Fuel Efficiency</h3>
                <p className="text-sm text-gray-600">Advanced engine technology delivers optimal fuel consumption and lower operating costs.</p>
              </div>

              {/* Rapid Response */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Rapid Response</h3>
                <p className="text-sm text-gray-600">Quick start capability ensures minimal downtime during power outages.</p>
              </div>

              {/* Low Noise Operation */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    <path d="M10.002 4.646a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.707-.708L11.293 7 10.002 5.707a.5.5 0 0 1 0-.708zm-6.293 0a.5.5 0 0 0-.707 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .707-.708L1.707 7l2.001-1.293a.5.5 0 0 0 0-.708z"/>
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Low Noise Operation</h3>
                <p className="text-sm text-gray-600">Acoustic engineering reduces noise levels for urban and sensitive environments.</p>
              </div>

              {/* Easy Maintenance */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"/>
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Easy Maintenance</h3>
                <p className="text-sm text-gray-600">Modular design with accessible components simplifies service and maintenance.</p>
              </div>

              {/* Smart Controls */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Smart Controls</h3>
                <p className="text-sm text-gray-600">Advanced digital interfaces with remote monitoring and diagnostic capabilities.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Certified Excellence</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-medium text-sm text-gray-300">ISO 9001:2015</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-medium text-sm text-gray-300">CPCB-IV+</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-medium text-sm text-gray-300">CE Certified</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-medium text-sm text-gray-300">BIS Approved</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-medium text-sm text-gray-300">Kirloskar Authorized</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Help Section */}
        <section className="py-12 bg-gray-300">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Need Help Choosing the Right Electrical Solution?</h2>
            <p className="text-sm text-gray-600 mb-6">
              Our team of experts will help you select the perfect solution based on your industry and budget.
            </p>
            <Button variant="default" size="md" className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 flex items-center justify-center gap-1 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Talk to an Expert
            </Button>
          </div>
        </section>
      </main>
      
      {/* Product Specifications Modal */}
      <Dialog open={showSpecsModal} onOpenChange={setShowSpecsModal}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          {selectedProductForSpecs && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{selectedProductForSpecs.name} Specifications</DialogTitle>
                <DialogDescription className="text-gray-500">
                  Detailed technical specifications and features.
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                {/* Product Image and Key Info */}
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <div className="w-full sm:w-1/3">
                    <div className="rounded-md overflow-hidden border border-gray-200">
                      <img 
                        src={selectedProductForSpecs.image} 
                        alt={selectedProductForSpecs.name} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{selectedProductForSpecs.name}</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Power Range</p>
                          <p className="text-gray-600">{selectedProductForSpecs.range}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Fuel Type</p>
                          <p className="text-gray-600">{selectedProductForSpecs.fuelType}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Cooling System</p>
                          <p className="text-gray-600">{selectedProductForSpecs.cooling}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Phase</p>
                          <p className="text-gray-600">{selectedProductForSpecs.phase}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tabs for detailed specs */}
                <div className="mt-4 border-t pt-4">
                  {renderSpecifications(getDetailedSpecs(selectedProductForSpecs), selectedProductForSpecs)}
                </div>
                
                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t">
                  <Button size="sm" variant="default" className="bg-blue-600 hover:bg-blue-700">
                    Request Quote
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Download className="w-4 h-4" /> Download Brochure
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </>
  );
};

export default Products;
