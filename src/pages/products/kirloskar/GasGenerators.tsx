import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";

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

  return (
    <>
      <SEOJsonLD />
      <Header />
      
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Kirloskar Gas Generators
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Efficient, eco-friendly power solutions for every requirement
              </p>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-blue-900 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
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
              Benefits of Kirloskar Gas Generators
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Environmentally Friendly</h3>
                <p className="text-gray-600">Lower emissions than diesel generators, reducing your carbon footprint and contributing to a cleaner environment.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
                <p className="text-gray-600">Natural gas and LPG typically cost less than diesel fuel, resulting in lower operational expenses over time.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quieter Operation</h3>
                <p className="text-gray-600">Gas generators typically run more quietly than diesel alternatives, making them ideal for noise-sensitive environments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Listings */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Our Gas Generator Range
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
                      <p className="text-blue-700 font-semibold mb-4">Power Range: {product.power}</p>
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

        {/* CTA Section */}
        <section className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Need Help Choosing the Right Gas Generator?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Our experts can help you determine the perfect power solution based on your specific requirements and environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="inline-block bg-white text-blue-800 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Our Team
              </a>
              <a 
                href="#catalog" 
                className="inline-block border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download Catalog
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default KirloskarGasGenerators;
