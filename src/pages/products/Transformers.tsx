import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";

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
      <SEOJsonLD />
      <Header />
      
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-800 to-teal-600 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Power & Distribution Transformers
              </h1>
              <p className="text-lg md:text-xl text-teal-100 mb-8">
                Reliable, efficient transformers for all power distribution needs
              </p>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-teal-800 font-medium px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
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
              The Kumar Power Advantage
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-600">All transformers are manufactured to meet or exceed international standards, with rigorous testing at every production stage.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy Efficiency</h3>
                <p className="text-gray-600">Advanced core materials and design techniques minimize losses, reducing operational costs and environmental impact.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customization</h3>
                <p className="text-gray-600">Transformers tailored to your specific requirements, including special voltages, mounting arrangements, and environmental considerations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Considerations Section */}
        <section className="py-16 bg-teal-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Key Considerations for Transformer Selection
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-teal-700">Technical Factors:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>kVA Rating</strong>: Must match your power requirements with appropriate headroom for growth</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Voltage Ratio</strong>: Primary and secondary voltage specifications</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Impedance</strong>: Affects fault current levels and voltage regulation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Cooling Method</strong>: ONAN, ONAF, or other cooling requirements</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-teal-700">Environmental Factors:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Indoor vs Outdoor</strong>: Installation location and environmental protection</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Ambient Temperature</strong>: Operating temperature range and cooling needs</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Altitude</strong>: Higher altitudes may require derating</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Special Environments</strong>: Corrosive conditions, high humidity, etc.</span>
                      </li>
                    </ul>
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
              Our Transformer Range
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
                      <p className="text-teal-700 font-semibold mb-4">Capacity Range: {product.capacity}</p>
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
                          className="inline-block bg-teal-700 text-white font-medium px-5 py-2 rounded-lg hover:bg-teal-800 transition-colors"
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
        <section className="py-16 bg-teal-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Need Expert Guidance on Transformer Selection?
            </h2>
            <p className="text-teal-100 max-w-2xl mx-auto mb-8">
              Our engineering team can help you select the right transformer for your application, with detailed load calculations and technical specifications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="inline-block bg-white text-teal-800 font-medium px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
              >
                Schedule a Consultation
              </a>
              <a 
                href="#catalog" 
                className="inline-block border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Download Technical Catalog
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Transformers;
