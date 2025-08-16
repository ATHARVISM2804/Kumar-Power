import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";

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

  return (
    <>
      <SEOJsonLD />
      <Header />
      
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Servo Voltage Stabilizers
              </h1>
              <p className="text-lg md:text-xl text-purple-100 mb-8">
                Protect your equipment with precise voltage regulation
              </p>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-purple-900 font-medium px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Invest in a Servo Stabilizer?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Equipment Protection</h3>
                <p className="text-gray-600">Protect sensitive electronics and machinery from damage caused by voltage fluctuations, surges, and spikes.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Extended Equipment Life</h3>
                <p className="text-gray-600">Ensure your equipment operates at optimal voltage levels, reducing wear and extending operational lifespan.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Performance</h3>
                <p className="text-gray-600">Maintain consistent power quality for improved equipment performance and reduced downtime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              How Servo Stabilizers Work
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Process:</h3>
                    <ol className="space-y-4">
                      <li className="flex">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center mr-3 mt-0.5">1</span>
                        <p><strong>Voltage Sensing:</strong> Continuously monitors incoming voltage levels.</p>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center mr-3 mt-0.5">2</span>
                        <p><strong>Comparison:</strong> Compares actual voltage with the required output voltage.</p>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center mr-3 mt-0.5">3</span>
                        <p><strong>Motor Activation:</strong> Drives the servomotor to adjust the variable transformer position.</p>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center mr-3 mt-0.5">4</span>
                        <p><strong>Voltage Correction:</strong> Changes the turns ratio to increase or decrease output voltage as needed.</p>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center mr-3 mt-0.5">5</span>
                        <p><strong>Stable Output:</strong> Delivers consistent voltage to connected equipment regardless of input fluctuations.</p>
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="max-w-full relative">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-gray-400">
                          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-center mt-2">Video Demonstration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Listings */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Our Servo Stabilizer Range
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
                      <p className="text-purple-700 font-semibold mb-4">Capacity Range: {product.capacity}</p>
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
                          className="inline-block bg-purple-700 text-white font-medium px-5 py-2 rounded-lg hover:bg-purple-800 transition-colors"
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

        {/* CTA Section */}
        <section className="py-16 bg-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Protect Your Valuable Equipment Today
            </h2>
            <p className="text-purple-100 max-w-2xl mx-auto mb-8">
              Speak with our power quality experts to find the right servo stabilizer solution for your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="inline-block bg-white text-purple-800 font-medium px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Get Expert Recommendation
              </a>
              <a 
                href="#catalog" 
                className="inline-block border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Download Specifications
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ServoStabilizers;
