import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, PhoneCall, Settings, Truck, Wrench, Zap } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
        {/* Hero Banner */}
        <div className="bg-black py-8 md:py-12">
          <div className="container mx-auto text-center px-4">
            <div className="flex items-center justify-center mb-1">
              <span className="block h-px w-8 md:w-16 bg-white mr-2 md:mr-4" />
              <span className="text-white text-xl md:text-3xl font-semibold tracking-wide">
                OUR SERVICES
              </span>
              <span className="block h-px w-8 md:w-16 bg-white ml-2 md:ml-4" />
            </div>
            <div className="text-white text-lg md:text-xl font-normal">
              Comprehensive power solutions and support.
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Complete Power System Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                From installation and commissioning to emergency repairs and routine maintenance, 
                Kumar Power delivers end-to-end service solutions for all your power generation needs.
                With over 30 years of experience and a nationwide service network, we ensure your 
                power systems operate at peak efficiency.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Request Service</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+918888888888">Emergency Hotline</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Why Choose Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Kumar Power's nationwide service network ensures prompt and reliable support for 
                all your power equipment needs, backed by decades of expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Service Offerings
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive range of power generation services designed to keep your 
                operations running smoothly and efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden flex flex-col">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="mb-6 flex-grow">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 mb-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full mt-auto">
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

        {/* Service Process */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Service Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A streamlined approach to ensure efficient service delivery and customer satisfaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Service Request</h3>
                <p className="text-muted-foreground">
                  Submit your service request through our website, mobile app, or 24/7 hotline
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                <p className="text-muted-foreground">
                  Our technicians evaluate your equipment and determine the best course of action
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Service Execution</h3>
                <p className="text-muted-foreground">
                  Skilled engineers perform the required service with genuine parts and tools
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Final testing and quality checks to ensure optimal system performance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to Keep Your Power Systems Running at Peak Performance?
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Contact our service team today to schedule maintenance, request emergency support, or learn more about our comprehensive service offerings.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/contact">Request Service Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  <a href="tel:+918888888888" className="flex items-center gap-2">
                    <PhoneCall size={20} /> Emergency Hotline
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
