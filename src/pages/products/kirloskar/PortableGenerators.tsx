import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, FileText, Phone, Truck, Zap, Shield, Settings, Battery } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const KirloskarPortableGenerators = () => {
  // Product details
  const products = [
    {
      id: "kp1",
      name: "KG-P1000 Portable Generator",
      power: "1 kVA",
      features: [
        "Ultra-lightweight design",
        "Low noise operation",
        "Fuel-efficient engine",
        "USB charging ports",
        "Single-phase AC output"
      ],
      description: "The KG-P1000 is our compact portable generator, ideal for camping, small outdoor events, and emergency home backup. Its lightweight design makes it easy to transport while still providing reliable power for essential devices.",
      image: "/src/assets/Range4.png"
    },
    {
      id: "kp2",
      name: "KG-P2500 Portable Generator",
      power: "2.5 kVA",
      features: [
        "Integrated wheel kit",
        "Electric and recoil start",
        "Advanced inverter technology",
        "Low oil shutdown",
        "12-hour runtime at 50% load"
      ],
      description: "The KG-P2500 offers mid-range portable power with inverter technology for clean, stable electricity suitable for sensitive electronics. Perfect for RVs, construction sites, and home backup during power outages.",
      image: "/src/assets/Range5.png"
    },
    {
      id: "kp3",
      name: "KG-P5000 Portable Generator",
      power: "5 kVA",
      features: [
        "Heavy-duty tubular frame",
        "Digital display panel",
        "Multiple outlet configuration",
        "Automatic voltage regulation",
        "Electric start with remote capability"
      ],
      description: "Our most powerful portable generator, the KG-P5000 delivers serious performance for job sites, outdoor events, and comprehensive home backup. With its robust design and advanced features, it provides reliable power wherever you need it.",
      image: "/src/assets/Range6.png"
    }
  ];

  return (
    <>
      <SEOJsonLD 
        title="Kirloskar Portable Generators | Kumar Power"
        description="Discover Kirloskar's range of portable generators - compact, powerful, and reliable power solutions for your on-the-go requirements."
        url="https://kumarpower.com/products/kirloskar/portable-generators"
        imageUrl="https://kumarpower.com/images/kirloskar-portable-generator.jpg"
      />
      <Header />
      
      <main>
        {/* Hero Section - Black Background */}
        <section className="bg-black py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729835002/portable_generator_pattern_hd7rtf.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="block h-px w-12 md:w-20 bg-white/70 mr-4" />
                <span className="text-white text-xl md:text-2xl font-semibold tracking-wider uppercase">
                  KIRLOSKAR PORTABLE POWER
                </span>
                <span className="block h-px w-12 md:w-20 bg-white/70 ml-4" />
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold text-center text-white mb-6 leading-tight">
                Power Anywhere You Need It
              </h1>
              
              <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto mb-10">
                Compact, reliable, and efficient portable generators engineered for versatility
                and dependable performance in any situation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="#product-range" className="flex items-center gap-2">
                    Explore Our Range
                    <ChevronRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="#contact" className="flex items-center gap-2">
                    Get Expert Advice
                    <Phone size={16} />
                  </Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">Easy</div>
                  <div className="text-sm text-white/80">Transport</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">Quick</div>
                  <div className="text-sm text-white/80">Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">Reliable</div>
                  <div className="text-sm text-white/80">Performance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section - White Background */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">KEY BENEFITS</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              The Portable Power Advantage
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Truck className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Ultimate Mobility</h3>
                <p className="text-gray-600">
                  Lightweight design with integrated handles or wheel kits make our generators easy to transport 
                  from home to campsite, construction site, or wherever power is needed.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Zap className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Instant Power</h3>
                <p className="text-gray-600">
                  Quick setup and reliable starting system provides immediate electricity during outages or in 
                  remote locations without the need for complex installation or waiting.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Settings className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Versatile Applications</h3>
                <p className="text-gray-600">
                  From powering essential home appliances during outages to supporting outdoor events or providing 
                  electricity at job sites, our portable generators adapt to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase - Black Background */}
        <section id="product-range" className="py-16 md:py-24 bg-gray-900 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729835002/circuit_pattern_g3ktrd.svg')",
            backgroundSize: "cover",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">PRODUCT LINEUP</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
              Kirloskar Portable Generator Series
            </h2>
            
            <div className="space-y-16">
              {products.map((product, index) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-colors">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 bg-gradient-to-br from-blue-900/50 to-black/50 p-6 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-w-full max-h-[250px] object-contain mix-blend-lighten"
                      />
                    </div>
                    <div className="p-8 md:col-span-3 relative">
                      <Badge className="absolute top-6 right-6 bg-blue-600/90 hover:bg-blue-700 backdrop-blur-sm text-white">
                        {product.power}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-3 text-white">{product.name}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                      
                      <h4 className="font-semibold text-blue-300 mb-3 mt-6">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-200">
                            <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Link to="#enquiry" className="flex items-center gap-2">
                            Request Specifications
                            <ChevronRight size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section - White Background */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">APPLICATIONS</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Power Solutions for Every Scenario
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Home Backup</h3>
                <p className="text-gray-600 text-sm">
                  Keep essential appliances running during unexpected power outages, from refrigerators to medical equipment
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Outdoor Recreation</h3>
                <p className="text-gray-600 text-sm">
                  Power for camping trips, RVs, tailgating, and outdoor adventures to enhance your experience
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Construction Sites</h3>
                <p className="text-gray-600 text-sm">
                  Reliable power for tools, equipment, and lighting at remote job sites with no grid access
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Events & Functions</h3>
                <p className="text-gray-600 text-sm">
                  Power for outdoor gatherings, parties, and events requiring lighting, sound systems, and equipment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Black Background */}
        <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729835002/power_grid_pattern_r7ktfd.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">ADVANCED FEATURES</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Designed for Performance & Reliability
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Protection Systems</h3>
                <p className="text-gray-300">
                  Built-in safeguards including low oil shutdown, overload protection, and circuit breakers to prevent damage and ensure longevity.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <Battery className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Fuel Efficiency</h3>
                <p className="text-gray-300">
                  Advanced engine design optimizes fuel consumption, providing longer runtime between refueling and reducing operating costs.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Inverter Technology</h3>
                <p className="text-gray-300">
                  Select models feature inverter technology for clean, stable power safe for sensitive electronics and reduced noise levels.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Digital Controls</h3>
                <p className="text-gray-300">
                  User-friendly digital displays and control panels provide real-time information on power output, fuel level, and maintenance needs.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Quiet Operation</h3>
                <p className="text-gray-300">
                  Sound-dampening technology and muffler designs significantly reduce noise levels compared to traditional generators.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Multiple Outlets</h3>
                <p className="text-gray-300">
                  Various outlet configurations including standard AC outlets, USB ports, and 12V DC outlets to power different devices simultaneously.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table - White Background */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">MODEL COMPARISON</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Find Your Perfect Portable Generator
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Model Features</th>
                    <th className="p-4 text-center">KG-P1000</th>
                    <th className="p-4 text-center">KG-P2500</th>
                    <th className="p-4 text-center">KG-P5000</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Power Output</td>
                    <td className="p-4 text-center">1 kVA</td>
                    <td className="p-4 text-center">2.5 kVA</td>
                    <td className="p-4 text-center">5 kVA</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Weight</td>
                    <td className="p-4 text-center">15 kg</td>
                    <td className="p-4 text-center">32 kg</td>
                    <td className="p-4 text-center">75 kg</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Runtime (50% Load)</td>
                    <td className="p-4 text-center">6 hours</td>
                    <td className="p-4 text-center">12 hours</td>
                    <td className="p-4 text-center">10 hours</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Starting System</td>
                    <td className="p-4 text-center">Recoil</td>
                    <td className="p-4 text-center">Recoil/Electric</td>
                    <td className="p-4 text-center">Electric with Remote</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Noise Level</td>
                    <td className="p-4 text-center">58 dB</td>
                    <td className="p-4 text-center">62 dB</td>
                    <td className="p-4 text-center">72 dB</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Fuel Tank</td>
                    <td className="p-4 text-center">3.8 L</td>
                    <td className="p-4 text-center">15 L</td>
                    <td className="p-4 text-center">25 L</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Best For</td>
                    <td className="p-4 text-center">Camping, Small Devices</td>
                    <td className="p-4 text-center">RVs, Home Essentials</td>
                    <td className="p-4 text-center">Construction, Full Home Backup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials - Black Background */}
        <section className="py-16 md:py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729835002/testimonial_pattern_d7ktrf.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <div className="h-1 w-10 bg-blue-400"></div>
                <span className="text-blue-400 font-medium">TESTIMONIALS</span>
                <div className="h-1 w-10 bg-blue-400"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                What Our Customers Say
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "The KG-P2500 has been a lifesaver during hurricane season. Powers our refrigerator, lights, and even AC for hours. Starts on the first pull every time."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">RK</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Rajiv Kumar</h4>
                    <p className="text-sm text-gray-400">Homeowner, Mumbai</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "We use the KG-P5000 on all our construction sites. It's reliable, fuel-efficient, and tough enough to handle the demands of daily use in harsh conditions."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">AS</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Amit Singh</h4>
                    <p className="text-sm text-gray-400">Site Manager, Delhi NCR</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "The KG-P1000 is perfect for our camping trips. Lightweight enough to carry easily and powers our equipment all weekend. The USB ports are incredibly convenient."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">PR</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Priya Rajan</h4>
                    <p className="text-sm text-gray-400">Outdoor Enthusiast, Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - White Background */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                  Ready to Find Your Portable Power Solution?
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Our power experts can help you select the perfect generator based on your specific needs,
                  whether for home backup, outdoor activities, or professional use.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-4 text-white">Schedule a Consultation</h3>
                  <p className="text-white/80 mb-4">
                    Speak with our product specialists who can answer your questions and provide personalized recommendations.
                  </p>
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    <Link to="/contact" className="flex items-center gap-2">
                      Talk to an Expert
                      <Phone size={16} />
                    </Link>
                  </Button>
                </div>
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-4 text-white">Download Resources</h3>
                  <p className="text-white/80 mb-4">
                    Get detailed product specifications, comparison charts, and maintenance guides for our portable generators.
                  </p>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    <Link to="#brochure" className="flex items-center gap-2">
                      Download Brochure
                      <FileText size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default KirloskarPortableGenerators;
