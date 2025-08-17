import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Wrench, Cpu, AlertTriangle, Clock, FileText, Zap } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RepairOverhaulService = () => {
  // Repair services
  const repairServices = [
    {
      title: "Emergency Repairs",
      description: "Rapid response services for unexpected breakdowns and critical failures requiring immediate attention.",
      icon: <AlertTriangle className="h-10 w-10 text-blue-600" />,
      features: [
        "24/7 emergency response",
        "Mobile repair units",
        "Priority parts sourcing",
        "Temporary power solutions",
        "Root cause analysis"
      ]
    },
    {
      title: "Engine Repairs & Overhaul",
      description: "Complete engine servicing from minor repairs to full overhaul and rebuilding for optimal performance.",
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      features: [
        "Engine diagnostics",
        "Cylinder head overhaul",
        "Crankshaft reconditioning",
        "Fuel system rebuilding",
        "Complete engine rebuilding"
      ]
    },
    {
      title: "Electrical System Repairs",
      description: "Expert troubleshooting and repair of generator control systems, alternators, and power distribution components.",
      icon: <Cpu className="h-10 w-10 text-blue-600" />,
      features: [
        "Alternator rewinding",
        "AVR replacement & calibration",
        "Control panel repairs",
        "Switchgear servicing",
        "Circuit breaker maintenance"
      ]
    },
    {
      title: "Preventive Overhaul",
      description: "Scheduled major overhauls to extend equipment life and prevent costly breakdowns before they occur.",
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      features: [
        "Condition-based assessment",
        "Component life analysis",
        "Planned component replacement",
        "System upgrades",
        "Performance restoration"
      ]
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How do I know if my generator needs repair or overhaul?",
      answer: "Warning signs include unusual noises, excessive vibration, increased fuel consumption, difficulty starting, frequent shutdowns, visible leaks, or decreased power output. Our technicians can perform a diagnostic assessment to determine the exact issues and recommend appropriate repairs."
    },
    {
      question: "Can you repair generators on-site or do they need to be transported to your facility?",
      answer: "We can perform many repairs on-site, including most electrical system repairs, minor to moderate engine work, and control system troubleshooting. Major overhauls, engine rebuilds, and alternator rewinding typically require transportation to our specialized workshop facilities."
    },
    {
      question: "How long does a typical repair or overhaul take?",
      answer: "Repair timeframes vary based on the scope of work. Minor repairs may be completed in hours, while standard repairs typically take 1-3 days. Major overhauls can require 1-2 weeks, and complete engine rebuilds may take 2-4 weeks. We provide estimated timelines during our initial assessment."
    },
    {
      question: "Do you provide warranty on repairs and overhauls?",
      answer: "Yes, all our repair work comes with a comprehensive warranty. Minor repairs carry a 3-month warranty, standard repairs have a 6-month warranty, and major overhauls or rebuilds are warrantied for 12 months or 500 operating hours, whichever comes first."
    },
    {
      question: "Can you provide temporary power during major repairs?",
      answer: "Yes, we offer rental generators to ensure continuous power during extended repairs or overhauls. Our team will assess your power requirements and provide appropriately sized temporary power solutions to minimize disruption to your operations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD
        title="Generator Repair & Overhaul Services | Kumar Power"
        description="Professional repair, maintenance, and overhaul services for generators and power equipment. Fast emergency repairs and comprehensive rebuilding services."
        url="https://kumarpower.com/services/repair-overhaul"
        imageUrl="https://kumarpower.com/images/repair-service.jpg"
      />

      <main>
        {/* Hero Banner */}
        <div className="bg-black py-8 md:py-12">
          <div className="container mx-auto text-center px-4">
            <div className="flex items-center justify-center mb-1">
              <span className="block h-px w-8 md:w-16 bg-white mr-2 md:mr-4" />
              <span className="text-white text-xl md:text-3xl font-semibold tracking-wide">
                REPAIR & OVERHAUL
              </span>
              <span className="block h-px w-8 md:w-16 bg-white ml-2 md:ml-4" />
            </div>
            <div className="text-white text-lg md:text-xl font-normal">
              Restoring peak performance to your power systems.
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Expert Generator Repair & Overhaul Services
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  From emergency repairs to complete system rebuilds, Kumar Power's certified technicians 
                  have the expertise to diagnose and fix any issue with your power generation equipment.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We use only genuine parts and industry-leading techniques to restore your equipment to 
                  optimal performance, extending its lifespan and ensuring reliable operation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/contact">Request Repair Service</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="tel:+918888888888">Emergency Repair Hotline</a>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/repair_service_detailed_sc7hfw.jpg" 
                  alt="Technician repairing generator" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Repair vs Overhaul */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Repair vs. Overhaul: Understanding the Difference
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Knowing when your power equipment needs a simple repair versus a comprehensive overhaul
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="repair" className="w-full">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="repair">Repair Services</TabsTrigger>
                  <TabsTrigger value="overhaul">Overhaul Services</TabsTrigger>
                </TabsList>
                <TabsContent value="repair" className="mt-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">When You Need Repair Services</h3>
                    <p className="mb-4 text-muted-foreground">
                      Repairs address specific issues or component failures in your power system. These are typically 
                      needed when your generator is experiencing:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Sudden failure to start or run properly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Unusual noises, vibrations, or performance issues</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Fluid leaks or visible damage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Control panel or electrical system malfunctions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Isolated component failures that don't affect the entire system</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground">
                      Our repair services are designed for quick response and targeted fixes to get your equipment 
                      back online with minimal downtime.
                    </p>
                  </Card>
                </TabsContent>
                <TabsContent value="overhaul" className="mt-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">When You Need Overhaul Services</h3>
                    <p className="mb-4 text-muted-foreground">
                      Overhauls are comprehensive rebuilds or restorations of your power system. These are typically 
                      recommended when:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Your generator has reached a specific number of operating hours (typically 10,000-30,000 hours)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Multiple systems are showing signs of wear or deterioration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Performance has gradually declined despite regular maintenance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Major components need replacement (pistons, crankshaft, alternator)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>You want to extend the lifespan of older but valuable equipment</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground">
                      Our overhaul services restore your equipment to like-new condition, extending its useful life 
                      and improving reliability and efficiency.
                    </p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Repair & Overhaul Services */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Repair & Overhaul Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions for all your power equipment repair needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {repairServices.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-6">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Repair Process */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Repair Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to efficiently diagnose and resolve power system issues
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <h3 className="text-xl font-bold mb-2">Initial Assessment & Diagnostics</h3>
                    <p className="text-muted-foreground">
                      Our technicians conduct a thorough inspection and diagnostic testing to identify the root cause of the issue 
                      and any related problems that need addressing.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="text-xl font-bold mb-2">Detailed Scope & Estimate</h3>
                    <p className="text-muted-foreground">
                      We provide a comprehensive scope of work and detailed cost estimate, explaining all required repairs, 
                      parts, and labor before proceeding with any work.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="text-xl font-bold mb-2">Parts Procurement</h3>
                    <p className="text-muted-foreground">
                      Our team sources genuine OEM parts or high-quality alternatives as specified, ensuring quick availability 
                      for time-sensitive repairs.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <h3 className="text-xl font-bold mb-2">Skilled Repair Execution</h3>
                    <p className="text-muted-foreground">
                      Our certified technicians perform the necessary repairs or overhaul procedures according to manufacturer 
                      specifications and industry best practices.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <h3 className="text-xl font-bold mb-2">Testing & Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      We conduct comprehensive post-repair testing under load conditions to ensure all systems function properly 
                      and meet performance specifications.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">6</div>
                    <h3 className="text-xl font-bold mb-2">Detailed Documentation & Warranty</h3>
                    <p className="text-muted-foreground">
                      We provide complete documentation of all work performed, parts replaced, and testing results, along with 
                      warranty information for your records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Common questions about our repair and overhaul services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Need Generator Repair or Overhaul Services?
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Contact our expert technicians today for fast, reliable repair services that get your power systems back to peak performance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/contact">Request Repair Service</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  <a href="tel:+918888888888" className="flex items-center gap-2">
                    <Zap size={20} /> Emergency Repair Line
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

export default RepairOverhaulService;
