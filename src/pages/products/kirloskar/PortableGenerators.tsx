import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";

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
      <SEOJsonLD />
      <Header />
      
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-800 to-green-600 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Kirloskar Portable Generators
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-8">
                Power on the go - compact, reliable, and easy to transport
              </p>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-green-800 font-medium px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
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
              Why Choose Portable Generators?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Mobility</h3>
                <p className="text-gray-600">Take power wherever you need it, from camping trips to construction sites, with easy-to-transport designs.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Power</h3>
                <p className="text-gray-600">Quick setup and start, providing immediate electricity during outages or in remote locations without waiting for installation.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Versatility</h3>
                <p className="text-gray-600">Suitable for multiple applications from powering essential home appliances during outages to running tools at job sites.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Listings */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Our Portable Generator Range
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
                      <p className="text-green-700 font-semibold mb-4">Power Output: {product.power}</p>
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
                          className="inline-block bg-green-700 text-white font-medium px-5 py-2 rounded-lg hover:bg-green-800 transition-colors"
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

        {/* Application Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Popular Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Home Backup</h3>
                <p className="text-gray-600 text-sm">Keep essential appliances running during power outages</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Camping & RVs</h3>
                <p className="text-gray-600 text-sm">Power for outdoor adventures and recreational vehicles</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Construction Sites</h3>
                <p className="text-gray-600 text-sm">Reliable power for tools and equipment in remote locations</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Events & Outdoor Functions</h3>
                <p className="text-gray-600 text-sm">Power for lighting, sound systems, and equipment at outdoor gatherings</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Find Your Portable Power Solution?
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-8">
              Contact our experts today to discuss which portable generator is right for your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="inline-block bg-white text-green-800 font-medium px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                Get Expert Advice
              </a>
              <a 
                href="#brochure" 
                className="inline-block border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default KirloskarPortableGenerators;
