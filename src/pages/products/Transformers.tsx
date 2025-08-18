import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, FileText, Phone, Shield, Zap, Settings, Activity } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Transformers = () => {
  // Product details
  const products = [
    {
      id: "tr1",
      name: "Distribution Transformers",
      capacity: "10 kVA - 5000 kVA",
      features: [
        "High energy efficiency",
        "Low noise operation",
        "Multiple cooling options",
        "ONAN/ONAF cooling systems",
        "Long service life"
      ],
      description: "Our distribution transformers are designed for electrical networks that distribute power to residential, commercial, and light industrial users. These transformers combine reliability, efficiency, and durability to provide consistent power distribution.",
      image: "/src/assets/blog1.png"
    },
    {
      id: "tr2",
      name: "Power Transformers",
      capacity: "5 MVA - 100 MVA",
      features: [
        "High voltage transmission capability",
        "Advanced cooling systems",
        "On-load tap changers",
        "Remote monitoring options",
        "Exceptional short-circuit strength"
      ],
      description: "Power transformers are essential components in electrical transmission networks, designed to operate at high voltages and handle large power capacities. Our power transformers offer exceptional reliability for utility companies and industrial power networks.",
      image: "/src/assets/blog2.png"
    },
    {
      id: "tr3",
      name: "Isolation Transformers",
      capacity: "1 kVA - 1000 kVA",
      features: [
        "Galvanic isolation",
        "Common-mode noise rejection",
        "Enhanced electrical safety",
        "Multiple shielding options",
        "Custom impedance options"
      ],
      description: "Isolation transformers provide electrical separation between input and output circuits, protecting sensitive equipment from noise, transients, and ground loops. These specialized transformers are ideal for medical facilities, recording studios, test equipment, and other applications requiring clean power.",
      image: "/src/assets/blog3.png"
    },
    {
      id: "tr4",
      name: "Dry-Type Transformers",
      capacity: "5 kVA - 2500 kVA",
      features: [
        "Fire-resistant design",
        "Environmental friendliness (no oil)",
        "Indoor installation capability",
        "Low maintenance requirements",
        "Cast resin or VPI construction"
      ],
      description: "Dry-type transformers use air for cooling instead of oil, making them safer for indoor installations and environmentally sensitive areas. These transformers are ideal for commercial buildings, hospitals, data centers, and other locations where fire safety is paramount.",
      image: "/src/assets/combo pg.png"
    }
  ];

  return (
    <>
      <SEOJsonLD 
        title="Power & Distribution Transformers | Kumar Power"
        description="Reliable, efficient transformers for all power distribution needs. Explore our range of distribution, power, isolation, and dry-type transformers."
        url="https://kumarpower.com/products/transformers"
        imageUrl="https://kumarpower.com/images/transformers.jpg"
      />
      <Header />
      
      <main>
        {/* Hero Section - Black Background */}
        <section className="bg-black py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730135001/transformer_pattern_r7ktbd.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="block h-px w-12 md:w-20 bg-white/70 mr-4" />
                <span className="text-white text-xl md:text-2xl font-semibold tracking-wider uppercase">
                  POWER DISTRIBUTION
                </span>
                <span className="block h-px w-12 md:w-20 bg-white/70 ml-4" />
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold text-center text-white mb-6 leading-tight">
                Power & Distribution Transformers
              </h1>
              
              <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto mb-10">
                Reliable, efficient transformers for all power distribution needs
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
                    Request a Quote
                    <Phone size={16} />
                  </Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">99.5%</div>
                  <div className="text-sm text-white/80">Energy Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">40+ Yrs</div>
                  <div className="text-sm text-white/80">Service Life</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-sm text-white/80">Quality Tested</div>
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
              <span className="text-blue-600 font-medium">OUR ADVANTAGE</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              The Kumar Power Advantage
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Shield className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quality Assurance</h3>
                <p className="text-gray-600">
                  All transformers are manufactured to meet or exceed international standards, with rigorous testing at every production stage.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Zap className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Energy Efficiency</h3>
                <p className="text-gray-600">
                  Advanced core materials and design techniques minimize losses, reducing operational costs and environmental impact.
                </p>
              </div>
              
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 p-4 rounded-lg mb-5">
                  <Settings className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Customization</h3>
                <p className="text-gray-600">
                  Transformers tailored to your specific requirements, including special voltages, mounting arrangements, and environmental considerations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Considerations - Black Background */}
        <section className="py-16 md:py-24 bg-gray-900 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730135001/circuit_pattern_g7rtsd.svg')",
            backgroundSize: "cover",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">SELECTION GUIDE</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
              Key Considerations for Transformer Selection
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 p-8">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">Technical Factors</h3>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 font-bold">1</div>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">kVA Rating</p>
                          <p className="text-gray-300">Must match your power requirements with appropriate headroom for growth</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 font-bold">2</div>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Voltage Ratio</p>
                          <p className="text-gray-300">Primary and secondary voltage specifications</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 font-bold">3</div>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Impedance</p>
                          <p className="text-gray-300">Affects fault current levels and voltage regulation</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 font-bold">4</div>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Cooling Method</p>
                          <p className="text-gray-300">ONAN, ONAF, or other cooling requirements</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">Environmental Factors</h3>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 font-bold">1</div>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Indoor vs Outdoor</p>
                          <p className="text-gray-300">Installation location and environmental protection</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 font-bold">2</div>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Ambient Temperature</p>
                          <p className="text-gray-300">Operating temperature range and cooling needs</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 font-bold">3</div>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Altitude</p>
                          <p className="text-gray-300">Higher altitudes may require derating</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 mt-0.5 font-bold">4</div>
                        <div>
                          <p className="text-white font-medium text-lg mb-1">Special Environments</p>
                          <p className="text-gray-300">Corrosive conditions, high humidity, etc.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">IS 1180</div>
                  <div className="text-sm text-white/80">Compliance Standard</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">5 Star</div>
                  <div className="text-sm text-white/80">BEE Energy Rating</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">IEC 60076</div>
                  <div className="text-sm text-white/80">International Standard</div>
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
              Our Transformer Range
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

        {/* CTA Section - Black Background */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730135001/power_grid_pattern_r7ktfd.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Need Expert Guidance on Transformer Selection?
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto mb-10">
                Our engineering team can help you select the right transformer for your application, with detailed load calculations and technical specifications.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                  <Link to="#contact" className="flex items-center gap-2">
                    Schedule a Consultation
                    <Phone size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="#catalog" className="flex items-center gap-2">
                    Download Technical Catalog
                    <FileText size={16} />
                  </Link>
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">50+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">10,000+</div>
                  <div className="text-sm text-white/80">Installations</div>
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

export default Transformers;
