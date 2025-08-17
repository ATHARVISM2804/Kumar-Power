import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Certifications = () => {
  // Certificate data for the page
  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System certification, ensuring our processes meet international quality standards.",
      issuer: "Bureau Veritas",
      year: "2020",
      icon: "shield-check",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System certification, demonstrating our commitment to environmental responsibility.",
      issuer: "TÜV SÜD",
      year: "2021",
      icon: "leaf",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png"
    },
    {
      name: "ISO 45001:2018",
      description: "Occupational Health and Safety Management System certification, prioritizing workplace safety.",
      issuer: "Lloyd's Register",
      year: "2021",
      icon: "hard-hat",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png"
    },
    {
      name: "Authorized Kirloskar Dealer",
      description: "Official certification as an authorized dealer and service provider for Kirloskar generators.",
      issuer: "Kirloskar Oil Engines Ltd",
      year: "2005",
      icon: "award",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png"
    },
    {
      name: "Electrical Contractors License",
      description: "Licensed electrical contractor certification for installation and maintenance of power equipment.",
      issuer: "State Electricity Board",
      year: "2008",
      icon: "zap",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png"
    },
    {
      name: "Green Business Certification",
      description: "Recognition for implementing sustainable practices in business operations.",
      issuer: "Green Business Bureau",
      year: "2022",
      icon: "globe",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png"
    }
  ];

  // For certificate carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const certificateSliderRef = useRef(null);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  // Group certificates into slides of 3 certificates each
  const certificatesPerSlide = 3;
  const certificateSlides = [];
  for (let i = 0; i < certificates.length; i += certificatesPerSlide) {
    certificateSlides.push(certificates.slice(i, i + certificatesPerSlide));
  }

  // Handle certificate carousel autoplay
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % certificateSlides.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, certificateSlides.length]);

  // Ceremony images with animation
  const ceremonyImages = [
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // Improved image slider animation control
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    // Ensure the slider starts from the beginning on page load
    setSliderPosition(0);
    
    // Slow continuous slide animation
    const slideAnimation = setInterval(() => {
      setSliderPosition(prev => {
        // Calculate the step size as a percentage of the total width
        const step = 0.2;
        const newPos = prev - step;
        
        // Reset to start position when we've gone through all images
        if (newPos <= -100) {
          return 0;
        }
        
        return newPos;
      });
    }, 50);

    return () => clearInterval(slideAnimation);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOJsonLD />
      <Header />
      
      {/* Hero Section with Animated Heading */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative py-20 bg-black overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-5xl font-bold tracking-tight mb-4 text-blue-500">
              Our Certifications
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-12">
              Kumar Power is proud to hold certifications that validate our commitment to quality, safety, 
              and excellence in power solutions.
            </p>
          </motion.div>
        </div>

        {/* Sliding ceremony images */}
        <div className="relative h-80 md:h-96 mt-8 mb-12 overflow-hidden">
          <div 
            className="absolute flex h-full transition-transform"
            style={{ 
              transform: `translateX(${sliderPosition}%)`,
              transition: 'transform 0.5s linear'
            }}
          >
            {[...ceremonyImages, ...ceremonyImages, ...ceremonyImages].map((img, index) => (
              <div 
                key={index} 
                className="relative h-full w-[400px] flex-shrink-0 mx-3"
              >
                <img 
                  src={img} 
                  alt={`Award ceremony ${index % ceremonyImages.length + 1}`} 
                  className="h-full w-full object-cover rounded-lg"
                  style={{ 
                    objectFit: "cover"
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium">
                  <div className="bg-black/70 px-3 py-1 rounded-full inline-block">
                    Kumar Power Certification {index % ceremonyImages.length + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider controls - optional */}
          <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
            <button 
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/40 transition-colors"
              aria-label="Pause slider"
              onClick={() => setSliderPosition(prev => prev)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            </button>
          </div>
        </div>
      </motion.section>
      
      {/* Why Certifications Matter Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold mb-12 text-center"
          >
            Why Certifications <span className="text-blue-600">Matter</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                ),
                title: "Quality Assurance",
                description: "Our certifications serve as third-party validation of our commitment to maintaining high-quality standards."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                ),
                title: "Compliance",
                description: "We adhere to industry regulations and standards, ensuring our operations are fully compliant."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                ),
                title: "Customer Trust",
                description: "Our certifications provide customers with confidence in our products, services, and business practices."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Our Commitment Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-16 bg-blue-50"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Kumar Power, we believe that maintaining certifications and industry partnerships is more than just 
              fulfilling requirements—it's about our ongoing commitment to excellence in everything we do. We continuously 
              strive to improve our processes, enhance our services, and exceed industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg">
                Contact Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                View Projects
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Certificate Slider Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Professional <span className="text-blue-500">Certifications</span></h2>
          
          <div className="relative" ref={certificateSliderRef}>
            {/* Main slide display */}
            <div className="overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                key={activeIndex}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                  {certificateSlides[activeIndex].map((certificate, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gray-900 p-6 rounded-xl shadow-lg overflow-hidden flex flex-col"
                    >
                      <div className="h-40 flex items-center justify-center mb-4">
                        <img 
                          src={certificate.image} 
                          alt={certificate.name} 
                          className="h-full max-h-32 w-auto object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-center">{certificate.name}</h3>
                      <span className="bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full mx-auto mb-3">
                        Since {certificate.year}
                      </span>
                      <p className="text-gray-300 text-sm mb-3">{certificate.description}</p>
                      <p className="text-gray-400 text-sm mt-auto">Issued by: <strong className="text-white">{certificate.issuer}</strong></p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-10 gap-2">
              {certificateSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoplay(false);
                    setTimeout(() => setIsAutoplay(true), 10000);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  aria-label={`View certificates group ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Prev/Next buttons */}
            <button 
              onClick={() => {
                setActiveIndex((prev) => (prev - 1 + certificateSlides.length) % certificateSlides.length);
                setIsAutoplay(false);
                setTimeout(() => setIsAutoplay(true), 10000);
              }}
              className="absolute top-1/3 left-0 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-gray-800 p-2 rounded-full shadow-lg z-10 hover:bg-gray-700 text-white"
              aria-label="Previous certificate group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={() => {
                setActiveIndex((prev) => (prev + 1) % certificateSlides.length);
                setIsAutoplay(false);
                setTimeout(() => setIsAutoplay(true), 10000);
              }}
              className="absolute top-1/3 right-0 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-gray-800 p-2 rounded-full shadow-lg z-10 hover:bg-gray-700 text-white"
              aria-label="Next certificate group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
          
          {/* Industry Partnerships */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Industry Partnerships</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png" 
                    alt={`Industry partner ${i+1}`} 
                    className="h-16 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Certifications;
