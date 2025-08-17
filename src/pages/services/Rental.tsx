import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, Truck, Gauge, Calculator, Zap, RefreshCw, ArrowRight, Clock } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';

const RentalService = () => {
  // Rental statistics
  const rentalStats = [
    { value: "500+", label: "Units", description: "Available for immediate deployment" },
    { value: "5-2000", label: "kVA", description: "Power range to suit any need" },
    { value: "<24h", label: "Hours", description: "Standard delivery timeframe" },
    { value: "98%", label: "Uptime", description: "Guaranteed operational reliability" }
  ];

  // Rental generator categories
  const generatorCategories = [
    {
      title: "Small Portable Generators",
      range: "5 kVA - 25 kVA",
      applications: [
        "Small construction sites", 
        "Outdoor events", 
        "Small retail locations",
        "Residential backup"
      ],
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/small_rental_rnhksd.jpg"
    },
    {
      title: "Medium Power Generators",
      range: "30 kVA - 125 kVA",
      applications: [
        "Medium construction projects", 
        "Commercial buildings", 
        "Small manufacturing units",
        "Large events and exhibitions"
      ],
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/medium_rental_zvudjb.jpg"
    },
    {
      title: "Large Industrial Generators",
      range: "150 kVA - 500 kVA",
      applications: [
        "Manufacturing facilities", 
        "Large construction sites", 
        "Hospitals and healthcare facilities",
        "Data centers"
      ],
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/large_rental_wfgm2p.jpg"
    },
    {
      title: "Heavy-Duty Power Solutions",
      range: "550 kVA - 2000 kVA",
      applications: [
        "Industrial complexes", 
        "Mining operations", 
        "Large infrastructure projects",
        "Temporary grid support"
      ],
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/heavy_rental_dycyzm.jpg"
    }
  ];

  // Rental benefits
  const rentalBenefits = [
    {
      icon: <Calculator className="h-10 w-10 text-blue-600" />,
      title: "Cost-Effective Power",
      description: "Avoid the capital expenditure of purchasing generators for temporary needs while still accessing reliable power."
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-600" />,
      title: "Rapid Deployment",
      description: "Quick delivery, setup, and commissioning with flexible rental terms from daily to yearly contracts."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-blue-600" />,
      title: "Flexible Capacity",
      description: "Easily scale your power needs up or down as your requirements change throughout your project."
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Maintained Equipment",
      description: "All rental generators are regularly serviced and tested to ensure optimal performance and reliability."
    },
    {
      icon: <Gauge className="h-10 w-10 text-blue-600" />,
      title: "Latest Technology",
      description: "Access to the newest generator models with advanced features, fuel efficiency, and emissions compliance."
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-600" />,
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance and emergency response services for all rental equipment."
    }
  ];

  // Rental applications
  const rentalApplications = [
    {
      category: "Construction",
      examples: [
        "Building sites without grid connection",
        "Temporary site offices and facilities",
        "Concrete pouring and curing operations",
        "Tower cranes and heavy equipment power"
      ]
    },
    {
      category: "Events",
      examples: [
        "Outdoor festivals and concerts",
        "Corporate events and functions",
        "Weddings and celebrations",
        "Sports tournaments and exhibitions"
      ]
    },
    {
      category: "Industrial",
      examples: [
        "Planned maintenance shutdowns",
        "Factory commissioning and testing",
        "Load bank testing",
        "Peak shaving and demand response"
      ]
    },
    {
      category: "Emergency",
      examples: [
        "Disaster recovery operations",
        "Grid outage backup",
        "Critical facility support",
        "Business continuity during power upgrades"
      ]
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How quickly can you deliver a rental generator?",
      answer: "For standard rentals, we typically deliver within 24 hours of confirmed order. For emergency situations, we offer expedited delivery with generators often arriving in 2-4 hours in most urban areas. Our nationwide network allows us to respond quickly to rental requests across India."
    },
    {
      question: "Do you handle generator installation and setup?",
      answer: "Yes, our rental service includes delivery, installation, setup, and commissioning by qualified technicians. We'll connect the generator to your distribution system, perform testing under load, and provide operator training before handover. When the rental period ends, we also handle all disconnection and removal logistics."
    },
    {
      question: "What fuel options are available for rental generators?",
      answer: "Our rental fleet includes diesel, gas, and dual-fuel generators. Diesel units are most common for temporary power and available across all size ranges. Natural gas and LPG generators are available in select locations. We can also provide fuel delivery services and temporary fuel storage solutions for extended rentals."
    },
    {
      question: "What is included in the rental cost?",
      answer: "Our standard rental rates include the generator equipment, delivery to your site, basic setup, technical commissioning, and removal at the end of the rental period. Additional services such as 24/7 monitoring, fuel management, load cables, distribution panels, and on-site technicians are available at extra cost."
    },
    {
      question: "What happens if the generator fails during the rental period?",
      answer: "We provide 24/7 emergency support for all rental equipment. If a generator malfunctions, our technicians will respond promptly to repair it on-site. If repairs cannot be completed quickly, we'll replace the unit with an equivalent generator at no additional cost to ensure your operations continue without significant interruption."
    },
    {
      question: "Can I extend my rental period if needed?",
      answer: "Yes, rental extensions are easily accommodated based on equipment availability. We recommend notifying us at least 48 hours before your scheduled return date to ensure continuous service. For long-term projects with uncertain timelines, we offer flexible rental agreements specifically designed to accommodate changing schedules."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD
        title="Generator Rental Services | Kumar Power"
        description="Flexible generator rental solutions for any power need. From small portable units to large industrial generators, available for short or long-term rental."
        url="https://kumarpower.com/services/rental"
        imageUrl="https://kumarpower.com/images/rental-service.jpg"
      />

      <main>
        {/* Hero Banner */}
        <div className="bg-black py-12 md:py-16">
          <div className="container mx-auto text-center px-4">
            <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700">Flexible Solutions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Generator Rental Services</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Reliable power solutions when and where you need them, for any duration
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Request Rental Quote</Link>
            </Button>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <div className="flex items-center">
                    <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                    <span className="text-blue-600 font-semibold tracking-wider">POWER ON DEMAND</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Reliable Generator Rental Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Kumar Power offers a comprehensive range of generator rental options from small portable units 
                  to large industrial generators, providing temporary power solutions for any situation and any 
                  timeframe - from days to years.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you need backup power during an outage, additional capacity for a special event, 
                  or reliable power for a construction project, our well-maintained rental fleet delivers 
                  dependable performance when you need it most, backed by our 24/7 technical support.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/contact">Request Rental Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="tel:+918888888888" className="flex items-center gap-2">
                      <Zap size={18} /> Emergency Rental Line
                    </a>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/rental_service_detailed_cvszeh.jpg" 
                  alt="Generator rental delivery" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rental Statistics */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-400 font-semibold tracking-wider">OUR RENTAL CAPABILITIES</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Kumar Power Rental Fleet
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                One of India's largest and most diverse generator rental fleets, ready for immediate deployment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rentalStats.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-600 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold mb-3 text-white">{stat.label}</div>
                  <p className="text-gray-300">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Generator Categories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-600 font-semibold tracking-wider">EQUIPMENT OPTIONS</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Rental Generator Range
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From small portable units to massive industrial generators, we have the right equipment for your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {generatorCategories.map((category, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:border-blue-600 transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                    <p className="text-blue-600 font-semibold mb-6 text-lg">{category.range}</p>
                    <h4 className="font-medium mb-4 text-lg">Common Applications:</h4>
                    <ul className="space-y-2">
                      {category.applications.map((app, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{app}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link to="/contact" className="text-blue-600 flex items-center font-medium hover:text-blue-800">
                        Request a quote <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Benefits */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-400 font-semibold tracking-wider">WHY RENT WITH US</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Benefits of Generator Rental
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Why renting a generator can be a smart choice for your temporary power needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rentalBenefits.map((benefit, index) => (
                <div key={index} className="p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-600 transition-all duration-300">
                  <div className="mb-6 text-blue-400">
                    {React.cloneElement(benefit.icon, { className: "h-10 w-10 text-blue-400" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-600 font-semibold tracking-wider">SIMPLE & EFFICIENT</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Rental Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A straightforward approach to ensure you get the right generator for your needs
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
                
                {/* Timeline items */}
                <div className="space-y-16">
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-600">Consultation & Assessment</h3>
                    <p className="text-muted-foreground mb-4">
                      We discuss your power requirements, application, location, and duration to determine the right generator size 
                      and specifications for your needs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Detailed load analysis to determine optimal generator sizing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Site assessment for placement and connection requirements</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-600">Quotation & Scheduling</h3>
                    <p className="text-muted-foreground mb-4">
                      We provide a detailed quote including rental rate, delivery charges, and any additional services. Once approved, 
                      we schedule delivery according to your timeline.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Transparent pricing with no hidden costs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Flexible scheduling to match your project timeline</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-600">Delivery & Installation</h3>
                    <p className="text-muted-foreground mb-4">
                      Our team delivers the generator to your site, positions it according to safety requirements, and connects it 
                      to your distribution system.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Professional logistics and positioning services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Expert electrical connections by certified technicians</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-600">Commissioning & Training</h3>
                    <p className="text-muted-foreground mb-4">
                      We test the generator under load, ensure all systems are functioning correctly, and provide basic operation 
                      training to your personnel.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive testing under various load conditions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Hands-on operator training for your staff</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-600">Ongoing Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Throughout the rental period, we provide technical support, emergency service, and fuel management as needed 
                      to ensure uninterrupted operation.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>24/7 technical support and emergency response</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Regular maintenance checks and servicing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">6</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-600">Pickup & Return</h3>
                    <p className="text-muted-foreground mb-4">
                      At the end of the rental period, our team disconnects and removes the equipment, inspects for any damage, 
                      and handles all logistics for return.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Coordinated disconnection and removal services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Streamlined return process with minimal disruption</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rental Applications */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-400 font-semibold tracking-wider">VERSATILE SOLUTIONS</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Rental Applications
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Discover how our generator rentals provide reliable power across various industries and scenarios
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="Construction" className="w-full">
                <TabsList className="grid grid-cols-4 mb-6 bg-gray-800">
                  {rentalApplications.map((app) => (
                    <TabsTrigger key={app.category} value={app.category} className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                      {app.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {rentalApplications.map((app) => (
                  <TabsContent key={app.category} value={app.category}>
                    <Card className="p-8 bg-gray-900 border-gray-800">
                      <h3 className="text-2xl font-bold mb-6 text-blue-400">{app.category} Applications</h3>
                      <ul className="space-y-4">
                        {app.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-200">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-600 font-semibold tracking-wider">COMPLETE SOLUTIONS</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Additional Rental Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer more than just generator rentals to meet all your temporary power needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">Load Banks</h3>
                <p className="text-muted-foreground mb-4">
                  Resistive and reactive load banks for generator testing, commissioning, and maintenance procedures.
                </p>
                <Link to="/contact" className="text-blue-600 flex items-center font-medium hover:text-blue-800">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">Distribution Equipment</h3>
                <p className="text-muted-foreground mb-4">
                  Power distribution panels, transformers, and cables to deliver power where you need it.
                </p>
                <Link to="/contact" className="text-blue-600 flex items-center font-medium hover:text-blue-800">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">Fuel Management</h3>
                <p className="text-muted-foreground mb-4">
                  Fuel delivery, temporary storage tanks, and monitoring services for extended generator operation.
                </p>
                <Link to="/contact" className="text-blue-600 flex items-center font-medium hover:text-blue-800">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">Sound Attenuation</h3>
                <p className="text-muted-foreground mb-4">
                  Noise reduction enclosures and barriers for noise-sensitive environments and residential areas.
                </p>
                <Link to="/contact" className="text-blue-600 flex items-center font-medium hover:text-blue-800">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">Remote Monitoring</h3>
                <p className="text-muted-foreground mb-4">
                  24/7 remote monitoring systems to track generator performance, fuel levels, and operational status.
                </p>
                <Link to="/contact" className="text-blue-600 flex items-center font-medium hover:text-blue-800">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">On-Site Technicians</h3>
                <p className="text-muted-foreground mb-4">
                  Dedicated operators and technicians for critical applications requiring continuous oversight.
                </p>
                <Link to="/contact" className="text-blue-600 flex items-center font-medium hover:text-blue-800">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-400 font-semibold tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Questions About Generator Rental
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Find answers to questions about our generator rental services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                    <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-blue-400">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white text-blue-600">Get Started Today</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Rent a Generator?
              </h2>
              <p className="text-xl md:text-2xl mb-10">
                Contact our rental team today to discuss your power requirements and receive a customized quote.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                  <Link to="/contact">Request Rental Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 text-lg px-8 py-6 h-auto">
                  <a href="tel:+918888888888" className="flex items-center gap-2">
                    <Clock size={20} /> 24/7 Rental Support
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

export default RentalService;
