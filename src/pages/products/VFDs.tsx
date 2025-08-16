import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";

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
      <SEOJsonLD />
      <Header />
      
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-600 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Variable Frequency Drives (VFDs)
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Advanced motor control solutions for energy savings and performance optimization
              </p>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-gray-800 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Invest in VFD Technology?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy Savings</h3>
                <p className="text-gray-600">Reduce energy consumption by 20-50% by matching motor speed to actual load requirements instead of running at constant speed.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Extended Equipment Life</h3>
                <p className="text-gray-600">Soft starting and stopping reduces mechanical stress, while optimized speed operation minimizes wear and tear on motors and driven equipment.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Process Optimization</h3>
                <p className="text-gray-600">Precise speed control allows for optimized production processes, improving product quality and consistency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Common VFD Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pumping Systems</h3>
                <p className="text-gray-600 text-sm">Water supply, irrigation, wastewater, chemical processing</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">HVAC Systems</h3>
                <p className="text-gray-600 text-sm">Fans, blowers, compressors, cooling towers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
                <p className="text-gray-600 text-sm">Conveyors, machine tools, mixers, extruders</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Material Handling</h3>
                <p className="text-gray-600 text-sm">Cranes, hoists, elevators, escalators</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Listings */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Our VFD Range
            </h2>
            
            <div className="space-y-12">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-700 font-semibold mb-4">Capacity Range: {product.capacity}</p>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      
                      <h4 className="font-semibold mt-4 mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      
                      <div className="mt-6">
                        <a 
                          href="#enquiry" 
                          className="inline-block bg-gray-700 text-white font-medium px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Support Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Expert VFD Support
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Selection & Sizing</h3>
                  <p className="text-gray-600 mb-6">Our technical team helps you select the right VFD for your specific application based on:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Motor specifications</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Load characteristics</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Performance requirements</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Environmental conditions</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Installation & Service</h3>
                  <p className="text-gray-600 mb-6">We provide complete support throughout the lifecycle of your VFD:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Professional installation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Parameter configuration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Troubleshooting assistance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Maintenance and repair</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Optimize Your Motor Control?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Talk to our VFD specialists to discover how variable frequency drives can improve your system performance and reduce energy costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="inline-block bg-white text-gray-800 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get a Free Consultation
              </a>
              <a 
                href="#calculator" 
                className="inline-block border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Energy Savings Calculator
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default VFDs;
