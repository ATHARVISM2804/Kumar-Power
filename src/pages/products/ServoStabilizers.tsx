import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, FileText, Phone, Shield, Zap, Clock, Activity, Settings, BarChart2 } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ServoStabilizers = () => {
  // Product details
  const products = [
    {
      id: "ss1",
      name: "Single Phase Servo Stabilizers",
      capacity: "1 kVA - 25 kVA",
      features: [
        "High-precision voltage regulation",
        "Digital display and controls",
        "Fast response time",
        "Overload protection",
        "Surge protection"
      ],
      description: "Our single-phase servo stabilizers provide precise voltage regulation for home appliances, small offices, and sensitive electronic equipment. They ensure consistent power quality even in areas with significant voltage fluctuations.",
      image: "/src/assets/GMR (1).png"
    },
    {
      id: "ss2",
      name: "Three Phase Servo Stabilizers",
      capacity: "15 kVA - 100 kVA",
      features: [
        "Phase-by-phase voltage correction",
        "Independent phase control",
        "Microprocessor-based control system",
        "High correction speed",
        "Wide input voltage range"
      ],
      description: "Three-phase servo stabilizers are designed for commercial and light industrial applications. They maintain balanced output across all three phases and protect equipment from voltage imbalances, sags, and swells.",
      image: "/src/assets/Vistara 1 (1).png"
    },
    {
      id: "ss3",
      name: "Industrial Servo Stabilizers",
      capacity: "100 kVA - 2000 kVA",
      features: [
        "Heavy-duty construction",
        "High-precision regulation (±1%)",
        "Advanced cooling system",
        "Remote monitoring capability",
        "Automatic bypass system"
      ],
      description: "Our industrial servo stabilizers are engineered for demanding environments with critical power quality requirements. These robust units provide exceptional voltage regulation for manufacturing equipment, medical systems, and other sensitive industrial loads.",
      image: "/src/assets/Honeywell 1 (1).png"
    }
  ];

  // Key benefits of servo stabilizers
  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Equipment Protection",
      description: "Shields sensitive electronics and machinery from voltage fluctuations, surges, and spikes, preventing costly damage and downtime."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Extended Equipment Life",
      description: "Ensures optimal voltage levels for equipment operation, significantly reducing wear and extending operational lifespan by up to 40%."
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: "Enhanced Performance",
      description: "Delivers consistent power quality for improved equipment performance, process accuracy, and reduced operational interruptions."
    },
    {
      icon: <Activity className="h-6 w-6 text-green-500" />,
      title: "Process Stability",
      description: "Maintains stable voltage for critical processes, preventing defects in manufacturing and ensuring consistent output quality."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-red-500" />,
      title: "Energy Efficiency",
      description: "Optimizes power consumption by ensuring equipment operates at designed voltage levels, reducing wastage and lowering energy costs."
    },
    {
      icon: <Settings className="h-6 w-6 text-indigo-500" />,
      title: "Low Maintenance",
      description: "Robust design with minimal moving parts ensures reliable operation with reduced maintenance requirements and service interruptions."
    }
  ];

  // Applications where servo stabilizers are used
  const applications = [
    {
      name: "Medical Equipment",
      icon: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/medical_icon_d7rtbs.svg",
      description: "For MRI machines, CT scanners, and laboratory equipment requiring precise voltage"
    },
    {
      name: "Industrial Automation",
      icon: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/industrial_icon_f7rtgs.svg",
      description: "For CNC machines, production lines, and robotic systems"
    },
    {
      name: "IT Infrastructure",
      icon: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/server_icon_r7thbs.svg",
      description: "For servers, data centers, and networking equipment"
    },
    {
      name: "Printing Industry",
      icon: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/printing_icon_t8rpfs.svg",
      description: "For digital printers, offset machines, and finishing equipment"
    },
    {
      name: "Telecommunications",
      icon: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/telecom_icon_y7rtbs.svg",
      description: "For transmission equipment, cellular towers, and exchanges"
    },
    {
      name: "Laboratory Equipment",
      icon: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/lab_icon_h6rtgs.svg",
      description: "For precision scientific instruments and testing equipment"
    }
  ];

  return (
    <>
      <SEOJsonLD 
        title="Servo Voltage Stabilizers | Kumar Power"
        description="Protect your valuable equipment with our high-precision servo stabilizers. Reliable voltage regulation for industrial, commercial, and medical applications."
        url="https://kumarpower.com/products/servo-stabilizers"
        imageUrl="https://kumarpower.com/images/servo-stabilizer.jpg"
      />
      <Header />
      
      <main>
        {/* Hero Section - Black Background */}
        <section className="bg-black py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/stabilizer_pattern_r7ktbd.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="block h-px w-12 md:w-20 bg-white/70 mr-4" />
                <span className="text-white text-xl md:text-2xl font-semibold tracking-wider uppercase">
                  VOLTAGE REGULATION
                </span>
                <span className="block h-px w-12 md:w-20 bg-white/70 ml-4" />
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold text-center text-white mb-6 leading-tight">
                Precision Servo Stabilizers
              </h1>
              
              <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto mb-10">
                Safeguard critical equipment with advanced voltage regulation technology.
                Consistent power quality for your most sensitive applications.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="#product-range" className="flex items-center gap-2">
                    Explore Products
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
                  <div className="text-3xl font-bold text-blue-400 mb-1">±1%</div>
                  <div className="text-sm text-white/80">Output Precision</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">10ms</div>
                  <div className="text-sm text-white/80">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                  <div className="text-sm text-white/80">Reliability</div>
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
              Why Invest in Servo Stabilizers?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="bg-gray-100 p-4 rounded-lg mb-5">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Black Background */}
        <section className="py-16 md:py-24 bg-gray-900 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/circuit_pattern_g7rtsd.svg')",
            backgroundSize: "cover",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">TECHNOLOGY</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
              How Servo Stabilizers Work
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 p-8">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">The Precision Process</h3>
                    <ol className="space-y-6">
                      <li className="flex">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 mt-0.5 font-bold">1</span>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Continuous Voltage Sensing</p>
                          <p className="text-gray-300">Advanced sensors continuously monitor incoming voltage parameters in real-time.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 mt-0.5 font-bold">2</span>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Microprocessor Analysis</p>
                          <p className="text-gray-300">The control unit compares actual values with required output parameters.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 mt-0.5 font-bold">3</span>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Servomotor Activation</p>
                          <p className="text-gray-300">Precision servomotor adjusts the variable transformer position with millisecond response time.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 mt-0.5 font-bold">4</span>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Voltage Correction</p>
                          <p className="text-gray-300">Variable transformer changes turns ratio to increase or decrease output voltage as needed.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 mt-0.5 font-bold">5</span>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Stable Output Delivery</p>
                          <p className="text-gray-300">Clean, regulated power is delivered to connected equipment with precision of ±1%.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-black/50 rounded-lg p-6 flex items-center justify-center">
                      <img 
                        src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/servo_diagram_t7rgsb.svg" 
                        alt="Servo Stabilizer Operation Diagram" 
                        className="max-w-full max-h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">170V-270V</div>
                  <div className="text-sm text-white/80">Wide Input Range</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">220V ±1%</div>
                  <div className="text-sm text-white/80">Precise Output Control</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">20-30V/sec</div>
                  <div className="text-sm text-white/80">Correction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications - White Background */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">APPLICATIONS</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Industries We Serve
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {applications.map((app, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4">
                    <img src={app.icon} alt={app.name} className="w-12 h-12" />
                  </div>
                  <h3 className="font-bold mb-2">{app.name}</h3>
                  <p className="text-sm text-gray-600">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase - Black Background */}
        <section id="product-range" className="py-16 md:py-24 bg-gray-900 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/tech_pattern_g7rbts.svg')",
            backgroundSize: "cover",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">PRODUCT RANGE</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
              Servo Stabilizer Solutions
            </h2>
            
            <div className="space-y-16">
              {products.map((product, index) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-colors">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 bg-gradient-to-br from-blue-900/50 to-black/50 p-6 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-w-full max-h-[300px] object-contain mix-blend-lighten"
                      />
                    </div>
                    <div className="p-8 md:col-span-3 relative">
                      <Badge className="absolute top-6 right-6 bg-blue-600/90 hover:bg-blue-700 backdrop-blur-sm text-white">
                        {product.capacity}
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

        {/* Specifications - White Background */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">TECHNICAL DETAILS</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Technical Specifications
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Single Phase</th>
                    <th className="p-4 text-center">Three Phase</th>
                    <th className="p-4 text-center">Industrial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Capacity Range</td>
                    <td className="p-4 text-center">1-25 kVA</td>
                    <td className="p-4 text-center">15-100 kVA</td>
                    <td className="p-4 text-center">100-2000 kVA</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Input Voltage Range</td>
                    <td className="p-4 text-center">170V-270V</td>
                    <td className="p-4 text-center">300V-470V</td>
                    <td className="p-4 text-center">300V-470V</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Output Accuracy</td>
                    <td className="p-4 text-center">±1%</td>
                    <td className="p-4 text-center">±1%</td>
                    <td className="p-4 text-center">±1%</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Response Time</td>
                    <td className="p-4 text-center">20-30ms</td>
                    <td className="p-4 text-center">20-30ms</td>
                    <td className="p-4 text-center">10-20ms</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Correction Rate</td>
                    <td className="p-4 text-center">20V/sec</td>
                    <td className="p-4 text-center">25V/sec</td>
                    <td className="p-4 text-center">30V/sec</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Efficiency</td>
                    <td className="p-4 text-center">98%</td>
                    <td className="p-4 text-center">98%</td>
                    <td className="p-4 text-center">99%</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Display</td>
                    <td className="p-4 text-center">Digital LCD</td>
                    <td className="p-4 text-center">Digital LCD</td>
                    <td className="p-4 text-center">Touchscreen HMI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Case Studies - Black Background */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/case_study_pattern_h7tbrs.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <div className="h-1 w-10 bg-blue-400"></div>
                <span className="text-blue-400 font-medium">SUCCESS STORIES</span>
                <div className="h-1 w-10 bg-blue-400"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Client Success Stories
              </h2>
              <p className="text-lg text-white/80">
                See how our servo stabilizers have protected critical equipment and improved operations for these organizations
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/hospital_case_study_h7rtbs.jpg" 
                    alt="Hospital Case Study" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                    Healthcare
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Apollo Hospitals</h3>
                  <p className="text-gray-300 mb-4">
                    Protecting sensitive medical imaging equipment with three-phase servo stabilizers, resulting in 87% reduction in equipment downtime.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10">
                    <Link to="#case-studies" className="flex items-center justify-center gap-1">
                      Read Case Study
                      <ChevronRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/manufacturing_case_study_t7bsrg.jpg" 
                    alt="Manufacturing Case Study" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                    Manufacturing
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Precision Engineering Ltd.</h3>
                  <p className="text-gray-300 mb-4">
                    Industrial stabilizers ensuring consistent quality in CNC operations, reducing defects by 63% and extending tool life.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10">
                    <Link to="#case-studies" className="flex items-center justify-center gap-1">
                      Read Case Study
                      <ChevronRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729935001/it_case_study_y7rtbs.jpg" 
                    alt="IT Case Study" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                    IT Infrastructure
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">TechServe Data Center</h3>
                  <p className="text-gray-300 mb-4">
                    Ensuring clean power delivery for server rooms in areas with frequent voltage fluctuations, achieving 99.999% uptime.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10">
                    <Link to="#case-studies" className="flex items-center justify-center gap-1">
                      Read Case Study
                      <ChevronRight size={16} />
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

export default ServoStabilizers;
