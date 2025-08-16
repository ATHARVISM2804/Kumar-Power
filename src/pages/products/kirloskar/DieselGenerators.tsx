import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState } from "react";

const KirloskarDieselGenerators = () => {
  // Define generator ranges based on the comparison table
  const generatorRanges = [
    {
      range: "7.5 - 20 kVA",
      phase: "1φ/3φ",
      fuelEfficiency: "High",
      application: "Home/Small Office",
      enclosureType: "Compact Acoustic",
      image: "/images/generators/small-generator.jpg",
      description: "Compact, reliable, and efficient backup power for small commercial, residential, or mobile operations.",
      features: [
        "CPCB IV+ Compliant",
        "Kirloskar Engines",
        "Fuel Efficient",
        "Compact Acoustic Enclosures"
      ]
    },
    {
      range: "25 - 58.5 kVA",
      phase: "3φ",
      fuelEfficiency: "High",
      application: "Small Business",
      enclosureType: "Weather Proof",
      image: "/images/generators/medium-small-generator.jpg",
      description: "Medium-capacity generators ideal for small to medium businesses, retail outlets, and hospitality venues.",
      features: [
        "CPCB IV+ Compliant",
        "Kirloskar Engines",
        "Low Maintenance",
        "Weather Proof Enclosures"
      ]
    },
    {
      range: "62.5 - 160 kVA",
      phase: "3φ",
      fuelEfficiency: "Medium-High",
      application: "Medium Business",
      enclosureType: "Industrial",
      image: "/images/generators/medium-generator.jpg",
      description: "Powerful solutions for medium-sized industrial applications, hospitals, and commercial complexes.",
      features: [
        "CPCB IV+ Compliant",
        "Kirloskar Engines",
        "High Efficiency",
        "Advanced Control Systems"
      ]
    },
    {
      range: "200 - 250 kVA",
      phase: "3φ",
      fuelEfficiency: "Medium-High",
      application: "Industrial",
      enclosureType: "Weatherproof Outdoor",
      image: "/images/generators/large-medium-generator.jpg",
      description: "High-capacity generators for large commercial buildings, manufacturing facilities, and data centers.",
      features: [
        "CPCB IV+ Compliant",
        "Kirloskar Engines",
        "Remote Monitoring",
        "Industrial Grade Enclosures"
      ]
    },
    {
      range: "320 - 750 kVA",
      phase: "3φ",
      fuelEfficiency: "Medium",
      application: "Heavy Industrial",
      enclosureType: "Heavy-Duty",
      image: "/images/generators/large-generator.jpg",
      description: "Industrial-grade power solutions for factories, large infrastructure projects, and critical facilities.",
      features: [
        "CPCB IV+ Compliant",
        "Kirloskar Engines",
        "Parallel Operation",
        "Heavy Duty Construction"
      ]
    },
    {
      range: "750 - 1500 kVA",
      phase: "3φ",
      fuelEfficiency: "Medium",
      application: "Enterprise",
      enclosureType: "Custom Solutions",
      image: "/images/generators/enterprise-generator.jpg",
      description: "Enterprise-level generators for large industrial complexes, data centers, and critical infrastructure.",
      features: [
        "CPCB IV+ Compliant",
        "Kirloskar Engines",
        "Synchronized Operation",
        "Custom Solutions Available"
      ]
    }
  ];

  // State for selected models to compare
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  // Toggle selection for comparison
  const toggleModelSelection = (range: string) => {
    if (selectedModels.includes(range)) {
      setSelectedModels(selectedModels.filter(model => model !== range));
    } else {
      if (selectedModels.length < 3) {
        setSelectedModels([...selectedModels, range]);
      } else {
        alert("You can compare up to 3 models at a time");
      }
    }
  };

  return (
    <>
      <SEOJsonLD />
      <Header />
      
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/generators/generator-hero-bg.jpg" 
              alt="Diesel generator" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Powering Progress, One Generator at a Time
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Explore our full range of Kirloskar-certified diesel generators, trusted across
                India's most demanding industries.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="#contact" 
                  className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded hover:bg-blue-700 transition-colors"
                >
                  Request a Quote
                </a>
                <a 
                  href="#download" 
                  className="inline-block border border-white text-white font-medium px-6 py-3 rounded hover:bg-gray-800 transition-colors flex items-center"
                >
                  <span>Download Product Catalogue</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid - Moved right after the Hero section as requested */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Generator Card 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/generators/small-generator.jpg" 
                    alt="7.5 kVA to 20 kVA Diesel Generators" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">7.5 kVA to 20 kVA Diesel Generators</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Compact, reliable, and efficient backup power for small commercial, residential, or mobile operations.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>CPCB IV+ Compliant</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Kirloskar Engines</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Fuel Efficient</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Compact Acoustic Enclosures</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="#explore-7-20kva" 
                    className="block w-full py-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Explore Models
                  </a>
                </div>
              </div>
              
              {/* Generator Card 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/generators/medium-small-generator.jpg" 
                    alt="25 kVA to 58.5 kVA Diesel Generators" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">25 kVA to 58.5 kVA Diesel Generators</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Medium-capacity generators ideal for small to medium businesses, retail outlets, and hospitality venues.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>CPCB IV+ Compliant</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Kirloskar Engines</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Low Maintenance</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Weather Proof Enclosures</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="#explore-25-58kva" 
                    className="block w-full py-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Explore Models
                  </a>
                </div>
              </div>
              
              {/* Generator Card 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/generators/medium-generator.jpg" 
                    alt="62.5 kVA to 160 kVA Diesel Generators" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">62.5 kVA to 160 kVA Diesel Generators</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Powerful solutions for medium-sized industrial applications, hospitals, and commercial complexes.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>CPCB IV+ Compliant</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Kirloskar Engines</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>High Efficiency</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Advanced Control Systems</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="#explore-62-160kva" 
                    className="block w-full py-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Explore Models
                  </a>
                </div>
              </div>
              
              {/* Generator Card 4 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/generators/large-medium-generator.jpg" 
                    alt="200 kVA to 250 kVA Diesel Generators" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">200 kVA to 250 kVA Diesel Generators</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    High-capacity generators for large commercial buildings, manufacturing facilities, and data centers.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>CPCB IV+ Compliant</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Kirloskar Engines</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Remote Monitoring</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Industrial Grade Enclosures</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="#explore-200-250kva" 
                    className="block w-full py-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Explore Models
                  </a>
                </div>
              </div>
              
              {/* Generator Card 5 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/generators/large-generator.jpg" 
                    alt="320 kVA to 750 kVA Diesel Generators" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">320 kVA to 750 kVA Diesel Generators</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Industrial-grade power solutions for factories, large infrastructure projects, and critical facilities.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>CPCB IV+ Compliant</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Kirloskar Engines</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Parallel Operation</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Heavy Duty Construction</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="#explore-320-750kva" 
                    className="block w-full py-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Explore Models
                  </a>
                </div>
              </div>
              
              {/* Generator Card 6 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/generators/enterprise-generator.jpg" 
                    alt="750 kVA to 1500 kVA Diesel Generators" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">750 kVA to 1500 kVA Diesel Generators</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Enterprise-level generators for large industrial complexes, data centers, and critical infrastructure.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>CPCB IV+ Compliant</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Kirloskar Engines</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Synchronized Operation</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      <span>Custom Solutions Available</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="#explore-750-1500kva" 
                    className="block w-full py-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Explore Models
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Generator Comparison Table - Updated to match the image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Compare Generator Models
              </h2>
              <p className="text-gray-600 mb-8">
                Find the perfect match for your power requirements
              </p>
              
              <div className="mb-8 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-700 text-white">
                      <th className="py-3 px-4 text-left border-b border-blue-800">Range</th>
                      <th className="py-3 px-4 text-center border-b border-blue-800">Phase</th>
                      <th className="py-3 px-4 text-center border-b border-blue-800">Fuel Efficiency</th>
                      <th className="py-3 px-4 text-center border-b border-blue-800">Application</th>
                      <th className="py-3 px-4 text-center border-b border-blue-800">Enclosure Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generatorRanges.map((generator, index) => (
                      <tr 
                        key={index} 
                        className={index % 2 === 1 ? "bg-gray-200 hover:bg-gray-300" : "bg-white hover:bg-gray-100"}
                        onClick={() => toggleModelSelection(generator.range)}
                      >
                        <td className="py-3 px-4 border-b border-gray-200">
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              className="mr-2 h-4 w-4" 
                              checked={selectedModels.includes(generator.range)}
                              onChange={() => toggleModelSelection(generator.range)}
                            />
                            <span>{generator.range}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center border-b border-gray-200">{generator.phase}</td>
                        <td className="py-3 px-4 text-center border-b border-gray-200">{generator.fuelEfficiency}</td>
                        <td className="py-3 px-4 text-center border-b border-gray-200">{generator.application}</td>
                        <td className="py-3 px-4 text-center border-b border-gray-200">{generator.enclosureType}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  className="inline-flex items-center justify-center bg-black text-white font-medium px-6 py-2.5 rounded hover:bg-gray-800 transition-colors"
                  onClick={() => selectedModels.length ? alert(`Comparing models: ${selectedModels.join(', ')}`) : alert('Please select models to compare')}
                  disabled={selectedModels.length === 0}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Compare Selected Models
                </button>
                
                <a 
                  href="#downloadSpecs" 
                  className="inline-flex items-center bg-blue-600 text-white font-medium px-6 py-2.5 rounded hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Full Specs PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</h3>
                <p className="text-gray-300">Enterprise Clients</p>
              </div>
              <div className="p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">30+</h3>
                <p className="text-gray-300">Years of Excellence</p>
              </div>
              <div className="p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10000+</h3>
                <p className="text-gray-300">Installations</p>
              </div>
              <div className="p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</h3>
                <p className="text-gray-300">Service Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Help Section */}
        <section className="py-16 bg-gray-500">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Help Choosing the Right Power Solutions?
              </h2>
              <p className="text-gray-600 mb-8">
                Our team of experts will help you select the perfect solution based on your industry and budget.
              </p>
              
              <a 
                href="#talk-expert" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Talk to an Expert
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default KirloskarDieselGenerators;
