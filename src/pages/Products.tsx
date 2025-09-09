import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { ChevronRight, Filter, SlidersHorizontal, X, CheckCircle2, Download, BadgeCheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import hero from "@/assets/Products/HeropBG.png"
import range1 from "@/assets/Range1.png";
import range2 from "@/assets/Range2.png";
import range3 from "@/assets/Range3.png";
import range4 from "@/assets/Range4.png";
import range5 from "@/assets/Range5.png";
import range6 from "@/assets/Range6.png";
import DG1 from "@/assets/Kumar Assets/7.5KVA DG.png";
import DG2 from "@/assets/Kumar Assets/320KVa.png";
import DG3 from "@/assets/Kumar Assets/25kwa dg.png";
import DG4 from "@/assets/Kumar Assets/62.5KVA DG.png";
import DG5 from "@/assets/Kumar Assets/new750.png";
import port from "@/assets/Kumar Assets/20240820_left side 2.8 with 5.5 kVA.png";
import panel1 from "@/assets/Panel/Porcelin_clad_vaccum_circuit_breaker 1.png"
import panel2 from "@/assets/Panel/Panels 1.png"
import panel3 from "@/assets/Panel/SF6_Circuit_breaker 1.png"
import panel4 from "@/assets/Panel/Unitised_package_substation 1.png"
import panel5 from "@/assets/Panel/Vacuum_circuit_breaker 2.png"
import panel6 from "@/assets/Panel/amf-panel-auto-synchronize-panels-24 1.png"
import panel7 from "@/assets/Panel/distribution_panel 1.png"
import panel8 from "@/assets/Panel/feeder-pillar2 1.png"
import servo1 from "@/assets/servo/servo1.png"
import servo2 from "@/assets/servo/servo2.png"
import trans1 from "@/assets/transformer/Trans1.png"
import trans2 from "@/assets/transformer/trans2.png"
import trans3 from "@/assets/transformer/trans3.png"
import Brochure from "@/assets/Brochure.pdf"

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("diesel");
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [powerRange, setPowerRange] = useState<string>("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showKirloskarDropdown, setShowKirloskarDropdown] = useState(true);

  // State for product specs modal
  const [showSpecsModal, setShowSpecsModal] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] = useState<any>(null);

  // State for generator selector modal
  const [showSelectorModal, setShowSelectorModal] = useState(false);

  // Define product categories
  const categories = [
    { id: "kirloskar", name: "Kirloskar Generators", hasDropdown: true },
    { id: "electrical", name: "Electrical Panels" },
    { id: "servo", name: "Servo Stabilizers" },
    { id: "transformers", name: "Transformers" },
  ];

  // Subcategories for Kirloskar Generators
  const kirloskarSubcategories = [
    { id: "diesel", name: "CPCB4+ Diesel Generators" },
    { id: "gas", name: "Gas Generators" },
    { id: "portable", name: "Portable Generators" },
    { id: "optiprime", name: "Optiprime" },
  ];

  // Define generator products based on the images
  const dieselGenerators = [
    {
      id: "200 kVA to 250 kVA",
      name: "200 kVA to 250 kVA Diesel Generators",
      image: range1, // Use imported image
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 178,
      rating: 4.7,
      range: "7.5 - 20 kVA",
      category: "diesel",
      description: "Our range of diesel generators are designed for maximum performance and reliability. Our generators meet the latest CPCB norms and are built for Indian conditions.",
    },
    {
      id: "7.5 kVA to 20 kVA",
      name: "7.5 kVA to 20 kVA diesel generators",
      image: DG1, // Use imported image
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 153,
      rating: 4.8,
      range: "7.5 kVA to 20 kVA",
      category: "diesel",
      description: "Our range of diesel generators are designed for maximum performance and reliability. Our generators meet the latest CPCB norms and are built for Indian conditions.",
    },
    {
      id: "25 kVA to 58.5 kVA",
      name: "25 kVA to 58.5 kVA diesel generators",
      image: DG3, // Use imported image
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 132,
      rating: 4.9,
      range: "25 kVA to 58.5 kVA",
      category: "diesel",
      description: "Our range of diesel generators are designed for maximum performance and reliability. Our generators meet the latest CPCB norms and are built for Indian conditions.",
    },
    {
      id: "82.5 kVA to 160 kVA",
      name: "82.5 kVA to 160 kVA diesel generators",
      image: range6, // Use imported image
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 118,
      rating: 4.8,
      range: "82.5 kVA to 160 kVA",
      category: "diesel",
      description: "Our range of diesel generators are designed for maximum performance and reliability. Our generators meet the latest CPCB norms and are built for Indian conditions.",
    },
    {
      id: "320 kVA to 750 kVA ",
      name: "320 kVA - 750 kVA Diesel Generators",
      image: range6, // Use imported image
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 96,
      rating: 4.9,
      range: "320 - 750 kVA",
      category: "diesel",
      description: "Our range of diesel generators are designed for maximum performance and reliability. Our generators meet the latest CPCB norms and are built for Indian conditions.",
    },
    {
      id: "750-1500kva",
      name: "750 kVA - 1500 kVA Diesel Generators",
      image: DG5, // Use imported image
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 86,
      rating: 4.9,
      range: "750 - 1500 kVA",
      category: "diesel",
      description: "Our range of diesel generators are designed for maximum performance and reliability. Our generators meet the latest CPCB norms and are built for Indian conditions.",
    },
  ];

  // Define gas generators
  const gasGenerators = [
    {
      id: "15 kVA to 250 kVA",
      name: "15 kVA to 250 kVA Gas Generators",
      image: range2, // Use imported image
      fuelType: "Natural Gas/CNG",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Single/Three Phase",
      ratingCount: 145,
      rating: 4.6,
      range: "15 kVA to 250 kVA",
      category: "gas",
      description: "Eco-friendly and efficient, our gas generators provide clean power with lower emissions and reduced operating costs.",
    },

  ];

  // Define portable generators
  const portableGenerators = [
    {
      id: "2.1 kVA to 5 kVA",
      name: "2.1 kVA to 5 kVA Portable Generators",
      image: port, // Use imported image
      fuelType: "Gasoline",
      cpcbNorm: "CPCB-IV+",
      cooling: "Air",
      phase: "Single Phase",
      ratingCount: 210,
      rating: 4.5,
      range: "2.1 kVA to 5 kVA",
      category: "portable",
      description: "Compact and versatile generators perfect for homes, small businesses, construction sites, and outdoor events.",
    },

  ];

  // Define Optiprime generators (This is the new data array that was missing)
  const optiprimeGenerators = [
    {
      id: "optiprime-product-1",
      name: "Kirloskar Optiprime Generator",
      image: range1, // Placeholder image
      fuelType: "Diesel",
      cpcbNorm: "CPCB-IV+",
      cooling: "Liquid",
      phase: "Three Phase",
      ratingCount: 195,
      rating: 4.8,
      range: "100 kVA",
      category: "optiprime",
      description: "Kirloskar Optiprime series are advanced generators offering superior fuel efficiency and smart monitoring for optimized performance.",
    },
  ];

  // Define electrical panels
  const electricalPanels = [
    {
      id: " (AMF) Panels",
      name: " AMF Panels",
      image: panel6, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Fan/Natural",
      phase: "Three Phase",
      ratingCount: 112,
      rating: 4.7,
      range: "Various",
      category: "electrical",
      description: "High-quality electrical panels for power distribution, control, and protection of your electrical systems.",
    },
    {
      id: "Vacuum Circuit Breaker ",
      name: "Vacuum Circuit Breaker ",
      image: panel1, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Fan/Natural",
      phase: "Three Phase",
      ratingCount: 98,
      rating: 4.6,
      range: "Various",
      category: "electrical",
      description: "High-quality electrical panels for power distribution, control, and protection of your electrical systems.",
    },
    {
      id: "SF6 circuit breakers  ",
      name: "SF6 circuit breakers",
      image: panel3, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Fan/Natural",
      phase: "Three Phase",
      ratingCount: 98,
      rating: 4.6,
      range: "Various",
      category: "electrical",
      description: "High-quality electrical panels for power distribution, control, and protection of your electrical systems.",
    },
    {
      id: "Unitized Package Substation ",
      name: "Unitized Package Substation",
      image: panel4, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Fan/Natural",
      phase: "Three Phase",
      ratingCount: 98,
      rating: 4.6,
      range: "Various",
      category: "electrical",
      description: "High-quality electrical panels for power distribution, control, and protection of your electrical systems.",
    },
    {
      id: "Panels",
      name: "Panels ",
      image: panel2, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Fan/Natural",
      phase: "Three Phase",
      ratingCount: 98,
      rating: 4.6,
      range: "Various",
      category: "electrical",
      description: "High-quality electrical panels for power distribution, control, and protection of your electrical systems.",
    },
    {
      id: "Distribution Boxes",
      name: "Distribution Boxes ",
      image: panel7, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Fan/Natural",
      phase: "Three Phase",
      ratingCount: 98,
      rating: 4.6,
      range: "Various",
      category: "electrical",
      description: "High-quality electrical panels for power distribution, control, and protection of your electrical systems.",
    },
    {
      id: "Feeder Pillars",
      name: "Feeder Pillars",
      image: panel8, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Fan/Natural",
      phase: "Three Phase",
      ratingCount: 98,
      rating: 4.6,
      range: "Various",
      category: "electrical",
      description: "High-quality electrical panels for power distribution, control, and protection of your electrical systems.",
    },

  ];

  // Define servo stabilizers
  const servoStabilizers = [
    {
      id: "single-phase-servo",
      name: "Oil Cooled Servo Stabilizers",
      image: servo1, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Air/Oil",
      phase: "Single Phase",
      ratingCount: 134,
      rating: 4.5,
      range: "5-100 kVA",
      category: "servo",
      description: "Reliable servo stabilizers to protect your equipment from voltage fluctuations and ensure consistent power supply.",
    },
    {
      id: "three-phase-servo",
      name: "Air Cooled Servo Stabilizers",
      image: servo2, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Air/Oil",
      phase: "Three Phase",
      ratingCount: 122,
      rating: 4.7,
      range: "15-500 kVA",
      category: "servo",
      description: "Reliable servo stabilizers to protect your equipment from voltage fluctuations and ensure consistent power supply.",
    }
  ];

  // Define transformers
  const transformers = [
    {
      id: "distribution-transformer",
      name: "Distribution Transformers",
      image: trans1, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Oil/Dry",
      phase: "Three Phase",
      ratingCount: 88,
      rating: 4.8,
      range: "100-2500 kVA",
      category: "transformers",
      description: "Durable and efficient transformers designed for various industrial and commercial applications.",
    },
    {
      id: "power-transformer",
      name: "Power Transformers",
      image: trans2, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Oil",
      phase: "Three Phase",
      ratingCount: 76,
      rating: 4.9,
      range: "1-10 MVA",
      category: "transformers",
      description: "Durable and efficient transformers designed for various industrial and commercial applications.",
    },
    {
      id: "Cast Resin Transformers",
      name: "Cast Resin Transformers",
      image: trans3, // Use imported image
      fuelType: "N/A",
      cpcbNorm: "N/A",
      cooling: "Oil",
      phase: "Three Phase",
      ratingCount: 76,
      rating: 4.9,
      range: "1-10 MVA",
      category: "transformers",
      description: "Durable and efficient transformers designed for various industrial and commercial applications.",
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
        // Skip filtering non-generator products that don't have power ratings
        if (!product.range || product.range === 'Various') return true;

        // Extract numbers from the range string (e.g., "7.5 - 20 kVA" => [7.5, 20])
        const rangeValues = product.range.match(/[\d.]+/g)?.map(Number) || [];

        // If we can't parse the range properly, include the product
        if (rangeValues.length === 0) return true;

        // Get the maximum value in the range (typically the second number)
        const maxValue = Math.max(...rangeValues);
        // Get the minimum value in the range (typically the first number)
        const minValue = Math.min(...rangeValues);

        if (powerRange === 'small') {
          // Small: Up to 50 kVA
          return maxValue <= 50;
        } else if (powerRange === 'medium') {
          // Medium: 50-250 kVA
          return (minValue <= 250 && maxValue >= 50);
        } else if (powerRange === 'large') {
          // Large: 250+ kVA
          return maxValue > 250;
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
      case 'optiprime': // ADDED THIS CASE
        filteredProducts = optiprimeGenerators;
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
    // If it's a main category with subcategories, show the dropdown
    if (categoryId === 'kirloskar') {
      // Toggle the dropdown if clicking on Kirloskar again
      if (selectedCategory === 'diesel' || selectedCategory === 'gas' ||
        selectedCategory === 'portable' || selectedCategory === 'optiprime') {
        setShowKirloskarDropdown(!showKirloskarDropdown);
      } else {
        // If coming from a different category, set default to diesel and show dropdown
        setSelectedCategory('diesel');
        setShowKirloskarDropdown(true);
      }
    } else {
      // For other main categories, set the category and hide Kirloskar dropdown
      setSelectedCategory(categoryId);
      setShowKirloskarDropdown(false);
    }
  };

  // Handler for subcategory selection
  const handleSubcategorySelection = (subcategoryId: string) => {
    setSelectedCategory(subcategoryId);
    // Keep the dropdown open when selecting subcategories
  };

  // Function to open the specs modal
  const openSpecsModal = (product) => {
    setSelectedProductForSpecs(product);
    setShowSpecsModal(true);
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
        <div className="relative bg-black text-white h-[320px] md:h-[450px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              // backgroundImage: "url('/src/assets/FRAME.png')",
              backgroundImage: `url(${hero})`,
              filter: "brightness(0.5)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-24 flex flex-col gap-4 h-full justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-2xl">
              Powering Progress, One Generator at a Time
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl">
              Explore our full range of Kirloskar-certified diesel generators, trusted across India's most demanding industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full max-w-xs sm:max-w-none">
              <Button size="lg" variant="default" className="bg-[#2D6FBA] hover:bg-[#225488] w-full sm:w-auto">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Download Product Catalogue
              </Button>
            </div>
          </div>
        </div>

        {/* Product Selection Area */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
          {/* Filter and Sort Controls */}

          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center px-20 mb-20 gap-3 sm:gap-4">
            <div className='flex items-center gap-10'>
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
            <div className={`relative w-full md:w-64 z-10 rounded-md shadow-md p-4 ${showMobileFilters ? 'block' : 'hidden md:block'} mb-4 md:mb-0`}>
              <h2 className="text-base font-semibold mb-4 text-white">Product Categories</h2>
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category.id}>
                    {category.hasDropdown ? (
                      <>
                        <button
                          className={`w-full text-left px-2 py-2 rounded-sm transition text-sm flex items-center justify-between ${
                            selectedCategory === 'diesel' || selectedCategory === 'gas' ||
                              selectedCategory === 'portable' || selectedCategory === 'optiprime'
                              ? 'bg-[#2D6FBA]/20 text-white font-medium'
                              : 'text-white hover:bg-gray-800'
                            }`}
                          onClick={() => handleCategorySelection(category.id)}
                        >
                          <span>{category.name}</span>
                          <ChevronRight className={`ml-2 w-4 h-4 transition-transform ${showKirloskarDropdown ? 'rotate-90' : ''}`} />
                        </button>

                        {showKirloskarDropdown && (
                          <div className="relative">
                            <div className='absolute top-0 left-0 w-full h-full rounded-md -z-10 bg-[#2D6FBA]/10'></div>
                            <ul className="ml-4 mt-1 space-y-1 py-2">
                              {kirloskarSubcategories.map((subcat) => (
                                <li key={subcat.id}>
                                  <button
                                    className={`w-full text-left px-3 py-1.5 rounded-sm transition text-sm ${
                                      selectedCategory === subcat.id
                                        ? 'bg-[#2D6FBA] text-white font-medium'
                                        : 'text-gray-200 hover:bg-[#2D6FBA]/50'
                                      }`}
                                    onClick={() => handleSubcategorySelection(subcat.id)}
                                  >
                                    {subcat.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        className={`w-full text-left px-2 py-2 rounded-sm transition text-sm ${
                          selectedCategory === category.id
                            ? 'bg-[#2D6FBA] text-white font-medium'
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

              <div className="mt-16 pt-6 border-t border-gray-700">
                <h3 className="text-sm font-semibold mb-3 text-gray-200">Certifications</h3>
                <div className="bg-[#181d23] rounded-lg p-6 flex flex-wrap gap-2">
                  {['ISO 9001', 'CPCB-IV+', 'Kirloskar Authorized Distributor'].map((cert) => (
                    <span
                      key={cert}
                      className="inline-block px-3 py-1 rounded bg-[#23272f] text-xs text-gray-200 font-medium"
                      style={{ minWidth: '70px', textAlign: 'center' }}
                    >
                      {cert}
                    </span>
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
                  {selectedCategory === 'optiprime' && 'Kirloskar Optiprime series are advanced generators offering superior fuel efficiency and smart monitoring for optimized performance.'}
                  {selectedCategory === 'electrical' && 'High-quality electrical panels for power distribution, control, and protection of your electrical systems.'}
                  {selectedCategory === 'servo' && 'Reliable servo stabilizers to protect your equipment from voltage fluctuations and ensure consistent power supply.'}
                  {selectedCategory === 'transformers' && 'Durable and efficient transformers designed for various industrial and commercial applications.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {displayProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-750">
                    <div>
                      <div className="aspect-w-16 aspect-h-9 bg-gray-700 overflow-hidden h-40 sm:h-48">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full bg-white object-contain"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm text-white">{product.name}</h3>

                        <div className="mt-2 text-xs text-gray-300">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <span>Fuel Type: {product.fuelType}</span>
                            <span>CPCB Norm: {product.cpcbNorm}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
                            <span>Cooling: {product.cooling}</span>
                            <span>Phase: {product.phase}</span>
                          </div>
                        </div>

                        <div className="mt-2 flex items-center">
                          <span className="text-yellow-400 text-xs">★</span>
                          <span className="text-xs ml-1 text-gray-300">{product.rating}</span>
                          <span className="text-xs ml-1 text-gray-500">({product.ratingCount})</span>
                        </div>

                        <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
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
                            <a href={Brochure} download={`${product.name} Brochure.pdf`} >
                            Brochure
                            </a>
                          </Button>
                          <Button variant="default" size="sm" className="h-7 text-xs py-0 px-4 bg-[#2D6FBA] hover:bg-[#225488] text-white">
                            Get Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Not Sure What Fits Section */}
              <div className="mt-10 bg-gray-800 w-[20vw] p-4 rounded-md border border-gray-700">
                <h3 className="font-medium text-base mb-1 text-white">Not sure what fits?</h3>
                <p className="text-xs text-gray-400 mb-3">
                  Use our 3-step Generator Selector to find the perfect power solution for your needs.
                </p>
                <Button
                  variant="default"
                  size="sm"
                  className="text-xs px-4 py-1 h-7 bg-[#2D6FBA] hover:bg-[#225488] text-white flex items-center gap-1"
                  onClick={() => setShowSelectorModal(true)}
                >
                  Start Selector <ChevronRight className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Kumar Power Info */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 border-t border-gray-700 pt-3 gap-2">
            <div>
              <span className="font-medium text-[#2D6FBA]">Kumar Power:</span> India's Most Trusted Kirloskar-Certified Generator Brand!
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
              {/* Download Button */}
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 text-xs h-7 p-4 bg-white/20 text-gray-400 hover:bg-[#2D6FBA] hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download All Catalogs
              </Button>

              {/* Talk Button */}
              <Button onClick={
                () => {
                  window.location.href = "/contact";
                }
              }
                variant="ghost"
                size="sm"
                className="bg-white/20 flex items-center gap-1 text-xs h-7 p-4 text-gray-400 hover:bg-[#2D6FBA] hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Talk to Power Expert
              </Button>

              {/* Request Quote Button */}
              <Button
                variant="ghost"
                size="sm"
                className="bg-[#2D6FBA] flex items-center gap-1 text-xs h-7 p-4 text-white hover:bg-[#225488] hover:text-white"
              >
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
        <section className="bg-[#E5E7EB] text-gray-800 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-10">Why Choose Kirloskar Generators?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Unmatched Reliability */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Unmatched Reliability</h3>
                <p className="text-sm text-gray-600">Engineered for 24/7 operation with redundant systems and fail-safe mechanisms.</p>
              </div>

              {/* Fuel Efficiency */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Fuel Efficiency</h3>
                <p className="text-sm text-gray-600">Advanced engine technology delivers optimal fuel consumption and lower operating costs.</p>
              </div>

              {/* Rapid Response */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Rapid Response</h3>
                <p className="text-sm text-gray-600">Quick start capability ensures minimal downtime during power outages.</p>
              </div>

              {/* Low Noise Operation */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                    <path d="M10.002 4.646a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.707-.708L11.293 7 10.002 5.707a.5.5 0 0 1 0-.708zm-6.293 0a.5.5 0 0 0-.707 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .707-.708L1.707 7l2.001-1.293a.5.5 0 0 0 0-.708z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Low Noise Operation</h3>
                <p className="text-sm text-gray-600">Acoustic engineering reduces noise levels for urban and sensitive environments.</p>
              </div>

              {/* Easy Maintenance */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Easy Maintenance</h3>
                <p className="text-sm text-gray-600">Modular design with accessible components simplifies service and maintenance.</p>
              </div>

              {/* Smart Controls */}
              <div className="bg-white p-6 rounded-md shadow-sm">
                <div className="mb-4" style={{ color: "#2D6FBA" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-1">Smart Controls</h3>
                <p className="text-sm text-gray-600">Advanced digital interfaces with remote monitoring and diagnostic capabilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="bg-black text-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Certified Excellence</h2>

            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-14">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <BadgeCheckIcon className="w-8 h-8" style={{ color: "#2D6FBA" }} />
                </div>
                <p className="font-medium text-sm text-gray-300">ISO 9001:2015</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <BadgeCheckIcon className="w-8 h-8" style={{ color: "#2D6FBA" }} />
                </div>
                <p className="font-medium text-sm text-gray-300">CPCB-IV+</p>
              </div>



              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-800">
                  <BadgeCheckIcon className="w-8 h-8" style={{ color: "#2D6FBA" }} />
                </div>
                <p className="font-medium text-sm text-gray-300">Kirloskar Authorized</p>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-8 sm:py-12 bg-[#AAAAAA]">
          <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">Need Help Choosing the Right Electrical Solution?</h2>
            <p className="text-xs sm:text-sm text-black mb-6">
              Our team of experts will help you select the perfect solution based on your industry and budget.
            </p>
            <div className='flex w-full items-center justify-center'>
              <Button onClick={
                () => {
                  window.location.href = "/contact";
                }
              } variant="default" size="md" className=" bg-white p-4 hover:bg-gray-100 text-gray-800 border border-gray-300 flex items-center justify-center gap-1 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Talk to an Expert
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Product Specifications Modal */}
      <Dialog open={showSpecsModal} onOpenChange={setShowSpecsModal}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          {selectedProductForSpecs && (
            <>
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl">{selectedProductForSpecs.name} Specifications</DialogTitle>
                <DialogDescription className="text-gray-500">
                  {selectedProductForSpecs.description}
                </DialogDescription>
              </DialogHeader>

              {/* Technical Specifications Section */}
              <div className="mt-4">
                <h3 className="font-semibold text-base mb-2">Technical Specifications:</h3>
                <div className="bg-gray-50 rounded-md p-4 text-sm">
                  {selectedProductForSpecs.category === 'diesel' && (
                    <>
                      <p className="mb-3">
                        Engineered with Kirloskar's robust CPCB IV+ compliant diesel engine technology, this generator delivers exceptional power stability with voltage regulation of ±1% and frequency regulation of ±0.25%. The advanced cooling system maintains optimal operating temperatures even in ambient conditions up to 50°C, while the intelligent AMF control panel provides comprehensive protection against overload, short circuit, and phase imbalance.
                      </p>
                      <p>
                        The unit features a high-capacity fuel tank providing up to 12 hours of continuous operation at 75% load, with fuel consumption optimization technology that reduces diesel usage by up to 15% compared to standard generators. The acoustic enclosure is designed to limit noise levels to 75dB at 1-meter distance, making it suitable for residential and commercial applications. Standard features include remote monitoring capability via GSM/GPRS, auto-start functionality, and a maintenance-free battery system with intelligent charging.
                      </p>
                    </>
                  )}
                  
                  {selectedProductForSpecs.category === 'gas' && (
                    <>
                      <p className="mb-3">
                        This state-of-the-art gas generator utilizes Kirloskar's eco-friendly gas engine technology, featuring electronic fuel injection for precise air-fuel ratio control and reduced emissions. The system achieves NOx emissions below 100mg/Nm³, significantly lower than diesel alternatives, while maintaining thermal efficiency of up to 40%. Compatible with multiple fuel types including natural gas, LPG, and biogas, the flexible design includes automatic fuel switchover capability.
                      </p>
                      <p>
                        Advanced heat recovery systems capture waste heat, enabling cogeneration applications with total system efficiency exceeding 85%. The integrated digital control platform provides real-time performance monitoring with predictive maintenance algorithms that identify potential issues before they affect operation. The specially designed catalyst system ensures compliance with the most stringent emission standards while maintaining optimal performance across variable loads from 30% to 100% with minimal efficiency loss.
                      </p>
                    </>
                  )}
                  
                  {selectedProductForSpecs.category === 'portable' && (
                    <>
                      <p className="mb-3">
                        This compact portable generator combines lightweight design (under 50kg) with robust power output, featuring Kirloskar's proprietary AVR technology that delivers clean sine wave output with less than 3% THD, making it safe for sensitive electronics. The reinforced tubular frame provides superior protection during transportation, while the ergonomic handle design with anti-vibration grips ensures comfortable portability.
                      </p>
                      <p>
                        The unit incorporates intelligent idle control that automatically adjusts engine speed to match load requirements, reducing fuel consumption by up to 25% during partial load operation. Multiple output sockets including standard 15A, USB ports with fast charging capability, and a dedicated high-current outlet provide versatile power options. The rugged construction features IP23 protection rating against dust and water splashes, with all-terrain wheels designed for easy movement across uneven surfaces.
                      </p>
                    </>
                  )}
                  
                  {selectedProductForSpecs.category === 'optiprime' && (
                    <>
                      <p className="mb-3">
                        The Optiprime series represents Kirloskar's latest advancement in generator technology, featuring proprietary variable speed control that dynamically adjusts engine RPM based on load demand, achieving up to 25% fuel savings compared to conventional fixed-speed generators. The integrated IoT platform provides comprehensive remote monitoring and control capabilities, with real-time performance analytics and predictive maintenance scheduling.
                      </p>
                      <p>
                        The advanced combustion system utilizes multi-stage injection technology that optimizes fuel atomization across all load profiles, maintaining emissions well below regulatory requirements while enhancing performance. The smart load management system automatically prioritizes critical equipment during power constraints, ensuring essential operations remain uninterrupted. The modular design enables easy expansion with parallel operation capability for up to 8 units without additional synchronization hardware.
                      </p>
                    </>
                  )}
                  
                  {selectedProductForSpecs.category === 'electrical' && (
                    <>
                      <p className="mb-3">
                        This advanced electrical panel features Form 4b separation with CRCA steel construction (minimum 2mm thickness) and IP54 protection class, ensuring complete isolation between functional units for maximum safety during maintenance. The intelligent power management system incorporates digital metering with Class 0.5 accuracy, capable of monitoring over 50 electrical parameters with harmonics analysis up to the 40th order.
                      </p>
                      <p>
                        The arc flash mitigation technology includes ultra-fast detection systems that respond within 4ms to potential arc faults, while the thermal management system utilizes computational fluid dynamics to optimize air flow patterns, reducing hotspots by up to 15°C. All critical components are sourced from tier-1 manufacturers with redundancy built into protection circuits. The modular design allows for future expansion without system downtime, and the integrated power quality analyzers continuously monitor and log events for comprehensive power audits.
                      </p>
                    </>
                  )}
                  
                  {selectedProductForSpecs.category === 'servo' && (
                    <>
                      <p className="mb-3">
                        This servo stabilizer utilizes high-precision carbon brush technology with a minimum life of 25,000 service hours, achieving voltage correction speeds of 20V/second with regulation accuracy of ±1% even under severe fluctuation conditions. The wide input voltage range accommodates variations from -40% to +25% of nominal voltage while maintaining stable output, with intelligent buck-boost switching that minimizes stress on servo components.
                      </p>
                      <p>
                        The thermal design incorporates specially formulated insulation materials with Class H temperature rating, enabling continuous operation at ambient temperatures up to 55°C without derating. The digital control system provides comprehensive protection against over/under voltage, overload, and phase reversal with adjustable time delay settings. For critical applications, the stabilizer includes bypass functionality with zero transfer time and a specialized inrush current management system that accommodates loads with high starting current requirements without nuisance tripping.
                      </p>
                    </>
                  )}
                  
                  {selectedProductForSpecs.category === 'transformers' && (
                    <>
                      <p className="mb-3">
                        This transformer utilizes premium grain-oriented silicon steel core with step-lap construction technique, reducing core losses by up to 15% compared to conventional designs. The copper windings feature thermally upgraded paper insulation with optimized duct placement for efficient heat dissipation, maintaining winding hotspot temperatures below 98°C even at 110% continuous loading.
                      </p>
                      <p>
                        The hermetically sealed tank design eliminates oxygen contact with insulating oil, extending oil life by up to 35% while the advanced cooling system with directed oil flow technology targets critical hot zones. The comprehensive monitoring package includes fiber optic temperature sensors embedded within windings for real-time thermal profile analysis. Off-circuit tap changers provide ±5% voltage adjustment in 2.5% steps, while superior surge protection withstands lightning impulse voltages up to 95kV. The specially formulated insulating oil contains natural ester compounds for enhanced biodegradability and fire safety with flash point exceeding 300°C.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 pt-4 border-t">
                <Button size="sm" variant="default" className="bg-[#2D6FBA] hover:bg-[#225488] w-full sm:w-auto">
                  Request Quote
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1 w-full sm:w-auto">
                  <Download className="w-4 h-4" /> <a href={Brochure} download={"Brochure.pdf"} >
                            Brochure
                            </a>  
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Generator Selector Modal */}
      <Dialog open={showSelectorModal} onOpenChange={setShowSelectorModal}>
        <DialogContent className="sm:max-w-[500px] bg-black text-white">
          <DialogHeader>
            <DialogTitle className="text-xl text-center mb-2">Select Your Power Requirements</DialogTitle>
          </DialogHeader>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm mb-1">kVA Rating <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Enter kVA rating"
                className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Installation Location <span className="text-red-500">*</span></label>
              <select
                className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
                required
              >
                <option value="">Select location</option>
                <option value="rooftop">Rooftop Installation</option>
                <option value="ground">Ground Floor Installation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Use Case <span className="text-red-500">*</span></label>
              <select
                className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
                required
              >
                <option value="">Select use case</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>
            <DialogTitle className="text-lg text-center mt-2 mb-2">Generator Usage Conditions</DialogTitle>
            <div>
              <label className="block text-sm mb-1">Operating Hours Per Day</label>
              <select
                className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
              >
                <option value="">Select operating hours</option>
                <option value="2">2 hours</option>
                <option value="6">6 hours</option>
                <option value="more">More than 6 hours</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Load Type</label>
              <select
                className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
              >
                <option value="">Select load type</option>
                <option value="constant">Constant Load</option>
                <option value="variable">Variable Load</option>
              </select>
            </div>
            <Button type="submit" className="bg-[#2D6FBA] hover:bg-[#225488] text-white mt-2 w-full">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
      <style jsx global>{`
        .bg-custom-blue {
          background-color: #2D6FBA !important;
        }
        .text-custom-blue {
          color: #2D6FBA !important;
        }
        .hover\:bg-custom-blue:hover {
          background-color: #225488 !important;
        }
      `}</style>
    </>
  );
};

export default Products;