import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Wrench, Gauge, BookOpen, UserCheck, Truck, Settings } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const InstallationService = () => {
  // Installation services
  const installationServices = [
    {
      title: "Site Assessment & Planning",
      description: "Comprehensive evaluation of your site to determine the optimal generator placement, wiring requirements, and ventilation needs.",
      icon: <Gauge className="h-10 w-10 text-blue-600" />,
      features: [
        "Load analysis and sizing verification",
        "Electrical infrastructure assessment",
        "Environmental compliance check",
        "Ventilation and cooling requirements",
        "Noise level assessment"
      ]
    },
    {
      title: "Professional Installation",
      description: "Expert setup of your power system by certified technicians following industry best practices and safety standards.",
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      features: [
        "Generator positioning and mounting",
        "Fuel system installation",
        "Exhaust system setup",
        "Electrical connections and wiring",
        "Control system integration"
      ]
    },
    {
      title: "System Commissioning",
      description: "Complete testing and optimization of your power generation system to ensure peak performance from day one.",
      icon: <Settings className="h-10 w-10 text-blue-600" />,
      features: [
        "Full load testing",
        "Performance verification",
        "System calibration",
        "Emissions testing",
        "Safety checks"
      ]
    },
    {
      title: "Operator Training",
      description: "Comprehensive training for your personnel on system operation, maintenance procedures, and emergency protocols.",
      icon: <UserCheck className="h-10 w-10 text-blue-600" />,
      features: [
        "Control panel operation",
        "Routine maintenance procedures",
        "Troubleshooting basics",
        "Emergency response protocols",
        "Documentation review"
      ]
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How long does the installation process take?",
      answer: "The installation timeline varies based on the system complexity and site conditions. Small to medium generators typically take 1-3 days, while larger industrial installations may require 1-2 weeks. Our team will provide a detailed timeline during the initial assessment."
    },
    {
      question: "Do you handle all required permits and approvals?",
      answer: "Yes, we manage the entire permitting process. Our team handles all necessary documentation, regulatory compliance, and approvals from local authorities, ensuring your installation meets all legal requirements."
    },
    {
      question: "Can you install generators in difficult locations?",
      answer: "Absolutely. Our installation teams are equipped to handle challenging locations including rooftops, basements, confined spaces, and remote sites. We have specialized equipment for crane lifts, custom mounting solutions, and extended cable runs."
    },
    {
      question: "Will the installation cause disruption to our operations?",
      answer: "We minimize disruption by carefully planning the installation process. Most electrical connections requiring power interruption can be scheduled during off-hours. Our team coordinates closely with your staff to develop an installation plan that accommodates your operational needs."
    },
    {
      question: "What happens after installation is complete?",
      answer: "Following installation, we conduct comprehensive commissioning tests, provide detailed operator training, and deliver complete documentation including operation manuals, warranty information, and maintenance schedules. We also offer ongoing maintenance contracts to keep your system operating at peak performance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD
        title="Generator Installation & Commissioning Services | Kumar Power"
        description="Expert installation and commissioning services for power generators and equipment. Professional setup, testing, and training for optimal system performance."
        url="https://kumarpower.com/services/installation"
        imageUrl="https://kumarpower.com/images/installation-service.jpg"
      />

      <main>
        {/* Hero Banner */}
        <div className="bg-black py-8 md:py-12">
          <div className="container mx-auto text-center px-4">
            <div className="flex items-center justify-center mb-1">
              <span className="block h-px w-8 md:w-16 bg-white mr-2 md:mr-4" />
              <span className="text-white text-xl md:text-3xl font-semibold tracking-wide">
                INSTALLATION & COMMISSIONING
              </span>
              <span className="block h-px w-8 md:w-16 bg-white ml-2 md:ml-4" />
            </div>
            <div className="text-white text-lg md:text-xl font-normal">
              Expert setup for optimal performance.
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Professional Power System Installation
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Kumar Power provides end-to-end installation and commissioning services for all types of 
                  power generation equipment, ensuring your systems operate at peak efficiency from day one.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Our certified technicians handle everything from site assessment and planning to final 
                  commissioning and operator training, delivering turnkey solutions for businesses of all sizes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/contact">Schedule Installation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/installation_service_detailed_hjd9tw.jpg" 
                  alt="Generator installation in progress" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Installation Process */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Installation Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A comprehensive approach to ensure your power system is installed correctly and efficiently
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
                    <h3 className="text-xl font-bold mb-2">Initial Consultation & Site Survey</h3>
                    <p className="text-muted-foreground">
                      We begin with a thorough assessment of your power requirements and site conditions to determine the optimal 
                      system configuration, placement, and infrastructure needs.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="text-xl font-bold mb-2">Detailed Design & Planning</h3>
                    <p className="text-muted-foreground">
                      Our engineers develop comprehensive installation plans including electrical schematics, mechanical layouts, 
                      and project timelines tailored to your specific needs.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="text-xl font-bold mb-2">Permitting & Compliance</h3>
                    <p className="text-muted-foreground">
                      We handle all necessary permits, regulatory approvals, and compliance requirements to ensure your installation 
                      meets all local and national standards.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                    <p className="text-muted-foreground">
                      Our certified technicians execute the installation according to the detailed plan, ensuring all components are 
                      properly installed, connected, and secured.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <h3 className="text-xl font-bold mb-2">Testing & Commissioning</h3>
                    <p className="text-muted-foreground">
                      We conduct comprehensive testing of all systems, including load testing, performance verification, and safety checks 
                      to ensure everything functions correctly.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">6</div>
                    <h3 className="text-xl font-bold mb-2">Training & Handover</h3>
                    <p className="text-muted-foreground">
                      We provide thorough training for your staff on system operation and basic maintenance, along with complete documentation 
                      and warranty information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Services */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Comprehensive Installation Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From site assessment to operator training, our installation services cover every aspect of your power system setup
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {installationServices.map((service, index) => (
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

        {/* Types of Installations */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Types of Installations We Perform
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our experts handle installations for a wide range of power systems and applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Standby Generators</h3>
                <p className="text-muted-foreground">
                  Automatic backup power systems that activate during outages, ensuring continuous power for critical operations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Prime Power Generators</h3>
                <p className="text-muted-foreground">
                  Primary power sources for locations without reliable grid connection, designed for continuous operation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Portable Generators</h3>
                <p className="text-muted-foreground">
                  Mobile power solutions for temporary sites, events, or emergency situations requiring flexible deployment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Transfer Switches</h3>
                <p className="text-muted-foreground">
                  Automatic and manual transfer switches that safely transition between power sources during outages.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Paralleling Systems</h3>
                <p className="text-muted-foreground">
                  Advanced setups allowing multiple generators to work together for increased capacity and redundancy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Remote Monitoring</h3>
                <p className="text-muted-foreground">
                  Integrated systems for remote operation, monitoring, and diagnostics of your power equipment.
                </p>
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
                Common questions about our installation and commissioning services
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
                Ready to Install or Upgrade Your Power System?
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Contact our expert team today to discuss your installation requirements and schedule a site assessment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Link to="/services">Explore Other Services</Link>
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

export default InstallationService;
