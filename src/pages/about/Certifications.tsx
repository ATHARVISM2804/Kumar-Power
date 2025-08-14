import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";

const Certifications = () => {
  // Certificate data for the page
  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System certification, ensuring our processes meet international quality standards.",
      issuer: "Bureau Veritas",
      year: "2020",
      icon: "shield-check"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System certification, demonstrating our commitment to environmental responsibility.",
      issuer: "TÜV SÜD",
      year: "2021",
      icon: "leaf"
    },
    {
      name: "ISO 45001:2018",
      description: "Occupational Health and Safety Management System certification, prioritizing workplace safety.",
      issuer: "Lloyd's Register",
      year: "2021",
      icon: "hard-hat"
    },
    {
      name: "Authorized Kirloskar Dealer",
      description: "Official certification as an authorized dealer and service provider for Kirloskar generators.",
      issuer: "Kirloskar Oil Engines Ltd",
      year: "2005",
      icon: "award"
    },
    {
      name: "Electrical Contractors License",
      description: "Licensed electrical contractor certification for installation and maintenance of power equipment.",
      issuer: "State Electricity Board",
      year: "2008",
      icon: "zap"
    },
    {
      name: "Green Business Certification",
      description: "Recognition for implementing sustainable practices in business operations.",
      issuer: "Green Business Bureau",
      year: "2022",
      icon: "globe"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOJsonLD />
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Certifications</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kumar Power is proud to hold certifications that validate our commitment to quality, safety, and excellence in power solutions.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Why Certifications Matter</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p>Our certifications serve as third-party validation of our commitment to maintaining high-quality standards.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance</h3>
                <p>We adhere to industry regulations and standards, ensuring our operations are fully compliant.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Trust</h3>
                <p>Our certifications provide customers with confidence in our products, services, and business practices.</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  {cert.icon === "shield-check" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  )}
                  {cert.icon === "leaf" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path>
                      <path d="M5 19.5C9.5 19.5 13 16 13 12c0 4 3.5 7.5 8 7.5"></path>
                      <path d="M12 22c4 0 8-3.5 8-8a10 10 0 0 0-8-8c0 4-4 8-8 8"></path>
                    </svg>
                  )}
                  {cert.icon === "hard-hat" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"></path>
                      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
                      <path d="M4 15v-3a6 6 0 0 1 6-6h0"></path>
                      <path d="M14 6h0a6 6 0 0 1 6 6v3"></path>
                    </svg>
                  )}
                  {cert.icon === "award" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  )}
                  {cert.icon === "zap" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  )}
                  {cert.icon === "globe" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">{cert.name}</h3>
                    <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                      Since {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{cert.description}</p>
                  <p className="text-sm text-gray-500">Issued by: {cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Industry Partnerships</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-4 rounded shadow-sm flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png" 
                  alt="Kirloskar Logo" 
                  className="max-h-16"
                />
              </div>
              <div className="bg-white p-4 rounded shadow-sm flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png" 
                  alt="Bureau Veritas Logo" 
                  className="max-h-16"
                />
              </div>
              <div className="bg-white p-4 rounded shadow-sm flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png" 
                  alt="TÜV SÜD Logo" 
                  className="max-h-16"
                />
              </div>
              <div className="bg-white p-4 rounded shadow-sm flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png" 
                  alt="Lloyd's Register Logo" 
                  className="max-h-16"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Excellence</h2>
            <p className="text-lg mb-6">
              At Kumar Power, we believe that maintaining certifications and industry partnerships is more than just 
              fulfilling requirements—it's about our ongoing commitment to excellence in everything we do. We continuously 
              strive to improve our processes, enhance our services, and exceed industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Contact Us
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
