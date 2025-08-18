import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, FileText, Phone, Shield, Zap, Settings, Activity, Battery } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const VFDs = () => {
  // Product details
  const products = [
    {
      id: "vfd1",
      name: "Micro VFD Series",
      capacity: "0.5 HP - 5 HP",
      features: [
        "Compact size",
        "Simple operation",
        "Built-in EMI filter",
        "V/F control",
        "PID control function"
      ],
      description: "Our Micro VFD series is designed for small motors in light-duty applications such as fans, pumps, and small machinery. These compact drives offer essential features in a simple, user-friendly package ideal for basic speed control applications.",
      image: "/src/assets/Seasons (1).png"
    },
    {
      id: "vfd2",
      name: "Standard VFD Series",
      capacity: "5 HP - 75 HP",
      features: [
        "Multiple control modes",
        "Advanced motor protection",
        "Modbus communication",
        "Dynamic braking capability",
        "Customizable I/O"
      ],
      description: "The Standard VFD Series offers comprehensive motor control for medium-duty applications in commercial and industrial settings. These drives provide an excellent balance of features, performance, and value for common variable speed applications.",
      image: "/src/assets/ALL PRODUCTS.png"
    },
    {
      id: "vfd3",
      name: "Premium VFD Series",
      capacity: "50 HP - 500 HP",
      features: [
        "Vector control capability",
        "Built-in PLC functionality",
        "Multiple fieldbus options",
        "Energy optimization features",
        "Advanced diagnostics"
      ],
      description: "Our Premium VFD Series delivers sophisticated motor control for demanding industrial applications requiring precise speed regulation, torque control, and advanced functionality. These drives offer exceptional performance, reliability, and versatility.",
      image: "/src/assets/FRAMEFRAME.png"
    },
    {
      id: "vfd4",
      name: "Specialized VFD Series",
      capacity: "1 HP - 300 HP",
      features: [
        "Application-specific programming",
        "Industry-specific protection features",
        "Specialized cooling systems",
        "Enhanced environmental protection",
        "Custom firmware options"
      ],
      description: "The Specialized VFD Series includes drives designed for specific applications like HVAC systems, water/wastewater equipment, elevators, and textile machinery. These drives come pre-configured with application-specific features and parameters.",
      image: "/src/assets/ALL PRODUCTS.png"
    }
  ];

  return (
    <>
      <SEOJsonLD 
        title="Variable Frequency Drives (VFDs) | Kumar Power"
        description="Advanced motor control solutions for energy savings and performance optimization. Explore our range of VFDs for various applications."
        url="https://kumarpower.com/products/vfds"
        imageUrl="https://kumarpower.com/images/vfd-solutions.jpg"
      />
      <Header />
      
      <main>
        {/* Hero Section - Black Background */}
        <section className="bg-black py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730235001/vfd_pattern_r7ktbd.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="block h-px w-12 md:w-20 bg-white/70 mr-4" />
                <span className="text-white text-xl md:text-2xl font-semibold tracking-wider uppercase">
                  MOTOR CONTROL SOLUTIONS
                </span>
                <span className="block h-px w-12 md:w-20 bg-white/70 ml-4" />
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold text-center text-white mb-6 leading-tight">
                Variable Frequency Drives (VFDs)
              </h1>
              
              <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto mb-10">
                Advanced motor control solutions for energy savings and performance optimization
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="#product-range" className="flex items-center gap-2">
                    Explore Solutions
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
                  <div className="text-3xl font-bold text-blue-400 mb-1">50%</div>
                  <div className="text-sm text-white/80">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">99%</div>
                  <div className="text-sm text-white/80">Reliability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">±0.5%</div>
                  <div className="text-sm text-white/80">Speed Accuracy</div>
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
              Why Invest in VFD Technology?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Activity className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Energy Savings</h3>
                <p className="text-gray-600">
                  Reduce energy consumption by 20-50% by matching motor speed to actual load requirements instead of running at constant speed.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Shield className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Extended Equipment Life</h3>
                <p className="text-gray-600">
                  Soft starting and stopping reduces mechanical stress, while optimized speed operation minimizes wear and tear on motors and driven equipment.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Settings className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Process Optimization</h3>
                <p className="text-gray-600">
                  Precise speed control allows for optimized production processes, improving product quality and consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section - Black Background */}
        <section className="py-16 md:py-24 bg-gray-900 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730235001/circuit_pattern_g7rtsd.svg')",
            backgroundSize: "cover",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">APPLICATIONS</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
              Common VFD Applications
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Pumping Systems</h3>
                <p className="text-gray-300">
                  Water supply, irrigation, wastewater, chemical processing
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">HVAC Systems</h3>
                <p className="text-gray-300">
                  Fans, blowers, compressors, cooling towers
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Manufacturing</h3>
                <p className="text-gray-300">
                  Conveyors, machine tools, mixers, extruders
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Material Handling</h3>
                <p className="text-gray-300">
                  Cranes, hoists, elevators, escalators
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <div className="text-sm text-white/80">Average Energy Savings</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-white/80">Continuous Operation</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">ROI</div>
                <div className="text-sm text-white/80">Within 12-18 Months</div>
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
              Our VFD Range
            </h2>
            
            <div className="space-y-16">
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

        {/* Expert Support - Black Background */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730235001/tech_pattern_d7tbrs.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">EXPERT SUPPORT</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
              Expert VFD Support
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl overflow-hidden border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-white">Selection & Sizing</h3>
                  <p className="text-gray-300 mb-6">Our technical team helps you select the right VFD for your specific application based on:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Motor specifications</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Load characteristics</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Performance requirements</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Environmental conditions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl overflow-hidden border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 text-white">Installation & Service</h3>
                  <p className="text-gray-300 mb-6">We provide complete support throughout the lifecycle of your VFD:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Professional installation</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Parameter configuration</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Troubleshooting assistance</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                      <span>Maintenance and repair</span>
                    </li>
                  </ul>
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

export default VFDs;
