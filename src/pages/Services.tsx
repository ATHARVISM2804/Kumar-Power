import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, PhoneCall, Settings, Truck, Wrench, Zap, Shield } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServicePage = () => {
  // Service features
  const features = [
    {
      icon: <PhoneCall className="w-10 h-10 text-blue-600" />,
      title: "24/7 Emergency Response",
      description: "Our technicians are available round-the-clock for urgent breakdowns and power emergencies."
    },
    {
      icon: <Settings className="w-10 h-10 text-blue-600" />,
      title: "Kirloskar Certified Engineers",
      description: "Our team is factory-trained and certified to work on all Kirloskar power equipment."
    },
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: "Pan-India Service Network",
      description: "With service centers across India, we offer rapid response times in any location."
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: "Genuine Parts Guarantee",
      description: "We use only authentic Kirloskar components for all repairs and maintenance."
    }
  ];

  // Service offerings
  const services = [
    {
      id: "annual-maintenance",
      title: "Annual Maintenance Contracts",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/maintenance_service_vdqn8f.jpg",
      description: "Comprehensive AMC packages for preventive maintenance of all power equipment",
      features: [
        "Scheduled service visits",
        "Preventive maintenance",
        "Performance optimization",
        "Priority emergency support"
      ],
      path: "/services/annual-maintenance"
    },
    {
      id: "installation",
      title: "Installation & Commissioning",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/installation_service_wbqgfs.jpg",
      description: "Expert setup and commissioning of generators and power systems",
      features: [
        "Site assessment",
        "Complete installation",
        "Testing & synchronization",
        "Operator training"
      ],
      path: "/services/installation"
    },
    {
      id: "repair-overhaul",
      title: "Repair & Overhaul",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/repair_service_xdtf0y.jpg",
      description: "Complete repair and overhaul services for generators and power equipment",
      features: [
        "Diagnostics & troubleshooting",
        "Major & minor repairs",
        "Engine overhauls",
        "Alternator repairs"
      ],
      path: "/services/repair-overhaul"
    },
    {
      id: "emergency-support",
      title: "24/7 Emergency Support",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/emergency_service_pdvmhj.jpg",
      description: "Round-the-clock emergency service for critical power failures",
      features: [
        "24-hour helpline",
        "Rapid response teams",
        "Mobile service units",
        "On-site troubleshooting"
      ],
      path: "/services/emergency-support"
    },
    {
      id: "rental",
      title: "Generator Rental",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/rental_service_sjofgr.jpg",
      description: "Short and long-term generator rental solutions for all power needs",
      features: [
        "Temporary power solutions",
        "Load testing equipment",
        "Event power supply",
        "Backup power systems"
      ],
      path: "/services/rental"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD
        title="Power Generator Services | Kumar Power"
        description="Comprehensive power generation services including maintenance, installation, repair, and 24/7 emergency support for all types of generators and power equipment."
        url="https://kumarpower.com/services"
        imageUrl="https://kumarpower.com/images/services-hero.jpg"
      />

      <main>
        {/* Hero Section - Black Background */}
        <section className="bg-black py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730335001/service_pattern_r7ktbd.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="block h-px w-12 md:w-20 bg-white/70 mr-4" />
                <span className="text-white text-xl md:text-2xl font-semibold tracking-wider uppercase">
                  OUR SERVICES
                </span>
                <span className="block h-px w-12 md:w-20 bg-white/70 ml-4" />
              </div>
              
              <h1 className="text-3xl md:text-6xl font-bold text-center text-white mb-6 leading-tight">
                Complete Power System Services
              </h1>
              
              <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto mb-10">
                From installation and commissioning to emergency repairs and routine maintenance, 
                Kumar Power delivers end-to-end service solutions for all your power generation needs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Request Service
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="tel:+918888888888" className="flex items-center gap-2">
                    Emergency Hotline
                    <PhoneCall size={16} />
                  </a>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">30+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
                  <div className="text-sm text-white/80">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">Pan-India</div>
                  <div className="text-sm text-white/80">Service Network</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features - White Background */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">WHY CHOOSE US</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Why Choose Our Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="bg-gray-100 p-4 rounded-lg mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process - Black Background */}
        <section className="py-16 md:py-24 bg-gray-900 relative">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730335001/circuit_pattern_g7rtsd.svg')",
            backgroundSize: "cover",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">OUR PROCESS</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-white">
              Our Service Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-5 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Service Request</h3>
                <p className="text-gray-300">
                  Submit your service request through our website, mobile app, or 24/7 hotline
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-5 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Initial Assessment</h3>
                <p className="text-gray-300">
                  Our technicians evaluate your equipment and determine the best course of action
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-5 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Service Execution</h3>
                <p className="text-gray-300">
                  Skilled engineers perform the required service with genuine parts and tools
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-5 text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Quality Assurance</h3>
                <p className="text-gray-300">
                  Final testing and quality checks to ensure optimal system performance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services List - White Background */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">SERVICE OFFERINGS</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Our Service Offerings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden flex flex-col border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all rounded-xl">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="mb-6 flex-grow space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full mt-auto bg-blue-600 hover:bg-blue-700">
                      <Link to={service.path} className="flex items-center justify-center gap-2">
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action - Black Background */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1730335001/power_grid_pattern_r7ktfd.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                  Ready to Keep Your Power Systems Running at Peak Performance?
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Contact our service team today to schedule maintenance, request emergency support, or learn more about our comprehensive service offerings.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Request Service Quote
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                  <a href="tel:+918888888888" className="flex items-center gap-2">
                    <PhoneCall size={16} /> Emergency Hotline
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
