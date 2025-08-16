import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState } from "react";

const ElectricalPanels = () => {
  // Product details for electrical panel products
  const panelProducts = [
    {
      id: "amf",
      name: "AMF Panel",
      subtitle: "Auto Mains Failure Panel",
      features: [
        "Auto transfer",
        "Remote monitoring",
        "Generator protection"
      ],
      image: "/images/panels/amf-panel.jpg"
    },
    {
      id: "vcb",
      name: "Vacuum Circuit Breaker",
      subtitle: "Compact, maintenance-free medium voltage breaker",
      features: [
        "Indoor/Outdoor enclosures",
        "Low maintenance",
        "Reliable operation"
      ],
      image: "/images/panels/vacuum-circuit-breaker.jpg"
    },
    {
      id: "sf6",
      name: "SF6 Circuit Breaker",
      subtitle: "High voltage gas insulated circuit breaker",
      features: [
        "Low contact wear",
        "Low maintenance",
        "Space saving"
      ],
      image: "/images/panels/sf6-circuit-breaker.jpg"
    },
    {
      id: "ups",
      name: "Unitised Package Substation",
      subtitle: "Compact all-in-one substation unit",
      features: [
        "Pre-engineered",
        "All-in-one",
        "Plug and play"
      ],
      image: "/images/panels/unitised-package-substation.jpg"
    },
    {
      id: "custom",
      name: "Custom Electrical Panels",
      subtitle: "Tailored LV control panels",
      features: [
        "MCC",
        "PCC",
        "Distribution"
      ],
      image: "/images/panels/custom-electrical-panels.jpg"
    },
    {
      id: "porcelain",
      name: "Porcelain Clad VCB",
      subtitle: "Rugged outdoor vacuum circuit breaker",
      features: [
        "Porcelain insulation",
        "Ovity movement",
        "Highly tamper resistant"
      ],
      image: "/images/panels/porcelain-clad-vcb.jpg"
    },
    {
      id: "distribution",
      name: "Distribution Box",
      subtitle: "Safe and reliable load distribution",
      features: [
        "MCB",
        "RCCB",
        "Residential & Commercial"
      ],
      image: "/images/panels/distribution-box.jpg"
    },
    {
      id: "feeder",
      name: "Feeder Pillar",
      subtitle: "Outdoor power distribution and metering",
      features: [
        "Flat rating",
        "Tamper proof",
        "SS/CRCA enclosure"
      ],
      image: "/images/panels/feeder-pillar.jpg"
    }
  ];

  return (
    <>
      <SEOJsonLD />
      <Header />
      
      <main className="bg-black text-white">
        {/* Hero Section - Updated to match the image exactly */}
        <section className="py-16 md:py-20 bg-white text-black">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="pr-0 md:pr-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Precision Power Control.
                <span className="block mt-2">Built to Last.</span>
              </h1>
              <p className="text-blue-700 text-xl mb-3">
                Engineered Panels & Protection Systems
              </p>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                Explore our end-to-end electrical panels range, built for mission-critical industrial applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition-colors text-sm">
                  Request Quotation
                </button>
                <button className="bg-white  hover:bg-gray-100 text-blue-800 px-5 py-2 rounded flex items-center transition-colors text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <img 
                src="/assets/electrical-panel-hero.jpg" 
                alt="Electrical control panel with gauges and switches" 
                className="w-full"
              />
            </div>
          </div>
        </section>
        
        {/* Panel Categories - Based on second image */}
        <section className="py-6 border-y border-gray-800">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap">All Products</button>
              <button className="hover:bg-gray-800 px-4 py-2 rounded-md text-gray-300 whitespace-nowrap">AMF Panels</button>
              <button className="hover:bg-gray-800 px-4 py-2 rounded-md text-gray-300 whitespace-nowrap">Circuit Breakers</button>
              <button className="hover:bg-gray-800 px-4 py-2 rounded-md text-gray-300 whitespace-nowrap">Substations</button>
              <button className="hover:bg-gray-800 px-4 py-2 rounded-md text-gray-300 whitespace-nowrap">Custom Panels</button>
              <button className="hover:bg-gray-800 px-4 py-2 rounded-md text-gray-300 whitespace-nowrap">Distribution</button>
            </div>
          </div>
        </section>
        
        {/* Products Grid - Moved directly after Panel Categories as requested */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-semibold mb-8 text-center">Electrical Solution Provider</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {panelProducts.map((product) => (
                <div key={product.id} className="bg-gray-600 rounded-md overflow-hidden hover:bg-gray-700 transition-colors">
                  <div className="h-48 overflow-hidden bg-gray-600">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">{product.subtitle}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full py-2 bg-gray-800 hover:bg-gray-500 text-white text-sm rounded transition-colors">
                      View Specifications
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Key Features Section - Based on first image */}
        <section className="py-12 md:py-16 bg-gray-400">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-5 gap-6 text-center">
              {/* Feature 1 - Safety Standards */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium mb-1">Built to IS/IEC Standards</h3>
                <p className="text-xs text-black">Compliant with international safety standards</p>
              </div>
              
              {/* Feature 2 - Kirloskar Integration */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium mb-1">Kirloskar-approved Integration</h3>
                <p className="text-xs text-black">Seamless compatibility with Kirloskar systems</p>
              </div>
              
              {/* Feature 3 - Remote Monitoring */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium mb-1">Remote Monitoring Ready</h3>
                <p className="text-xs text-black">IoT enabled for real-time performance tracking</p>
              </div>
              
              {/* Feature 4 - Smart Metering */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium mb-1">Smart Metering Support</h3>
                <p className="text-xs text-black">Advanced energy management capabilities</p>
              </div>
              
              {/* Feature 5 - Custom Design */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 001 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium mb-1">Custom Design & Manufacturing</h3>
                <p className="text-xs text-black">Tailored solutions for your specific needs</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Our Panels - Updated to precisely match the image */}
        <section className="py-0 bg-gradient-to-r from-black via-black to-black">
          <div className="flex flex-col md:flex-row">
            {/* Left column - Image */}
            <div className="md:w-1/2">
              <img 
                src="/assets/electrical-panel-technician.jpg" 
                alt="Industrial electrical panel technician with orange helmet examining panels"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right column - Features list */}
            <div className="md:w-1/2 bg-blue-600 px-8 py-12 md:px-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Why Choose Our Panels</h2>
              
              <div className="space-y-6">
                {/* Feature Point 1 */}
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Built to IS/IEC standards</h3>
                    <p className="text-sm text-gray-100">All our products comply with international and Indian standards for safety and performance.</p>
                  </div>
                </div>
                
                {/* Feature Point 2 */}
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Kirloskar-approved integration</h3>
                    <p className="text-sm text-gray-100">Seamlessly integrates with Kirloskar generators and power systems.</p>
                  </div>
                </div>
                
                {/* Feature Point 3 */}
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Remote monitoring ready</h3>
                    <p className="text-sm text-gray-100">Built-in compatibility with IoT and SCADA systems for real-time monitoring.</p>
                  </div>
                </div>
                
                {/* Feature Point 4 */}
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Smart metering support</h3>
                    <p className="text-sm text-gray-100">Advanced metering capabilities for energy management and analytics.</p>
                  </div>
                </div>
                
                {/* Feature Point 5 */}
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Custom design & manufacturing</h3>
                    <p className="text-sm text-gray-100">Tailored solutions designed to meet your specific requirements and specifications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Need Help Section */}
        <section className="py-10 bg-black text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Electrical Solutions?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Our team of experts will help you select the perfect solution based on your industry and budget.</p>
            <button className="bg-white text-black hover:bg-gray-200 font-medium px-6 py-3 rounded inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Talk to an Expert
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ElectricalPanels;
