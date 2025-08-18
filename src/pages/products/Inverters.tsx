import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, FileText, Phone, Shield, Zap, Battery, Activity, Server } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Inverters = () => {
  // Product details
  const products = [
    {
      id: "inv1",
      name: "Home UPS Systems",
      capacity: "600 VA - 3 kVA",
      features: [
        "Pure sine wave output",
        "Fast charging batteries",
        "LCD display",
        "Overload protection",
        "Automatic voltage regulation"
      ],
      description: "Our home UPS systems provide reliable backup power for essential home appliances during outages. With fast switchover times and pure sine wave output, these systems ensure your critical devices stay running without interruption.",
      image: "/src/assets/Kashyapi (2).png"
    },
    {
      id: "inv2",
      name: "Commercial UPS Systems",
      capacity: "5 kVA - 30 kVA",
      features: [
        "Online double-conversion technology",
        "Expandable battery banks",
        "Network management capabilities",
        "Advanced battery management",
        "Scalable configuration options"
      ],
      description: "Designed for small to medium businesses, our commercial UPS systems protect critical equipment from power issues. These units offer excellent reliability, efficiency, and power quality for servers, networking equipment, and other business-critical systems.",
      image: "/src/assets/SIS (1).png"
    },
    {
      id: "inv3",
      name: "Industrial UPS Systems",
      capacity: "40 kVA - 500 kVA",
      features: [
        "High power density",
        "Parallel operation capability",
        "Advanced digital control system",
        "Front access for easy maintenance",
        "Comprehensive power monitoring"
      ],
      description: "Our industrial UPS solutions are engineered for mission-critical applications where power reliability is non-negotiable. These robust systems provide clean, uninterrupted power for data centers, industrial processes, medical facilities, and other critical infrastructure.",
      image: "/src/assets/CEC (1).png"
    },
    {
      id: "inv4",
      name: "Solar Hybrid Inverters",
      capacity: "1 kVA - 100 kVA",
      features: [
        "Solar priority operation",
        "Grid-tie capability",
        "Battery bank integration",
        "Smart energy management",
        "Multi-mode operation"
      ],
      description: "Solar hybrid inverters combine the best of renewable energy and grid power. These innovative systems can prioritize solar power when available, use grid power when needed, and provide backup power during outages, maximizing your energy independence and savings.",
      image: "/src/assets/Caritas (1).png"
    }
  ];

  return (
    <>
      <SEOJsonLD 
        title="Inverters & UPS Systems | Kumar Power"
        description="Reliable backup power solutions for homes, businesses, and industries. Protect your critical systems with our advanced UPS and inverter technologies."
        url="https://kumarpower.com/products/inverters"
        imageUrl="https://kumarpower.com/images/inverter-ups-systems.jpg"
      />
      <Header />
      
      <main>
        {/* Hero Section - Black Background */}
        <section className="bg-black py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730035001/inverter_pattern_r7ktbd.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="block h-px w-12 md:w-20 bg-white/70 mr-4" />
                <span className="text-white text-xl md:text-2xl font-semibold tracking-wider uppercase">
                  POWER BACKUP SOLUTIONS
                </span>
                <span className="block h-px w-12 md:w-20 bg-white/70 ml-4" />
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold text-center text-white mb-6 leading-tight">
                Inverters & UPS Systems
              </h1>
              
              <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto mb-10">
                Reliable backup power solutions for homes, businesses, and industries
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="#product-range" className="flex items-center gap-2">
                    Find Your Solution
                    <ChevronRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="#contact" className="flex items-center gap-2">
                    Request Consultation
                    <Phone size={16} />
                  </Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">0ms</div>
                  <div className="text-sm text-white/80">Transfer Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                  <div className="text-sm text-white/80">Reliability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
                  <div className="text-sm text-white/80">Protection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - White Background */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">KEY BENEFITS</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Why Choose Our UPS Systems?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Zero Downtime</h3>
                <p className="text-gray-600">
                  Instant switchover to battery power during outages keeps your equipment running without interruption.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Equipment Protection</h3>
                <p className="text-gray-600">
                  Advanced filtering and regulation protect sensitive electronics from power surges and fluctuations.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Activity className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Energy Efficiency</h3>
                <p className="text-gray-600">
                  High-efficiency designs reduce energy consumption and operational costs while extending battery life.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Server className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Scalable Solutions</h3>
                <p className="text-gray-600">
                  From small homes to large data centers, our systems scale to meet your exact power requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding UPS - Black Background */}
        <section className="py-16 md:py-24 bg-gray-900 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730035001/ups_pattern_g7rtsd.svg')",
            backgroundSize: "cover",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">TECHNOLOGY</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
              Understanding UPS Technologies
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-white">Standby UPS</h3>
                  <p className="text-gray-300 mb-5">Basic protection that switches to battery power when utility power fails. Ideal for home computers and basic electronics.</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-blue-300 font-medium mb-2">Typical Applications:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Home computers</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Gaming systems</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Entry-level networking</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-white">Line Interactive UPS</h3>
                  <p className="text-gray-300 mb-5">Provides voltage regulation and power conditioning along with backup power. Suitable for small businesses and premium home setups.</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-blue-300 font-medium mb-2">Typical Applications:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Small business servers</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Network equipment</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Point-of-sale systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-3 text-white">Online Double Conversion UPS</h3>
                  <p className="text-gray-300 mb-5">Premium protection that continuously converts power from AC to DC and back, eliminating all power anomalies. Essential for critical systems.</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-blue-300 font-medium mb-2">Typical Applications:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Data centers</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Medical equipment</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Industrial controls</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">2-10ms</div>
                  <div className="text-sm text-white/80">Standby Transfer Time</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">±10%</div>
                  <div className="text-sm text-white/80">Line Conditioning</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">0ms</div>
                  <div className="text-sm text-white/80">Online Transfer Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase - White Background */}
        <section id="product-range" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">PRODUCT RANGE</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Our UPS & Inverter Solutions
            </h2>
            
            <div className="space-y-12">
              {products.map((product, index) => (
                <div key={product.id} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="md:col-span-1 p-6 flex items-center justify-center bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-w-full max-h-[250px] object-contain"
                      />
                    </div>
                    <div className="p-8 md:col-span-2 relative">
                      <Badge className="absolute top-6 right-6 bg-blue-600 hover:bg-blue-700 text-white">
                        {product.capacity}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{product.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                      
                      <h4 className="font-semibold text-blue-700 mb-3 mt-6">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Link to="#enquiry" className="flex items-center gap-2">
                            Enquire Now
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

        {/* CTA Section - Black Background */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730035001/power_grid_pattern_r7ktfd.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Never Lose Power Again
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
                Protect your critical systems and data with a professionally specified UPS solution tailored to your needs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                  <Link to="#contact" className="flex items-center gap-2">
                    Schedule a Power Assessment
                    <ChevronRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="#calculator" className="flex items-center gap-2">
                    Calculate Your Power Needs
                    <FileText size={16} />
                  </Link>
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">98%</div>
                  <div className="text-sm text-white/80">Energy Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">50%</div>
                  <div className="text-sm text-white/80">Lower Operational Costs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
                  <div className="text-sm text-white/80">Technical Support</div>
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

export default Inverters;
