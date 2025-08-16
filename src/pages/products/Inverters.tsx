import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";

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
      <SEOJsonLD />
      <Header />
      
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-teal-600 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Inverters & UPS Systems
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Reliable backup power solutions for homes, businesses, and industries
              </p>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-blue-800 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Find Your Solution
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Choose Our UPS Systems?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Zero Downtime</h3>
                <p className="text-gray-600">Instant switchover to battery power during outages keeps your equipment running without interruption.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Equipment Protection</h3>
                <p className="text-gray-600">Advanced filtering and regulation protect sensitive electronics from power surges and fluctuations.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy Efficiency</h3>
                <p className="text-gray-600">High-efficiency designs reduce energy consumption and operational costs while extending battery life.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
                <p className="text-gray-600">From small homes to large data centers, our systems scale to meet your exact power requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Listings */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Our UPS & Inverter Range
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
                      <p className="text-blue-700 font-semibold mb-4">Capacity Range: {product.capacity}</p>
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
                          className="inline-block bg-blue-700 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors"
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

        {/* Technical Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Understanding UPS Technologies
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">Standby UPS</h3>
                  <p className="text-gray-600 mb-4">Basic protection that switches to battery power when utility power fails. Ideal for home computers and basic electronics.</p>
                  <div className="text-sm text-gray-500">
                    <p className="mb-2"><strong>Typical Applications:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Home computers</li>
                      <li>Gaming systems</li>
                      <li>Entry-level networking</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">Line Interactive UPS</h3>
                  <p className="text-gray-600 mb-4">Provides voltage regulation and power conditioning along with backup power. Suitable for small businesses and premium home setups.</p>
                  <div className="text-sm text-gray-500">
                    <p className="mb-2"><strong>Typical Applications:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Small business servers</li>
                      <li>Network equipment</li>
                      <li>Point-of-sale systems</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">Online Double Conversion UPS</h3>
                  <p className="text-gray-600 mb-4">Premium protection that continuously converts power from AC to DC and back, eliminating all power anomalies. Essential for critical systems.</p>
                  <div className="text-sm text-gray-500">
                    <p className="mb-2"><strong>Typical Applications:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Data centers</li>
                      <li>Medical equipment</li>
                      <li>Industrial controls</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Never Lose Power Again
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Protect your critical systems and data with a professionally specified UPS solution tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="inline-block bg-white text-blue-800 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule a Power Assessment
              </a>
              <a 
                href="#calculator" 
                className="inline-block border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Calculate Your Power Needs
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Inverters;
