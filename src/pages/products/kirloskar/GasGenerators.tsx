import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, FileText, Phone, Settings, Zap, Leaf, Volume2, DollarSign } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const KirloskarGasGenerators = () => {
  // Product details
  const products = [
    {
      id: "kg1",
      name: "KG Series Gas Generator",
      power: "10-25 kVA",
      features: [
        "Natural gas or LPG compatible",
        "Low noise operation",
        "Eco-friendly emissions",
        "Compact design",
        "Advanced electronic control system"
      ],
      description: "Our Kirloskar Gas Generators provide reliable, eco-friendly power solutions for residential and commercial applications. These generators use natural gas or LPG as fuel, offering cleaner operation with lower emissions compared to diesel alternatives.",
      image: "/src/assets/Range1.png"
    },
    {
      id: "kg2",
      name: "KGP Pro Series Gas Generator",
      power: "30-100 kVA",
      features: [
        "Dual fuel capability (Natural gas/LPG)",
        "Extended runtime capacity",
        "Reduced carbon footprint",
        "Remote monitoring capability",
        "Automatic voltage regulation"
      ],
      description: "The KGP Pro Series is designed for medium-scale commercial and industrial applications requiring continuous power. These generators offer excellent fuel efficiency, reduced environmental impact, and can be integrated with building management systems.",
      image: "/src/assets/Range2.png"
    },
    {
      id: "kg3",
      name: "KGX Heavy-Duty Gas Generator",
      power: "125-500 kVA",
      features: [
        "Industrial-grade performance",
        "Advanced cooling system",
        "Heavy-duty alternator",
        "Parallel operation capability",
        "Low maintenance requirements"
      ],
      description: "KGX Heavy-Duty Gas Generators are engineered for industrial environments with high power demands. These generators provide reliable, clean energy with minimal environmental impact, making them ideal for factories, processing plants, and other large facilities.",
      image: "/src/assets/Range3.png"
    }
  ];

  // Key advantages of gas generators
  const advantages = [
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      title: "Environmentally Friendly",
      description: "Lower emissions compared to diesel generators, reducing carbon footprint by up to 30% and contributing to a cleaner environment."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      title: "Cost-Effective Operation",
      description: "Natural gas and LPG typically cost 20-40% less than diesel fuel, resulting in significantly lower operational expenses over time."
    },
    {
      icon: <Volume2 className="w-6 h-6 text-purple-500" />,
      title: "Reduced Noise Pollution",
      description: "Gas generators operate at 10-15 dB lower than comparable diesel units, making them ideal for noise-sensitive environments."
    },
    {
      icon: <Settings className="w-6 h-6 text-orange-500" />,
      title: "Lower Maintenance",
      description: "Cleaner-burning fuel means less engine wear, reduced maintenance intervals, and longer service life."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Reliable Performance",
      description: "Advanced electronic control systems provide stable power delivery with minimal fluctuations, even under varying loads."
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-500" />,
      title: "Regulatory Compliance",
      description: "Meets and exceeds emission standards, helping businesses achieve environmental compliance requirements."
    }
  ];

  return (
    <>
      <SEOJsonLD 
        title="Kirloskar Gas Generators | Kumar Power"
        description="Explore our range of eco-friendly Kirloskar Gas Generators. Clean power solutions with lower emissions and reduced operational costs."
        url="https://kumarpower.com/products/kirloskar/gas-generators"
        imageUrl="https://kumarpower.com/images/kirloskar-gas-generator.jpg"
      />
      <Header />
      
      <main>
        {/* Hero Section - Black Background */}
        <section className="bg-black py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729435002/gas_generator_pattern_bk3rtf.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="block h-px w-12 md:w-20 bg-white/70 mr-4" />
                <span className="text-white text-xl md:text-2xl font-semibold tracking-wider uppercase">
                  KIRLOSKAR POWER
                </span>
                <span className="block h-px w-12 md:w-20 bg-white/70 ml-4" />
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold text-center text-white mb-6 leading-tight">
                Advanced Gas Generator Solutions
              </h1>
              
              <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto mb-10">
                Engineered for efficiency, sustainability, and exceptional performance. 
                Discover our range of industry-leading gas generators for all power requirements.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="#product-range" className="flex items-center gap-2">
                    View Product Range
                    <ChevronRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="#contact" className="flex items-center gap-2">
                    Request a Consultation
                    <Phone size={16} />
                  </Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">30%</div>
                  <div className="text-sm text-white/80">Lower Emissions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">40%</div>
                  <div className="text-sm text-white/80">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                  <div className="text-sm text-white/80">Reliability</div>
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
              The Kirloskar Gas Generator Advantage
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="bg-gray-100 p-3 rounded-lg mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase - Black Background */}
        <section id="product-range" className="py-16 md:py-24 bg-gray-900 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729435002/tech_pattern_udr7tf.svg')",
            backgroundSize: "cover",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">PRODUCT RANGE</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
              Kirloskar Gas Generator Series
            </h2>
            
            <div className="space-y-16">
              {products.map((product, index) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-colors">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 bg-gradient-to-br from-blue-900/50 to-black/50 p-4 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-w-full max-h-[300px] object-contain mix-blend-lighten"
                      />
                    </div>
                    <div className="p-8 md:col-span-3 relative">
                      <Badge className="absolute top-6 right-6 bg-blue-500/90 hover:bg-blue-600 backdrop-blur-sm text-white">
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
              Ideal for Diverse Applications
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Commercial Buildings</h3>
                <p className="text-sm text-gray-600">Offices, retail centers, and businesses</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Residential</h3>
                <p className="text-sm text-gray-600">Housing societies and private homes</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Healthcare</h3>
                <p className="text-sm text-gray-600">Hospitals, clinics, and medical facilities</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Industrial</h3>
                <p className="text-sm text-gray-600">Manufacturing plants and facilities</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Data Centers</h3>
                <p className="text-sm text-gray-600">IT infrastructure and server facilities</p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Hospitality</h3>
                <p className="text-sm text-gray-600">Hotels, restaurants, and resorts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications - Black Background */}
        <section className="py-16 md:py-24 bg-gray-900 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729435002/blueprint_pattern_j7rthg.svg')",
            backgroundSize: "cover",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">SPECIFICATIONS</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-white">
              Technical Excellence
            </h2>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Engine Specifications</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Engine Type:</span>
                    <span className="text-white font-medium">4-Stroke, Water Cooled</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Ignition System:</span>
                    <span className="text-white font-medium">Electronic Ignition</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Fuel Type:</span>
                    <span className="text-white font-medium">Natural Gas / LPG</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Emission Compliance:</span>
                    <span className="text-white font-medium">CPCB Stage II / Euro III</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Cooling System:</span>
                    <span className="text-white font-medium">Radiator Cooled</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Starting Method:</span>
                    <span className="text-white font-medium">Electric Start</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Alternator Specifications</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-gray-300">Alternator Type:</span>
                    <span className="text-white font-medium">Brushless, Self-Excited</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Voltage Regulation:</span>
                    <span className="text-white font-medium">±1%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Insulation Class:</span>
                    <span className="text-white font-medium">Class H</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Protection Grade:</span>
                    <span className="text-white font-medium">IP23</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Power Factor:</span>
                    <span className="text-white font-medium">0.8 (lag)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-300">Frequency:</span>
                    <span className="text-white font-medium">50 Hz</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="#download" className="flex items-center gap-2">
                  Download Full Specifications
                  <FileText size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA - White Background */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                  Ready to Explore Kirloskar Gas Generators?
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Our power consultants can help you determine the ideal gas generator solution 
                  based on your specific requirements and environment.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-4 text-white">Speak with an Expert</h3>
                  <p className="text-white/80 mb-4">
                    Our technical team is available to answer your questions and provide personalized recommendations.
                  </p>
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    <Link to="/contact" className="flex items-center gap-2">
                      Contact Sales Team
                      <Phone size={16} />
                    </Link>
                  </Button>
                </div>
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-4 text-white">Request Product Information</h3>
                  <p className="text-white/80 mb-4">
                    Get detailed specifications, pricing, and availability information for Kirloskar Gas Generators.
                  </p>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    <Link to="/request-quote" className="flex items-center gap-2">
                      Request a Quote
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

export default KirloskarGasGenerators;
